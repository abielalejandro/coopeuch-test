pipeline {
    agent any
    stages {
        stage('Build Backend') { 
            steps {
                dir('task-backend') {
                   sh 'mvn -B -DskipTests clean package' 
                }
            }
        }
    }
}
