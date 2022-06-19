pipeline {
    agent {
                docker {
                    image 'maven:3.8.1-adoptopenjdk-11'
                    // Run the container on the node specified at the
                    // top-level of the Pipeline, in the same workspace,
                    // rather than on a new node entirely:
                    reuseNode true
                }
            }  
    stages {      
        stage('Build Backend') {
            def dockerHome = tool 'DockerClient'
            env.PATH = "${dockerHome}/bin:${env.PATH}"          
            steps {
                    sh '''
                       cd task-backend
                       mvn -B -DskipTests clean package
                    ''' 
            }
        }
    }
}
