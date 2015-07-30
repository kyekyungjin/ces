function change_houseworkOn()
{
	// Housework 모드 on 시의 처리 로직
}

function change_houseworkOff()
{
	// Housework 모드 off 시의 처리 로직
}

function change_sleepingOn()
{
	// Sleeping 모드 on 시의 처리 로직
}

function change_sleepingOff()
{
	// Sleeping 모드 off 시의 처리 로직
}

function load_energy()
{
	// 에너지 보니터링 출력을 위한 처리 로직
}

function load_deviceInfo()
{
	// 디바이스에 현재 상태값을 받아오는 로직

	for(var i = 0; i < deviceInfo.length; i++)
	{
		deviceType = deviceInfo[i].name;

		if(deviceType == "에어컨")
		{
			$("#airconButton").attr("class","on");
			deviceSwitch('aircon', 'on');
			// 받아온 현재 상태값을 표시하기 위한 로직
		}
		else if(deviceType == "세탁기")
		{
			$("#washeButton").attr("class","on");
			deviceSwitch('washer', 'on');
			// 받아온 현재 상태값을 표시하기 위한 로직
		}
		else if(deviceType == "건조기")
		{
			$("#washeButton").attr("class","on");
			deviceSwitch('dryer', 'on');
			// 받아온 현재 상태값을 표시하기 위한 로직
		}
		else if(deviceType == "냉장고")
		{
			$("#refrigeratorButton").attr("class","on");
			// 받아온 현재 상태값을 표시하기 위한 로직
		}
		else if(deviceType == "청소기")
		{
			$("#vacuumButton").attr("class","on");
			// 받아온 현재 상태값을 표시하기 위한 로직
		}
		else if(deviceType == "오븐")
		{
			$("#ovenButton").attr("class","on");
			// 받아온 현재 상태값을 표시하기 위한 로직
		}
		else if(deviceType == "stand light")
		{
			$("#standlightButton").attr("class","on");
			deviceSwitch('stand', 'on');
			// 받아온 현재 상태값을 표시하기 위한 로직
		}
		else if(deviceType == "down light")
		{
			$("#downlightButton").attr("class","on");
			deviceSwitch('down', 'on');
			// 받아온 현재 상태값을 표시하기 위한 로직
		}
		else if(deviceType == "surface mount light")
		{
			$("#mountlightButton").attr("class","on");
			deviceSwitch('surface', 'on');
			// 받아온 현재 상태값을 표시하기 위한 로직
		}
		else if(deviceType == "공기청정기")
		{
			$("#aircleanerButton").attr("class","on");
			deviceSwitch('air', 'on');
			// 받아온 현재 상태값을 표시하기 위한 로직
		}
		else if(deviceType == "plugin")
		{
			pluginDevice = deviceInfo[i].device;
			if(pluginDevice == "에어컨")
			{
				$('#airconButton').append("<span class='plugin'></span>");
				// 받아온 현재 상태값을 표시하기 위한 로직
			}
			else if(pluginDevice == "세탁기")
			{
				$("#washeButton").append("<span class='plugin'></span>");
				// 받아온 현재 상태값을 표시하기 위한 로직
			}
			else if(pluginDevice == "건조기")
			{
				$("#washeButton").append("<span class='plugin'></span>");
				// 받아온 현재 상태값을 표시하기 위한 로직
			}
			else if(pluginDevice == "냉장고")
			{
				$("#refrigeratorButton").append("<span class='plugin'></span>");
				// 받아온 현재 상태값을 표시하기 위한 로직
			}
			else if(pluginDevice == "청소기")
			{
				$("#vacuumButton").append("<span class='plugin'></span>");
				// 받아온 현재 상태값을 표시하기 위한 로직
			}
			else if(pluginDevice == "오븐")
			{
				$("#ovenButton").append("<span class='plugin'></span>");
				// 받아온 현재 상태값을 표시하기 위한 로직
			}
			else if(pluginDevice == "stand light")
			{
				$("#standlightButton").append("<span class='plugin'></span>");
				// 받아온 현재 상태값을 표시하기 위한 로직
			}
			else if(pluginDevice == "down light")
			{
				$("#downlightButton").append("<span class='plugin'></span>");
				// 받아온 현재 상태값을 표시하기 위한 로직
			}
			else if(pluginDevice == "surface mount light")
			{
				$("#mountlightButton").append("<span class='plugin'></span>");
				// 받아온 현재 상태값을 표시하기 위한 로직
			}
			else if(pluginDevice == "공기청정기")
			{
				$("#aircleanerButton").append("<span class='plugin'></span>");
				// 받아온 현재 상태값을 표시하기 위한 로직
			}
		}
	}
}

