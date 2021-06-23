import styled from "styled-components";

export const StyledButton = styled.button.attrs((props) => ({
  padding: props.padding || "14px 203px"
}))`
  /* width: 450px; */
  border-radius: 13px;
  padding: ${(props) => props.padding};
  background: ${(props) => (props.primary ? '#9E9E9E' : '#000')};
  border: none;
  letter-spacing: 2px;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
  @media (max-width: 600px) {
    margin-top: 43px;
    margin-bottom: 66px;
    padding: 14px  61px;
    width:312px;
  }

  &:hover {
    transform: scale(1.02);
  }

`