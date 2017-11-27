#!/bin/bash
set -a
. ./.env
set +a
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up