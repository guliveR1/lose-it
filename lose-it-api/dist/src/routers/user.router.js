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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const crypto_1 = require("crypto");
const express_1 = __importDefault(require("express"));
const User_1 = require("../models/User");
exports.userRouter = express_1.default.Router();
const sha256 = (input) => (0, crypto_1.createHash)('sha256').update(input).digest('hex');
exports.userRouter.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password: inputPassword } = req.body;
    const user = yield User_1.User.findOne({ where: { email } });
    if (user) {
        const _a = user.toJSON(), { password: userPassword } = _a, restOfUser = __rest(_a, ["password"]);
        if (sha256(inputPassword) === userPassword) {
            req.session.user = restOfUser;
            res.json({ success: true, user: restOfUser });
        }
        else {
            res.status(400).json({ success: false, error: 'WRONG_PASSWORD' });
        }
    }
    else {
        res.status(404).json({ success: false, error: 'USER_NOT_FOUND' });
    }
}));
exports.userRouter.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield User_1.User.findOne({ where: { email } });
    if (!user) {
        yield User_1.User.create({ email, password: sha256(password) });
        req.session.user = { email, onboarded: false };
        res.json({ success: true });
    }
    else {
        res.status(400).json({ success: false, error: 'USER_EXISTS' });
    }
}));
