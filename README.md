# Observability System with Prometheus, Loki, Jaeger, and Grafana

This project demonstrates how to set up a complete observability stack using **Prometheus** for metrics collection, **Loki** for log aggregation, **Jaeger** for distributed tracing, and **Grafana** for visualization. The system monitors a sample **Node.js application** using Docker Compose for easy orchestration.

## Project Setup

This guide will help you set up an integrated monitoring system that includes **Metrics**, **Logs**, and **Traces** for a sample application.

### Tools Used:
- **Node.js**: The application framework.
- **Prometheus**: For scraping and storing metrics.
- **Grafana**: For visualizing metrics and logs.
- **Loki**: For log aggregation.
- **Jaeger**: For distributed tracing (currently in progress).
- **Docker Compose**: To orchestrate the services.

## Prerequisites

Make sure you have the following installed on your system:
- Docker
- Docker Compose

## Project Structure

- `docker-compose.yml`: Docker Compose file for defining and running multi-container Docker applications.
- `prometheus.yml`: Configuration file for Prometheus.
- `loki-config.yml`: Configuration file for Loki.
- `app.js`: Node.js application that exposes Prometheus metrics.
- `package.json`: Node.js dependencies and scripts.

## Step-by-Step Guide

### 1. **Create the Project Folder**

First, create the project directory:
```bash
mkdir node-observability
cd node-observability


2. Initialize a Node.js Application
Initialize the project with Node.js:


npm init -y
npm install express prom-client

Create the Node.js Application
In app.js, set up a simple Node.js server with Prometheus metrics:

javascript


4. Configure Docker Compose
Create the docker-compose.yml to define services for Prometheus, Grafana, Loki, and Jaeger:

5. Configure Prometheus

6. Configure Loki

7. Start the Stack

8. Access the Services
Once the services are running, you can access them:

Prometheus UI: http://localhost:9090

Grafana UI: http://localhost:3000 (Username: admin, Password: admin)

Loki UI: http://localhost:3100

Jaeger UI: http://localhost:5775 (Tracing setup in progress)

9. Import Dashboards in Grafana
To visualize the data in Grafana:

Log in to Grafana (default credentials: admin / admin).

Go to Dashboard > Import.

Upload the relevant Prometheus and Loki dashboards.

10. Verify Logs and Metrics
Prometheus will scrape metrics from http://localhost:8080/metrics.

Logs from the Node.js application should appear in Loki.

Jaeger traces will be visualized once the tracing setup is complete.
Conclusion
This project sets up a comprehensive observability stack with Prometheus, Loki, Jaeger, and Grafana
using Docker Compose. It monitors a simple Node.js app by collecting metrics, logs, and traces to give you full observability.

