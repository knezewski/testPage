import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
// import { CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser, register,
  //  createTemporaryUser
   } from "../../actions/index";

import { Referral, InputGroup, Button, OptInput } from "../../components";
import { Container, Box, Tagline, Image, Info, ImageContainer, Title } from "./Styled";

import imageSrc from "../../assets/img/polyhedron.png";
import imageErrorSrc from "../../assets/img/error.png";

const Auth = () => {
  const dispatch = useDispatch();
  const { isVerifiedUsername, errorMessage, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  // const refCode = useSelector((state) => state.auth.data.refCode);

  // console.log(refCode);
  // const data = useSelector((state) => state.auth);

  // console.log(data);

  const [username, setUsername] = useState("");
  const [values, setValues] = useState(Array(4).fill(""));
  const [error, setError] = useState("");

  useEffect(() => {
    setError(errorMessage);
  }, [errorMessage]);

  // check phone number
  const onSubmit = async (e) => {
    e.preventDefault();

    const regex = /^((\+7|7|)+([0-9]){10})$/;

    if (username === "" || !regex.test(username)) {
      setError("Проверьте правильность ввода данных");
    } else {
      // dispatch(createTemporaryUser(username, refCode));
      dispatch(verifyUser(username));

      if (isVerifiedUsername === false && errorMessage !== null) {
        setError(errorMessage);
      }
      setUsername("");
    }
  };

  // check sms-code
  const onSubmitOpt = async (e) => {
    e.preventDefault();

    const isIncludesNaN = values.map((n) => +n).includes(NaN);

    values[0] === "" && setError("Проверьте правильность ввода данных");
    isIncludesNaN && setError("Проверьте правильность ввода данных");
    // setValues(Array(4).fill(""));

    if (values !== [] && !isIncludesNaN) {
      dispatch(register(username, values));
    }
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
    setError("");
  };

  const handlePlaceholder = (event) => {
    event.target.placeholder = "";
  };

  const handleChangeOptInput = ({ target: t }) => {
    const index = +t.dataset.index,
      value = t.value;

    setValues(values.map((n, i) => (i === index ? value : n)));
    setError("");

    if (index < values.length - 1 && value) {
      inputRefs[index + 1].focus();
      inputRefs[index + 1].select();
    }
  };

  const inputRefs = [];

  if (isAuthenticated) {
    return <Redirect to="/main" />;
  }

  return (
    <>
      <Container>
        <Referral />
        <Tagline>Рекомендации среди своих на блокчейне</Tagline>
        <ImageContainer>
          {error ? (
            <Image
              marginTop="45px"
              width="410px"
              height="291px"
              src={imageErrorSrc}
            />
          ) : (
            <Image
              marginTop="50px"
              width="420px"
              height="230px"
              src={imageSrc}
            />
          )}
        </ImageContainer>
        {isVerifiedUsername ? (
          <>
            <Info>
              На ваш телефонный номер был отправлен <br></br>
              СМС-код для подтверждения регистрации, <br></br>
              введите полученный код в поле ниже:
            </Info>
            <OptInput
              values={values}
              inputRefs={inputRefs}
              width="60px"
              onSubmit={onSubmitOpt}
              onChange={handleChangeOptInput}
              onFocus={handlePlaceholder}
              errorText={error}
              errorColor={error}
              errorBorder={error}
            />
            <Box marginTop="203px" padding="18px 100px">
              <Button onClick={onSubmitOpt} primary={!values[0]} text="далее" />
            </Box>
          </>
        ) : (
          <>
            <InputGroup
              onSubmit={onSubmit}
              title="Укажите ваш номер"
              value={username}
              onChange={handleChange}
              onFocus={handlePlaceholder}
              errorText={error}
              errorColor={error}
              errorBorder={error}
            />
            <Info left>
              Номер нужен для того чтобы вы могли забрать <br></br>
              вознаграждение
            </Info>
            <Title>Подробнее о Digital Referral</Title>
            <Box marginTop="203px" padding="18px 100px">
              <Button onClick={onSubmit} primary={!username} text="далее" />
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default Auth;
