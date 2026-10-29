@echo off
REM Production Start Script for Windows
REM This script builds and starts the application in production mode

echo Building application for production...
call npm run build

if %ERRORLEVEL% EQU 0 (
    echo Build successful! Starting production server...
    call npm start
) else (
    echo Build failed! Please check the errors above.
    exit /b 1
)

