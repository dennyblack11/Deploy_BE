"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewSortedKids = exports.viewKids = exports.createKids = void 0;
const kidModel_1 = __importDefault(require("../model/kidModel"));
const createKids = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, image } = req.body;
        const kids = yield kidModel_1.default.create({
            name,
            image,
        });
        return res.status(201).json({
            message: "created",
            data: kids,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error",
        });
    }
});
exports.createKids = createKids;
const viewKids = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const kids = yield kidModel_1.default.find();
        return res.status(200).json({
            message: "read",
            data: kids,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error",
        });
    }
});
exports.viewKids = viewKids;
const viewSortedKids = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const kids = yield kidModel_1.default.find().sort({ name: 1 });
        return res.status(200).json({
            message: "read sorted",
            data: kids,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error",
        });
    }
});
exports.viewSortedKids = viewSortedKids;
