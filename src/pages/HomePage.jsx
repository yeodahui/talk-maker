import React from "react";
import styled from "styled-components";
import DateForm from "../components/DateForm";
import FileInputDropBox from "../components/FileInputDropBox";
import { useChatContext } from "../contexts/chatContext";

const HomePage = () => {
  const { chat } = useChatContext();

  return (
    <>
      <h1>톡 메이커</h1>
      <StyledDiv className="container">
        <p>
          카카오톡 내보내기를 통해 생성된 대화 내역 파일(.txt, .csv)을 대화방
          형태로 둘러보세요.
        </p>
        <h2>사용 방법</h2>
        <ol>
          <li>대화 내용을 백업하고 싶은 카카오톡 채팅방에 입장하세요.</li>
          <li>
            [채팅방 우측 상단 메뉴 > 채팅방 설정 > 저장공간 관리 > 대화내용
            저장]에서 대화내용을 저장해주세요.
          </li>
          <li>
            저장된 .txt 혹은 .csv 파일을 아래 박스에 드래그 앤 드랍 하거나 파일
            업로드를 클릭해 올려주세요.
          </li>
          <li>대화 내용을 백업하고 싶은 기간을 선택하세요.</li>
          <li>대화방을 편집하거나 테마를 설정한 뒤 완료하세요.</li>
        </ol>
        <h2>파일 업로드</h2>
        <div className="cont-input">
          <FileInputDropBox />
        </div>
        {chat && <DateForm />}
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  .cont-input {
    margin-top: 10px;
    height: 300px;
  }
`;

export default HomePage;
