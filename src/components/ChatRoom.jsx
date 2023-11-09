import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useChatContext } from "../contexts/chatContext";
import { useChatThemeContext } from "../contexts/chatThemeContext";
import ChatBubble from "./ChatBubble";

const ChatRoom = () => {
  const navigate = useNavigate();
  const { theme } = useChatThemeContext();
  const { chat, me } = useChatContext();

  useEffect(() => {
    if (!chat) {
      navigate("/");
    }
  });

  return (
    chat && (
      <StyledChatList theme={theme}>
        {chat.map(({ User, Message, Date }, index) => (
          <ChatBubble
            isMe={User === me}
            // isMe={true}
            user={User}
            date={Date}
            message={Message}
            index={index}
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
