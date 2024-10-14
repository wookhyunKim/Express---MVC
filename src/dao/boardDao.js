const db = require("../config/db.js");
const func = require("../module/functions.js");
const { Board, BOARD_STATUS } = require("../model/board.js");
// ================================================================================================
async function getPool() {
    const conn = await new Promise((resolve, reject) => {
        db.pool.getConnection((err, conn) => {
            if (err) {
                reject(err);
            } else {
                resolve(conn);
            }
        });
    });
    return conn;
}
// ================================================================================================
const BoardDao = {
    getBoardAllData: async () => {
        let boards = [];
        try {
            // const conn = getPool();
            const conn = await new Promise((resolve, reject) => {
                db.pool.getConnection((err, conn) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(conn);
                    }
                });
            });
            const sql = "SELECT * FROM board ORDER BY b_upload_date DESC";
            const [rows] = await db.execute(sql);
            for (let i = 0; i < rows.length; i++) {
                let board = new Board(
                    rows[i].b_id, // 게시글 ID
                    rows[i].b_u_id, // 작성자 ID
                    rows[i].b_title, // 제목
                    rows[i].b_content, // 내용
                    rows[i].b_upload_date, // 업로드 날짜
                    rows[i].b_status, // 상태
                    rows[i].b_comment // 댓글
                );
                boards.push(board);
            }
            conn.release();
        } catch (e) {
            // db get pool fail
            throw e;
        }
        return boards;
    },

    getBoardOneData: async (id) => {
        let board;
        try {
            const conn = await new Promise((resolve, reject) => {
                db.pool.getConnection((err, conn) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(conn);
                    }
                });
            });
            const sql = "select * from board where b_id = ?";
            const [rows] = await db.execute(sql, [id]);
            board = new Board(
                rows[0].b_id, // 게시글 ID
                rows[0].b_u_id, // 작성자 ID
                rows[0].b_title, // 제목
                rows[0].b_content, // 내용
                rows[0].b_upload_date, // 업로드 날짜
                rows[0].b_status, // 상태
                rows[0].b_comment // 댓글
            );
            conn.release();
        } catch (e) {
            throw e;
        }
        return board;
    },

    // writeBoard: async (userId, title, content) => {
    writeBoard: async (boardInsertDto) => {
        let result;
        try {
            const conn = await new Promise((resolve, reject) => {
                db.pool.getConnection((err, conn) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(conn);
                    }
                });
            });
            let now = func.get_now();
            const sql =
                "INSERT INTO board (b_u_id, b_title, b_content, b_upload_date) VALUES (?, ?, ?, ?);";
            // const query_values = [userId, title, content, now];
            const query_values = [
                boardInsertDto.b_u_id,
                boardInsertDto.b_title,
                boardInsertDto.b_content,
                now,
            ];
            result = await conn.execute(sql, query_values);
            conn.release();
            console.log("===== write board return value:  ", result);
        } catch (e) {
            throw e;
        }
        return result;
    },

    updateBoard: async (id, title, content) => {
        let result;
        try {
            const conn = await new Promise((resolve, reject) => {
                db.pool.getConnection((err, conn) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(conn);
                    }
                });
            });
            const sql =
                "update board set b_title = ?, b_content = ? where b_id = ?";
            const query_values = [title, content, id];
            result = await conn.execute(sql, query_values);
            conn.release();
            console.log("===== update board return value:  ", result);
        } catch (e) {
            throw e;
        }
        return result;
    },

    deleteBoard: async (id) => {
        let result;
        try {
            const conn = await new Promise((resolve, reject) => {
                db.pool.getConnection((err, conn) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(conn);
                    }
                });
            });
            const sql = "delete from board where b_id = ?";
            result = await conn.execute(sql, [id]);
            conn.release();
            console.log("===== delete board return value:  ", result);
        } catch (e) {
            throw e;
        }
        return result;
    },

    // modify status  because of not deleting
    modifyBoard: async (id) => {
        let result;
        try {
            const conn = await new Promise((resolve, reject) => {
                db.pool.getConnection((err, conn) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(conn);
                    }
                });
            });
            const sql = "update board set b_status = ? where b_id = ?";
            const query_values = [1, id];
            result = await conn.execute(sql, query_values);
            conn.release();
        } catch (e) {
            throw e;
        }
        return result;
    },
};

// let boardInsertDto = new BoardInsertDto(
//     rows[i].b_id, // 게시글 ID
//     "wookhyun",
//     rows[i].b_title, // 제목
//     rows[i].b_content // 내용
// );

module.exports = BoardDao;
