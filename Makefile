.PHONY: build run stop restart logs clean ps shell

PROJECT_DIR := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))

build:
	docker build -t purwoeats:latest $(PROJECT_DIR)

run: stop
	docker run -d -it -p 10.183.62.97:8004:3000 --name purwoeats --restart=always purwoeats:latest

stop:
	-docker rm -f purwoeats

restart: build run

logs:
	docker logs -f purwoeats

ps:
	docker ps --filter name=purwoeats

shell:
	docker exec -it purwoeats sh

clean: stop
	-docker rmi purwoeats:latest
