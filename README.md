# webdriverio-web-mocha

Added:

**Platform:**
web

**Framework:**
WebdriverIO, mocha

**Reports:**
allure reporting
mochaawesomereports

**CICD:**
Jenkins

How to run all tests:
```
npm run full
```

How to run test through docker
docker build -t imagename1 . 
docker run --name run1 imagename1
Copy reports from docker to local
docker cp run8:WORKDIR/reports/allure/allure-results ./reports/allure/allure-results





