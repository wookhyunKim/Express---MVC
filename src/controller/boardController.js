const BoardService = require("../service/boardService.js");

async function getBoardAll(req, res) {
    const result = await BoardService.getBoardAll();
    if (result) {
        res.json(result);
    } else {
        console.log("err : ", error.message);
        // res.status(500).json({ error: error.message });
    }
}
async function say(req, res) {
    res.send("hello world");
}
async function getBoardOne(req, res) {
    const id = req.params.id;
    const board = await BoardService.getBoardOne(id);
    if (board) {
        res.json(board);
    } else {
        console.log("err : ", error.message);
    }
}

async function writeBoard(req, res) {
    const userId = "wookhyun";
    const title = req.body.title;
    const content = req.body.content;
    const result = await BoardService.writeBoard(userId, title, content);
    if (result) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
}

async function updateBoard(req, res) {
    const id = req.params.id;
    const title = req.body.title;
    const content = req.body.content;
    const result = await BoardService.updateBoard(id, title, content);
    if (result) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
}

async function deleteBoard(req, res) {
    const id = req.params.id;
    const result = await BoardService.deleteBoard(id);
    if (result) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
}

async function modifyBoard(req, res) {
    const id = req.params.id;
    const result = await BoardService.modifyBoard(id);
    if (result) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
}
module.exports = {
    getBoardAll,
    getBoardOne,
    writeBoard,
    updateBoard,
    deleteBoard,
    modifyBoard,
    say,
};
