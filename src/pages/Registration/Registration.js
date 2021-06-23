import { useState } from "react";
import { Button } from "../../components";

import { FormControlLabel, Checkbox } from "@material-ui/core/";

import { Referral } from "../../components";

import {
  Container,
  Title,
  Form,
  InputFirstName,
  InputSurname,
  Error,
  InputPatronymic,
  InputLabel,
  InputEmail,
  PrivacyPolicy,
  Box,
  Wrapper,
} from "./Styled";

const Registration = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    surName: "",
    patronymic: "",
    email: "",
  });
  // const [firstName, setFirstName] = useState("");
  // const [patronymic, setPatronymic] = useState("");
  // const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

//   console.log(inputs)
//   console.log(error)


  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const onFocus = () => {
   setError("");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    for (let key in inputs) {

      if (inputs[key] === "") {
        setError(`Проверьте правильность ввода данных`);
        return;
      }
      setError("");
    }

    if (!regex.test(email)) {
      setError(`Проверьте правильность ввода почты`);
      return;
    }

    if (checked === false) {
      setError(`Поставьте галочку`);
      return;
    }
  };

  const { firstName, patronymic, email, surName } = inputs;

  return (
    <>
      <Container>
        <Referral />
        <Title>Укажите ваши личные данные</Title>
        <Form onSubmit={onSubmit}>
          <Wrapper>
            <InputLabel>Имя</InputLabel>
            <InputFirstName
              value={firstName}
              onChange={(e) =>
                setInputs({ ...inputs, firstName: e.target.value })
              }
              errorColor={error}
              errorBorder={error}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              onFocus={onFocus}
            ></InputFirstName>
            <Error left>{error}</Error>
          </Wrapper>

          <Wrapper>
            <InputLabel>Фамилия</InputLabel>
            <InputSurname
              value={surName}
              onChange={(e) =>
                setInputs({ ...inputs, surName: e.target.value })
              }
              errorColor={error}
              errorBorder={error}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              onFocus={onFocus}
            ></InputSurname>
            <Error left>{error}</Error>
          </Wrapper>

          <Wrapper>
            <InputLabel>Отчество</InputLabel>
            <InputPatronymic
              value={patronymic}
              onChange={(e) =>
                setInputs({ ...inputs, patronymic: e.target.value })
              }
              errorColor={error}
              errorBorder={error}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              onFocus={onFocus}
            ></InputPatronymic>
            <Error left>{error}</Error>
          </Wrapper>

          <Wrapper>
            <InputLabel>E-mail</InputLabel>
            <InputEmail
              value={email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              errorColor={error}
              errorBorder={error}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              onFocus={onFocus}
            ></InputEmail>
            <Error left>{error}</Error>
          </Wrapper>

          <PrivacyPolicy>
            <FormControlLabel
              style={{ textAlign: "left", fontFamily: "Manrope" }}
              control={
                <Checkbox
                  style={{ color: "black", bottom: "22px" }}
                  checked={checked}
                  onChange={handleChange}
                  name="checked"
                />
              }
              label="Регистрируясь в сервисе или используя сервис любым способом, вы соглашаетесь и принимаете настоящие условия пользования сервисом и политики конфиденциальности"
            />
          </PrivacyPolicy>
          <Error left>{error}</Error>
        </Form>

        <Box marginTop="85px" padding="18px 100px">
          <Button
            onClick={onSubmit}
            primary={error}
            padding="11px 130px 11px 130px"
            text="Перейти к решению запроса"
          />
        </Box>
      </Container>
    </>
  );
};

export default Registration;
