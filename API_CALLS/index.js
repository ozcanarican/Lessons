var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var params = {
    "latitude": 41.33,
    "longitude": 36.27,
};
var url = "https://api.open-meteo.com/v1/forecast?latitude=".concat(params.latitude, "&longitude=").concat(params.longitude, "&current=temperature_2m,wind_speed_10m,weather_code");
var callApi = function () { return __awaiter(_this, void 0, void 0, function () {
    var res, weather;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("API ".concat(url, " \u00FCzerinden cagiriliyor..."));
                return [4 /*yield*/, fetch(url, {
                        method: "GET",
                    })];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                weather = _a.sent();
                console.log("Hava: ".concat(weatherCode(weather.current.weather_code), " (").concat(weather.current.weather_code, ")"));
                console.log("S\u0131cakl\u0131k: ".concat(weather.current.temperature_2m, " ").concat(weather.current_units.temperature_2m));
                console.log("R\u00FCzgar h\u0131z\u0131: ".concat(weather.current.wind_speed_10m, " ").concat(weather.current_units.wind_speed_10m));
                return [2 /*return*/, weather];
        }
    });
}); };
var callApi2 = function () { return __awaiter(_this, void 0, void 0, function () {
    var url, fd, sp, res, weather;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = "https://api.open-meteo.com/v1/forecast?";
                fd = new FormData();
                fd.append("latitude", (params.latitude).toString());
                fd.append("longitude", (params.longitude).toString());
                fd.append("current", "temperature_2m,wind_speed_10m,weather_code");
                sp = new URLSearchParams(fd);
                url += sp.toString();
                console.log(url);
                console.log("API ".concat(url, " \u00FCzerinden cagiriliyor..."));
                return [4 /*yield*/, fetch(url, {
                        method: "GET",
                    })];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                weather = _a.sent();
                console.log("Hava: ".concat(weatherCode(weather.current.weather_code), " (").concat(weather.current.weather_code, ")"));
                console.log("S\u0131cakl\u0131k: ".concat(weather.current.temperature_2m, " ").concat(weather.current_units.temperature_2m));
                console.log("R\u00FCzgar h\u0131z\u0131: ".concat(weather.current.wind_speed_10m, " ").concat(weather.current_units.wind_speed_10m));
                return [2 /*return*/, weather];
        }
    });
}); };
var weatherCode = function (code) {
    switch (code) {
        default:
            return "Mavi Gökyüzü";
        case 1 || 2 || 3:
            return "Parçalı Bulutlu";
        case 45 || 48:
            return "Sisli";
        case 51 || 53 || 55 || 56 || 57:
            return "Çiğseliyor";
        case 61 || 63 || 65 || 66 || 67:
            return "Yağmurlu";
        case 71 || 73 || 75 || 77 || 85 || 86:
            return "Karlı";
        case 80 || 81 || 82:
            return "Sağanak Yağışlı";
        case 95 || 96 || 99:
            return "Fırtına";
    }
};
callApi2();
