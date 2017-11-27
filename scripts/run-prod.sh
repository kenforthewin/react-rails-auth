#!/bin/bash
set -a
. ./.env
set +a
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -t