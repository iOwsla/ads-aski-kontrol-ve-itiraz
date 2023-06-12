import axios from "axios";
import qs from "qs";
import Config from "../config/config.js";
import DataBase from "./Database.js";
import puppeteer from "puppeteer-core";
import Data from "./suspend-check/data.js";
import LoggerUtils from "../utils/logger.utils.js";
import {ConsoleLogStatus} from "../utils/enum.utils.js";
import loggerUtils from "../utils/logger.utils.js";


const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class DolphinCreator {
  constructor(PROXY, MISSION_ID, THREADS, options = {
    cookie: true,
    data: []
  }) {
    this.proxy = PROXY;
    this.missionId = MISSION_ID;
    this.threads = parseInt(THREADS),
      this.options = options
  };

  static async cleanupBrowserData(missionId,threads) {
    const currentDataKeys = Object.keys(DataBase.get(`${missionId}`));
    const maxThreads = process.argv[5];
    const openedOtherChromes = currentDataKeys.slice(maxThreads, currentDataKeys.length);
    if (maxThreads <= currentDataKeys.length && openedOtherChromes.length > 0) {
      for (const openedOtherChrome of openedOtherChromes) {
        DataBase.delete(openedOtherChrome);
        this.cleanBrowser(missionId,openedOtherChrome);
      }
    }

    const browserClosePromises = currentDataKeys.map(async (key) => {
      const value = DataBase.get(`${missionId}.${key}`);
      LoggerUtils.sendLog(`[Dolphin Creator] Tarayıcı (${key}) bağlantısı kontrol ediliyor...`, ConsoleLogStatus.WARNING);
      try {
        await axios.request({
          method: "GET",
          maxBodyLength: Infinity,
          url: `http://127.0.0.1:${value.port}${value.wsEndpoint}`,
          headers: {}
        });
        LoggerUtils.sendLog(`[Dolphin Creator] Tarayıcı (${key}) bağlantısı kuruldu`, ConsoleLogStatus.SUCCESS);
      } catch (e) {
        LoggerUtils.sendLog(`[Dolphin Creator] Tarayıcı (${key}) bağlantısı yarıda kesildiği için veritabanından silindi! ❌`, ConsoleLogStatus.DANGER);
        DataBase.delete(`${missionId}.${key}`);
      }
    });

    await Promise.all(browserClosePromises);
  }


  static async cleanBrowser(missionId, browserId, browser = undefined) {
    try {
      const browserValue = DataBase.get(`${missionId}.${browserId}`);
      if (browser) {
        await browser.close();
      }
      LoggerUtils.sendLog("[Dolphin Creator] " + browserId + " ID'li tarayıcı veri tabanından silindi!", ConsoleLogStatus.WARNING);
      DataBase.delete(`${missionId}.${browserId}`);
    } catch (e) {
      LoggerUtils.sendLog(`[Dolphin Creator] Tarayıcı (${browserId}) bağlantısı yarıda kesildiği için veritabanından silindi!`, ConsoleLogStatus.WARNING);
      DataBase.delete(`${missionId}.${browserId}`);
    }
  };

  async createBrowser() {
    LoggerUtils.sendLog("[Dolphin Creator] Yeni tarayıcı başlatılıyor...", ConsoleLogStatus.WARNING);

    const maxThreads = this.threads;
    const results = [];
    for (let i = 0; i < maxThreads; i++) {
      const currentDataKeys = Object.keys(DataBase.get(`${this.missionId}`));
      if (currentDataKeys.length >= maxThreads) {
        LoggerUtils.sendLog("Maksimum thread sayısı aşıldı. Yeni tarayıcı başlatılamaz. " + (i + 1), ConsoleLogStatus.DANGER);
        break;  // Döngüyü kırmak için return yerine break kullanıldı.
      }

      try {
        // Tarayıcı oluşturuluyor...
        const browserData = await this.createSingleBrowser();
        DataBase.set(`${this.missionId}.${browserData.id}`, {});
        LoggerUtils.sendLog("[Dolphin Creator] Tarayıcı başarıyla oluşturuldu.", ConsoleLogStatus.WARNING);

        // Tarayıcı başlatılıyor...
        const startDolphinData = await this.startDolphin(browserData.id, {browserDeleted: true});
        results.push({...startDolphinData, error: false});
      } catch (e) {
        LoggerUtils.sendLog("[Dolphin Creator] Tarayıcı oluşturulurken bir hata oluştu:", ConsoleLogStatus.WARNING, e.message);
        results.push({error: true, ...e.data});
      }

      await sleep(20);
    }

    return results;
  }

  async startDolphin(browserId, options = {browserDeleted: true}) {
    const currentDataKeys = Object.keys(DataBase.get(`${this.missionId}`));
    const maxThreads = this.threads;
    if (currentDataKeys.length >= maxThreads) {
      console.info("Maksimum thread sayısı aşıldı. Yeni tarayıcı başlatılamaz.");
      return null;
    }

    LoggerUtils.sendLog("[Dolphin Creator] Yeni tarayıcı başlatılıyor...", ConsoleLogStatus.WARNING);

    try {
      const response = await axios.get(`http://127.0.0.1:3001/v1.0/browser_profiles/${browserId}/start?automation=1`);
      if (options.browserDeleted) await this.deleteDolphin(browserId);
      DataBase.set(`${this.missionId}.${browserId}`, response.data.automation);
      LoggerUtils.sendLog("[Dolphin Creator] Tarayıcı başarıyla başlatıldı.", ConsoleLogStatus.WARNING);
      return {...response.data.automation, browserId: browserId};
    } catch (e) {
      if (options.browserDeleted) await this.deleteDolphin(browserId);
      if (e.message.includes("connect ECONNREFUSED")) {
        LoggerUtils.sendLog("[Dolphin Creator] Lütfen Dolphin-Anty uygulamasını çalıştırın.", ConsoleLogStatus.DANGER);
      } else {
        LoggerUtils.sendLog("[Dolphin Creator] Tarayıcı başlatılırken bir hata oluştu:", ConsoleLogStatus.WARNING, e.message);
      }




      return null;
    }
  }

  async createSingleBrowser() {
    let data = qs.stringify({
      'name': 'WADSACC',
      'platform': 'windows',
      'mainWebsite': 'google',
      'useragent[mode]': 'manual',
      'useragent[value]': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
      'webrtc[mode]': 'altered',
      'canvas[mode]': 'real',
      'webgl[mode]': 'real',
      'webglInfo[mode]': 'manual',
      'webglInfo[vendor]': 'Google Inc. (AMD)',
      'webglInfo[renderer]': 'ANGLE (AMD, AMD Radeon(TM) Vega 8 Graphics Direct3D11 vs_5_0 ps_5_0, D3D11-27.20.1034.6)',
      'webglInfo[webgl2Maximum]': '{\\"MAX_SAMPLES\\": 8, \\"MAX_DRAW_BUFFERS\\": 8, \\"MAX_TEXTURE_SIZE\\": 19384, \\"MAX_ELEMENT_INDEX\\": 4294967294, \\"MAX_VIEWPORT_DIMS\\": [32767, 32767], \\"MAX_VERTEX_ATTRIBS\\": 16, \\"MAX_3D_TEXTURE_SIZE\\": 2048, \\"MAX_VARYING_VECTORS\\": 30, \\"MAX_ELEMENTS_INDICES\\": 2147483647, \\"MAX_TEXTURE_LOD_BIAS\\": 2, \\"MAX_COLOR_ATTACHMENTS\\": 8, \\"MAX_ELEMENTS_VERTICES\\": 2147483647, \\"MAX_RENDERBUFFER_SIZE\\": 16384, \\"MAX_UNIFORM_BLOCK_SIZE\\": 65536, \\"MAX_VARYING_COMPONENTS\\": 120, \\"MAX_TEXTURE_IMAGE_UNITS\\": 16, \\"MAX_ARRAY_TEXTURE_LAYERS\\": 2048, \\"MAX_PROGRAM_TEXEL_OFFSET\\": 7, \\"MIN_PROGRAM_TEXEL_OFFSET\\": -8, \\"MAX_CUBE_MAP_TEXTURE_SIZE\\": 16384, \\"MAX_VERTEX_UNIFORM_BLOCKS\\": 12, \\"MAX_VERTEX_UNIFORM_VECTORS\\": 4096, \\"MAX_COMBINED_UNIFORM_BLOCKS\\": 24, \\"MAX_FRAGMENT_UNIFORM_BLOCKS\\": 12, \\"MAX_UNIFORM_BUFFER_BINDINGS\\": 24, \\"MAX_FRAGMENT_UNIFORM_VECTORS\\": 1024, \\"MAX_VERTEX_OUTPUT_COMPONENTS\\": 120, \\"MAX_FRAGMENT_INPUT_COMPONENTS\\": 120, \\"MAX_VERTEX_UNIFORM_COMPONENTS\\": 16384, \\"MAX_VERTEX_TEXTURE_IMAGE_UNITS\\": 16, \\"MAX_FRAGMENT_UNIFORM_COMPONENTS\\": 4096, \\"UNIFORM_BUFFER_OFFSET_ALIGNMENT\\": 256, \\"MAX_COMBINED_TEXTURE_IMAGE_UNITS\\": 32, \\"MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS\\": 212992, \\"MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS\\": 4, \\"MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS\\": 200704, \\"MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS\\": 4, \\"MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS\\": 120}',
      'timezone[mode]': 'auto',
      'locale[mode]': 'auto',
      'geolocation[mode]': 'auto',
      'cpu[mode]': 'manual',
      'cpu[value]': '8',
      'memory[mode]': 'manual',
      'memory[value]': '8',
      'doNotTrack': '0',
      'browserType': 'anty',
      'proxy[id]': '0',
      'proxy[type]': 'http',
      'proxy[host]': this.proxy.ip,
      'proxy[port]': this.proxy.port,
      'proxy[login]': this.proxy.username,
      'proxy[password]': this.proxy.password,
      'proxy[name]': this.proxy.username,
      "screen": {
        "mode": "manuel", "resolution": "1920x1080"
      }
    });
    const response = await axios.request({
      method: 'POST',
      maxBodyLength: Infinity,
      url: 'https://dolphin-anty-api.com/browser_profiles',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Authorization": "Bearer " + Config.DOLPHIN_TOKEN
      },
      data: data
    });

    if (this.options.cookie) {
      const setCookieResult = await this.setCookie(response.data.data.id, this.options.data);
      if (setCookieResult) {
        LoggerUtils.sendLog("[Dolphin Creator] Cookie'ler başarıyla ayarlandı.", ConsoleLogStatus.WARNING);
      } else {
        LoggerUtils.sendLog("[Dolphin Creator] Cookie'ler ayarlanırken bir hata oluştu.", ConsoleLogStatus.WARNING);
      }
    }

    return response.data.data;
  }

  async deleteDolphin(browserId) {
    try {
      const response = await axios.request({
        method: 'delete',
        maxBodyLength: Infinity,
        url: 'https://dolphin-anty-api.com/browser_profiles/' + browserId,
        headers: {
          'Authorization': 'Bearer ' + Config.DOLPHIN_TOKEN
        }
      });
      LoggerUtils.sendLog(`[Dolphin Creator] Profil başarılı bir şekilde silindi => ${browserId}`, ConsoleLogStatus.WARNING);
      return true;
    } catch (error) {
      LoggerUtils.sendLog("[Dolphin Creator] Tarayıcı silinirken bir hata oluştu:", ConsoleLogStatus.WARNING, error.message);
      return false;
    }

  }

  async setCookie(browserId, cookies) {
    var data = `{\n    "cookies": ${JSON.stringify(cookies)}\n}`;
    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://sync.anty-api.com/?actionType=importCookies&browserProfileId=' + browserId,
      headers: {
        "Authorization": "Bearer " + Config.DOLPHIN_TOKEN
      },
      data
    };
    try {
      const response = await axios.request(config);
      console.info("[Dolphin Creator] Cookie'ler başarıyla ayarlandı.");
      return true;
    } catch (e) {
      console.info("[Dolphin Creator] Cookie'leri ayarlarken bir hata oluştu:", e.message);
      return false;
    }
  }
}

export default DolphinCreator;