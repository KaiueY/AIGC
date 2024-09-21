"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app_config_1 = require("./app.config");
const post_router_1 = __importDefault(require("../post/post.router"));
const app = express_1.default();
app.use(cors_1.default({
    origin: app_config_1.ALLOW_ORIGIN,
    exposedHeaders: 'X-Total-Count'
}));
app.use(post_router_1.default);
exports.default = app;
//# sourceMappingURL=index.js.map