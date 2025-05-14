export enum ErrorTypes{
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

export function sendLogFromClient(errorLog: string, loggingAppName: string, logType = ErrorTypes.ERROR): void;
export function sendLogFromServer(errorLog: string, loggingAppName: string, logType = ErrorTypes.ERROR): void;