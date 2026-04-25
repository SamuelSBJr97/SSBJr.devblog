@echo off
REM Script para criar um novo post rapidamente no Windows
REM Uso: new-post.bat "Titulo do Post"

setlocal enabledelayedexpansion

if "%~1"=="" (
  echo Uso: new-post.bat "Titulo do Post"
  echo Exemplo: new-post.bat "Como usar Node.js"
  exit /b 1
)

set "TITLE=%~1"
set "DATE=%date:~-4%-%date:~-10,2%-%date:~-7,2%"

REM Converter título para slug (minúsculas e hífens)
setlocal enabledelayedexpansion
set "SLUG=!TITLE!"
set "SLUG=!SLUG: =-!"
for %%A in (A B C D E F G H I J K L M N O P Q R S T U V W X Y Z) do (
  set "SLUG=!SLUG:%%A=%%a!"
)

set "FILEPATH=src\posts\!SLUG!.md"

if exist "!FILEPATH!" (
  echo ❌ Arquivo já existe: !FILEPATH!
  exit /b 1
)

(
  echo ---
  echo title: !TITLE!
  echo date: !DATE!
  echo description: Descrição breve do post
  echo tags: [tag1, tag2]
  echo ---
  echo.
  echo # !TITLE!
  echo.
  echo Seu conteúdo aqui...
  echo.
  echo ## Seção
  echo.
  echo Mais conteúdo...
) > "!FILEPATH!"

echo ✅ Post criado: !FILEPATH!
echo 📝 Edite e execute: npm run dev
