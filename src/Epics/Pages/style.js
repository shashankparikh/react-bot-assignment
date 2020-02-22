import styled from "styled-components";
import { Input } from "antd";

export const HomeConetent = styled.p`
  color: ${props => props.theme.colors.primaryColor};
`;
export const Heading = styled.div`
  margin: 20px 40px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const InputBox = styled(Input)`
  margin: 10px;
`;
