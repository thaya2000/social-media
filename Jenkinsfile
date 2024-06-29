pipeline {
    agent any

    stages {
        stage('Clone repository') {
            steps {
                script {
                    git url: 'https://github.com/thaya2000/social-media.git', branch : 'main'
                }
            }
        }
        stage('Build Docker images') {
            steps {
                sh 'docker-compose build'
            }
        }
        stage('Deploy with Docker Compose') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }
    }
}
