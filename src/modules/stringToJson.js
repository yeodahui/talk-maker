export const stringToJson = (string) => {
  // 1. 문자열을 줄바꿈으로 구분 => 배열에 저장
  const rows = string.split("\n");

  // 2. 빈 배열 생성: string의 각 행을 담을 JSON 객체임
  const jsonArray = [];

  // 3. 제목 행 추출 후, 콤마로 구분 => 배열에 저장
  const header = rows[0].split(",");

  // 4. 내용 행 전체를 객체로 만들어, jsonArray에 담기
  for (let i = 1; i < rows.length - 1; i++) {
    let row = rows[i].split(","); // 각 내용 행을 콤마로 구분
    const obj = {};
    // 각 내용행을 {제목1:내용1, 제목2:내용2, ...} 형태의 객체로 생성
    for (let j = 0; j < header.length; j++) {
      let data = String(row[j]);
      if (j === 0) {
        // 첫 행은 Date 타입으로 변환
        data = new Date(data);
      } else {
        // 나머지 행 앞뒤 큰따옴표 제거
        data = data.slice(1, -1);
      }
      // obj[header[j]] = row[j];
      obj[header[j]] = data;
    }

    // 각 내용 행의 객체를 jsonArray배열에 담기
    jsonArray.push(obj);
  }

  // 5. 완성된 JSON 객체 배열 반환
  return jsonArray;

  // 문자열 형태의 JSON으로 반환할 경우, 아래 코드 사용
  // return JSON.stringify(jsonArray);
};
