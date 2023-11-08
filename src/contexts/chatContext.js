// JSON화 된 파일을 전역으로 관리
import { useContext, createContext, useState } from "react";

const chatContext = createContext();

export const useChatContext = () => {
  return useContext(chatContext);
};

export const ChatProvider = ({ children }) => {
  const [chat, setChat] = useState();

  return (
    <chatContext.Provider value={{ chat, setChat }}>
      {children}
    </chatContext.Provider>
  );
};
