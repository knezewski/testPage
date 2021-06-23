import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  text-align: right;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
  text-align: center;
  margin-top: 60px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 60px auto;
`;
export const Wrapper = styled.div`
  margin: 0 auto;
  position: relative;
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
  letter-spacing: 0.5px;
  text-transform: capitalize;
  opacity: 0;
  &:focus {
    opacity: 1;
  }
`;

export const InputFirstName = styled.input.attrs(() => ({
  type: "text",
  placeholder: "Имя",
  name:"firstName "
}))`
  outline: none;
  width: 393px;
  border-radius: 12px;
  border: ${({ errorBorder }) =>
    errorBorder ? "1px solid #FF0000CC" : "1px solid #EDEDED"};
  padding: 15px 16px 15px 16px;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;

  &:focus ~ ${InputLabel} {
    opacity: 0.6;
  }
`;

export const InputSurname = styled.input.attrs(() => ({
  type: "text",
  placeholder: "Фамилия",
  name:"surName"
}))`
  margin-top: 18px;
  outline: none;
  width: 393px;
  border-radius: 12px;
  border: ${({ errorBorder }) =>
    errorBorder ? "1px solid #FF0000CC" : "1px solid #EDEDED"};
  padding: 15px 16px 15px 16px;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
`;

export const InputPatronymic = styled.input.attrs(() => ({
  type: "text",
  placeholder: "Отчество",
  name:"patronymic"
}))`
  margin-top: 18px;
  outline: none;
  width: 393px;
  border-radius: 12px;
  border: ${({ errorBorder }) =>
    errorBorder ? "1px solid #FF0000CC" : "1px solid #EDEDED"};
  padding: 15px 16px 15px 16px;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
`;

export const InputEmail = styled.input.attrs(() => ({
  type: "email",
  placeholder: "E-mail",
  name:"email"
}))`
  margin-top: 18px;
  outline: none;
  width: 393px;
  border-radius: 12px;
  border: ${({ errorBorder }) =>
    errorBorder ? "1px solid #FF0000CC" : "1px solid #EDEDED"};
  padding: 15px 16px 15px 16px;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
`;

export const Error = styled(Title)`
  margin-top: 8px;
  font-size: 13px;
  line-height: 18px;
  color: #ff0000cc;
  text-align: ${(props) => (props.left ? "left" : "center")};
`;

export const PrivacyPolicy = styled.div`
  margin-top: 60px;
  width: 592px;
  background: #fafafa;
  padding: 14px 15px 25px 29px;
`;
export const Box = styled.div.attrs((props) => ({
  padding: props.padding || "0px",
  marginTop: props.marginTop || "0px",
}))`
  width: 700px;
  text-align: center;
  background: #fafafa;
  padding: ${(props) => props.padding};
  margin-top: ${(props) => props.marginTop};
`;
