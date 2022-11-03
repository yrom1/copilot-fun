// Server on port 3000

// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()

// To start the server, run the following command in your terminal:
// node server.js

// To see the output, visit the following URL in your browser:
// http://localhost:3000/

// You should see the following JSON response:
// {"hello":"world"}

// To stop the server, press Control + C in your terminal.

// To install Fastify, run the following command in your terminal:
// npm install fastify

// To install the Fastify logger, run the following command in your terminal:
// npm install pino-pretty

// To install the Fastify CLI, run the following command in your terminal:
// npm install -g fastify-cli

// To create a new Fastify project, run the following command in your terminal:
// fastify generate

// To start the server, run the following command in your terminal:
// npm run dev

// To see the output, visit the following URL in your browser:
// http://localhost:3000/

// You should see the following JSON response:
// {"hello":"world"}

// To stop the server, press Control + C in your terminal.

// To install Fastify, run the following command in your terminal:
// npm install fastify

// To install the Fastify logger, run the following command in your terminal:
// npm install pino-pretty

// To install the Fastify CLI, run the following command in your terminal:
// npm install -g fastify-cli

// To create a new Fastify project, run the following command in your terminal:
// fastify generate

// To start the server, run the following command in your terminal:
// npm run dev

// To see the output, visit the following URL in your browser:
// http://localhost:3000/

// You should see the following JSON response:
// {"hello":"world"}

// To stop the server,



// Return the current time
fastify.get('/time', async (request, reply) => {
    return { time: new Date().toISOString() }
})
