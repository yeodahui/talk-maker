import { useState } from "react";
import styled from "styled-components";
import { useChatThemeContext } from "../../contexts/chatThemeContext";
import SettingOption from "./SettingOption";

const ThemeSetting = () => {
  const { defaultTheme, theme, setTheme } = useChatThemeContext();
  const [bgColor, setBgColor] = useState();
  const [myBubbleColor, setMyBubbleColor] = useState({
    background: defaultTheme.myBubbleBg,
    text: defaultTheme.myBubbletext,
  });
  const [bubbleColor, setBubbleColor] = useState({
    background: defaultTheme.bubbleBg,
    text: defaultTheme.bubbletext,
  });

  const bgHandler = (e) => {
    e.preventDefault();
    setBgColor(e.target.value);
    setTheme((prev) => ({
      ...prev,
      background: bgColor,
    }));
    return;
  };
  const myBubbleHandler = (e) => {
    e.preventDefault();
    if (e.target.id === "myBubbleBg") {
      setMyBubbleColor((prev) => ({
        ...prev,
        background: e.target.value,
      }));
      setTheme((prev) => ({
        ...prev,
        myBubbleBg: myBubbleColor.background,
      }));
    } else {
      setMyBubbleColor((prev) => ({
        ...prev,
        background: e.target.value,
      }));
      setTheme((prev) => ({
        ...prev,
        myBubbleText: myBubbleColor.text,
      }));
    }
    return;
  };
  const bubbleHandler = (e) => {
    e.preventDefault();
    if (e.target.id === "bubbleBg") {
      setBubbleColor((prev) => ({
        ...prev,
        background: e.target.value,
      }));
      setTheme((prev) => ({
        ...prev,
        bubbleBg: bubbleColor.background,
      }));
    } else {
      setBubbleColor((prev) => ({
        ...prev,
        background: e.target.value,
      }));
      setTheme((prev) => ({
        ...prev,
        bubbleText: bubbleColor.text,
      }));
    }
    return;
  };

  return (
    <SettingOption
      title={"테마 설정"}
      desc={"채팅방, 말풍선 배경 및 텍스트 색상 테마를 변경합니다."}
    >
      <StyledList theme={theme}>
        <li>
          <h4>채팅방 배경</h4>
          <div className="cont-chip bg-color">
            <label className="chip-color" htmlFor="background"></label>
            <input
              className="hidden"
              type="color"
              name="background"
              id="background"
              value={bgColor}
              hidden
              onChange={bgHandler}
            />
          </div>
        </li>
        <li>
          <h4>내 말풍선</h4>
          <div className="cont-chip myBubbleBg-color">
            <label className="chip-color" htmlFor="myBubbleBg"></label>
            <input
              className="hidden"
              type="color"
              name="myBubbleBg"
              id="myBubbleBg"
              value={bgColor}
              hidden
              onChange={myBubbleHandler}
            />
          </div>
        </li>
        <li>
          <h4>상대 말풍선</h4>
          <div className="cont-chip bubbleBg-color">
            <label className="chip-color" htmlFor="bubbleBg"></label>
            <input
              className="hidden"
              type="color"
              name="bubbleBg"
              id="bubbleBg"
              value={bgColor}
              hidden
              onChange={bubbleHandler}
            />
          </div>
        </li>
      </StyledList>
    </SettingOption>
  );
};

const StyledList = styled.ul`
  li {
    padding: 10px 0;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
  }
  h4 {
    font-weight: bold;
  }

  .cont-chip {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .chip-color {
    width: 30px;
    height: 30px;
    border: 1px solid lightgray;
    border-radius: 50%;
    cursor: pointer;
  }
  .bg-color {
    .chip-color {
      background-color: ${({ theme }) => theme.background};
    }
  }

  .myBubbleBg-color {
    .chip-color {
      background-color: ${({ theme }) => theme.myBubbleBg};
    }
  }

  .BubbleBg-color {
    .chip-color {
      background-color: ${({ theme }) => theme.bubbleBg};
    }
  }
`;

export default ThemeSetting;
