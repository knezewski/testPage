import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 28px;
  grid-template-columns: 220px 242px;
  width: 534px;
  border-radius: 20px;
  padding: 16px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 16px 20px;
  }
`;

export const Column = styled.div`
  @media (max-width: 600px) {
    margin: 0;
  }
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
  @media (max-width: 600px) {
    font-size: 17px;
    font-style: bold;
    font-weight: 600;
    line-height: 23px;
    text-align: left;
  }
`;
export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
  color: #9e9e9e;
`;

export const Clipboard = styled.input.attrs(() => ({
  type: "text",
  placeholder: "some text",
}))`
  outline: none;
  border: transparent;
  width: 242px;
  border-radius: 12px;
  padding: 16px 30px 16px 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.25px;
  text-align: left;
  color: #9e9e9e;
  margin-top: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CopyButton = styled.div`
  position: absolute;
  width: 20px;
  height: 10px;
  top: 33px;
  right: 9px;
`;

export const CopyBox = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Image = styled.img.attrs((props) => ({
  height: props.height || "0px",
  width: props.width || "0px",
  marginTop: props.marginTop || "0px",
}))`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin-top: ${(props) => props.marginTop};
  align-self: center;
`;

export const StyledButton = styled.button`
  width: 242px;
  border-radius: 16px;
  padding: 14px 5px;
  background: #d6ebff;
  border: none;
  color: #000;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  text-align: center;
  margin-top: 24px;

  &:hover {
    transform: scale(1.01);
  }
`;
