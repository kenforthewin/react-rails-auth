# react-rails-auth

## What it is
This repo contains a Ruby on Rails application serving as the api for a React frontend. The API backend serves user token-based authentication to a custom-rolled, redux-based authentication frontend. The token auth implementation aims to be as simple as possible while still maintaining full functionality.

## Why it exists
Use this repo as a learning exercise for rolling your own token auth, or as a starting point for a new app. 

## Getting started
All services in this repo are containerized. To get started, first make sure docker and docker-compose are installed.
1. Clone the repo and navigate to its folder
1. Create your own `.env` file at the base of the project. Refer to the `.env.sample` file for what's needed.
1. Run the dev script with `./scripts/run-dev.sh`
1. Wait for the images to build. 
1. Eventually the dev server will be up at `localhost:3001`
