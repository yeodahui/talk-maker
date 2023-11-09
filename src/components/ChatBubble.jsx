import React from "react";
import styled from "styled-components";
import { useChatThemeContext } from "../contexts/chatThemeContext";

const ChatBubble = ({ isMe, user, date, message, index }) => {
  const { theme } = useChatThemeContext();
  const time = new Date(date);
  const timeObj = {
    period: time.getHours() < 12 ? "오전" : "오후",
    hours: String(time.getHours()),
    minutes: String(time.getMinutes()).padStart(2, "0"),
  };

  return (
    <StyledBubble
      theme={theme}
      onClick={() => {
        // 삭제할 때 이용
        console.log(index);
      }}
    >
      <p className={`name ${isMe ? "right" : "left"}`}>{user}</p>
      <div className={`content ${isMe ? "right" : "left"}`}>
        <p className={`message`}>{message}</p>
        <p className="time">{`${timeObj.period} ${timeObj.hours}:${timeObj.minutes}`}</p>
      </div>
    </StyledBubble>
  );
};

const StyledBubble = styled.li`
  /* width: 100%; */

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  .name {
    margin: 5px;
    font-size: 1.4rem;
    font-weight: bold;

    &.right {
      text-align: end;
    }
  }

  .content {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-end;
    /* width: 100%; */

    &.right {
      flex-direction: row-reverse;

      .message {
        background-color: ${({ theme }) => theme.myBubbleBg};
        color: ${({ theme }) => theme.myBubbleText};
      }
    }

    .message {
      display: inline-block;
      max-width: 70%;
      padding: 10px;
      border-radius: 10px;
      font-size: 1.6rem;
      line-height: normal;
      word-wrap: break-word;
      white-space: pre-line;

      background-color: ${({ theme }) => theme.bubbleBg};
      color: ${({ theme }) => theme.bubbleText};
    }

    .time {
      display: inline-block;
      margin: 0 5px;
      font-size: 1.2rem;
      color: #555;
    }
  }
`;

export default ChatBubble;
