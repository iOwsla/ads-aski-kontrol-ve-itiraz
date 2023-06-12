const ApiEndPointStatus = Object.freeze({
  v2: {
    SET_START_SW_STATUS: "SET_START_SW_STATUS",
    SET_STOP_MISSION: "SET_STOP_MISSION",
    SET_MISSION: "SET_MISSION",
    SET_WRITE_LOG: "WRITE_LOG",
    SET_PROXY: "SET_PROXY",
    SET_PROC: "SET_PROC",
    GET_GOOGLE_PAY: "GET_GOOGLE_PAY",
    GET_EMAIL: "GET_EMAIL",
    GET_PROXY: "GET_PROXY",
    GET_CREDIT_CARD: "GET_CREDIT_CARD",
    GET_DATA: "GET_DATA",
    GET_MISSION: "GET_MISSION"
  },
  v1: {
    SET_START_SW_STATUS: "upSwStatus",
    SET_STOP_MISSION: "stopMission",
    SET_MISSION: "setMission",
    SET_WRITE_LOG: "logWrite",
    SET_PROXY: "setProxy",
    SET_PROC: "setProc",
    GET_GOOGLE_PAY: "gPay",
    GET_EMAIL: "getEmail",
    GET_PROXY: "getProxy",
    GET_CREDIT_CARD: "getCreditCard",
    GET_DATA: "getData",
    GET_MISSION: "getMission"
  }
});
const ApiEndPoints = {
  [ApiEndPointStatus.v1["SET_START_SW_STATUS"]]: (data, end_point) => `${data.baseUrl}/${ApiEndPointStatus.v1["SET_START_SW_STATUS"]}`,
  [ApiEndPointStatus.v1["SET_STOP_MISSION"]]: (data, end_point) => `${data.baseUrl}/${ApiEndPointStatus.v1["SET_STOP_MISSION"]}/${data.missionId}/${data.content}`,
  [ApiEndPointStatus.v1["SET_WRITE_LOG"]]: (data, end_point) => `${data.baseUrl}/${ApiEndPointStatus.v1["SET_WRITE_LOG"]}/${data.missionId}/${data.browserId}/${data.type}/${data.content}`,
  [ApiEndPointStatus.v1["GET_GOOGLE_PAY"]]: (data, end_point) => `${data.baseUrl}/${ApiEndPointStatus.v1["GET_GOOGLE_PAY"]}/${data.type}`,
  [ApiEndPointStatus.v1["GET_EMAIL"]]: (data, end_point) => data.type ? `${data.baseUrl}/${ApiEndPointStatus.v1["GET_EMAIL"]}/${data.browserId}/${data.missionId}/${data.type}` : `${data.baseUrl}/${ApiEndPointStatus.v1["GET_EMAIL"]}/${data.browserId}/${data.missionId}`,
  [ApiEndPointStatus.v1["GET_PROXY"]]: (data, end_point) => data.type ? `${data.baseUrl}/${ApiEndPointStatus.v1["GET_PROXY"]}/${data.missionId}/${data.type}` : `${data.baseUrl}/${ApiEndPointStatus.v1["GET_PROXY"]}/${data.missionId}`,
  [ApiEndPointStatus.v1["GET_CREDIT_CARD"]]: (data, end_point) => data.type ? `${data.baseUrl}/${ApiEndPointStatus.v1["GET_CREDIT_CARD"]}/${data.missionId}/${data.type}` : `${data.baseUrl}/${ApiEndPointStatus.v1["GET_CREDIT_CARD"]}/${data.missionId}`,
  [ApiEndPointStatus.v1["GET_DATA"]]: (data, end_point) => data.type ? `${data.baseUrl}/${ApiEndPointStatus.v1["GET_DATA"]}/${data.missionId}/${data.type}` : `${data.baseUrl}/${ApiEndPointStatus.v1["GET_DATA"]}/${data.missionId}`,
  [ApiEndPointStatus.v1["SET_PROC"]]: (data, end_point) => `${data.baseUrl}/${ApiEndPointStatus.v1["SET_PROC"]}/${data.missionId}/${data.emailId}`
};
const ConsoleLogStatus = Object.freeze({
  SUCCESS: 0, DANGER: 1, WARNING: 2, INFO: 3, RGB: 4
});

export {
  ApiEndPointStatus,
  ConsoleLogStatus,
  ApiEndPoints
};