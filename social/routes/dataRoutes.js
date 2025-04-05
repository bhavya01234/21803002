const express = require("express");
const router = express.Router();
const {
    getTopUsersController,
    getPostsController
} = require("../controllers/dataController");

router.get("/users", getTopUsersController);
router.get("/posts", getPostsController);

module.exports = router;
