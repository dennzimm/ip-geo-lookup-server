# IP Geolocation Server

This is the server-side application for the IP Geolocation Service. It handles requests from the client, performs IP geolocation lookups using an external service, and returns the geolocation data.

## Features

- REST API for IP geolocation lookup
- Uses external IP lookup service (e.g., [ip-api.com](https://ip-api.com/))
- Input validation and error handling

## Installation

To install dependencies:

```bash
bun install
```

To run in dev/watch mode

```bash
bun run dev
```

To build

```bash
bun run build
```

To run

```bash
bun run start | bun run start:build
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
