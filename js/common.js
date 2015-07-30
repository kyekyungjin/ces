var onoffCount = 0;
var deviceInfo;
var deviceType = "";
var pluginDevice = "";
var selectMode = "Housework";
var timeout = null;

// on/off
function setBtnOnOff(_srt, isOn)
{
	var inpVal = $("input[name="+_srt+"]").val();

	if (_srt == "ovenPause")
	{
		if (inpVal == "pause")
		{
			$("input[name="+_srt+"]").val("start");
			$("#"+_srt).text("start");
		}
		else
		{
			$("input[name="+_srt+"]").val("pause");
			$("#"+_srt).text("pause");
		}
	}
	else
	{
		if (isOn)
		{
			$("input[name="+_srt+"]").val("off");
			$("#"+_srt).text("off");
		}
		else
		{
			$("input[name="+_srt+"]").val("on");
			$("#"+_srt).text("on");
		}
	}
}


// on/off
function btnOnOff(_srt)
{
	var inpVal = $("input[name="+_srt+"]").val();

	if (_srt == "ovenPause")
	{
		if (inpVal == "pause")
		{
			$("input[name="+_srt+"]").val("start");
			$("#"+_srt).text("start");
		}
		else
		{
			$("input[name="+_srt+"]").val("pause");
			$("#"+_srt).text("pause");
		}
	}
	else
	{
		if (inpVal == "on")
		{
			$("input[name="+_srt+"]").val("off");
			$("#"+_srt).text("off");
		}
		else
		{
			$("input[name="+_srt+"]").val("on");
			$("#"+_srt).text("on");
		}
	}
}

// 단위 변경
function changeUnit(_id)
{
	var unitObj = $("#"+_id).children("a");
	var unit = unitObj.text();
	if (unit == "℉")
	{
		unit = "℃";
	}
	else
	{
		unit = "℉";
	}
	unitObj.text(unit);
	$("span.unit").text(unit);
}

// 세탁기 course start
function course(_action)
{
	if(_action == "on")
	{
		$("#washer_course").html("<a class='dim'>Start</a>");
	}
	else
	{
		$("#washer_course").html("<a onmousedown="+'"save_washerInfo('+"'ourse', '');"+'">Start</a>');
	}
	var frm = document.main;
	if (frm.washer_course.value == "")
	{
		frm.washer_course.value = "start";
		$("#washer_course").html("<a class='dim'>Start</a>");
	}
}

// deep link
function deeplink()
{
	var urlLocation = window.location;
	var url = String(urlLocation).split('index.html');
	var cutLocation = String(urlLocation).split('?');
	var cutCount = cutLocation.length;
	if(cutCount > 1)
	{
		var cutParam = cutLocation[1].split('=');
		if(cutParam[0] == "titleid")
		{
			// document.getElementById("mainMenu").style.display = "none";
			// document.getElementById("Energy").style.display = "none";
			// document.getElementById("Page").style.display = "block";
			//document.getElementById("MainPage").style.display = "block";
			// document.getElementById("Mode").style.display = "block";
			if(cutParam[1] == "01")
			{
				goMenu('aircon');
			}
			else if(cutParam[1] == "02")
			{
				goMenu('cleaner');
			}
			else if(cutParam[1] == "03")
			{
				goMenu('fridge');
			}
			else if(cutParam[1] == "04")
			{
				goMenu('vacuum');
			}
			else if(cutParam[1] == "05")
			{
				goMenu('oven');
			}
			else if(cutParam[1] == "06")
			{
				goMenu('stand');
			}
			else if(cutParam[1] == "07")
			{
				goMenu('down');
			}
			else if(cutParam[1] == "08")
			{
				goMenu('surface');
			}
			else if(cutParam[1] == "09")
			{
				goMenu('air');
			}
		}
	}
}

// device의 스위치 함수
function deviceSwitch(_device, _srt)
{
	var inpObj = $("input[name="+_device+"]");
	var switchObj = $("#"+_device+"Switch").children("span."+_srt);

	inpObj.val(_srt);
	$("#"+_device+"Switch").children("span").css("display", "none");
	switchObj.css("display", "");
	
	if (inpObj.val() == "on")
	{
		$("#"+_device+"Switch").attr("class", "on");
		$("#"+_device+"Dim").css("display", "");
		$("#"+_device+"Control div.mode").removeClass("modeoff");
		$("#"+_device+"Control div.on a").removeClass("dim");
	}
	else
	{
		$("#"+_device+"Switch").attr("class", "off");
		$("#"+_device+"Dim").css("display", "block");
		$("#"+_device+"Control div.mode").addClass("modeoff");
		$("#"+_device+"Control div.on a").addClass("dim");
	}
}

