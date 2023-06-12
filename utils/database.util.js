import {fileURLToPath} from 'url';
import path from 'path';
import fs from 'fs';

class DataBase {
    static #fullPath;
    static #autoSave = true;
    static #data;

    /**
     * Veritabanını başlatır ve gerekli dosya yolunu ayarlar.
     * @param {string} filePath - Veritabanı dosya yolunu belirtir.
     * @param {object} options - Otomatik kaydetme seçeneklerini belirtir.
     * @param {boolean} options.autoSave - Otomatik kaydetmeyi etkinleştirir veya devre dışı bırakır.
     */
    static initialize(filePath, options = {autoSave: true}) {
        // Proje kökünü belirler
        const projectRoot = path.dirname(fileURLToPath(import.meta.url)).split(path.sep).slice(0, -2).join(path.sep);
        DataBase.#fullPath = path.join(projectRoot, filePath);
        DataBase.#autoSave = options.autoSave;

        // Dosya yoksa oluşturulur ve boş bir nesneyle doldurulur
        if (!fs.existsSync(DataBase.#fullPath)) {
            fs.writeFileSync(DataBase.#fullPath, JSON.stringify({}, null, 2), 'utf-8');
        }
        // Veriler dosyadan okunur
        DataBase.#data = DataBase.#readFromFile();
    }

    /**
     * Anahtarın noktalarla ayrılmış yolunu ayrıştırır.
     * @param {string} key - Anahtar.
     * @returns {string[]} Ayrıştırılmış anahtarın parçaları.
     */
    static #parseKey(key) {
        return key.split('.');
    }

    /**
     * Dosyadan verileri okur.
     * @returns {object} Okunan veri nesnesi.
     */
    static #readFromFile() {
        return JSON.parse(fs.readFileSync(DataBase.#fullPath, 'utf-8'));
    }

    /**
     * Verileri dosyaya yazar.
     */
    static #writeToFile() {
        fs.writeFileSync(DataBase.#fullPath, JSON.stringify(DataBase.#data, null, 2), 'utf-8');
    }

    /**
     * Belirtilen anahtarı kullanarak değeri alır.
     * @param {string} key - Anahtar.
     * @returns {*} Değer.
     */
    static get(key) {
        let keys = DataBase.#parseKey(key);
        let data = DataBase.#data;

        for (let k of keys) {
            if (!data[k]) return undefined;
            data = data[k];
        }

        return data;
    }

    /**
     * Belirtilen anahtarın değerine bir öğe ekler.
     * @param {string} key - Anahtar.
     * @param {*} value - Eklenecek değer.
     * @returns {Array} Eklendikten sonra anahtarın yeni değerini döndürür.
     */
    static push(key, value) {
        let keys = DataBase.#parseKey(key);
        let lastKey = keys.pop();
        let data = DataBase.#data;

        for (let k of keys) {
            if (!data[k] || typeof data[k] !== 'object' || Array.isArray(data[k])) {
                data[k] = {};
            }
            data = data[k];
        }

        if (!(data[lastKey] instanceof Array)) {
            data[lastKey] = [];
        }

        data[lastKey].push(value);

        if (DataBase.#autoSave) {
            DataBase.#writeToFile();
        }

        return data;
    }

    /**
     * Belirtilen anahtarı siler.
     * @param {string} key - Anahtar.
     */
    static delete(key) {
        let keys = DataBase.#parseKey(key);
        let lastKey = keys.pop();
        let data = DataBase.#data;

        for (let k of keys) {
            if (!data[k] || typeof data[k] !== 'object' || Array.isArray(data[k])) {
                return; // Silinecek bir şey yok
            }
            data = data[k];
        }

        delete data[lastKey];

        if (DataBase.#autoSave) {
            DataBase.#writeToFile();
        }
    }

    /**
     * Belirtilen anahtarın değerinden bir öğe kaldırır.
     * @param {string} key - Anahtar.
     * @param {*} value - Kaldırılacak değer.
     */
    static remove(key, value) {
        let keys = DataBase.#parseKey(key);
        let lastKey = keys.pop();
        let data = DataBase.#data;

        for (let k of keys) {
            if (!data[k] || typeof data[k] !== 'object' || Array.isArray(data[k])) {
                return; // Kaldırılacak bir şey yok
            }
            data = data[k];
        }

        if (!(data[lastKey] instanceof Array)) {
            return; // Son anahtar bir diziye işaret etmiyor
        }

        data[lastKey] = data[lastKey].filter(item => item !== value);

        if (DataBase.#autoSave) {
            DataBase.#writeToFile();
        }
    }

    /**
     * Belirtilen anahtara bir değer atar.
     * @param {string} key - Anahtar.
     * @param {*} value - Atanan değer.
     * @returns {*} Atanan değeri döndürür.
     */
    static set(key, value) {
        let keys = DataBase.#parseKey(key);
        let data = DataBase.#data;

        for (let i = 0; i < keys.length; i++) {
            let k = keys[i];

            if (i === keys.length - 1) {
                data[k] = value;
            } else {
                if (!data[k] || typeof data[k] !== 'object' || Array.isArray(data[k])) {
                    data[k] = {};
                }
                data = data[k];
            }
        }

        if (DataBase.#autoSave) {
            DataBase.#writeToFile();
        }

        return data;
    }

    /**
     * Belirtilen anahtarı günceller.
     * @param {string} key - Anahtar.
     * @param {*} value - Güncellenecek değer.
     */
    static update(key, value) {
        let keys = DataBase.#parseKey(key);
        let lastKey = keys.pop();
        let data = DataBase.#data;

        for (let k of keys) {
            if (!data[k] || typeof data[k] !== 'object' || Array.isArray(data[k])) {
                throw new Error(`Veritabanında böyle bir anahtar yok: ${k}`);
            }
            data = data[k];
        }

        if (!(lastKey in data)) {
            throw new Error(`Veritabanında böyle bir anahtar yok: ${lastKey}`);
        }

        data[lastKey] = value;

        if (DataBase.#autoSave) {
            DataBase.#writeToFile();
        }
    }

    /**
     * Filtreye uygun olarak veritabanındaki öğeleri listeler.
     * @param {string} filter - Filtre.
     * @returns {object} Filtreye uygun öğelerin listesi.
     */
    static list(filter = '') {
        if (!filter) {
            let result = DataBase.#data;

            Object.defineProperty(result, 'size', {
                get: function () {
                    return Array.isArray(this) ? this.length : Object.keys(this).length;
                },
            });

            return result;
        }

        let result = {};
        let filterLowerCase = filter.toLowerCase();

        function search(obj, path = '') {
            for (let key in obj) {
                let newPath = path ? path + '->' + key : key;
                let value = obj[key];
                let keyLowerCase = key.toLowerCase();
                let valueLowerCase = typeof value === 'string' ? value.toLowerCase() : '';

                if (keyLowerCase.includes(filterLowerCase) || valueLowerCase.includes(filterLowerCase)) {
                    result[newPath] = value;
                }

                if (typeof value === 'object' && value !== null) {
                    search(value, newPath);
                }
            }
        }

        search(DataBase.#data);

        Object.defineProperty(result, 'size', {
            get: function () {
                return Array.isArray(this) ? this.length : Object.keys(this).length;
            },
        });

        return result;
    }

    /**
     * Verileri dosyaya kaydeder.
     */
    static save() {
        DataBase.#writeToFile();
    }
}

export default DataBase;
