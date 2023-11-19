pipeline {
    agent any
    
    tools {
        nodejs('NodeJs_20.5.0')
    }

    stages {
        stage('Build Dependencies'){
            steps{
                git branch: 'main', 
                url: 'https://github.com/shreyatulsyan/WebdriverIOMOCHA.git'
                sh 'npm install'
            }
        }
        stage('Run tests') {
            steps { 
            sh 'npm run full'
            
            }
        }
    }
    post {
        always {
    allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
  }
}
}
