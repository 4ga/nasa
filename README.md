# NASA Mission Control Project

The completed version of the NASA project from <a href="https://academy.zerotomastery.io/courses/learn-node-js" target="_blank" rel="noopener noreferrer">Complete Node.js Developer: Zero to Mastery</a>.

## Getting Started

1. Ensure you have Node.js installed.
2. Create a free <a href="https://www.mongodb.com/products/platform/atlas-database" target="_blank" rel="noopener noreferrer">Mongo Atlas</a>
3. Create a `server/.env` file with a `MONGO_URL` property set to you MongoDB connnection string.
4. In the terminal, run: `npm install`

## Running the Project

1. In the terminal, run: `npm run deploy`
2. Browse to the mission control from at <a href="http://localhost:8000">localhost:8000</a> and schedule an intersteller launch!

## Docker
1. Ensure you have the latest version of Docker installed.
2. Run ``docker build -t nasa .``
3. Run ``docker run -it -p 8000:8000 nasa``

## Running the Tests

To run any automated tests, run ``npm test``. This will: 
  
  - Run all the client-side tests: ``npm test --prefix client``
  - Run all the server-side tests: ``npm test --prefix server``
