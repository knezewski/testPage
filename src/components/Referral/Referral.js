import { Header } from "../../components";

import { Container, Box, Title, Subtitle } from "./Styled";

const Referral = () => {
  return (
    <>
      <Container>
        <Header title="Digital Referral"></Header>
        <Box padding="18px 50px">
          <Title>
            Вы были рекомендованы для решения запроса пользователем Digital
            Referral
          </Title>
          <Subtitle>Алексей Иванов</Subtitle>
        </Box>
      </Container>
    </>
  );
};

export default Referral;
