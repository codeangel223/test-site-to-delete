mkdir -p build
cp index.html style.css script.js ./build
scp -r ./build/ codeangel@192.168.1.13:~/Dev/test-site