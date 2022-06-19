pipeline {
    agent any
    stages {     
        stage('Build Backend') {        
            steps {
                sh '''
                       cd task-backend
                       mvn -B -DskipTests clean package
                    ''' 
            }
        }
    }
}
