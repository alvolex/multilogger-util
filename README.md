# send-log-package

A simple logging utility for sending logs from both client and server environments.

## Installation

To install the package, run the following command:

```
npm install kxn-multilogger-util
```

## Usage

### Importing the Functions

You can import the functions in your project as follows:

```javascript
import { sendLogFromClient, sendLogFromServer } from 'kxn-multilogger-util';
```

### Sending Logs from Client

To send logs from the client, use the `sendLogFromClient` function:

```javascript
sendLogFromClient('Your error log message', 'YourAppName', ErrorTypes.ERROR);
```

### Sending Logs from Server

To send logs from the server, use the `sendLogFromServer` function:

```javascript
sendLogFromServer('Your error log message', 'YourAppName', ErrorTypes.ERROR);
```
### Error Types
The `ErrorTypes` enum is used to specify the type of error. It includes the following types:
- `ERROR`: Represents an error.
- `WARNING`: Represents a warning.
- `INFO`: Represents an informational message.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.