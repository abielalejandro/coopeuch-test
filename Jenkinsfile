pipeline {
    agent any
    stages {
        stage('Build Backend') { 
            steps {
                dir('task-backend') {
                    withMaven(maven: 'mvn') {
                        sh 'mvn -B -DskipTests clean package' 
                    } 
                   
                }
            }
        }
    }
}
