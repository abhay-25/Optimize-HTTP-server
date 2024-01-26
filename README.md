# HTTP Server with File Access

This project implements a simple HTTP server that serves files based on incoming GET requests. The server responds to requests on the `/data` endpoint and accepts two query parameters: `n` for the file name and `m` for the line number.

## Features

- Handles incoming GET requests on the `/data` endpoint.
- Accepts two query parameters: `n` for the file name and `m` for the line number.
- If `n` and `m` are provided, returns the content of the specified file at the specified line number.
- If only `n` is provided, returns the entire content of the specified file.

## Usage

1. Clone this repository:

   ```bash
   git clone <https://github.com/abhay-25/Optimize-HTTP-server>
   ```
2. Navigate to the project directory:
3. Install dependencies:

   ```bash
   npm install
   ```
4. Start the server:

   ```bash
   npm start
   ```

   The server will be running at `http://localhost:8080`.

## Docker

Alternatively, you can run the server using Docker:

1. Build the Docker image:

   ```bash
   docker build -t http-server .
   ```
2. Run the Docker container:

   ```bash
   docker run -d --name <conatiner name>    --memory=1500m    --cpus=2     -p 8080:8080     <docker image name>
   ```
3. The server will be accessible at `http://localhost:8080`.

## Configuration

- The server listens on port `8080` by default. This can be changed by modifying the `PORT` constant in `http_server.js`.

## Additional

- Each file served by the server should be located in the `/tmp/data/` directory and have a `.txt` extension.
- You can add as many as per requirement at `/tmp/data/` directory.
