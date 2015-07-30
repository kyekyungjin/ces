var controlInterfaceList = {
    "Light" : {
        "DimLevelGroupStandProperty" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/DimLevelContainer/DimLevelGroupStandProperty",
            signature : "q",
            description : "0 ~ 100 (1씩 증가)",
        },
        "DimLevelGroupDownProperty" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/DimLevelContainer/DimLevelGroupDownProperty",
            signature : "q",
            description : "0 ~ 100 (1씩 증가)",
        },
        "DimLevelGroupSurfaceMountProperty" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/DimLevelContainer/DimLevelGroupSurfaceMountProperty",
            signature : "q",
            description : "0 ~ 100 (1씩 증가)",
        },
        "TurnOnOffGroupStandDialog" : {
            interface_name : "org.alljoyn.ControlPanel.Dialog",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/TurnOnOffLightsContainer/TurnOnOffGroupStandAction/TurnOnOffGroupStandDialog",
            signature : "",
            description : "",
        },
        "TurnOnOffGroupDownDialog" : {
            interface_name : "org.alljoyn.ControlPanel.Dialog",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/TurnOnOffLightsContainer/TurnOnOffGroupDownAction/TurnOnOffGroupDownDialog",
            signature : "",
            description : "",
        },
        "TurnOnOffGroupSurfaceMountDialog" : {
            interface_name : "org.alljoyn.ControlPanel.Dialog",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/TurnOnOffLightsContainer/TurnOnOffGroupSurfaceMountAction/TurnOnOffGroupSurfaceMountDialog",
            signature : "",
            description : "",
        },
        "TurnOnOffAllLightsDialog" : {
            interface_name : "org.alljoyn.ControlPanel.Dialog",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/TurnOnOffLightsContainer/TurnOnOffAllLightsAction/TurnOnOffAllLightsDialog",
            signature : "",
            description : "",
        },
        "ModeHouseworkStandAction" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/ModeButtonContainer/ModeButtonStandContainer/ModeHouseworkStandAction",
            signature : "",
            description : "",
        },
        "ModeSleepStandAction" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/ModeButtonContainer/ModeButtonStandContainer/ModeSleepStandAction",
            signature : "",
            description : "",
        },
        "ModeRestStandAction" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/ModeButtonContainer/ModeButtonStandContainer/ModeRestStandAction",
            signature : "",
            description : "",
        },
        "ModeHomeStandAction" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/ModeButtonContainer/ModeButtonStandContainer/ModeHomeStandAction",
            signature : "",
            description : "",
        },
        "ModeAwayStandAction" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/ModeButtonContainer/ModeButtonStandContainer/ModeAwayStandAction",
            signature : "",
            description : "",
        },
        "ModeHouseworkDownAction" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/ModeButtonContainer/ModeButtonDownContainer/ModeHouseworkDownAction",
            signature : "",
            description : "",
        },
        "ModeSleepDownAction" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/ModeButtonContainer/ModeButtonDownContainer/ModeSleepDownAction",
            signature : "",
            description : "",
        },
        "ModeRestDownAction" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/ModeButtonContainer/ModeButtonDownContainer/ModeRestDownAction",
            signature : "",
            description : "",
        },
        "ModeHomeDownAction" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/ModeButtonContainer/ModeButtonDownContainer/ModeHomeDownAction",
            signature : "",
            description : "",
        },
        "ModeAwayDownAction" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/ModeButtonContainer/ModeButtonDownContainer/ModeAwayDownAction",
            signature : "",
            description : "",
        },
        "ModeHouseworkSurfaceMountAction" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/ModeButtonContainer/ModeButtonSurfaceMountContainer/ModeHouseworkSurfaceMountAction",
            signature : "",
            description : "",
        },
        "ModeSleepSurfaceMountAction" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/ModeButtonContainer/ModeButtonSurfaceMountContainer/ModeSleepSurfaceMountAction",
            signature : "",
            description : "",
        },
        "ModeRestSurfaceMountAction" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/ModeButtonContainer/ModeButtonSurfaceMountContainer/ModeRestSurfaceMountAction",
            signature : "",
            description : "",
        },
        "ModeHomeSurfaceMountAction" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/ModeButtonContainer/ModeButtonSurfaceMountContainer/ModeHomeSurfaceMountAction",
            signature : "",
            description : "",
        },        
        "ModeAwaySurfaceMountAction" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/ControlPanelDevice/RootContainer/en/ModeButtonContainer/ModeButtonSurfaceMountContainer/ModeAwaySurfaceMountAction",
            signature : "",
            description : "",
        },             
    },
    "WashingMachine" : {
        "WashingMachineState" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGWashingMachineTCL/WashingMachineContainer/en/MonitoringContainer/WashingMachineState",
            signature : "q",
            description : "0(Off), 5(Initial), 6(Pause), 8(WiFi Setting), 10(Reserve), 20(Detecting), 21(Add Drain), 22(Load Display), 23(Washing), 30(Rinsing), 40(Spining), 60(Finished), 61(Tumbling)",
        },
        "WashingMachineRemainingTime" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGWashingMachineTCL/WashingMachineContainer/en/MonitoringContainer/WashingMachineRemainingTime",
            signature : "q(qqq)",
            description : "",
        },
        "WashingMachineReserveTime" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGWashingMachineTCL/WashingMachineContainer/en/MonitoringContainer/WashingMachineReserveTime",
            signature : "q(qqq)",
            description : "",
        },
        "WashingMachineTotalTime" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGWashingMachineTCL/WashingMachineContainer/en/MonitoringContainer/WashingMachineTotalTime",
            signature : "q(qqq)",
            description : "",
        },
        "WashingMachineCourse" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGWashingMachineTCL/WashingMachineContainer/en/MonitoringContainer/WashingMachineCourse",
            signature : "q",
            description : "1(Tub Clean), 2(Bright Whites), 3(Allergiene), 4(Sanitary), 5(Bedding), 6(Heavy Duty), 7(Normal), 8(Jumbo Wash), 9(Perm.Press), 10(Delicates), 11(Towels), 12(Speed Wash), 13(Drain+Spin), 14(Download)",
        },
        "WashingMachineRemainingRinsingCount" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGWashingMachineTCL/WashingMachineContainer/en/MonitoringContainer/WashingMachineRemainingRinsingCount",
            signature : "q",
            description : "",
        },
        "WashingMachineExtraRinsingCount" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGWashingMachineTCL/WashingMachineContainer/en/MonitoringContainer/WashingMachineExtraRinsingCount",
            signature : "q",
            description : "",
        },
        "WashingMachineSpinning" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGWashingMachineTCL/WashingMachineContainer/en/MonitoringContainer/WashingMachineSpinning",
            signature : "q",
            description : "0(None), 1(No Spin), 2(Low), 3(Medium), 4(High), 5(Extra High)",
        },
        "WashingMachineDrying" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGWashingMachineTCL/WashingMachineContainer/en/MonitoringContainer/WashingMachineDrying",
            signature : "q",
            description : "0(None), 1(Low), 2(Iron), 3(Normal), 4(High), 5(30 min), 6(60 min), 7(90 min), 8(120 min), 9(150 min)",
        },
        "WashingMachineWaterTemp" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGWashingMachineTCL/WashingMachineContainer/en/MonitoringContainer/WashingMachineWaterTemp",
            signature : "q",
            description : "0(N/A), 1(Tab Cold/Cold), 2(Cold/Cold), 3(Warm/Cold), 4(Hot/Cold), 5(Extra Hot/Cold)",
        },
        "WashingMachineWrinkleCareStatus" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGWashingMachineTCL/WashingMachineContainer/en/MonitoringContainer/WashingMachineWrinkleCareStatus",
            signature : "q",
            description : "0(Off), 1(On)",
        },
        
    },
    "SmartPlug" : {
        "On" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/SmartPlug/rootContainer/en/ControlsContainer/On",
            signature : "",
            description : ""
        },
        "Off" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/SmartPlug/rootContainer/en/ControlsContainer/Off",
            signature : "",
            description : ""
        },
        "GetProperties" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/SmartPlug/rootContainer/en/MeasureContainer/GetProperties",
            signature : "",
            description : ""
        },
        "State" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/SmartPlug/rootContainer/en/State",
            signature : "s",
            description : "Switch On / Switch Off"
        },        
        "VoltageProperty" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/SmartPlug/rootContainer/en/MeasureContainer/VoltageProperty",
            signature : "s",
            description : ""
        },
        "CurrentProperty" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/SmartPlug/rootContainer/en/MeasureContainer/CurrentProperty",
            signature : "s",
            description : ""
        },
        "FrequencyProperty" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/SmartPlug/rootContainer/en/MeasureContainer/FrequencyProperty",
            signature : "s",
            description : ""
        },
        "PowerProperty" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/SmartPlug/rootContainer/en/MeasureContainer/PowerProperty",
            signature : "s",
            description : ""
        },
        "AccumulateEnergyProperty" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/SmartPlug/rootContainer/en/MeasureContainer/AccumulateEnergyProperty",
            signature : "s",
            description : ""
        },
        "PowerFactorProperty" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/SmartPlug/rootContainer/en/MeasureContainer/PowerFactorProperty",
            signature : "s",
            description : ""
        },

    },
    "controlPanelVirtual"  : {
        "heatProperty" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/MyDevice/rootContainer/en/heatProperty",
            signature : "q",
            description : ""
        },    
    },
    "Roboking" : {
        "robotCleanerStartAction" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/RobotCleaner/rootContainer/en/robotCleanerStartAction",
            signature : "",
            description : ""
        },    
        "robotCleanerHomingAction" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/RobotCleaner/rootContainer/en/robotCleanerHomingAction",
            signature : "",
            description : ""
        },    
        "robotCleanerStopAction" : {
            interface_name : "org.alljoyn.ControlPanel.Dialog",
            object_path : "/ControlPanel/RobotCleaner/rootContainer/en/robotCleanerStopAction/robotCleanerStopConfirm",
            signature : "",
            description : ""
        },    
        "CleanModeProperty" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/RobotCleaner/rootContainer/en/CleanModeProperty",
            signature : "q",
            description : " 200(Zigzag), 300(CellByCell), 400(Spot)"
        },    
        "BatteryLevelProperty" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/RobotCleaner/rootContainer/en/BatteryLevelProperty",
            signature : "s",
            description : ""
        },    
        "CleanOperationStatusProperty" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/RobotCleaner/rootContainer/en/CleanOperationStatusProperty",
            signature : "q",
            description : ""            
        }

    },
    "Refrigerator" : {
       "RefrigeratorFridgeTemperatureValue" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGRefrigeratorTCL/RefrigeratorContainer/en/MonitoringContainer/RefrigeratorFridgeTemperatureValue",
            signature : "q",
            description : ""
        },
        "RefrigeratorFreezerTemperatureValue" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGRefrigeratorTCL/RefrigeratorContainer/en/MonitoringContainer/RefrigeratorFreezerTemperatureValue",
            signature : "q",
            description : ""
        },
        "RefrigeratorIcePlusStatusValue" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGRefrigeratorTCL/RefrigeratorContainer/en/MonitoringContainer/RefrigeratorIcePlusStatusValue",
            signature : "q",
            description : ""
        },
        "RefrigeratorFreshAirStatusValue" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGRefrigeratorTCL/RefrigeratorContainer/en/MonitoringContainer/RefrigeratorFreshAirStatusValue",
            signature : "q",
            description : ""
        },
        "RefrigeratorSmartSavingStatusValue" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGRefrigeratorTCL/RefrigeratorContainer/en/MonitoringContainer/RefrigeratorSmartSavingStatusValue",
            signature : "q",
            description : ""
        },
        "RefrigeratorWaterFilterStatusValue" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGRefrigeratorTCL/RefrigeratorContainer/en/MonitoringContainer/RefrigeratorWaterFilterStatusValue",
            signature : "q",
            description : ""
        },
        "RefrigeratorDoorOpenStatusValue" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGRefrigeratorTCL/RefrigeratorContainer/en/MonitoringContainer/RefrigeratorDoorOpenStatusValue",
            signature : "q",
            description : ""
        },
        "startDiagnosis" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/LGRefrigeratorTCL/RefrigeratorContainer/en/ControlContainer/startDiagnosis",
            signature : "",
            description : ""
        },
        "UpdateStatus" : {
            interface_name : "org.alljoyn.ControlPanel.Action",
            object_path : "/ControlPanel/LGRefrigeratorTCL/RefrigeratorContainer/en/ControlContainer/UpdateStatus",
            signature : "",
            description : ""
        },        
    },
    "Oven" : {
       "OvenOperationStatusValue" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGOvenTCL/OvenContainer/en/MonitoringContainer/OvenOperationStatusValue",
            signature : "q",
            description : "0(Ready), 1(PreHeating), 2(Cooking), 3(Complete)"
        },
        "OvenCookMenu" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGOvenTCL/OvenContainer/en/MonitoringContainer/OvenCookMenu",
            signature : "q",
            description : "1(Bake), 3(Conv.Bake), 4(Conv.Roast), 6(Favorite), 7(Broil), 8(Warm), 11(Kids Meal) Set 불가"
        },
        "OvenRemainingTimeValue" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGOvenTCL/OvenContainer/en/MonitoringContainer/OvenRemainingTimeValue",
            signature : "q(qqq)",
            description : "Set 불가"
        },
        "OvenCurrentTemperatureValue" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGOvenTCL/OvenContainer/en/MonitoringContainer/OvenCurrentTemperatureValue",
            signature : "q",
            description : "Set 불가"
        },
        "OvenTargetTemperatureValue" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/LGOvenTCL/OvenContainer/en/MonitoringContainer/OvenTargetTemperatureValue",
            signature : "q",
            description : "Set 불가"
        },
    },
    "Airconditioner" : {
       "power" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/AirConditioner/rootContainer/en/airconSet/power",
            signature : "q",
            description : "1(On), 0(Off)"
        },
        "set_CurrentTemperature" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/AirConditioner/rootContainer/en/set_CurrentTemperature",
            signature : "q",
            description : ""
        },
        "set_temperature" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/AirConditioner/rootContainer/en/set_temperature",
            signature : "q",
            description : "18 ~ 30"
        },
        "mode" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/AirConditioner/rootContainer/en/airconSet2/mode",
            signature : "q",
            description : "0(COOL), 1(DRY), 2(FAN), 4(HEAT), 6(ACO)"
        },
        "windStrength" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/AirConditioner/rootContainer/en/airconSet2/windStrength",
            signature : "q",
            description : "2(LOW), 4(MID), 6(HIGH), 8(AUTO)"
        },
        "airClean" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/AirConditioner/rootContainer/en/airconSet3/airClean",
            signature : "q",
            description : "1(On), 0(Off)"
        },
        "jetMode" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/AirConditioner/rootContainer/en/airconSet3/jetMode",
            signature : "q",
            description : "1(Cooling On), 2(Heating On), 0(Off)"
        },    
        "WindDirHStepProperty" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/AirConditioner/rootContainer/en/airconSet4/WindDirHStepProperty",
            signature : "q",
            description : "0(OFF), 1(1 Step), 2(2 Step), 3(3 Step), 4(4 Step), 5(5 Step), 100(AutoSwing)"
        },
        "WindDirVStepProperty" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/AirConditioner/rootContainer/en/airconSet4/WindDirVStepProperty",
            signature : "q",
            description : "0(OFF), 1(1 Step), 2(2 Step), 3(3 Step), 4(4 Step), 5(5 Step), 6(6 Step), 100(AutoSwing)"
        },
        "OffReservationCheck" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/AirConditioner/rootContainer/en/airconSet5/OffReservationCheck",
            signature : "b",
            description : ""
        },
        "OffReservation" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/AirConditioner/rootContainer/en/OffReservation",
            signature : "q(qqq)",
            description : ""
        },
        "OnReservationCheck" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/AirConditioner/rootContainer/en/airconSet6/OnReservationCheck",
            signature : "b",
            description : ""
        },
        "OnReservation" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/AirConditioner/rootContainer/en/OnReservation",
            signature : "q(qqq)",
            description : ""
        },
        "SleepReservation" : {
            interface_name : "org.alljoyn.ControlPanel.Property",
            object_path : "/ControlPanel/AirConditioner/rootContainer/en/SleepReservation",
            signature : "q",
            description : "0 ~ 24"
        },
    },

}



