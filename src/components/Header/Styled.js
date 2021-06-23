import styled from "styled-components";

export const Container = styled.div`
  padding: 16px 0px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ededed;
  @media (max-width: 600px) {
    border-bottom: none;
  }
`;
export const Title = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 25px;
  color: #000000;
`;
