Add-Type -AssemblyName Microsoft.VisualBasic
$input = [Microsoft.VisualBasic.Interaction]::InputBox("Ingresa tu NUEVA clave de Supabase (o el string de conexion completo postgresql://...):", "Nueva Clave Supabase", "")

if ($input -and $input.Trim() -ne "") {
    $cleanInput = $input.Trim()
    $envPath = "C:\Users\HP\Desktop\Proyectos\tarot\.env"
    $content = Get-Content $envPath
    
    if ($cleanInput.StartsWith("postgresql://") -or $cleanInput.StartsWith("postgres://")) {
        $dbUrl = $cleanInput
    } else {
        $encodedPass = [System.Uri]::EscapeDataString($cleanInput)
        $dbUrl = "postgresql://postgres:" + $encodedPass + "@db.aopahejobfqboephprdk.supabase.co:5432/postgres?sslmode=require"
    }

    $newContent = $content -replace '^DATABASE_URL=.*', "DATABASE_URL=`"$dbUrl`""
    Set-Content -Path $envPath -Value $newContent
    Write-Host "SUCCESS_UPDATED"
} else {
    Write-Host "CANCELLED"
}
