@echo off

setlocal enabledelayedexpansion

::Install all production modules
npm ci --only=production

::Create .nojekyll
if not exist .nojekyll (
	copy nul .nojekyll >nul || goto :error
)

::Delete .gitignore
if exist .gitignore (
	del /f /q /s .gitignore >nul || goto :error
)

::Commit and push
git add .                                        || goto :error
git commit --allow-empty-message --no-edit       || goto :error
git push origin main:gh-pages                    || goto :error

::Reset one commit back
git reset --hard HEAD~                           || goto :error

endlocal

exit /b

:error
exit /b %errorlevel%

:eof
exit /b