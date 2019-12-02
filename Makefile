#!/usr/bin/make -f
BRANCH := $(shell git name-rev --name-only HEAD)
ENDPOINT := dist/main.js
SERVICE_NAME := api
PORT := 3005
CONFIG := ecosystem.config.js

build:
	@echo ">>> Builing packages"
	npm install

restart: stop start
	@echo ">>> Restart NodeJS Service by PM2"

# We use reload instead
reload:
	@echo ">>> Reload PM2 Service"
	pm2 reload $(CONFIG)

stop:
	@echo ">>> Stopping Server"
	pm2 stop $(SERVICE_NAME)

start:
	@echo ">>> Starting Server"
	npm run pm2

local:
	@echo ">>> Running Local env"
	npm run start:dev

pull:
	@echo ">>> Pull Code on Current branch [$(BRANCH)]"
	git pull origin $(BRANCH) --rebase

push:
	@echo ">>> Current branch [$(BRANCH)] Pushing Code"
	git push origin $(BRANCH)