var ALLJOYN_INTERFACE = [
    {
        name: "org.alljoyn.About",       
        method: [
            { 
                name : "GetAboutData", 
                signature: "s", 
                returnSignature: "a{sv}", 
                argNames: "languageTag,aboutData" 
            },
            { 
                name : "GetObjectDescription", 
                returnSignature: "a(oas)", 
                argNames: "objectDescription" 
            },
        ],                    
        signal: [
            { name: "Announce", signature: "qqa(oas)a{sv}", argNames: "version, port, objectDescription, aboutData" }
        ]
    },
    {
        name: "org.alljoyn.ControlPanel.Property",                    
        property: [
            { name: "Version", signature: "q", access: "read"},
            { name: "States", signature: "u", access: "read"},
            { name: "OptParams", signature: "a{qv}", access: "read"},
            { name: "Value", signature: "v", access: "readwrite"}
        ],
        signal: [
            { name: "ValueChanged", signature: "v", argNames: "newValue" },
            { name: "MetadataChanged" }
        ]
    },
    {
        name: "org.alljoyn.ControlPanel.Action",                    
        property: [
            { name: "Version", signature: "q", access: "read"},
            { name: "States", signature: "u", access: "read"},
            { name: "OptParams", signature: "a{qv}", access: "read"},
        ],
        method: [
            { name: "Exec" },
        ],
        signal: [
          { name: "MetadataChanged" },
        ]
    },    
    {
        name: "org.alljoyn.ControlPanel.Dialog",                    
        property: [
            { name: "Version", signature: "q", access: "read"},
            { name: "States", signature: "u", access: "read"},
            { name: "OptParams", signature: "a{qv}", access: "read"},
            { name: "Message", signature: "s", access: "read"},
            { name: "NumActions", signature: "q", access: "read"},
        ],
        method: [
            { name: "Action1" },
            { name: "Action2" },
            { name: "Action3" },
        ],
        signal: [
          { name: "MetadataChanged" },
        ]
    },    
    {
        name: "org.allseen.Introspectable",                    
        method: [
            { 
                name : "GetDescriptionLanguages", 
                returnSignature: "as", 
                argNames: "languageTags" 
            },
            { 
                name : "IntrospectWithDescription", 
                signature: "s", 
                returnSignature: "s", 
                argNames: "languageTag,data" 
            },
        ],
    }, 



];