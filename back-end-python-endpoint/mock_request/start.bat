@echo off
REM Activate the virtual environment
call ".\venv\Scripts\activate"

REM Run the Python script with the language argument
python ".\mock_request.py"

REM Deactivate the virtual environment
deactivate

REM Wait for user to press Enter before closing
echo.
echo Press Enter to exit...
pause > nul