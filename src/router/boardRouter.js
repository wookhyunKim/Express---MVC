const express = require("express");
const router = express.Router();
const board_controller = require("../controller/boardController.js");

router.get("/g", board_controller.say);
router.get("/v1/show", board_controller.getBoardAll);
router.get("/v1/show/:id", board_controller.getBoardOne);
router.post("/v1/write", board_controller.writeBoard);
router.patch("/v1/update/:id", board_controller.updateBoard);
router.delete("/v1/delete/:id", board_controller.deleteBoard);
router.patch("/v1/delete/update/:id", board_controller.modifyBoard);

module.exports = router;
