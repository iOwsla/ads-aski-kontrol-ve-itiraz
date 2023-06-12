import {ConsoleLogStatus} from "./enum.utils.js";
import colors from "colors";
import * as fs from "fs";

class LoggerUtils {

    static sendLog(message, type, data = "") {
        const date = new Date();

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        const loggerTime = `[${day}/${month}/${year} - ${hours}:${minutes}:${seconds}]`;

        switch (type) {
            case ConsoleLogStatus.SUCCESS:
                console.log(`${loggerTime.yellow.bgRed} ${message.green.bgBlack}`, data);
                fs.appendFileSync("./log.txt",`${loggerTime} => ${message}\n`,"utf-8");
                break;
            case ConsoleLogStatus.DANGER:
                console.error(`${loggerTime.yellow.bgRed} ${message.yellow.bgBlack}`, data);
                fs.appendFileSync("./log.txt",`${loggerTime} => ${message}\n`,"utf-8");
                break;
            case ConsoleLogStatus.WARNING:
                console.warn(`${loggerTime.yellow.bgRed} ${message.red.bgBlack}`, data);
                fs.appendFileSync("./log.txt",`${loggerTime} => ${message}\n`,"utf-8");
                break;
            case ConsoleLogStatus.INFO:
                console.info(`${loggerTime.yellow.bgRed} ${message.cyan.bgBlack}`, data);
                fs.appendFileSync("./log.txt",`${loggerTime} => ${message}\n`,"utf-8");
                break;
            case ConsoleLogStatus.RGB:
                console.log(`${loggerTime.yellow.bgRed} ${message.rainbow.bgBlack}`, data);
                fs.appendFileSync("./log.txt",`${loggerTime} => ${message}\n`,"utf-8");
                break;
            default:
                console.log(`${loggerTime.yellow.bgRed} ${message[type]}`, data);
                fs.appendFileSync("./log.txt",`${loggerTime} => ${message}\n`,"utf-8");
                break;
        }
    }

}

export default LoggerUtils;