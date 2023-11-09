import { useContext, createContext, useState } from "react";

const ChatThemeContext = createContext();

export const useChatThemeContext = () => {
  return useContext(ChatThemeContext);
};

export const ChatThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    background: "#B2C7D9",
    bubbleBg: "#EEEEEE",
    bubbletext: "#222222",
    myBubbleBg: "#FFDC00",
    myBubbleText: "#222222",
  });

  return (
    <ChatThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ChatThemeContext.Provider>
  );
};
