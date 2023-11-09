import styled from "styled-components";
import { useChatContext } from "../../contexts/chatContext";
import SettingOption from "./SettingOption";

const UserSetting = () => {
  const { users, me, setMe, changeUserName } = useChatContext();

  const clickHandler = (e) => {
    e.preventDefault();
    const target = e.target.textContent;
    const newname = prompt(
      "변경하고자 하는 이름을 입력해주세요.(1자 이상 20자 이하)",
      target
    );
    console.log(target);
    console.log(newname);
    if (target && newname) {
      if (newname.length >= 1 && newname.length <= 20) {
        changeUserName(target, newname);
      } else {
        alert("이름은 1자 이상 20자 이하여야 합니다.");
      }
      return;
    }
  };

  return (
    <SettingOption
      title={"프로필 편집"}
      desc={
        "대화 참여자 프로필을 편집합니다. 참여자 이름을 변경하려면 이름을 클릭하세요."
      }
    >
      <StyledList>
        {users &&
          users.map((user) => (
            <li>
              <div className="username">
                <label
                  className={`label-me ${user === me ? "selected" : ""}`}
                  htmlFor={`${user}`}
                >
                  me
                </label>
                <input
                  type="radio"
                  name="me"
                  id={user}
                  value={"me"}
                  hidden
                  onChange={(e) => {
                    setMe(e.target.id);
                  }}
                />
                <p onClick={clickHandler}>{user}</p>
              </div>
            </li>
          ))}
      </StyledList>
    </SettingOption>
  );
};

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;

  .username {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px;

    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;

    background-color: var(--field);
    border-radius: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

    .label-me {
      padding: 5px;
      background-color: #bbb;
      color: var(--field);
      /* font-weight: bold; */
      border-radius: 20px;
      cursor: pointer;

      &.selected {
        background-color: var(--primary);
        color: var(--field);
      }
    }
  }
`;

export default UserSetting;
