pipeline {
	agent any;

	stages {
        stage('Build') { 
            steps {
                echo "Build"
            }
        }
        stage('Test') { 
            steps {
                echo "Test"
            }
        }
        stage('Deploy') { 
            steps {
                echo "Deploy";
		        bat "scp -r index.html codeangel@192.168.1.13:~/Dev/test-site"
            }
        }
    }
}
