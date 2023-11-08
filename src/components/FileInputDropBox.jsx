import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useChatContext } from "../contexts/chatContext";
import { stringToJson } from "../modules/stringToJson";

const FileInputBox = ({ file, setFile }) => {
  const [dragging, setDragging] = useState(false);
  const { setChat } = useChatContext();
  const fileInput = useRef();

  const processFile = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const jsonChat = stringToJson(reader.result);
      console.log(jsonChat.slice(10));
      setChat(jsonChat);
    };

    reader.readAsText(file, "euc-kr");
  };

  // ============== Event Handlers ==============
  // 드래그 & 드랍을 통해 업로드했을 경우
  const dropHandler = (e) => {
    e.preventDefault();
    setDragging(false);
    console.log("file dropped");

    const file = e.dataTransfer?.files[0];
    processFile(file);
  };
  // Click해서 파일을 업로드했을 경우
  const fileChangeHandler = (e) => {
    e.preventDefault();
    console.log("file input changed");

    const file = e.target.files[0];
    processFile(file);
  };
  const dragEnterHandler = (e) => {
    e.preventDefault();
    setDragging(true);
    // console.log("dragenter");
  };
  const dragOverHandler = (e) => {
    e.preventDefault();
    setDragging(true);
    // console.log("dragover");
  };
  const dragLeaveHandler = (e) => {
    e.preventDefault();
    setDragging(false);
    // console.log("dragleave");
  };
  // ============== Event Handlers(End) ==============

  return (
    <>
      <StyledDropButton
        className={`dropbox ${dragging ? "active" : ""}`}
        id="dropbox"
        onDragEnter={dragEnterHandler}
        onDragLeave={dragLeaveHandler}
        onDragOver={dragOverHandler}
        onDrop={dropHandler}
        onClick={() => fileInput.current.click()}
      >
        <label htmlFor="fileInput">
          {dragging ? "여기에 드롭" : "여기에 파일을 Drag & Drop 하세요 (.csv)"}
        </label>
        <input
          type="file"
          name="대화내역 업로드"
          id="fileInput"
          hidden
          onChange={fileChangeHandler}
          ref={fileInput}
        />
      </StyledDropButton>
    </>
  );
};

const StyledDropButton = styled.button`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: dodgerblue;
  font-weight: bold;
  font-size: 1.6rem;
  background-color: white;
  border-radius: 20px;
  border: 5px dashed dodgerblue;

  &.active {
    background-color: #1e8fff22;
  }
`;

export default FileInputBox;
