pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'qa', url: 'https://github.com/Habib0/demo-new-cyp',
                    credentialsId: 'git-token'
            }
        }

        stage('Install NodeJS') {
            steps {
                script {
                    // Use the exact name from the Global Tool Configuration
                    def nodejs = tool name: 'NodeJS_20.x', type: 'NodeJSInstallation'
                    env.PATH = "${nodejs}/bin:${env.PATH}"
                }
            }
        }

        stage('Verify Node Installation') {
            steps {
                // Verify Node.js and npm versions
                sh 'node -v'  // For Linux/Mac agents, use 'bat' if running on Windows
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npm run cyp'
            }
        }
    }

    post {
        always {
            junit 'cypress/results/*.xml'
        }
    }
}
