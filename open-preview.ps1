Set-Location $PSScriptRoot
Start-Process "http://127.0.0.1:4173"
python -m http.server 4173
