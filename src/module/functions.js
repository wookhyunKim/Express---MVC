function get_now() {
  let now = new Date();

  // 월, 일, 시, 분, 초를 2자리로 맞추기
  const year = now.getUTCFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  now = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return now;
}

// modules/responseMessage.ts -> response message 가공
const message = {
  NULL_VALUE: "필요한 값이 없습니다.",
  NOT_FOUND: "존재하지 않는 자원",
  BAD_REQUEST: "잘못된 요청",
  INTERNAL_SERVER_ERROR: "서버 내부 오류",

  // 포스팅 조회
  READ_POST_SUCCESS: "포스팅 조회 성공",
  CREATE_POST_SUCCESS: "포스팅 생성 성공",
  DELETE_POST_SUCCESS: "포스팅 삭제 성공",
  UPDATE_POST_SUCCESS: "포스팅 수정 성공",
};

// modules/statusCode.ts
const statusCode = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  DB_ERROR: 600,
};

module.exports = {
  get_now,
  message,
  statusCode,
};
