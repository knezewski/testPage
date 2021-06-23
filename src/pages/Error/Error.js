import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Referral, ImageContainer } from "../../components";
// import { clearData } from "../../actions/index";
import { Container, Tagline, Info, Box } from "./Styled";

import imageErrorSrc from "../../assets/img/error.png";

const Error = () => {
  // const dispatch = useDispatch();

  // const backToStartPage = () => {
  //   dispatch(clearData());
  // };
  const { errorMessage } = useSelector((state) => state.auth);

  if (!errorMessage) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Container>
        <Referral />
        <Tagline>Рекомендации среди своих на блокчейне</Tagline>
        <ImageContainer
          marginTop="45px"
          src={imageErrorSrc}
          width="420px"
          height="300px"
        />
        <Info>{errorMessage}</Info>
        <Box invisible marginTop="203px" padding="18px 100px">
          {/* <Button onClick={backToStartPage} text="назад" /> */}
        </Box>
      </Container>
    </>
  );
};

export default Error;
