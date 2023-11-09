import React, { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useChatContext } from "../contexts/chatContext";
import { useChatThemeContext } from "../contexts/chatThemeContext";
import ChatBubble from "./ChatBubble";

const ChatRoom = () => {
  const navigate = useNavigate();
  const { theme } = useChatThemeContext();
  const { chat, setChat } = useChatContext();
  const [me, setMe] = useState();

  useEffect(() => {
    if (!chat) {
      navigate("/");
    }
  });
  useLayoutEffect(() => {
    if (chat) {
      setMe(chat[0].User);
    }
  }, [chat]);

  return (
    chat && (
      <StyledChatList theme={theme}>
        {chat.map(({ User, Message, Date }) => (
          <ChatBubble
            isMe={User === me}
            user={User}
            date={Date}
            message={Message}
          />
        ))}
      </StyledChatList>
    )
  );
};

const StyledChatList = styled.ol`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  font-size: 1.6rem;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
`;

export default ChatRoom;
