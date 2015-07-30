myApp.controller('BusController', ['$scope', 'bus', function ($scope, bus) {

    toastr.info("revisiton #97");

    var debug = true;
    if(debug){
        toastr.info = function(msg){
        };
    }

    toastr.info("2015.1.3 up5");

    $scope.onResetClick = function(){
        console.log("reset");
        async.waterfall(
            [
                function(callback){
                    try{
                        bus.getProxyObject('Light')
                            .Exec("ModeAwaySurfaceMountAction", 
                                function(result){                                
                                    console.log("ModeRestSurfaceMountAction Execute"); 
                                    callback();
                            });
                    }catch(e){
                        console.log(e);
                        callback();
                    }
                },
                function(callback){
                    try{
                        setRefrigeratorSmartSavingStatusValue(1, function(err, result){
                            console.log("Set RefrigeratorSmartSavingStatusValue : " + 1);                            
                            callback();
                        });
                    }catch(e){
                        console.log(e);
                        callback();                        
                    }
                },
                function(callback){
                    try{
                        setAirconditionerPower(0, function(err, result){
                            console.log("Set AirconditionerPowe : " + 0);
                            callback();
                        });
                    }catch(e){
                        console.log(e);
                        callback();
                    }
                },
                function(callback){
                    try{
                        $scope.Roboking.homing();
                    }catch(e){
                        console.log(e);
                    }finally{
                        callback();
                    }
                }                
            ],
            function(err, result){
                toastr.info("Reset Mode signal is sent");
            }
        );

    };

    $scope.onHouseworkModeClicked = function(){
        toastr.info("Enter : HouseWork Mode");

        async.waterfall(
            [
                function(callback){
                    try{
                        bus.getProxyObject('Light')
                            .Exec("ModeHouseworkSurfaceMountAction", 
                                function(result){ console.log("ModeRestSurfaceMountAction Execute"); 
                            });

                    }finally{
                        callback();                        
                    }
                },
                function(callback){
                    try{
                        bus.getProxyObject('SmartPlug_Aircleaner')
                            .proxyObj.Exec("On", callback);                        
                    }finally{
                        callback();                        
                    }
                },
                function(callback){
                    try{
                        setCleanModeProperty(2, function(err, result){
                            console.log("Set CleanModeProperty : " + 2);
                            var interval = setInterval(function(){
                                clearInterval(interval);
                                callback();
                            }, 500);
                        });
                    }catch(e){
                        console.log(e);
                        callback();
                    }
                },
                function(callback){
                    try{
                        $scope.Roboking.start();
                    }catch(e){
                        console.log(e);
                    }finally{
                        callback();
                    }
                },                
                function(callback){
                    try{
                        setAirconditionerPower(1, function(err, result){
                            console.log("Set AirconditionerPowe : " + 1);
                            callback();
                        });
                    }catch(e){
                        console.log(e);
                        callback();
                    }
                },
                function(callback){
                    console.log("try setting airClean ");
                    try{
                        setAirconditionerAirClean(1, function(err, result){
                            console.log("Set airClean : " + 1);
                            // callback();
                            var interval = setInterval(function(){
                                clearInterval(interval);
                                callback();
                            }, 500);
                        });                        
                    }catch(e){
                        console.log(e);
                        callback();
                    }
                },
            ],
            function(err, result){
                toastr.info("Rest Mode signal is sent");
            }
        );


    };
    $scope.onSleepModeClicked = function(){
        toastr.info("Enter : Sleep Mode");
        async.waterfall(
            [
                function(callback){
                    try{
                        bus.getProxyObject('Light')
                            .Exec("ModeSleepSurfaceMountAction", 
                                function(result){ console.log("ModeRestSurfaceMountAction Execute"); 
                            });

                    }finally{
                        callback();                        
                    }
                },
                function(callback){
                    try{
                        bus.getProxyObject('SmartPlug_Aircleaner')
                            .proxyObj.Exec("On", callback);                        
                    }finally{
                        callback();                        
                    }
                },
                function(callback){
                    try{
                        setAirconditionerTargetTemperature(24, function(err, result){
                            console.log("Set set_temperature : " + 24);
                            var interval = setInterval(function(){
                                clearInterval(interval);
                                callback();
                            }, 500);
                        });
                    }catch(e){
                        console.log(e);
                        callback();
                    }
                },
                function(callback){
                    try{
                        setAirconditionerWindStrength(4, function(err, result){
                            console.log("Set windStrength : " + 4);
                            // callback();
                            var interval = setInterval(function(){
                                clearInterval(interval);
                                callback();
                            }, 500);
                        });
                    }catch(e){
                        console.log(e);
                        callback();
                    }
                },
                function(callback){
                    try{
                        setRefrigeratorSmartSavingStatusValue(1, function(err, result){
                            console.log("Set RefrigeratorSmartSavingStatusValue : " + 1);                            
                            callback();
                        });
                    }catch(e){
                        console.log(e);
                        callback();
                    }
                },
                function(callback){
                    try{
                        $scope.Roboking.homing();
                    }catch(e){
                        console.log(e);
                    }finally{
                        callback();
                    }
                },                
            ],
            function(err, result){
                toastr.info("Sleep Mode signal is sent");
            }
        );
    };
    $scope.onRestModeClicked = function(){
        toastr.info("Enter : Rest Mode");

        async.waterfall(
            [
                function(callback){
                    try{
                        bus.getProxyObject('Light')
                            .Exec("ModeRestSurfaceMountAction", 
                                function(result){ console.log("ModeRestSurfaceMountAction Execute"); 
                            });
                    }finally{
                        callback();                        
                    }
                },
                function(callback){
                    try{
                        bus.getProxyObject('SmartPlug_Aircleaner')
                            .proxyObj.Exec("On", callback);                        
                    }finally{
                        callback();                        
                    }
                },
                function(callback){
                    try{
                        bus.getProxyObject('SmartPlug_Aircleaner')
                            .proxyObj.Exec("On", callback);                        
                    }finally{
                        callback();                        
                    }
                },
                function(callback){
                    try{
                        setAirconditionerWindStrength(4, function(err, result){
                            console.log("Set windStrength : " + 4);
                            // callback();
                            var interval = setInterval(function(){
                                clearInterval(interval);
                                callback();
                            }, 500);
                        });
                    }catch(e){
                        console.log(e);
                        callback();
                    }
                },
                function(callback){
                    try{
                        setAirconditionerTargetTemperature(24, function(err, result){
                            console.log("Set set_temperature : " + 24);
                            var interval = setInterval(function(){
                                clearInterval(interval);
                                callback();
                            }, 500);
                        });
                    }catch(e){
                        console.log(e);
                        callback();
                    }
                },
                function(callback){
                    console.log("try setting airClean ");
                    try{
                        setAirconditionerAirClean(1, function(err, result){
                            console.log("Set airClean : " + 1);
                            // callback();
                            var interval = setInterval(function(){
                                clearInterval(interval);
                                callback();
                            }, 500);
                        });                        
                    }catch(e){
                        console.log(e);
                        callback();
                    }
                },
            ],
            function(err, result){
                toastr.info("Rest Mode signal is sent");
            }
        );
    };

    var mapDevice = {
        "Light Gateway" : "Light",
        Oven_CP : "Oven",
        Refrigerator_CP : "Refrigerator",
        Washer_CP : "WashingMachine",
        RobotCleaner_CP : "Roboking",
        AirConditioner_CP_RAC : "Airconditioner",
        "PT Plug 740252f" : "SmartPlug_TV",//
        "PT Plug 740574d" : "SmartPlug_AirConditioner",
        "PT Plug 74025f2" : "SmartPlug_Washer",
        "PT Plug 74023d6" : "SmartPlug_Dryer",//
        "PT Plug 740249c" : "SmartPlug_Refrigerator",//
        "PT Plug 7402467" : "SmartPlug_Roboking",//
        "PT Plug 7402540" : "SmartPlug_Oven",//
        "PT Plug 74025c6" : "SmartPlug_Light",//
        "PT Plug 7402538" : "SmartPlug_Aircleaner",//
        STB_Plug : "SmartPlug_STB",
    };




    var SMART_PLUG_LIST = [];

    $scope.SmartPlug = {};

    for(var key in mapDevice){
        var deviceName = mapDevice[key];
        if(deviceName.indexOf('SmartPlug')!=-1){
            SMART_PLUG_LIST.push(deviceName);

            controlInterfaceList[deviceName] = controlInterfaceList.SmartPlug;
            $scope.SmartPlug[deviceName] = {};
            $scope.SmartPlug[deviceName].AccumulateEnergyProperty = 0;
            $scope.SmartPlug[deviceName].PowerProperty = 0;
        }
    }


    var announceCallback = function(context, version, port, objectDescription, aboutData) {
        var deviceName = aboutData.DeviceName;

        if(mapDevice[deviceName]!==undefined){
            bus.bindDevice(mapDevice[deviceName], context.sender);

            toastr.info("try to connect " + deviceName);
        }
    };

    bus.addAnnonceObserver(announceCallback);

    $scope.onLogoClick = function(){
        console.log("logo clicked");

        // var busList = bus.getBusList();

        // console.log(busList);

        // var alertStr = "found devices : ";

        // for(var i in busList){
        //     var busInfo = busList[i];

        //     var deviceName = busInfo.aboutData.DeviceName;

        //     if(mapDevice[deviceName]!==undefined){
        //         bus.bindDevice(mapDevice[deviceName], busInfo.name);
        //         alertStr = alertStr + deviceName + " ";
        //     }
        // }

        // toastr.info(alertStr);
        $scope.ActiveDeviceList = {
        };

        bus.init(function(){
            toastr.info("BusAttachment is initialized");
        });        
    };

    var BoardCloseCallback = null;

    $scope.setBoardCloseCallback = function(callback){
        BoardCloseCallback = callback;
    };

    $scope.onBoardCloseClicked = function(){
        console.log("onBoardCloseClicked");
        menuOff();

        if(BoardCloseCallback!=null){
            BoardCloseCallback();
            BoardCloseCallback = null;
        }
    };

    $scope.onBoardBackClicked = function(){
        console.log("onBoardCloseClicked");
        
        viewMenu();

        if(BoardCloseCallback!=null){
            BoardCloseCallback();
            BoardCloseCallback = null;
        }        
    };


    bus.addDeviceActiveListener(function(activeDeviceList, deviceName){
        initializeDeivce(deviceName, function(err){
            if(err){
                console.log(deviceName + " initialize failed");
            }else{
                $scope.ActiveDeviceList = activeDeviceList;
                // $scope.ActiveDeviceList.SmartPlug_Aircleaner = true;

            }
        });
    });    

    bus.addDeviceDeActiveListener(function(activeDeviceList, deviceName){        
        $scope.$apply(function(){
            $scope.ActiveDeviceList = activeDeviceList;
            toastr.info(deviceName + " is deactiveated");
        });
    });

    function roundXL(n, digits) {
      if (digits >= 0) return parseFloat(n.toFixed(digits)); // 소수부 반올림

      digits = Math.pow(10, digits); // 정수부 반올림
      var t = Math.round(n * digits) / digits;

      return parseFloat(t.toFixed(0));
    }

    $scope.Light = {};
    $scope.WashingMachine = {};

    var PropertyCallbackMap = {
        Light : {
            DimLevelGroupStandProperty : function(deviceName, value){
                $scope.Light.DimLevelGroupStandProperty = value;
                $scope.Light.OnOffStand = (value==0) ? "OFF" : "ON";
                if(value==0){
                    deviceSwitch('stand', 'off');
                }else{
                    deviceSwitch('stand', 'on');
                }
            },
            DimLevelGroupDownProperty : function(deviceName, value){
                $scope.Light.DimLevelGroupDownProperty = value;
                $scope.Light.OnOffDown = (value==0) ? "OFF" : "ON";
                if(value==0){
                    deviceSwitch('down', 'off');
                }else{
                    deviceSwitch('down', 'on');
                }
            },
            DimLevelGroupSurfaceMountProperty : function(deviceName, value){
                $scope.Light.DimLevelGroupSurfaceMountProperty = value;
                $scope.Light.OnOffSurface = (value==0) ? "OFF" : "ON";
                if(value==0){
                    deviceSwitch('surface', 'off');
                }else{
                    deviceSwitch('surface', 'on');
                }                
            },
        },
        Oven : {
            OvenCookMenu : function(deviceName, value){
                var statusArray = [
                    "",
                    "Bake",
                    "",
                    "Conv.Bake",
                    "Conv.Roast", 
                    "", 
                    "Favorite",
                    "Broil",
                    "Warm",
                    "",
                    "",
                    "Kids Meal",
                ];

                $scope.Oven.OvenCookMenu = statusArray[value];
            },
            OvenOperationStatusValue : function(deviceName, value){
                var statusArray = [
                    "Ready",
                    "PreHeating",
                    "Cooking",
                    "Complete",
                ];

                $scope.Oven.OvenOperationStatusValue = statusArray[value];
            },
            OvenCurrentTemperatureValue : function(deviceName, value){
                $scope.Oven.OvenCurrentTemperatureValue = value;
            },
            OvenRemainingTimeValue : function(deviceName, value){
                $scope.Oven.OvenRemainingTimeValue = printDateString(value);
            },
        },
        WashingMachine : {
            WashingMachineState : function(deviceName, value){
                var status = {
                    "0" : "OFF",
                    "5" : "INITIAL",
                    "6" : "PAUSE",
                    "8" : "WIFI SETTING",
                    "10" : "RESERVE",
                    "20" : "DETECTING",
                    "21" : "ADD DRAIN",
                    "22" : "LOAD DISPLAY",
                    "23" : "WASHING",
                    "30" : "RINSING",
                    "40" : "SPINING",
                    "60" : "FINISHED",
                    "61" : "TUMBLING",
                };

                $scope.WashingMachine.MachineState = status[value];
            },
            WashingMachineRemainingTime : function(deviceName, value){
                $scope.WashingMachine.RemainingTime = printDateString(value);
            },
            WashingMachineReserveTime : function(deviceName, value){
            },
            WashingMachineTotalTime : function(deviceName, value){
            },
            WashingMachineCourse : function(deviceName, value){
                var status = {
                    "1" : "TUB CLEAN",
                    "2" : "BRIGHT WHITES",
                    "3" : "ALLERGIENE",
                    "4" : "SANITARY",
                    "5" : "BEDDING",
                    "6" : "HEAVY DUTY",
                    "7" : "NORMAL",
                    "8" : "JUMBO WASH",
                    "9" : "PERM.PRESS",
                    "10" : "DELICATES",
                    "11" : "TOWELS",
                    "12" : "SPEED WASH",
                    "13" : "DRAIN+SPIN",
                    "14" : "DOWNLOAD",
                };

                $scope.WashingMachine.Course = status[value];                
            },
            WashingMachineRemainingRinsingCount : function(deviceName, value){
            },
            WashingMachineSpinning : function(deviceName, value){
            },
            WashingMachineDrying : function(deviceName, value){
            },
            WashingMachineWaterTemp : function(deviceName, value){
            },
            WashingMachineWrinkleCareStatus : function(deviceName, value){
                $scope.WashingMachine.WrinkleCareStatus = (value==0);
                $scope.WashingMachine.WrinkleCareStatusStr = (value==0) ? "off" : "on";
                setBtnOnOff('dryer_wrinkle', $scope.WashingMachine.WrinkleCareStatus);
            },
        },
        Refrigerator : {
            RefrigeratorFridgeTemperatureValue : function(deviceName, value){
                $scope.Refrigerator.RefrigeratorFridgeTemperatureValue = value;
            },
            RefrigeratorFreezerTemperatureValue : function(deviceName, value){
                if(value>32767){
                    value = value - 65536;
                }
                $scope.Refrigerator.RefrigeratorFreezerTemperatureValue = value;
            },
            RefrigeratorDoorOpenStatusValue : function(deviceName, value){
                var statusArray = [
                    "",
                    "OPEN",
                    "CLOSE"
                ];
                $scope.Refrigerator.RefrigeratorDoorOpenStatusValue = statusArray[value];
            },
            RefrigeratorSmartSavingStatusValue : function(deviceName, value){

                $scope.Refrigerator.RefrigeratorSmartSavingStatusValue = (value==3);                    
                $scope.Refrigerator.RefrigeratorSmartSavingStatusValueStr = (value==3) ? "ON" : "OFF";
            },
            RefrigeratorIcePlusStatusValue : function(deviceName, value){
                $scope.Refrigerator.RefrigeratorIcePlusStatusValue = (value!=2);
                $scope.Refrigerator.RefrigeratorIcePlusStatusValueStr = (value==2) ? "ON" : "OFF";

            },
        },
        Roboking : {
            CleanModeProperty : function(deviceName, value){
                var statusArray = [
                    "-----",
                    "CELL BY CELL",
                    "ZIGZAG",
                    "SPOT"
                ];

                $scope.Roboking.CleanModePropertyStr = statusArray[value];
                $scope.Roboking.CleanModeProperty = value;
            },
            BatteryLevelProperty : function(deviceName, value){
                $scope.Roboking.BatteryLevel = value;
            },
            CleanOperationStatusProperty : function(deviceName, value){
                var statusArray = [
                    "-----",
                    "Start",
                    "Homing",
                    "Stop",
                    "Charging"
                ];
                $scope.Roboking.CleanOperationStatusPropertyStr = statusArray[value];
                $scope.Roboking.CleanOperationStatusProperty = value;
            },
        },
        Airconditioner : {
            power : function(deviceName, value){
                if(value==1){
                    save_airconInfo('switch', 'on');
                }else{
                    save_airconInfo('switch', 'off');
                }
                $scope.Airconditioner.power = value;
            },
            set_CurrentTemperature : function(deviceName, value){
                $scope.Airconditioner.set_CurrentTemperature = value;
                $scope.Airconditioner.set_CurrentTemperatureF = parseInt(value * 1.8 + 32);
            },
            set_temperature : function(deviceName, value){
                $scope.Airconditioner.set_temperature = value;
                $scope.Airconditioner.set_temperatureF = parseInt(value * 1.8 + 32, 10);
            },
            mode : function(deviceName, value){
                var statusArray = [
                    "COOL",
                    "DRY",
                    "FAN",
                    "",
                    "HEAT",
                    "",
                    "ACO"
                ];

                $scope.Airconditioner.mode = value;
                $scope.Airconditioner.modeStr = statusArray[value];
                console.log($scope.Airconditioner.modeStr);
            },
            windStrength : function(deviceName, value){
                //             description : "2(LOW), 4(MID), 6(HIGH), 8(AUTO)"
                var statusArray = [
                    "LOW",
                    "LOW",
                    "LOW",
                    "MID",
                    "MID",
                    "MID",
                    "HIGH",
                    "HIGH",
                    "AUTO"
                ];

                $scope.Airconditioner.windStrength = value;
                $scope.Airconditioner.windStrengthStr = statusArray[value];
                console.log($scope.Airconditioner.windStrengthStr);
            },
            airClean : function(deviceName, value){
                $scope.Airconditioner.airClean = value;
                if(value==0){
                    save_airconInfo('airclean', 'off');
                }else{
                    save_airconInfo('airclean', 'on');
                }
            },
            WindDirHStepProperty : function(deviceName, value){
                $scope.Airconditioner.WindDirHStepProperty = value;
                if(value==0){
                    save_airconInfo('fanhorizontal', 'off');
                }else{
                    save_airconInfo('fanhorizontal', 'on');
                }
            },
            WindDirVStepProperty : function(deviceName, value){
                $scope.Airconditioner.WindDirVStepProperty = value; 
                if(value==0){
                    save_airconInfo('fanvertical', 'off');
                }else{                    
                    save_airconInfo('fanvertical', 'on');
                }
            },            
        },
        SmartPlug : {
            State : function(deviceName, value){
                $scope.PT_AIR.State = (value=="Switch On");
                $scope.SmartPlug[deviceName].OnOff = (value=="Switch On") ? "ON" : "OFF";
                if($scope.PT_AIR.State){
                    deviceSwitch('air', 'on');
                }else{
                    deviceSwitch('air', 'off');
                }
                var proxyObj = bus.getProxyObject(deviceName);

                proxyObj.Exec("GetProperties", function(result){ console.log("GetProperties Execute"); })
            },            
            PowerProperty : function(deviceName, newValue){
                $scope.SmartPlug[deviceName].PowerProperty = roundXL(parseFloat(newValue), 2);
                $scope.SmartPlug[deviceName].PowerPropertyStr = parseInt(newValue, 10);
                console.log($scope.SmartPlug[deviceName].PowerProperty);

                $scope.SmartPlug.TotalPowerProperty = 0;

                for(var i in SMART_PLUG_LIST){
                    var smartPlugDeviceName = SMART_PLUG_LIST[i];

                    var acc = $scope.SmartPlug[smartPlugDeviceName].PowerProperty;

                    if(acc!==undefined) $scope.SmartPlug.TotalPowerProperty += acc;
                }

                $scope.SmartPlug.TotalPowerProperty = roundXL(parseFloat($scope.SmartPlug.TotalPowerProperty), 2);


                var max = 20;
                var percent = ($scope.SmartPlug[deviceName].PowerProperty / max) * 100;
                if(percent>100) percent = 100;

                $scope.GraphStyle[deviceName] = {
                    height : percent + "%"
                };

            },
            AccumulateEnergyProperty : function(deviceName, newValue){
                $scope.SmartPlug[deviceName].AccumulateEnergyProperty = roundXL(parseFloat(newValue), 2);

                $scope.SmartPlug.TotalAccumulateEnergyProperty = 0;

                for(var i in SMART_PLUG_LIST){
                    var smartPlugDeviceName = SMART_PLUG_LIST[i];

                    var acc = $scope.SmartPlug[smartPlugDeviceName].AccumulateEnergyProperty;

                    if(acc!==undefined) $scope.SmartPlug.TotalAccumulateEnergyProperty += acc;
                }

                $scope.SmartPlug.TotalAccumulateEnergyProperty = roundXL(parseFloat($scope.SmartPlug.TotalAccumulateEnergyProperty), 2);
            },
        },
    };

    var initializeDeivce = function(deviceName, callback){
        console.log("try to initialize " + deviceName);
        var proxyObj = bus.getProxyObject(deviceName);

        var funcArray = [];

        if(deviceName.indexOf('SmartPlug')!=-1){
            $scope.SmartPlug[deviceName] = {};
            PropertyCallbackMap[deviceName] = PropertyCallbackMap.SmartPlug;
        }

        for(var i in PropertyCallbackMap[deviceName]){
            (function(property){
                funcArray.push(function(callback){
                    console.log("try to get " + property);
                    proxyObj.Get(property, function(result){
                        $scope.$apply(function(){
                            console.log(property, result);
                            for(var j in result){
                                PropertyCallbackMap[deviceName][property](deviceName, result[j]);
                                callback();
                                break;                            
                            }

                        });
                    });
                });
            })(i);
        }        

        async.waterfall(
            funcArray,
            function(err, result){
                console.log(err);
                bus.addSignalListener(deviceName, function(prop, newValue){
                    console.log(deviceName + ' signal received', prop, newValue);

                    if(PropertyCallbackMap[deviceName][prop]!==undefined){
                        $scope.$apply(function(){
                            PropertyCallbackMap[deviceName][prop](deviceName, newValue);
                        });
                    }
                });
                callback(err);                
            }
        );
    };


    // START SmartPlug  

    $scope.GraphStyle = {};

    var EnergyMonitoringIntervalObj = null;

    $scope.onEnergyMonitoringClicked = function(){
        if(EnergyMonitoringIntervalObj!==null) return;

        menu('energy');

        var invalidate = function(){            
            async.filter(
                SMART_PLUG_LIST,
                function(deviceName, callback){
                    try{
                        var proxyObj = bus.getProxyObject(deviceName);
                        proxyObj.Exec(
                            "GetProperties", 
                            function(result){ 
                                console.log(deviceName + " GetProperties Executed"); 
                                callback(true);                
                            }
                        );                    
                    }catch(e){
                        console.log(deviceName + " not available");
                        callback(false);
                    }

                }, 
                function(results){
                    console.log(results);
                    console.log($scope.SmartPlug);
                }
            );

        };

        invalidate();
        EnergyMonitoringIntervalObj = setInterval(invalidate, 3000);

        $scope.setBoardCloseCallback(function(){
            clearInterval(EnergyMonitoringIntervalObj);
            EnergyMonitoringIntervalObj = null;
        });

    };

    // END SmartPlug 

    // START LIGHT
    $scope.toggleLightStand = function(){
        var value = 0;
        if($scope.Light.DimLevelGroupStandProperty==0){
            value = 100;
        }
        $scope.setLightStandDimLevel(value);
    }

    $scope.setLightStandDimLevel = function(value){
        if(value<0) value = 0;
        if(value>100) value = 100;
        value = value - (value % 5);        
        var proxyObj = bus.getProxyObject('Light');
        proxyObj.Set("DimLevelGroupStandProperty", value, function(result){
            console.log("Set DimLevelGroupStandProperty : " + value);
        });        
    };

    $scope.toggleLightDown = function(){
        var value = 0;
        if($scope.Light.DimLevelGroupDownProperty==0){
            value = 100;
        }
        $scope.setLightDownDimLevel(value);
    }

    $scope.setLightDownDimLevel = function(value){
        if(value<0) value = 0;
        if(value>100) value = 100;
        value = value - (value % 5);
        var proxyObj = bus.getProxyObject('Light');
        proxyObj.Set("DimLevelGroupDownProperty", value, function(result){
            console.log("Set DimLevelGroupDownProperty : " + value);
        });        
    };    

    $scope.toggleLightSurface = function(){
        var value = 0;
        if($scope.Light.DimLevelGroupSurfaceMountProperty==0){
            value = 100;
        }
        $scope.setLightSurfaceDimLevel(value);
    }

    $scope.setLightSurfaceDimLevel = function(value){
        if(value<0) value = 0;
        if(value>100) value = 100;
        value = value - (value % 5);        
        var proxyObj = bus.getProxyObject('Light');
        proxyObj.Set("DimLevelGroupSurfaceMountProperty", value, function(result){
            console.log("Set DimLevelGroupSurfaceMountProperty : " + value);
        });        
    };

    // END LIGHT

    // START Airconditioner 

    $scope.Airconditioner = {};

    var setAirconditionerPower = function(value, callback){
        var proxyObj = bus.getProxyObject('Airconditioner');

        proxyObj.Set("power", value, callback);
    };

    $scope.toggleAirconditionerPower = function(){
        var value = 0;
        if($scope.Airconditioner.power==0) value = 1;

        setAirconditionerPower(value, function(result){
            console.log("Set power : " + value);
        });

    };

    var setAirconditionerTargetTemperature = function(value, callback){
        if(value<18) value = 18;
        if(value>30) value = 30;
        var proxyObj = bus.getProxyObject('Airconditioner');
        proxyObj.Set("set_temperature", value, callback);
    };

    $scope.setAirconditionerTargetTemperature = function(value){
        setAirconditionerTargetTemperature(value, function(result){
            console.log("Set set_temperature : " + value);
        });
    };

    var setAirconditionerFanMode = function(value, callback){
        var proxyObj = bus.getProxyObject('Airconditioner');
        proxyObj.Set("mode", value, callback);        
    };

    $scope.setAirconditionerModePrev = function(){
        var value = $scope.Airconditioner.mode - 1;
        if(value==-1) value = 6;
        if(value==3) value = 2;
        if(value==5) value = 4;
        setAirconditionerFanMode(value, function(err, result){
            console.log("Set mode : " + value);
        });
    };

    $scope.setAirconditionerModeNext = function(){
        var value = $scope.Airconditioner.mode + 1;
        if(value==3) value = 4;
        if(value==5) value = 6;
        if(value==7) value = 0;
        setAirconditionerFanMode(value, function(err, result){
            console.log("Set mode : " + value);
        });
    };

    var setAirconditionerWindStrength = function(value, callback){
        var proxyObj = bus.getProxyObject('Airconditioner');
        proxyObj.Set("windStrength", value, callback);
    };


    $scope.setAirconditionerFanPrev = function(){
        var value = $scope.Airconditioner.windStrength - 1;
        if(value==-1) value = 8;
        if(value==0) value = 8;
        if(value==1) value = 8;
        if(value==3) value = 2;
        if(value==5) value = 4;
        if(value==7) value = 6;

        setAirconditionerWindStrength(value, function(err, result){
            console.log("Set windStrength : " + value);
        });
    };

    $scope.setAirconditionerFanNext = function(){
        var value = $scope.Airconditioner.windStrength + 1;
        if(value==1) value = 2;
        if(value==3) value = 4;
        if(value==5) value = 6;
        if(value==7) value = 8;
        if(value==9) value = 2;
        setAirconditionerWindStrength(value, function(err, result){
            console.log("Set windStrength : " + value);
        });
    };

    $scope.setAirconditionerFanDirectoionVertical = function(value){
        var proxyObj = bus.getProxyObject('Airconditioner');

        proxyObj.Set("WindDirVStepProperty", value, function(result){
            console.log("Set WindDirVStepProperty : " + value);
        });
    };

    $scope.setAirconditionerFanDirectoionHorizontal = function(value){
        var proxyObj = bus.getProxyObject('Airconditioner');

        proxyObj.Set("WindDirHStepProperty", value, function(result){
            console.log("Set WindDirHStepProperty : " + value);
        });
    };

    var setAirconditionerAirClean = function(value, callback){
        var proxyObj = bus.getProxyObject('Airconditioner');

        proxyObj.Set("airClean", value, callback);
    };

    $scope.toggleAirconditionerAirClean = function(){
        var value = 0;
        if($scope.Airconditioner.airClean==0) value = 1;
        setAirconditionerAirClean(value, function(result){
            console.log("Set airClean : " + value);
        });
    };

    $scope.onAirconditionerClicked = function(){
        console.log("onAirconditionerClicked");
        goMenu('aircon');
    };


    // END Airconditioner



    // START Roboking
    $scope.Roboking = {};

    var setCleanModeProperty = function(value, callback){
        var proxyObj = bus.getProxyObject('Roboking');

        proxyObj.Set("CleanModeProperty", value, callback);

    };

    $scope.setCleanModeProperty = function(value){
        if(value<1) value = 2;
        if(value>2) value = 1;

        setCleanModeProperty(value, function(result){
            console.log("Set CleanModeProperty : " + value);
        });
    };

    $scope.Roboking.start = function(){
        bus.getProxyObject('Roboking')
            .Exec("robotCleanerStartAction", 
                function(result){ console.log("robotCleanerStartAction Execute"); 
            });
    };

    $scope.Roboking.homing = function(){
        bus.getProxyObject('Roboking')
            .Exec("robotCleanerHomingAction", 
                function(result){ console.log("robotCleanerHomingAction Execute"); 
            });
    };

    $scope.Roboking.stop = function(){
        bus.getProxyObject('Roboking')
            .DialogActionExec(
                "robotCleanerStopAction", 
                "Action1",
                function(result){ console.log("robotCleanerStopAction Execute"); 
            });
    };


    $scope.onRobokingClicked = function(){
        console.log("onRobokingClicked");
        goMenu('vacuum');
    };

    // END Roboking

    // START Refrigerator

    var setRefrigeratorSmartSavingStatusValue = function(value, callback){
        var proxyObj = bus.getProxyObject('Refrigerator');

        proxyObj.Set("RefrigeratorSmartSavingStatusValue", value, callback);
    }

    $scope.setRefrigeratorSmartSaving = function(value){
        setRefrigeratorSmartSavingStatusValue(value, function(){
            console.log("try to setRefrigeratorSmartSaving " + value);
        });
    }

    $scope.setRefrigeratorFridgeTemperatureValue = function(value){
        if(value<33) value = 33;
        if(value>46) value = 46;
        console.log("try to setRefrigeratorFridgeTemperatureValue to ", value);

        var proxyObj = bus.getProxyObject('Refrigerator');

        proxyObj.Set("RefrigeratorFridgeTemperatureValue", value, function(result){
            console.log("result", result);
        });

    };

    $scope.setRefrigeratorFreezerTemperatureValue = function(value){
        if(value>8) value = 8;        
        if(value<-6) value = -6;
        if(value<0) value += 65536;
        console.log("try to RefrigeratorFreezerTemperatureValue to ", value);

        var proxyObj = bus.getProxyObject('Refrigerator');

        proxyObj.Set("RefrigeratorFreezerTemperatureValue", value, function(result){
            console.log("result", result);
        });

    };

    var setRefrigeratorIcePlusStatusValue = function(value){
        var proxyObj = bus.getProxyObject('Refrigerator');

        proxyObj.Set(
            "RefrigeratorIcePlusStatusValue", 
            value,
            function(result){
                console.log("result", result);
            }
        );
    }

    $scope.toggleRefrigeratorIcePlusStatusValue = function(){
        var param = 2;
        if(!$scope.Refrigerator.RefrigeratorIcePlusStatusValue){
            param = 1;
        }
        setRefrigeratorIcePlusStatusValue(param);

    };

    $scope.Refrigerator = {};
    $scope.onRefrigeratorClicked = function(){
        console.log("onRefrigeratorClicked");
        goMenu('fridge');
    };

    // END Refrigerator


    $scope.Washer = {}; 

    $scope.toggleWrinkleCare = function(){
        var proxyObj = bus.getProxyObject('WashingMachine');

        proxyObj.Set(
            "WashingMachineWrinkleCareStatus", 
            !$scope.WashingMachineWrinkleCareStatus, 
            function(result){
            console.log("result", result);
        });

    };

    var setWasherStatus = function(value, callback){
        var proxyObj = bus.getProxyObject('WashingMachine');

        proxyObj.Set(
            "WashingMachineState", 
            value, 
            callback
        );        

    };

    $scope.onWasherStopClicked = function(){
        setWasherStatus(0, function(err, result){
            console.log("washer stop clicked");
        });
    };

    $scope.onWasherClicked = function(){
        console.log("onWasherClicked");
        goMenu('cleaner');
    };

    $scope.Oven = {};

    $scope.onOvenClicked = function(){
        console.log("onOvenClicked");
        goMenu('oven');
    };

    $scope.PT_AIR = {};

    $scope.toggleAirCleanerStatus = function(){
        var proxyObj = bus.getProxyObject('SmartPlug_Aircleaner');
        if(!$scope.PT_AIR.State){
            proxyObj.Exec("On", function(result){ console.log("On Execute"); })
        }else{
            proxyObj.Exec("Off", function(result){ console.log("Off Execute"); })
        }
    };

    $scope.onAircleanerClicked = function(){
        console.log("onAircleanerClicked");
        goMenu('air');
    };

    var printDateString = function(value){
        return '%02d:%02d:%02d'.sprintf(value[1][0], value[1][1], value[1][2]);
    };


    $scope.onLogoClick();
}]);
