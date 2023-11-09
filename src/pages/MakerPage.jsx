import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ChatRoom from "../components/ChatRoom";
import Settings from "../components/setting/Settings";

const MakerPage = () => {
  const navigate = useNavigate();
  return (
    <StyledContainer className="container">
      <div className="cont-chat">
        <ChatRoom />
      </div>
      <div className="cont-settings">
        <Settings />
      </div>
      <button
        className="button-done"
        onClick={(e) => {
          e.preventDefault();
          navigate("/done");
        }}
      >
        완료!
      </button>
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
  .cont-settings {
    position: relative;
    border-left: 2px solid lightgray;
    overflow-y: auto;
  }
  .button-done {
    position: fixed;
    margin: 20px auto;
    padding: 12px 30px;
    width: fit-content;
    bottom: 0;
    left: 0;
    right: 0;

    border: 0;
    border-radius: 30px;
    font-size: 1.8rem;
    font-weight: bold;
    background-color: var(--primary);
    color: var(--field);
    box-shadow: 0 0 10px rgba(30, 143, 255, 0.3);
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: var(--field);
      color: var(--primary);
    }
  }
`;

export default MakerPage;