// device의 스위치 함수
function deviceRemote(_device, _srt)
{
	var inpObj = $("input[name="+_device+"]");
	var switchObj = $("#"+_device+"Switch").children("span."+_srt);

	inpObj.val(_srt);
	$("#"+_device+"Switch").children("span").css("display", "none");
	switchObj.css("display", "");
	
	if (inpObj.val() == "on")
	{
		$("#"+_device+"Dim").css("display", "");
		$("#"+_device+"Control div.mode").removeClass("modeoff");
		$("#"+_device+"Control div.on a").removeClass("dim");
		
		if (_device == "washer") {
			$("#washerBtn").html("<a onmousedown=\"save_washerInfo('switch', 'off');\">Off</a>");
		}
		if (_device == "dryer") {
			$("#dryerBtn").html("<a onmousedown=\"save_dryerInfo('switch', 'off');\">Off</a>");
		}
	}
	else
	{
		$("#"+_device+"Dim").css("display", "block");
		$("#"+_device+"Control div.mode").addClass("modeoff");
		$("#"+_device+"Control div.on a").addClass("dim");
		
		if (_device == "washer") {
			$("#washerBtn").html("<a class='inactive'>Off</a>");
		}
		if (_device == "dryer") {
			$("#dryerBtn").html("<a class='inactive'>Off</a>");
		}
	}
}

function goMain()
{
	$("#Control").fadeOut(100);
	setTimeout(function()
	{
		$("#MainPage").fadeIn(100);
	}, 120);

	$("input[name=device]").val("");
	clearTimeout();
}


// device별 제어판 보기
function goMenu(_id)
{
	console.log(_id);
	$("#HandleDim").addClass("none");
	
	var deviceVal;
	var mainObj = $("#MainPage");
	var ctrlObj = $("#Control");
	var deviceObj = $("#"+_id+"Control");
	
	mainObj.fadeOut(100);
	setTimeout(function()
	{
		ctrlObj.fadeIn(100);
	}, 120);

	$("div.control").css("display", "none");
	deviceObj.css("display", "");

	switch(_id)
	{
		case "aircon":
			deviceVal = 0;
			break;
		case "cleaner":
			deviceVal = 1;
			break;
		case "fridge":
			deviceVal = 2;
			break;
		case "vacuum":
			deviceVal = 3;
			break;
		case "oven":
			deviceVal = 4;
			break;
		case "stand":
			deviceVal = 5;
			break;
		case "down":
			deviceVal = 6;
			break;
		case "surface":
			deviceVal = 7;
			break;
		case "air":
			deviceVal = 8;
			break;
	}
	$("input[name=device]").val(deviceVal);
	clearTimeout();
}

// housework 모드의 스위치 함수
function houseSwitch(_srt)
{
	var frm = document.main;
	var switchObj = $("#HouseworkSwitch").children("span."+_srt);

	frm.house.value = _srt;
	$("#HouseworkSwitch").children("span").css("display", "none");
	switchObj.css("display", "");

	if (frm.house.value == "on")
	{
		change_houseworkOn();
		$("#Housework").attr("class", "on");
		$("#Housework").parent("div.Device").attr("class", "Device on");
	}
	else
	{
		change_houseworkOff();
		$("#Housework").attr("class", "off");
		$("#Housework").parent("div.Device").attr("class", "Device off");
	}
}

// 모드 화면에서 모드 변경 함수
function modeChange(_id)
{
	selectMode = _id;
	var modeObj = $("#"+_id).parent("div.Device");
	var switchObj = $("#"+_id+"Switch");

	switchObj.parent("div").children("div").fadeOut(100);
	setTimeout(function()
	{
		switchObj.fadeIn(100);
	}, 110);

	if (_id == "Energy")
	{
		$("#HouseworkSwitch").parent("div").fadeOut(100);
		$("#SleepingSwitch").parent("div").fadeOut(100);
		$("div.Device").fadeOut(100);
		setTimeout(function()
		{
			load_energy(); 
			$("div.Energy").fadeIn(100);
		}, 110);
	}
	else
	{
		$("div.Device").fadeOut(100);
		$("div.Energy").fadeOut(100);
		setTimeout(function()
		{
			$("div.Switch").fadeIn(100);
			modeObj.fadeIn(100);
		}, 110);
	}
	clearTimeout();
}

