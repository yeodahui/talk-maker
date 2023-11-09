import React from "react";
import styled from "styled-components";

const SettingOption = ({ title, desc, children }) => {
  return (
    <StyledContainer>
      <div className="header">
        <h3>{title}</h3>
        {desc && <p>{desc}</p>}
      </div>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  font-size: 1.6rem;

  &:not(:last-child) {
    padding-bottom: 50px;
  }

  .header {
    margin-bottom: 25px;
    & > h3 {
      color: var(--primary);
      font-size: 1.8rem;
      margin-bottom: 10px;
      font-weight: bold;
    }
    & > p {
      color: gray;
    }
  }
`;

export default SettingOption;
