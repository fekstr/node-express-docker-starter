# Node Express Docker Starter

## Quickstart

1. Add environment variables to `.env.prod.yaml` and `.env.stage.yaml` respectively
1. Set environment variables with `source scripts/activate.prod.sh`
1. Start development server with `yarn dev`

## Build and run docker container

1. `docker build -t <CONTAINER NAME> .`
1. `docker run <CONTAINER NAME>`

## Stop docker container

1. `docker ps`
1. `docker stop <CONTAINER ID>`