// menu
function menu(_srt)
{
	switch(_srt)
	{
		case "housemode":
			break;
		case "sleeping":
			break;
		case "switch":
			break;
		case "":
			break;
		case "energy":
			$("#Page").fadeIn(200);
			$("#MainPage").fadeIn(200);
			$("#mainMenu").css("display", "none");
			$("#Mode").fadeIn(200);
			$("#Menu").removeClass("on");
			$("#pBack").css("display", "");
			if ($("#Energy").attr("class") == "Energy move") {
				$("#Energy").removeClass("move");
			}
			break;
	}
}

// close
function menuOff()
{
	$("#HandleDim").removeClass("none");
	$("#pBack").css("display", "none");
	$("#Page").fadeOut(200);
	$("#Control").fadeOut(200);
	$("#mainMenu").removeClass("off");
	setTimeout(function()
	{
		$("#MainPage").css("display", "");
		$("#Mode").css("display", "none");
	}, 210);
}

function menuOn()
{
	$("#HandleDim").removeClass("none");
	$("#Control").fadeOut(200);
	setTimeout(function()
	{
		$("#MainPage").fadeIn(200);
	}, 210);
}

// 매직모션리모컨 포인트 활성화 및 비활성화에 따른 처리
function mouse_onoff_action()
{
	onoffCount++;
	if(onoffCount > 1)
	{
		if(window.NetCastGetMouseOnOff)
		{
			var mouseOnOffStatus = window.NetCastGetMouseOnOff();
			if(mouseOnOffStatus == "off")
			{
				if($("#Page").css("display") == "block")
				{
					//$("#Page").fadeOut(200);
					timeout = setTimeout("mouse_onoff_action_sub();", 30000);
				}
			}
			else
			{
				if($("#Page").css("display") != "block")
				{
					if(timeout != null)
					{
						clearTimeout(timeout);
						timeout = null;
					}
					$("#Page").fadeIn(200);
				}
			}
		}
	}
}

// 매직모션리모컨 포인트 활성화 및 비활성화에 따른 처리
function mouse_onoff_action_sub()
{
	if($("#Page").css("display") == "block")
	{
		$("#Page").fadeOut(200);
	}
	if($("#Menu").attr("class") == "on")
	{
		$("#Menu").removeClass();
		menuOff();
	}
	if($("#Handle").attr("class") == "Handler on")
	{
		$("#Handle").attr("class","Handler");
	}
}

// 기기별 제어판 이동
function moveDevice(_dir)
{
	var device;
	var deviceArr = ["aircon", "cleaner", "fridge", "vacuum", "oven", "stand", "down", "surface", "air"];
	var deviceVal = Number($("input[name=device]").val());

	if (_dir == "prev")
	{
		deviceVal = deviceVal-1;
		if (deviceVal < 0)
		{
			deviceVal = 8;
		}
		device = deviceArr[deviceVal];
	}
	else if (_dir == "next")
	{
		deviceVal = deviceVal+1;
		if (deviceVal == 9)
		{
			deviceVal = 0;
		}
		device = deviceArr[deviceVal];
	}
	$("input[name=device]").val(deviceVal);

	var deviceObj = $("#"+device+"Control");

	$("div.control").fadeOut(100);
	setTimeout(function()
	{
		deviceObj.fadeIn(100);
	}, 120);
	clearTimeout();
}

// 메인 메뉴와 모드 화면 전환 함수
function selMode(_id)
{
	var frm = document.main;
	var obj = $("#"+_id);
	$("div.selMode").fadeOut(100);
	setTimeout(function()
	{
		obj.fadeIn(100);
	}, 120);

	switch(_id)
	{
		case "Mode":
			$("#mainMode").css("display", "none");
			$("#mainList").css("display", "");
			break;
		case "mainMenu":
			$("#mainMode").css("display", "");
			$("#mainList").css("display", "none");
			break;
	}
	clearTimeout();
}

// sleeping 모드의 스위치 함수
function sleepSwitch(_srt)
{
	var frm = document.main;
	var switchObj = $("#SleepingSwitch").children("span."+_srt);

	frm.sleeping.value = _srt;
	$("#SleepingSwitch").children("span").css("display", "none");
	switchObj.css("display", "");

	if (frm.sleeping.value == "on")
	{
		change_sleepingOn();
		$("#Sleeping").attr("class", "on");
		$("#Sleeping").parent("div.Device").attr("class", "Device on");
	}
	else
	{
		change_sleepingOff();
		$("#Sleeping").attr("class", "off");
		$("#Sleeping").parent("div.Device").attr("class", "Device off");
	}
}

function viewMenu()
{
	$("#Mode").fadeOut(200);
	setTimeout(function()
	{
		$("#mainMenu").fadeIn(100);
	}, 210);
	$("#pBack").css("display", "none");
}
