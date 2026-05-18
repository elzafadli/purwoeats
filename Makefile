.PHONY: build run stop restart logs clean ps shell

build:
	docker build -t purwo-eats:latest /home/elzafadli/container-data/purwo

run: stop
	docker run -d -it -p 10.183.62.97:8003:3000 --name purwo-eats --restart=always rumah-purwo:latest

stop:
	-docker rm -f purwo-eats

restart: build run

logs:
	docker logs -f purwo-eats

ps:
	docker ps --filter name=purwo-eats

shell:
	docker exec -it purwo-eats sh

clean: stop
	-docker rmi purwo-eats:latest
