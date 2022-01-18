# for local testing
build:
	docker build -t nodejs-backend-api:0.0.1 .

delete-img:
	docker rmi nodejs-backend-api:0.0.1

run:
	docker run -d --name nodejs-backend-api -p 80:3000 nodejs-backend-api:0.0.1

stop:
	docker stop nodejs-backend-api && docker rm nodejs-backend-api

delete-container:
	docker rm nodejs-backend-api