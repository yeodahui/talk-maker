import React from "react";
import styled from "styled-components";
import UserSetting from "./UserSetting";
import ThemeSetting from "./ThemeSetting";

const Settings = () => {
  return (
    <StyledSettings>
      <header>
        <h2>대화방 꾸미기</h2>
      </header>
      <form className="form-settings">
        <UserSetting />
        <ThemeSetting />
      </form>
    </StyledSettings>
  );
};

const StyledSettings = styled.section`
  font-size: 1.6rem;

  header {
    padding: 15px;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    font-weight: bold;
    text-align: center;
    background-color: var(--primary);
    color: var(--field);
    /* border-bottom: 1px solid lightgray; */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .form-settings {
    padding: 20px;
    margin-top: 10px;
  }
`;

export default Settings;
