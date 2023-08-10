const express = require("express");
const router = express.Router();
const { User } = require("../models/index")

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.get("/", async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

router.get("/:id", async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user);
});

router.post("/", async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

router.put("/:id", async (req, res) => {
    await User.update({ name: "Jordan" },
     {
        where: {
            id: req.params.id
        }
        });
        const updatedUser = await User.findByPk(req.params.id);
    res.json(updatedUser);
});

router.delete("/:id", async (req, res) => {
    const deletedUser = await User.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json(deletedUser);
});

module.exports = router;