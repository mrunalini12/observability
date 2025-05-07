const express = require('express');
const { initTracer } = require('jaeger-client');
const winston = require('winston'); // 🌟 Added winston
const app = express();
const client = require('prom-client');
const port = 3000;

// Initialize Jaeger tracer
const tracer = initTracer({
    serviceName: 'node-app',
    sampler: {
        type: 'const',
        param: 1
    },
    reporter: {
        logSpans: true,
        collectorEndpoint: 'http://jaeger:14268/api/traces', // Jaeger endpoint
    }
});

// 🌟 Initialize winston logger
const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/app.log' }) // ✨ Added file transport
    ]
});



// Prometheus Counter
const httpRequestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
});

// Logging HTTP request with trace info
app.get('/', (req, res) => {
    const span = tracer.startSpan('http_request');
    httpRequestCounter.inc(); // <-- count request
    logger.info('Request received'); // 🌟 Use logger 
    res.send('Hello, Observability!');
    span.finish();
});


// Metrics endpoint for Prometheus
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});

app.listen(port, () => {
    console.log(`Node app listening at http://localhost:${port}`);
});
