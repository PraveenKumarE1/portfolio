@echo off
echo Starting Praveen Kumar Portfolio Background Production Server...
cd /d "%~dp0"
start /b npx serve -s dist -l 3000
echo Portfolio is running in background at http://localhost:3000/
