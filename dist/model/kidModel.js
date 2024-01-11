"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const kidModel = new mongoose_1.Schema({
    name: {
        type: String
    },
    image: {
        type: String,
    },
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("kids", kidModel);
