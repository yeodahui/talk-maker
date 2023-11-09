import React from "react";
import { useRef } from "react";
import downloadPdf from "dom-to-pdf";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ChatRoom from "../components/ChatRoom";
import { useChatContext } from "../contexts/chatContext";

const DonePage = () => {
  const { setChat } = useChatContext();
  const chatRoom = useRef();
  const navigate = useNavigate();

  const downloadPDF = () => {
    const element = chatRoom.current;
    console.log(element);
    const options = {
      filename: "csvToChat.pdf",
    };

    downloadPdf(element, options, (pdf) => {
      // domToPdf(element, options, (pdf) => {
      console.log(pdf);
      console.log("done");
    });
  };

  return (
    <StyledContainer className="container">
      <div className="cont-chat" ref={chatRoom}>
        <ChatRoom />
      </div>
      <div className="cont-info">
        <h2>완성</h2>
        <p>
          아래 버튼을 선택해 다시 테마를 변경하거나 홈으로 돌아갈 수 있습니다.
        </p>
        <div className="actions">
          <button
            className="button-home"
            onClick={(e) => {
              e.preventDefault();
              setChat();
              navigate("/");
            }}
          >
            홈으로
          </button>
          <button
            className="button-prev"
            onClick={(e) => {
              e.preventDefault();
              navigate("/maker");
            }}
          >
            이전으로
          </button>
        </div>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 0;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 40% 60%;
  overflow: hidden;

  .cont-chat {
    overflow-y: auto;
  }
  .cont-info {
    padding: 20px;
    position: relative;
    border-left: 2px solid lightgray;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--primary);
    }
    p {
      font-size: 1.6rem;
      color: gray;
    }
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  [class|="button"] {
    padding: 8px 15px;
    border: 0;
    border-radius: 30px;
    font-size: 1.6rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .button-home {
    background-color: var(--primary);
    color: var(--field);

    &:hover {
      box-shadow: 0 0 10px rgba(30, 143, 255, 0.3);

      background-color: var(--field);
      color: var(--primary);
    }
  }
  .button-prev {
    background-color: #ddd;
    color: var(--text);

    &:hover {
      background-color: #eee;
    }
  }
`;

export default DonePage;
