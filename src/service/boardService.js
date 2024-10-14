const BoardDao = require("../dao/boardDao.js");
const BoardInsertDto = require("../dto/boardDto.js");

async function getBoardAll() {
    const result = await BoardDao.getBoardAllData();
    return result;
}

async function getBoardOne(id) {
    const board = await BoardDao.getBoardOneData(id);
    return board;
}

async function writeBoard(userId, title, content) {
    const boardInsertDto = new BoardInsertDto(userId, title, content);
    const result = await BoardDao.writeBoard(boardInsertDto);
    // const result = await BoardDao.writeBoard(userId, title, content);
    return result;
}

async function updateBoard(userId, title, content) {
    const result = await BoardDao.updateBoard(userId, title, content);
    return result;
}
async function deleteBoard(id) {
    const result = await BoardDao.deleteBoard(id);
    return result;
}
async function modifyBoard(id) {
    const result = await BoardDao.modifyBoard(id);
    return result;
}

module.exports = {
    getBoardAll,
    getBoardOne,
    writeBoard,
    updateBoard,
    deleteBoard,
    modifyBoard,
};
