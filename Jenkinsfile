pipeline {
    agent {
        docker {
            image 'maven:3.8.1-adoptopenjdk-11'
            args '-v $HOME/.m2:/root/.m2'
        }
    }
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
