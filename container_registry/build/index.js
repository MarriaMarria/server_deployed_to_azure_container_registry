"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = express_1.default();
app.get("/", (req, res) => {
    res.send("Welcome to the jungle!");
});
app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});
