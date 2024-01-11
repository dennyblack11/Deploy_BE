"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const kidsRouter_1 = __importDefault(require("./router/kidsRouter"));
const mainApp = (app) => {
    try {
        app.use("/api/v1", kidsRouter_1.default);
        app.get("/", (req, res) => {
            try {
                res.status(200).json({
                    message: "Welcome to Our Api"
                });
            }
            catch (error) {
                return res.status(404).json({
                    message: "Error ready default API"
                });
            }
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.mainApp = mainApp;
