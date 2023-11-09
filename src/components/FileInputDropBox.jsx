import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useChatContext } from "../contexts/chatContext";
import { stringToJson } from "../modules/stringToJson";

const FileInputDropBox = ({ file, setFile }) => {
  const [dragging, setDragging] = useState(false);
  const { setChat } = useChatContext();
  const fileInput = useRef();

  const validateFileType = (file) => {
    const abailavleTypes = ["text/csv", "text/txt"];
    return abailavleTypes.includes(file.type);
  };

  const processFile = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const jsonChat = stringToJson(reader.result);
      if (jsonChat) {
        setChat(jsonChat);
      } else {
        alert("파일 업로드에 실패했습니다.");
      }
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
    if (validateFileType(file)) {
      processFile(file);
    }
  };
  // Click해서 파일을 업로드했을 경우
  const fileChangeHandler = (e) => {
    e.preventDefault();
    console.log("file input changed");

    const file = e.target.files[0];

    if (validateFileType(file)) {
      processFile(file);
    }
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
      <StyledDropDiv
        className={`dropbox ${dragging ? "dragover" : ""}`}
        id="dropbox"
        onDragEnter={dragEnterHandler}
        onDragLeave={dragLeaveHandler}
        onDragOver={dragOverHandler}
        onDrop={dropHandler}
        onClick={() => fileInput.current.click()}
      >
        <label htmlFor="fileInput">
          {dragging ? "여기에 드롭" : "여기에 파일을 Drag & Drop(.csv, .txt)"}
        </label>
        <input
          type="file"
          name="대화내역 업로드"
          id="fileInput"
          hidden
          onChange={fileChangeHandler}
          ref={fileInput}
        />
        {!dragging && (
          <>
            <p className="noti">혹은</p>
            <button
              className="uploadButton"
              // onClick={() => {
              //   fileInput.current.click();
              // }}
            >
              파일 업로드
            </button>
          </>
        )}
      </StyledDropDiv>
    </>
  );
};

const StyledDropDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 10px;

  color: var(--primary);
  font-weight: bold;
  font-size: 1.6rem;
  /* background-color: white; */
  border-radius: 20px;
  border: 5px dashed var(--primary);

  .noti {
    font-size: 1.2rem;
    color: #aaa;
  }

  .uploadButton {
    padding: 8px 10px;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    background-color: var(--primary);
    color: var(--field);
    font-weight: bold;
  }

  &.dragover {
    background-color: #e0f0ff;
  }
`;

export default FileInputDropBox;
