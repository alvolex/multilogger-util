# send-log-package

A simple logging utility for sending logs from both client and server environments.

## Installation

To install the package, run the following command:

```
npm install send-log-package
```

## Usage

### Importing the Functions

You can import the functions in your project as follows:

```javascript
import { sendLogFromClient, sendLogFromServer } from 'send-log-package';
```

### Sending Logs from Client

To send logs from the client, use the `sendLogFromClient` function:

```javascript
sendLogFromClient('Your error log message', 'YourAppName');
```

### Sending Logs from Server

To send logs from the server, use the `sendLogFromServer` function:

```javascript
sendLogFromServer('Your error log message', 'YourAppName');
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.