/* 디바이스별로 구분할 필요는 없을것 같기에 일단은 주석처리
function load_airconInfo()
{
	// 에어컨에 현재 상태값을 받아오는 로직
}

function load_washerInfo()
{
	// 세탁기에 현재 상태값을 받아오는 로직
}

function load_dryerInfo()
{
	// 건조기에 현재 상태값을 받아오는 로직
}

function load_refrigeratorInfo()
{
	// 냉장고에 현재 상태값을 받아오는 로직
}

function load_vacuumInfo()
{
	// 청소기에 현재 상태값을 받아오는 로직
}

function load_ovenInfo()
{
	// 오븐에 현재 상태값을 받아오는 로직
}

function load_standlightInfo()
{
	// stand light에 현재 상태값을 받아오는 로직
}

function load_standlightInfo()
{
	// down light에 현재 상태값을 받아오는 로직
}

function load_downlightInfo()
{
	// down light에 현재 상태값을 받아오는 로직
}

function load_mountrightInfo()
{
	// surface mount light에 현재 상태값을 받아오는 로직
}

function load_aircleanerInfo()
{
	// 공기정청기에 현재 상태값을 받아오는 로직
}

function load_plugin()
{
	// 플러그인에 현재 상태값을 받아오는 로직
}
*/

function save_airconInfo(_type, _action)
{
	if(_type == "switch")
	{
		if(_action == "on")
		{
			$("#airconButton").attr("class","on");
			deviceSwitch('aircon', 'on');
			// allseen 에어컨 switch on 설정 로직
		}
		else
		{
			$("#airconButton").attr("class","off");
			deviceSwitch('aircon', 'off');
			// allseen 에어컨 switch off 설정 로직
		}
	}
	else if(_type == "unitchange")
	{
		changeUnit(_action);
		// 섭씨 or 화씨 변경 로직
	}
	else if(_type == "unitcontrol")
	{
		var nowTempText = $("#aircon_temp").text();
		var tempText = nowTempText.replace("℉","");
		var nowTemp = parseInt(tempText);
		if(_action == "up")
		{
			var nextTemp = nowTemp + 1;
		}
		else
		{
			var nextTemp = nowTemp - 1;
		}
		$("#aircon_temp").text(nextTemp+"℉");
		// 섭씨 or 화씨 변경 로직
		// allseen 에어컨 온도 설정 로직
	}
	else if(_type == "mode")
	{
		var nowMode = $("#aircon_opMode").text();
		if(_action == "up")
		{
			if(nowMode == "Mode")
			{
				var nextMode = "Cool";
			}
			else if(nowMode == "Cool")
			{
				var nextMode = "Dry";
			}
			else if(nowMode == "Dry")
			{
				var nextMode = "Heat";
			}
			else if(nowMode == "Heat")
			{
				var nextMode = "Aco";
			}
			else if(nowMode == "Aco")
			{
				var nextMode = "Fan";
			}
			else if(nowMode == "Fan")
			{
				var nextMode = "Cool";
			}
		}
		else
		{
			if(nowMode == "Mode")
			{
				var nextMode = "Cool";
			}
			else if(nowMode == "Cool")
			{
				var nextMode = "Fan";
			}
			else if(nowMode == "Dry")
			{
				var nextMode = "Cool";
			}
			else if(nowMode == "Heat")
			{
				var nextMode = "Dry";
			}
			else if(nowMode == "Aco")
			{
				var nextMode = "Heat";
			}
			else if(nowMode == "Fan")
			{
				var nextMode = "Aco";
			}
		}
		$("#aircon_opMode").text(nextMode);
		// allseen 에어컨 모드 설정 로직
	}
	else if(_type == "airclean")
	{
		if(_action == "on")
		{
			$("div#optSwitch span.on").css("display", "block");
			$("div#optSwitch span.off").css("display", "none");
			// allseen 에어컨 air clean on 설정 로직
		}
		else
		{
			$("div#optSwitch span.on").css("display", "none");
			$("div#optSwitch span.off").css("display", "block");
			// allseen 에어컨 air clean off 설정 로직
		}
	}
	else if(_type == "fanspeed")
	{
		var nowSpeed = $("#aircon_fanMode").text();
		if(_action == "up")
		{
			if(nowSpeed == "Mode")
			{
				var nextSpeed = "Auto";
			}
			else if(nowSpeed == "High")
			{
				var nextSpeed = "Auto";
			}
			else if(nowSpeed == "Mid")
			{
				var nextSpeed = "High";
			}
			else if(nowSpeed == "Low")
			{
				var nextSpeed = "Mid";
			}
			else if(nowSpeed == "Auto")
			{
				var nextSpeed = "Low";
			}
		}
		else
		{
			if(nowSpeed == "Mode")
			{
				var nextSpeed = "Auto";
			}
			else if(nowSpeed == "High")
			{
				var nextSpeed = "Mid";
			}
			else if(nowSpeed == "Mid")
			{
				var nextSpeed = "Low";
			}
			else if(nowSpeed == "Low")
			{
				var nextSpeed = "Auto";
			}
			else if(nowSpeed == "Auto")
			{
				var nextSpeed = "High";
			}
		}
		$("#aircon_fanMode").text(nextSpeed);
		// allseen 에어컨 모드 설정 로직
	}
	else if(_type == "fanvertical")
	{
		if(_action == "on")
		{
			$("div#fanSwitch span.on").css("display", "block");
			$("div#fanSwitch span.off").css("display", "none");
			// allseen 에어컨 air clean vertical on 설정 로직
		}
		else
		{
			$("div#fanSwitch span.on").css("display", "none");
			$("div#fanSwitch span.off").css("display", "block");
			// allseen 에어컨 air clean vertical off 설정 로직
		}
	}
	else if(_type == "fanhorizontal")
	{
		if(_action == "on")
		{
			$("div#directionSwitch span.on").css("display", "block");
			$("div#directionSwitch span.off").css("display", "none");
			// allseen 에어컨 air clean horizontal on 설정 로직
		}
		else
		{
			$("div#directionSwitch span.on").css("display", "none");
			$("div#directionSwitch span.off").css("display", "block");
			// allseen 에어컨 air clean horizontal off 설정 로직
		}
	}
	else if(_type == "reserve")
	{
		if(_action == "on")
		{
			$("div#reserveSwitch span.on").css("display", "block");
			$("div#reserveSwitch span.off").css("display", "none");
			// allseen 에어컨 air clean reserve on 설정 로직
		}
		else
		{
			$("div#reserveSwitch span.on").css("display", "none");
			$("div#reserveSwitch span.off").css("display", "block");
			// allseen 에어컨 air clean reserve off 설정 로직
		}
	}
	else if(_type == "hour")
	{
		var nowHour = parseInt($("#aircon_hour").text());
		if(_action == "up")
		{
			nextHour = nowHour + 1;
			if(nextHour == 24)
			{
				nextHour = 0;
			}
		}
		else
		{
			nextHour = nowHour - 1;
			if(nextHour == -1)
			{
				nextHour = 23;
			}
		}
		if(nextHour < 10)
		{
			var hourText = "0"+nextHour;
		}
		else
		{
			var hourText = nextHour;
		}
		$("#aircon_hour").text(hourText);
		// allseen 에어컨 Reservation 설정 로직
	}
	else if(_type == "minute")
	{
		var nowMinute = parseInt($("#aircon_min").text());
		if(_action == "up")
		{
			nextMinute = nowMinute + 1;
			if(nextMinute == 60)
			{
				nextMinute = 0;
			}
		}
		else
		{
			nextMinute = nowMinute - 1;
			if(nextMinute == -1)
			{
				nextMinute = 59;
			}
		}
		if(nextMinute < 10)
		{
			var minuteText = "0"+nextMinute;
		}
		else
		{
			var minuteText = nextMinute;
		}
		$("#aircon_min").text(minuteText);
		// allseen 에어컨 Reservation 설정 로직
	}
}

