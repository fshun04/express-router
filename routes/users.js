const express = require("express");
const router = express.Router();
const { User, Show } = require("../models/index");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

router.post("/:name/:age", async (req, res) => {
  const user = await User.create({
    name: req.params.name,
    age: req.params.age,
  });
  res.json(user);
});

router.put("/:id", async (req, res) => {
  const updatedUser = await User.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json(updatedUser);
});

router.delete("/:id", async (req, res) => {
  const deletedUser = await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(deletedUser);
});

module.exports = router;
