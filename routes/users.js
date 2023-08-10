const express = require("express");
const router = express.Router();
const users = require("../seedData")

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.get("/", async (req, res) => {
    res.json(users);
});

router.get("/:id", async (req, res) => {
    res.json(users[req.params.id - 1]);
});

router.post("/", async (req, res) => {
    users.push(req.body);
});

router.put("/:id", async (req, res) => {
    users.splice(req.params.id - 1, 1, req.body)
});

router.delete("/:id", async (req, res) => {
    users.splice(req.params.id - 1, 1)
});

module.exports = router;