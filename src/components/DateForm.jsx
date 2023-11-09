import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useChatContext } from "../contexts/chatContext";
import { findMinMaxDate } from "../modules/findMinMaxDate";

const DateForm = () => {
  const navigate = useNavigate();
  const { chat, setChat } = useChatContext();
  const [minmax, setMinmax] = useState({
    min: "",
    max: "",
  });
  const [dateRange, setDateRange] = useState({
    start: "",
    end: "",
  });

  useEffect(() => {
    if (chat) {
      console.log(chat);
      const minmax = findMinMaxDate(chat);
      setMinmax({
        min: minmax.min,
        max: minmax.max,
      });
      setDateRange({
        start: minmax.min,
        end: minmax.max,
      });
    }
  }, [chat]);

  const startChangeHander = (e) => {
    setDateRange((prev) => ({
      ...prev,
      start: e.target.value,
    }));
  };
  const endChangeHander = (e) => {
    setDateRange((prev) => ({
      ...prev,
      end: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const startDate = new Date(dateRange.start);
    const endDate = new Date(dateRange.end);
    endDate.setDate(endDate.getDate() + 1);

    const newChat = chat.filter(
      (item) => item.Date >= startDate && item.Date < endDate
    );

    if (newChat.length === 0) {
      alert(
        "선택한 기간 동안 대화내역이 존재하지 않습니다. 날짜를 다시 선택해주세요."
      );
    } else {
      setChat(newChat);
      navigate("/maker");
    }
  };

  return (
    <StyledDiv>
      <div className="modal">
        <h2>날짜 선택</h2>
        <p>데이터를 추출할 날짜를 선택하세요.</p>
        <form className="date-form" onSubmit={submitHandler}>
          <div>
            <label htmlFor={"startDate"}>시작일</label>
            <input
              type="date"
              name="startDate"
              id="startdate"
              value={dateRange.start}
              min={minmax.min}
              max={minmax.max}
              onChange={startChangeHander}
            />
          </div>
          <div>
            <label htmlFor={"endDate"}>종료일</label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={dateRange.end}
              min={dateRange.start}
              max={minmax.max}
              onChange={endChangeHander}
            />
          </div>
          <button type="submit">확인</button>
        </form>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);

  .modal {
    width: 400px;
    padding: 30px;
    margin: auto;
    display: flex;
    flex-direction: column;

    & > p {
      color: gray;
    }

    border-radius: 30px;
    background-color: var(--field);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }

  .date-form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 1.6rem;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      label {
        font-weight: bold;
      }
      input {
        padding: 5px 10px;
        font-size: inherit;
        border: 1px solid lightgray;
        border-radius: 8px;

        &::-webkit-calendar-picker-indicator {
          opacity: 0.6;
        }
      }
    }
    button {
      border: 0;
      padding: 10px 10px;
      background-color: var(--primary);
      color: var(--field);
      font-weight: bold;
      font-size: 2rem;
    }
  }
`;

export default DateForm;
