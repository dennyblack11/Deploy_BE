"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const kidsController_1 = require("../controller/kidsController");
const router = (0, express_1.Router)();
router.route("/create-kid").post(kidsController_1.createKids);
router.route("/find-kid").get(kidsController_1.viewKids);
router.route("/sort-kid").get(kidsController_1.viewSortedKids);
exports.default = router;
