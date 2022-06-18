pipeline {
    agent any
    stages {
        stage('Build Backend') {
            agent {
                docker {
                    image 'gradle:6.7-jdk11'
                    // Run the container on the node specified at the
                    // top-level of the Pipeline, in the same workspace,
                    // rather than on a new node entirely:
                    reuseNode true
                }
            }            
            steps {
                    sh '''
                       cd task-backend
                       mvn -B -DskipTests clean package
                    ''' 
            }
        }
    }
}
