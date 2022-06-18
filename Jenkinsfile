pipeline {
    agent any
    stages {
        stage('Build Backend') { 
            steps {
                withMaven {
                    sh '''
                       cd task-backend
                       mvn -B -DskipTests clean package
                    ''' 
                } 
            }
        }
    }
}
