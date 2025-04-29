// filepath: send-log-package/send-log-package/src/sendLog.js
import requester from "@sitevision/api/server/Requester";
import logUtil from "@sitevision/api/server/LogUtil";
import portletContextUtil from "@sitevision/api/server/PortletContextUtil";

export function sendLogFromClient(errorLog, loggingAppName) {
    const formdata = new FormData();

    const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
    };

    fetch("/rest-api/kxn-multilogger/updateLog?errorLog=" + errorLog + "&loggingAppName=" + loggingAppName, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log("Log sent successfully"))
        .catch((error) => console.error("Error sending log:", error));
}

export function sendLogFromServer(errorLog, loggingAppName) {
    const URI = portletContextUtil.getCurrentPage().getProperty('URL').getString();
    const baseURL = URI.substring(0, URI.indexOf("/", 8));

    requester.post(baseURL + "/rest-api/kxn-multilogger/updateLog?errorLog=" + errorLog + "&loggingAppName=" + loggingAppName).done((response) => {
        logUtil.info("Log sent successfully from server:", response);
    }).fail((error) => {
        logUtil.info("Error sending log from server:", error);
    });
}