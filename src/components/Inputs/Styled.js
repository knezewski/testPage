import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) => (props.center ? "center" : null)};
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.25px;
  text-align: left;
  margin-top: 42px;
  @media (max-width: 1100px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
  }
`;

export const Error = styled(Title)`
  margin-top: 11px;
  font-size: 13px;
  line-height: 18px;
  color: #ff0000cc;
  text-align: ${(props) => (props.left ? "left" : "center")};
`;

export const InputLabel = styled.label`
  color: #8d8d8d;
  position: absolute;
  top: 40px;
  left: 50px;
  transition: 300ms;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  text-transform: capitalize;
  /* opacity: 0; */
`;

export const InputField = styled.input.attrs(() => ({
  type: "tel",
  placeholder: "+ 7 999 999 99 99",
}))`
  outline: none;
  margin-top: 24px;
  border: ${({ errorBorder }) =>
    errorBorder ? "1px solid #FF0000CC" : "1px solid #EDEDED"};
  width: 532px;
  border-radius: 12px;
  padding: 22px 16px 15px 16px;
  font-size: 24px;
  font-weight: 400;
  line-height: 43px;
  letter-spacing: 0.5px;
  color: ${({ errorColor }) => (errorColor ? "#FF0000CC" : "#000")};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #ededed;
  }
  @media (max-width: 600px) {
    height: 60px;
    width: 312px;
    font-size: 16px;
    line-height: 29px;
    letter-spacing: 0.5px;

  }

  &:focus {
    border: 2px solid #ededed;
  }
`;

export const InputFieldText = styled.input.attrs((props) => ({
  type: "text",
  width: props.width || "532px",
}))`
  outline: none;
  margin-top: 40px;
  margin-right: 10px;
  border: ${({ errorBorder }) =>
    errorBorder ? "0.5px solid #FF0000CC" : "0.5px solid #0000001F"};
  width: ${(props) => props.width};
  border-radius: 16px;
  padding: 18px 20px;
  font-size: 28px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: 0px;
  text-align: center;
`;
