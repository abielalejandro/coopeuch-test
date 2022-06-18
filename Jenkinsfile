pipeline {
    agent any
    stages {
        stage('Build Backend') { 
            steps {
                withMaven(maven: 'mvn') {
                    sh '''
                       cd task-backend
                       mvn -B -DskipTests clean package
                    ''' 
                } 
            }
        }
    }
}
