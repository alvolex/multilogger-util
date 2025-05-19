export function sendLogFromServer(errorLog, loggingAppName, logType = "error") {
    const logUtil = require("@sitevision/api/server/LogUtil");
    const requester = require("@sitevision/api/server/Requester");
    const portletContextUtil = require("@sitevision/api/server/PortletContextUtil");    

    const URI = portletContextUtil.getCurrentPage().getProperty('URL').getString();
    const baseURL = URI.substring(0, URI.indexOf("/", 8));

    const queryString = `errorLog=${encodeURIComponent(errorLog)}&loggingAppName=${encodeURIComponent(loggingAppName)}&logType=${encodeURIComponent(logType)}&pageURL=${encodeURIComponent(URI)}`;

    requester.post(`${baseURL}/rest-api/kxn-multilogger/updateLog?${queryString}`).done((response) => {
        logUtil.info("Log sent successfully from server:" + response);
    }).fail((error) => {
        logUtil.info("Error sending log from server:" + error);
    });
}