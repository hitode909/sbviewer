"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = (app) => {
    app.get("/", (req, res) => {
        res.render("index");
    });
};
//# sourceMappingURL=routes.js.map