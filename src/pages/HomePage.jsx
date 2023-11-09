import React from "react";
import styled from "styled-components";
import DateForm from "../components/DateForm";
import FileInputDropBox from "../components/FileInputDropBox";
import { useChatContext } from "../contexts/chatContext";

const HomePage = () => {
  const { chat } = useChatContext();

  return (
    <>
      <StyledDiv className="container">
        <header>
          <h1>톡 메이커: 카카오톡 내보내기 파일 뷰어</h1>
          <p>
            카카오톡 내보내기를 통해 생성된 대화 내역 파일(.txt, .csv)을 대화방
            UI로 편하게 확인하세요!
          </p>
        </header>
        <div className="cont-howto">
          <h2>사용 방법</h2>
          <ol>
            <li>대화 내용을 확인하고 싶은 카카오톡 채팅방에 입장하세요.</li>
            <li>
              카카오톡 채팅방{" "}
              <span className="colored">
                [채팅방 우측 상단 메뉴 > 채팅방 설정 > 저장공간 관리 > 대화내용
                저장]
              </span>
              에서 대화내용을 저장해주세요.
            </li>
            <li>
              저장된 .txt 혹은 .csv 파일을 아래 박스에 드래그 앤 드랍 하거나
              파일 업로드를 클릭해 올려주세요.
            </li>
            <li>대화 내용을 백업하고 싶은 기간을 선택하세요.</li>
            <li>대화방을 편집하거나 테마를 설정한 뒤 완료하세요.</li>
          </ol>
        </div>
        <div>
          <h2>파일 업로드</h2>
          <div className="cont-input">
            <FileInputDropBox />
          </div>
        </div>
        {chat && <DateForm />}
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  @keyframes fadein {
    from {
      transform: translateY(30%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  font-size: 1.6rem;

  h1 {
    position: relative;
    width: fit-content;
    padding: 20px 16px 16px;
    border-radius: 15px;
    background-color: #ffdc00;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    animation: fadein 1s ease-in-out;
    animation-delay: 0.5s;

    &::before {
      display: inline-block;
      content: "";
      width: 20px;
      height: 15px;
      background-color: #ffdc00;
      /* border: 1px solid black; */
      position: absolute;
      transform: skewX(40deg);
      border-radius: 5px;
      bottom: 50%;
      left: -10px;
    }
  }

  h2 {
    margin-bottom: 15px;
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary);
  }

  header {
    padding-left: 15px;
    overflow: hidden;
  }

  .cont-howto {
    .colored {
      color: var(--primary);
      font-weight: bold;
    }
    ol {
      padding-left: 10px;
      list-style-type: decimal;
      list-style-position: inside;

      li {
        padding: 5px 0;
      }
    }
  }
  .cont-input {
    margin-top: 10px;
    height: 300px;
  }
`;

export default HomePage;
