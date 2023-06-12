import {ApiEndPoints, ConsoleLogStatus} from "./enum.utils.js";
import axios from "axios";
import {Config, LanguageConfig} from "../../config/index.config.js";
import LoggerUtils from "./logger.utils.js";

class ApiUtils {
    constructor(end_point, method, missionId, browserId, type = undefined, content = undefined) {
        this.end_point = end_point;
        this.missionId = missionId;
        this.browserId = browserId;
        this.content = content;
        this.type = type;
        this.config = {
            method, headers: {
                "Content-Type": "application/json"
            }, url: Config.WEB_API_URL, maxBodyLength: Infinity
        },
            this.endpointFunction = ApiEndPoints;
    };

    async send() {
        const endpointFunction = this.endpointFunction[this.end_point];
        if (!endpointFunction) {
            throw new Error(`Endpoint ${this.end_point} is not defined`);
        }
        this.config.url = endpointFunction(this);
        return this.getResponse(this.config);
    };

    async getResponse(config) {
        try {
            const response = await axios.request(config);
            if (response.status === 200) {
                LoggerUtils.sendLog(LanguageConfig.API.success_response.replace("{0}", this.end_point), ConsoleLogStatus.SUCCESS);
                return {data: response.data, status: true};
            } else {
                LoggerUtils.sendLog(LanguageConfig.API.error_response.replace("{0}", this.end_point), ConsoleLogStatus.DANGER);
                return {data: response.data, status: false};
            }
        } catch (e) {
            LoggerUtils.sendLog(LanguageConfig.API.error_response.replace("{0}", this.end_point), ConsoleLogStatus.DANGER, e.message);
            return {data: {}, message: e.message, status: false};
        }
    }
}

export default ApiUtils;