const logUtil = require("@sitevision/api/server/LogUtil");
const requester = require("@sitevision/api/server/Requester");
const portletContextUtil = require("@sitevision/api/server/PortletContextUtil");

export function sendLogFromClient(errorLog, loggingAppName, logType = "error") {
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

export function sendLogFromServer(errorLog, loggingAppName, logType = "error") {
    const URI = portletContextUtil.getCurrentPage().getProperty('URL').getString();
    const baseURL = URI.substring(0, URI.indexOf("/", 8));

    const queryString = `errorLog=${encodeURIComponent(errorLog)}&loggingAppName=${encodeURIComponent(loggingAppName)}&logType=${encodeURIComponent(logType)}&pageURL=${encodeURIComponent(URI)}`;

    requester.post(`${baseURL}/rest-api/kxn-multilogger/updateLog?${queryString}`).done((response) => {
        logUtil.info("Log sent successfully from server:" + response);
    }).fail((error) => {
        logUtil.info("Error sending log from server:" + error);
    });
}