@echo off
cd /d c:\xampp\htdocs\SolBaranda\mi-landing-moderna
git fetch origin
git rebase origin/main --no-edit
git push origin main
echo Push complete
pause
