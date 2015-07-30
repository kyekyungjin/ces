
myApp.factory('bus', ['$window', function(win){
    var signalHandler = {
        "org.alljoyn.About" : {
            "Announce" : function(context, version, port, objectDescription, aboutData) {
                // mBusList.push({
                //     name : context.sender,
                //     version : version,
                //     port : port,
                //     objectDescription : objectDescription,
                //     aboutData : aboutData
                // });

                // toastr.info(aboutData.DeviceName + " is announced");

                // console.log(mBusList);

                for(var observer in mObserverList){
                    mObserverList[observer](context, version, port, objectDescription, aboutData);
                }
            }
        },
        "org.alljoyn.ControlPanel.Property" : {
            "ValueChanged" : function(context, newValue){
                console.log(context, newValue);
                for(var i in mSignalListener){
                    if(mDeviceMap[i]===undefined) continue;
                    if(mDeviceMap[i].sessionId==context.sessionId){
                        var propertyList = controlInterfaceList[i];

                        for(var j in propertyList){
                            var property = propertyList[j];

                            if(property.object_path==context.objectPath){
                                mSignalListener[i](j, newValue);
                                break;
                            }
                        }

                        break;
                    }
                }
            }
        }
    };


    var bus;
    var mBusList = [];

	var mObserverList = [];

	var mDeviceMap = {};

    var mSignalListener = {};

    var mActivieDeviceListener = [];
    var mDeActivieDeviceListener = [];

    var removeDevice = function(sessionId){
        var targetBusName, targetDeviceName;

        for(var i in mDeviceMap){
            var device = mDeviceMap[i];

            if(device.sessionId==sessionId){
                targetBusName = device.busName;
                targetDeviceName = i;
                delete mDeviceMap[i];
                break;
            }
        }

        console.log(targetBusName, targetDeviceName);

        if(targetBusName!==undefined){

            for(var i in mBusList){
                var busInfo = mBusList[i];
                console.log(busInfo.name);

                if(busInfo.name==targetBusName){
                    delete mBusList[i];

                    toastr.info(targetDeviceName + "(" + targetBusName + ") is removed");
                    break;
                }                
            }
        }



    };

	return {
        init : function(callback){
            if(bus){
                bus.disconnect(function(err){
                    console.log("disconected", err);
                });
            }
            bus = new org.alljoyn.bus.BusAttachment();

            var nextFunc = function(callback){
                return function(err){ 
                    if(err){
                        console.log(err);
                        return;
                    } 
                    callback(); 
                };
            };

            async.waterfall([
                function(callback){
                    console.log("bus create");
                    bus.create(true, nextFunc(callback));
                },
                function(callback){
                    console.log("connect");
                    bus.connect(nextFunc(callback));
                },
                function(callback){
                    console.log("addMatch");
                    bus.addMatch("type='signal',sessionless='t'", nextFunc(callback));
                },
            ], function(err, result){
                for(var i=0;i<ALLJOYN_INTERFACE.length;i++){
                    (function(index){
                        var iface = ALLJOYN_INTERFACE[index];

                        console.log("try to register interface : " + iface.name);

                        bus.createInterface(iface, function(err){
                            if(err){
                                console.log(iface, err);
                                return;
                            }

                            console.log(signalHandler[iface.name], iface.name);

                            if(iface.signal&&signalHandler[iface.name]){

                                var signal;

                                for(var j=0;j<iface.signal.length;j++){
                                    signal = iface.signal[j];
                                    console.log(signal);

                                    console.log(signalHandler[iface.name][signal.name]);
                                    if(signal&&signalHandler[iface.name][signal.name]){
                                        var ifaceStr = iface.name + "." + signal.name;

                                        console.log("try to register signal : " + ifaceStr);

                                        bus.registerSignalHandler(signalHandler[iface.name][signal.name], 
                                            ifaceStr, 
                                            function(err){
                                                if(err){
                                                    console.log(err);
                                                    return;
                                                }
                                                console.log("signal " + ifaceStr + " register done");
                                            }
                                        ); 
                                    }
                                }

                            }
                        });



                    })(i);
                }

                mDeviceMap = {};
                // for(var i in mActivieDeviceListener){
                //     mActivieDeviceListener[i](mDeviceMap);
                // }                

                toastr.info("bus unique name : " + bus.uniqueName);

                callback();
            });

        },
		getBusList : function(){
			return mBusList;
		},
		addAnnonceObserver : function(callback){
			mObserverList.push(callback);
		},
		addSignalListener : function(deviceName, callback){
            mSignalListener[deviceName] = callback;
		},
        addDeviceActiveListener : function(listener){
            mActivieDeviceListener.push(listener);
        },
        addDeviceDeActiveListener : function(listener){
            mDeActivieDeviceListener.push(listener);
        },
    	bindDevice : function(deviceName, busName, activeCallback){
    		console.log(deviceName, busName);

            var onJoined = function(err, id, opts) {
                if (err) {
                    alert(err);
                    return;
                }

                mDeviceMap[deviceName] = {
                    busName : busName,
                    sessionId : id,
                };

                console.log("session joined: " + mDeviceMap[deviceName].sessionId );
                console.log(mDeviceMap);

                for(var i in mActivieDeviceListener){
                    mActivieDeviceListener[i](mDeviceMap, deviceName);
                }
            }


            var join = function(){
                bus.joinSession({
                    host: busName,
                    port: 1000, //$scope.selectedBus.port
                    onLost : function(id, reason) { 
                        removeDevice(id);
                        toastr.info("Session '" + id + "' lost (reason " + reason + ")");

                        for(var i in mDeActivieDeviceListener){
                            mDeActivieDeviceListener[i](mDeviceMap, deviceName);
                        }
                        
                    }
                }, onJoined);                
            };

            if(mDeviceMap[deviceName]!==undefined){
               bus.leaveSession(mDeviceMap[deviceName].sessionId, function(err){
                    if(err){
                        console.log(err);
                        return;                        
                    }
                    join();
                });
            }else{
                join();
            }
    	},
    	getProxyObject : function(deviceName){
    		var ret = {};
    		var device = deviceName;

    		ret.Get = function(propertyName, callback){
		        var exec = function(err, proxyObj) {
		            if(err){
		                console.log("getProxyBusObject error");
		                console.log(err);
		            }

		            var methodCallback = function(err, context, value){
		                if(err){
		                    console.log("methodCall error", err);
		                    return;
		                }
		                callback(value);
		            };

                    var params = [
                        "org.freedesktop.DBus.Properties",
                        "Get",
                        controlInterfaceList[deviceName][propertyName].interface_name,
                        "Value", 
                        methodCallback
                    ];

                    // console.log(params);

                    proxyObj.methodCall.apply(proxyObj, params);
		        };

                console.log(controlInterfaceList[device]);
                console.log(mDeviceMap);
                console.log(propertyName);

		        var dest = mDeviceMap[device].busName + 
		        	controlInterfaceList[device][propertyName].object_path + 
		        	":sessionId=" + mDeviceMap[device].sessionId;

		        console.log(dest);

				bus.getProxyBusObject(dest, exec);
    		};

    		ret.Set = function(propertyName, value, callback){
		        var exec = function(err, proxyObj) {
		            if(err){
		                console.log("getProxyBusObject error");
		                console.log(err);
		            }

		            var methodCallback = function(err, context, value){
		                if(err){
		                    console.log("methodCall error", err);
		                    return;
		                }
		                callback(value);
		            };

                    var signature = controlInterfaceList[deviceName][propertyName].signature;

                    var valueObject;
                    if(signature=="q"){
                        valueObject = { v : { q : value } };
                    }else if(signature=="b"){
                        valueObject = { v : { b : value } };
                    }else if(signature=="s"){
                        valueObject = { v : { s : value } };
                    }else if(signature=="q(qqq)"){
                        valueObject = { "v" : { "(q(qqq))" : [1, [18, 30, 0]] } };
                    }

                    var params = [
                        "org.freedesktop.DBus.Properties",
                        "Set", 
                        controlInterfaceList[deviceName][propertyName].interface_name,
                        "Value",
                        valueObject,
                        methodCallback
                    ];

                    console.log(params);

                    proxyObj.methodCall.apply(proxyObj, params);
		        };


		        var dest = mDeviceMap[device].busName + 
		        	controlInterfaceList[device][propertyName].object_path + 
		        	":sessionId=" + mDeviceMap[device].sessionId;

		        console.log(dest);

				bus.getProxyBusObject(dest, exec);
    		};

			ret.Exec = function(propertyName, callback){
		        var exec = function(err, proxyObj) {
		            if(err){
		                console.log("getProxyBusObject error");
		                console.log(err);
		            }

		            var methodCallback = function(err, context, value){
		                if(err){
		                    console.log("methodCall error", err);
		                    return;
		                }
		                callback(value);
		            };

                    var params = [
                        controlInterfaceList[device][propertyName].interface_name,
                        "Exec",
                        methodCallback
                    ];

                    console.log(params);

                    proxyObj.methodCall.apply(proxyObj, params);
		        };

		        var dest = mDeviceMap[device].busName + 
		        	controlInterfaceList[device][propertyName].object_path + 
		        	":sessionId=" + mDeviceMap[device].sessionId;

		        console.log(dest);

				bus.getProxyBusObject(dest, exec);
    		};

            ret.DialogActionExec = function(propertyName, actionName ,callback){
                var exec = function(err, proxyObj) {
                    if(err){
                        console.log("getProxyBusObject error");
                        console.log(err);
                    }

                    var methodCallback = function(err, context, value){
                        if(err){
                            console.log("methodCall error", err);
                            return;
                        }
                        callback(value);
                    };

                    var params = [
                        controlInterfaceList[device][propertyName].interface_name,
                        actionName,
                        methodCallback
                    ];

                    console.log(params);

                    proxyObj.methodCall.apply(proxyObj, params);
                };

                var dest = mDeviceMap[device].busName + 
                    controlInterfaceList[device][propertyName].object_path + 
                    ":sessionId=" + mDeviceMap[device].sessionId;

                console.log(dest);

                bus.getProxyBusObject(dest, exec);
            };

    		return ret;
    	},



	};

}]);

