# www-hello

## Simple HTTP server Docker image for testing load balancer routing, etc

### Usage

- Set environment variable `HELLO_PAYLOAD` to a string or JSON string
- The server will add a random number to the specified payload so you can distinguish responses from multiple instances of the same service
- Any request to the server (GET/POST/etc) will send the payload back as JSON with the instance number included
- The `examples` directory includes two stacks for a Docker swarm node which together implement DNS routing (and optionally SSL with LetsEncrypt) using Traefik (many thanks to Docker guru [Bret Fisher](https://github.com/BretFisher/))