@echo off
echo ============================================
echo   Liceu Monteiro Lobato - Platform
echo   Desenvolvido por MGR Solutions
echo ============================================
echo.

echo Verificando instalacao do Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERRO: Node.js nao encontrado!
    echo Por favor, instale o Node.js 18+ em https://nodejs.org
    pause
    exit /b 1
)

echo Node.js encontrado!
echo.

echo Verificando dependencias...
if not exist "node_modules\" (
    echo Instalando dependencias... (isso pode demorar alguns minutos)
    call npm install
    if %errorlevel% neq 0 (
        echo ERRO na instalacao das dependencias!
        pause
        exit /b 1
    )
)

echo.
echo Dependencias OK!
echo.
echo ============================================
echo   Iniciando servidor de desenvolvimento...
echo ============================================
echo.
echo A aplicacao estara disponivel em:
echo.
echo   http://localhost:3000
echo.
echo Pressione Ctrl+C para parar o servidor
echo ============================================
echo.

call npm run dev
