import styled from "styled-components";

export const ChatSection = styled.div`
  width: 100%;
  padding: 5% 10%;
  height: 100vh;
  overflow-y: scroll;
`;

export const UserChat = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const BotChat = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
`;

export const UserResponse = styled.div`
  padding: 10px;
  color: white;
  background: #1b75bb;
  font-size: 12px;
  border-radius: 8px 0px 8px 8px;
`;

export const BotResponse = styled.div`
  padding: 10px;
  color: #333333;
  background: #e2e2e2;
  font-size: 12px;
  border-radius: 0px 8px 8px 8px;
`;

export const MessageDate = styled.div`
  font-size: 12px;
  margin-top: 5px;
  color: #333333;
`;
