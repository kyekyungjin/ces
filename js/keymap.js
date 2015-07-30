function processKeyDown(event)
{
	// 리모콘 back 버튼
	if(event.keyCode == 461)
	{
		if($("#Control").css("display") == "block")
		{
			goMain();
			$("#Page").fadeIn(200);
		}
		else if($("#mainMenu").css("display") != "")
		{
			menuOff();
		}
	}
	/*else if(event.keyCode == 49)
	{
		timeout = setTimeout("mouse_onoff_action_sub();", 3000);
	}*/
}