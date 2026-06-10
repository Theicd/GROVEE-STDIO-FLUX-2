@echo off
setlocal EnableExtensions

set "PORT=5180"

echo Stopping processes on port %PORT%...

set "FOUND=0"
for /f "tokens=5" %%P in ('netstat -ano ^| findstr ":%PORT%" ^| findstr LISTENING') do (
  set "FOUND=1"
  echo   Killing PID %%P
  taskkill /PID %%P /F >nul 2>&1
)

if "%FOUND%"=="0" (
  echo   Nothing listening on port %PORT%.
) else (
  echo   Done.
)

endlocal
