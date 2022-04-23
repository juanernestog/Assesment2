# Favorites lists API

Create list of your favoirite things

## Installation

Verify you have node installed

Running this on a terminal should output somthing similar to v16.4.0

`node --version`

Should you encouter an error see node download and installation: https://nodejs.org/en/download/

Developed on node version is v16.4.0

Run this command to install all dependencies
`npm install`

For a deployment you would want to run

`npm install production`

this won't install dev dependencies.

## Configuration

Copy `.env.example` to `.env` and set your enviromemnt variables

## Run

`npm start`

## Development

`npm run dev`

## Test

`npm test`

## API contract

This are the verbs and routes of the API and their outcomes

api/favs GET Get all list of favorites

/api/favs POST Creates a new list of favorites

/api/favs/:id GET Get a single list of favorites

/api/favs/:id DELETE Deletes a list of favorites

/auth/local/login POST Login user by email/password
