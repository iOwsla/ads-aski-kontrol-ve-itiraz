import puppeteer from "puppeteer";
import DolphinCreator from "./src/dolphin.js";
import express from "express";
import DataBase from "./src/Database.js";
import SuspendCheck from "./src/suspend-check/index.js";
import Config from "./config/config.js";
const app = express();
app.listen(3000, () => console.log("Bot dinleniyor"));
let [,,PROXY,MISSION_ID, TYPE, THREADS] = process.argv;
(async ()=> {
    DataBase.initialize("/data/browsers.json");
    const [PROXY_IP,PROXY_PORT,PROXY_USERNAME,PROXY_PASSWORD] = PROXY.split(":");
    const PROXY_DATA = {
        ip: PROXY_IP,
        port: PROXY_PORT,
        username: PROXY_USERNAME,
        password: PROXY_PASSWORD
    };
    if (Number(TYPE) === Config.ENUMS.CREATOR_TYPE.SUSPEND_CHECK) {
        const suspendCheckApi = new SuspendCheck(PROXY_DATA,MISSION_ID,THREADS);
        await suspendCheckApi.startBrowser();
    };
})();

