// import { useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
import { Referral, ImageContainer } from "../../components";
import { Container, Tagline, Info, Box } from "./Styled";

import imgError from "../../assets/img/error.png";
import imgSuccess from "../../assets/img/like 1.png";

const RequestStatus = () => {
  //   const { errorMessage } = useSelector((state) => state.auth);

  //   if (!errorMessage) {
  //     return <Redirect to="/" />;
  //   }

  return (
    <>
      { !true ? (
        <Container>
          <Referral />
          <ImageContainer
            marginTop="80px"
            src={imgSuccess}
            width="630px"
            height="380px"
          />
          <Tagline>Вы успешно решили запрос </Tagline>
          <Box marginTop="32px" padding="3px">
            <Info>
              Вам начислено ХХ Монет Благодарности и предоставлен инвайт в
              сервис Digital Referral. Инвайт привязан к номеру телефона с
              которого вы вошли в web-клиент для решения запроса.
            </Info>
          </Box>
          <Box marginTop="55px" marginBottom="138px">
            <Tagline
              as="a"
              href="#"
              style={{
                textDecoration: "none",
                color: "#000",
              }}
            >
              Подробнее о Digital Referral
            </Tagline>
          </Box>
        </Container>
      ) : (
        <Container>
          <Referral />
          <ImageContainer
            marginTop="80px"
            src={imgError}
            width="519px"
            height="349px"
          />
          <Tagline>Ваше решение не подошло</Tagline>
          <Box marginTop="32px" padding="3px">
            <Info>
              Доступ к запросу и чат-комнате закрыт. Спасибо, что откликнулись.
            </Info>
          </Box>
          <Box marginTop="55px" marginBottom="138px">
            <Tagline
              as="a"
              href="#"
              style={{
                textDecoration: "none",
                color: "#000",
              }}
            >
              Подробнее о Digital Referral
            </Tagline>
          </Box>
        </Container>
      )}
    </>
  );
};

export default RequestStatus;
