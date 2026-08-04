$port = 8080
$folder = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $folder
Start-Process "http://localhost:$port/index.html"
python -m http.server $port
