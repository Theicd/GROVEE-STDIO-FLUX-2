@echo off
setlocal EnableExtensions
chcp 65001 >nul 2>&1

set "PORT=5180"
set "HOST=127.0.0.1"
set "URL=http://%HOST%:%PORT%/"

cd /d "%~dp0"

echo.
echo ========================================
echo   GROVEE STDIO — Local launcher
echo ========================================
echo.

echo [1/4] Freeing port %PORT% if in use...
call "%~dp0stop.bat"
echo.

if not exist "node_modules\" (
  echo [2/4] node_modules missing — running npm install...
  call npm install
  if errorlevel 1 (
    echo ERROR: npm install failed.
    pause
    exit /b 1
  )
) else (
  echo [2/4] Dependencies OK.
)
echo.

echo [3/4] Starting dev server on %URL%
echo        Press Ctrl+C to stop.
echo.

rem Open browser in a separate minimized window after Vite has time to bind.
rem Avoid start \"\" — it can print "Access is denied" on some Windows setups.
echo [4/4] Browser will open automatically in a few seconds...
start /min cmd /c "ping -n 5 127.0.0.1>nul & (explorer "%URL%" 2>nul || start "" "%URL%" 2>nul) & exit /b 0"
echo.

npm run dev -- --host %HOST% --port %PORT%
if errorlevel 1 (
  echo.
  echo ERROR: dev server exited with an error.
  pause
  exit /b 1
)

endlocal
