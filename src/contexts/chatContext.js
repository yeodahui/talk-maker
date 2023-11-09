// JSON화 된 파일을 전역으로 관리
import { useContext, createContext, useState, useEffect } from "react";

const chatContext = createContext();

export const useChatContext = () => {
  return useContext(chatContext);
};

export const ChatProvider = ({ children }) => {
  const [chat, setChat] = useState();
  const [me, setMe] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    if (chat === null) {
      setMe();
      setUsers();
      return;
    }

    // 중복 불가능한 배열 Set에 대화내역의 User 이름 저장
    const arrUsers = new Set();

    if (chat) {
      chat.map(({ User }) => {
        if (User !== "undefined") {
          arrUsers.add(User);
        }
      });

      setUsers([...arrUsers]);
    }
  }, [chat]);

  const changeUserName = (prevname, newname) => {
    if (prevname === newname) {
      return;
    }

    const index = users.indexOf(prevname);
    if (index !== -1) {
      const newUsers = users;
      newUsers[index] = newname;

      setUsers(newUsers);
    }

    const newChat = chat.map((item) => {
      if (item.User === prevname) {
        item.User = newname;
      }
      return item;
    });
    console.log(newChat);

    if (me === prevname) {
      setMe(newname);
    }

    setChat(newChat);
  };

  const value = {
    chat,
    setChat,
    me,
    setMe,
    changeUserName,
    users,
    setUsers,
  };

  return <chatContext.Provider value={value}>{children}</chatContext.Provider>;
};
