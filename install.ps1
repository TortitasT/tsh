$INSTALL_DIR="${Home}\.tsh\bin"
# $DOWNLOAD_URL="https://github.com/TortitasT/tsh/releases/download/latest/tsh-windows-amd64.exe"
# TODO: Make this work

# Create the installation directory if it doesn't exist
if (!(Test-Path $INSTALL_DIR)) {
    New-Item -ItemType Directory -Path $INSTALL_DIR
}

# Compile
deno.exe compile --allow-all .\main.ts

# Move to installation directory
Move-Item -Force .\tsh.exe $INSTALL_DIR

# Add the installation directory to the PATH
$env:PATH += ";$INSTALL_DIR"

# Add the installation directory to the PATH permanently
# TODO: Check if line already on profile
if (!(Test-Path $profile)) {
    New-Item -ItemType File -Path $profile
}

$content = '$env:PATH += "' + ";${INSTALL_DIR}" + '"'
Add-Content $profile $content

# Output the installation directory
Write-Output "tsh was installed to $INSTALL_DIR"

# Output the PATH
Write-Output "tsh was added to the PATH"
