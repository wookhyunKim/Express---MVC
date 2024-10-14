class Board {
    constructor(
        b_id,
        b_u_id,
        b_title,
        b_content,
        b_upload_date,
        b_status,
        b_comment
    ) {
        this.b_id = b_id; // 게시글 ID
        this.b_u_id = b_u_id; // 작성자 ID
        this.b_title = b_title; // 제목
        this.b_content = b_content; // 내용
        this.b_upload_date = b_upload_date; // 업로드 날짜
        this.b_status = b_status; // 상태
        this.b_comment = b_comment; // 댓글
    }
}
const BOARD_STATUS = {
    WRITTEN: 0,
    DELETED: 1,
    WRITING: 2,
};

module.exports = {
    Board,
    BOARD_STATUS,
};
