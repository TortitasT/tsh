$INSTALL_DIR = "${Home}\.tsh\bin"
$DOWNLOAD_URL = "https://github.com/TortitasT/tsh/releases/latest/download/tsh-windows-amd64.exe"

# Create the installation directory if it doesn't exist
if (!(Test-Path $INSTALL_DIR)) {
    New-Item -ItemType Directory -Path $INSTALL_DIR
}

# Download the latest release
Invoke-WebRequest -Uri $DOWNLOAD_URL -OutFile "$INSTALL_DIR\tsh.exe"

# Add the installation directory to the PATH
$env:Path += ";$INSTALL_DIR"

# Test the installation
tsh version

# Output the installation directory
Write-Output "tsh was installed to $INSTALL_DIR"

# Output the PATH
Write-Output "tsh was added to the PATH"

# Output the version
Write-Output "tsh version: $(tsh version)"