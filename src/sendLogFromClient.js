export function sendLogFromClient(errorLog, loggingAppName, logType= "error") {
    const formdata = new FormData();

    const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
    };

    const encodedErrorLog = encodeURIComponent(errorLog);
    const encodedLoggingAppName = encodeURIComponent(loggingAppName);
    const encodedLogType = encodeURIComponent(logType);
    const URI = window.location.href;
    const encodedURL = encodeURIComponent(URI);

    fetch(`/rest-api/kxn-multilogger/updateLog?errorLog=${encodedErrorLog}&loggingAppName=${encodedLoggingAppName}&logType=${encodedLogType}&pageURL=${encodedURL}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log("Log sent successfully"))
        .catch((error) => console.error("Error sending log:", error));
}