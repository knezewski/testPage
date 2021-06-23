import { Container, Text, StyledButton, Title } from "./Styled";

const Recommendation = ({ onClick }) => {
  return (
    <>
      <Container>
        <Title>Рекомендация исполнителя на запрос</Title>
        <Text>
          Если вы хотите порекомендовать исполнителя на данный запрос, нажмите
          на кнопку для создания вашей уникальной реферальной ссылки.
        </Text>
        <StyledButton onClick={onClick}>Создать ссылку</StyledButton>
      </Container>
    </>
  );
};

export default Recommendation;
