"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Auth_1 = require("../../middleware/Auth");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const auth_constant_1 = require("../auth/auth.constant");
const cow_controller_1 = require("./cow.controller");
const cow_validation_1 = require("./cow.validation");
const router = express_1.default.Router();
router.post("/", (0, Auth_1.auth)(auth_constant_1.role[1]), (0, validateRequest_1.default)(cow_validation_1.CowZodSchema), cow_controller_1.createCow);
router.get("/", (0, Auth_1.auth)(...auth_constant_1.role), cow_controller_1.getCows);
router.get("/:id", (0, Auth_1.auth)(...auth_constant_1.role), cow_controller_1.getCowById);
router.delete("/:id", (0, Auth_1.auth)(auth_constant_1.role[1]), cow_controller_1.deleteCowById);
router.patch("/:id", (0, Auth_1.auth)(auth_constant_1.role[1]), (0, validateRequest_1.default)(cow_validation_1.UpdatedCowZodSchema), cow_controller_1.updateCowById);
exports.CowRoutes = router;
