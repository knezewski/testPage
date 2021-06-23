import styled from "styled-components";

export const Container = styled.div`
  /* width: 403px; */
  border-radius: 20px;
  padding: 20px;
  background: #fafafa;
  margin-top: 53px;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  margin-top: 8px;
`;
export const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  text-align: left;
`;

export const StyledButton = styled.button`
  width: 100%;
  border-radius: 16px;
  padding: 14px 12px;
  background: #d6ebff;
  border: none;
  color: #000;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
  margin-top: 24px;

  &:hover {
    transform: scale(1.01);
  }
`;
