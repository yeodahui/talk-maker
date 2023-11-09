import React from "react";
import styled from "styled-components";
import ChatRoom from "../components/ChatRoom";
import Settings from "../components/Settings";

const MakerPage = () => {
  return (
    <>
      <h1>톡 메이커</h1>
      <StyledContainer className="container">
        <div className="cont-chat">
          <ChatRoom />
        </div>
        <div className="cont-settings">
          <Settings />
        </div>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  padding: 0;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 40% 60%;
  height: 70vh;
  overflow: hidden;

  .cont-chat {
    overflow-y: auto;
  }

  .cont-settings {
    border-left: 2px solid lightgray;
    /* background-color: violet; */
  }
`;

export default MakerPage;