function save_washerInfo(_type, _action)
{
	if(_type == "switch")
	{
		if(_action == "off")
		{
			$("#washerButton").attr("class","off");
			deviceSwitch('washer', 'off');
			// allseen washer switch off 설정 로직
		}
		else
		{
			$("#washerButton").attr("class","on");
			deviceSwitch('washer', 'on');
			// allseen washer switch on 설정 로직
		}
	}
	else if(_type == "remote")
	{
		if(_action == "on")
		{
			document.main.washer_remote.value = "on";
			deviceRemote('washer', 'on');
			// allseen washer switch off 설정 로직
		}
		else
		{
			document.main.washer_remote.value = "off";
			deviceRemote('washer', 'off');
			// allseen washer switch on 설정 로직
		}
	}
	else if(_type == "course")
	{
		if(_action == "on")
		{
			course("on");
			// allseen washer course start 설정 로직
		}
		else
		{
			course("off");
			// allseen washer course stop 설정 로직
		}
	}
	else if(_type == "freshswitch")
	{
		if(_action == "on")
		{
			$("div#freshSwitch span.on").css("display", "block");
			$("div#freshSwitch span.off").css("display", "none");
			// allseen washer freshSwitch on 설정 로직
		}
		else
		{
			$("div#freshSwitch span.on").css("display", "none");
			$("div#freshSwitch span.off").css("display", "block");
			// allseen washer freshSwitch off 설정 로직
		}
	}
	else if(_type == "hour")
	{
		var nowHour = parseInt($("#washer_hour").text());
		if(_action == "up")
		{
			nextHour = nowHour + 1;
			if(nextHour == 24)
			{
				nextHour = 0;
			}
		}
		else
		{
			nextHour = nowHour - 1;
			if(nextHour == -1)
			{
				nextHour = 23;
			}
		}
		if(nextHour < 10)
		{
			var hourText = "0"+nextHour;
		}
		else
		{
			var hourText = nextHour;
		}
		$("#washer_hour").text(hourText);
	}
	else if(_type == "minute")
	{
		var nowMinute = parseInt($("#washer_min").text());
		if(_action == "up")
		{
			nextMinute = nowMinute + 1;
			if(nextMinute == 60)
			{
				nextMinute = 0;
			}
		}
		else
		{
			nextMinute = nowMinute - 1;
			if(nextMinute == -1)
			{
				nextMinute = 59;
			}
		}
		if(nextMinute < 10)
		{
			var minuteText = "0"+nextMinute;
		}
		else
		{
			var minuteText = nextMinute;
		}
		$("#washer_min").text(minuteText);
	}
	else if(_type == "delayswitch")
	{
		if(_action == "on")
		{
			$("div#delaySwitch span.on").css("display", "block");
			$("div#delaySwitch span.off").css("display", "none");
			// allseen washer delaySwitch on 설정 로직
		}
		else
		{
			$("div#delaySwitch span.on").css("display", "none");
			$("div#delaySwitch span.off").css("display", "block");
			// allseen washer delaySwitch off 설정 로직
		}
	}
}

