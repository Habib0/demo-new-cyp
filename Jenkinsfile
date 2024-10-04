pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'qa', url: 'https://github.com/Habib0/demo-new-cyp',
                    credentialsId: 'git-token'
            }
        }

        stage('Verify Node Installation') {
            steps {
                // Verify if Node.js and npm are installed on the agent
                sh 'node -v'  // 'bat' if using Windows agents
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install the project dependencies
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Run the Cypress tests using the npm script
                sh 'npm run cyp'
            }
        }
    }

    post {
        always {
            // Publish the test results
            junit 'cypress/results/*.xml'
        }
    }
}
