"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./src/database");
const body_parser_1 = __importDefault(require("body-parser"));
const user_router_1 = require("./src/routers/user.router");
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 1337;
app.use(body_parser_1.default.json());
app.use((0, express_session_1.default)({
    secret: 'dont tell anybody',
}));
app.use((0, cors_1.default)());
app.use('/v1', [user_router_1.userRouter]);
app.listen(port, () => {
    (0, database_1.tryToAuthenticate)().then(() => {
        console.log(`[server]: Server is running at https://localhost:${port}`);
    });
});