function save_dryerInfo(_type, _action)
{
	if(_type == "switch")
	{
		if(_action == "off")
		{
			$("#dryerButton").attr("class","off");
			deviceSwitch('dryer', 'off');
			// allseen washer switch off 설정 로직
		}
		else
		{
			$("#dryerButton").attr("class","on");
			deviceSwitch('dryer', 'on');
			// allseen washer switch on 설정 로직
		}
	}
	else if(_type == "remote")
	{
		if(_action == "on")
		{
			document.main.dryer_remote.value = "on";
			//$("#dryer_remote").removeClass("inactive");
			deviceRemote('dryer', 'on');
			// allseen washer switch off 설정 로직
		}
		else
		{
			document.main.dryer_remote.value = "off";
			//$("#dryer_remote").addClass("inactive");
			deviceRemote('dryer', 'off');
			// allseen washer switch on 설정 로직
		}
	}
}

function save_refrigeratorInfo(_type, _action)
{
	// 냉장고에 현재 상태값을 받아오는 로직
}

function save_vacuumInfo(_type, _action)
{
	if(_type == "mode")
	{
		var nowMode = $("#vacuum_mode").text();
		if(_action == "up")
		{
			if(nowMode == "Mode")
			{
				var nextMode = "zigzag";
			}
			else if(nowMode == "zigzag")
			{
				var nextMode = "spot";
			}
			else if(nowMode == "spot")
			{
				var nextMode = "cell by cell";
			}
			else if(nowMode == "cell by cell")
			{
				var nextMode = "zigzag";
			}
		}
		else
		{
			if(nowMode == "Mode")
			{
				var nextMode = "zigzag";
			}
			else if(nowMode == "zigzag")
			{
				var nextMode = "cell by cell";
			}
			else if(nowMode == "spot")
			{
				var nextMode = "zigzag";
			}
			else if(nowMode == "cell by cell")
			{
				var nextMode = "spot";
			}
		}
		$("#vacuum_mode").text(nextMode);
		// allseen 청소기 모드 설정 로직
	}
	else if(_type == "cleanswitch")
	{
		if(_action == "on")
		{
			$("div#cleanSwitch span.on").css("display", "block");
			$("div#cleanSwitch span.off").css("display", "none");
			// allseen 청소기 on 설정 로직
		}
		else
		{
			$("div#cleanSwitch span.on").css("display", "none");
			$("div#cleanSwitch span.off").css("display", "block");
			// allseen 청소기 off 설정 로직
		}
	}
	else if(_type == "cleanturbo")
	{
		if(_action == "on")
		{
			$("div#turboSwitch span.on").css("display", "block");
			$("div#turboSwitch span.off").css("display", "none");
			// allseen 청소기 turbo on 설정 로직
		}
		else
		{
			$("div#turboSwitch span.on").css("display", "none");
			$("div#turboSwitch span.off").css("display", "block");
			// allseen 청소기 turbo off 설정 로직
		}
	}
}

function save_ovenInfo(_type, _action)
{
	// 오븐에 현재 상태값을 받아오는 로직
}

function save_standlightInfo(_type, _action)
{
	// stand light에 현재 상태값을 받아오는 로직
}

function save_standlightInfo(_type, _action)
{
	// down light에 현재 상태값을 받아오는 로직
}

function save_downlightInfo(_type, _action)
{
	// down light에 현재 상태값을 받아오는 로직
}

function save_mountrightInfo(_type, _action)
{
	// surface mount light에 현재 상태값을 받아오는 로직
}

function save_aircleanerInfo(_type, _action)
{
	// 공기정청기에 현재 상태값을 받아오는 로직
}

function save_plugin(_type, _action)
{
	// 플러그인에 현재 상태값을 받아오는 로직
}
