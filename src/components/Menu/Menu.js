import useToggle from "../../hooks/useToggle";
import { Container, Title, StyledLink, Header, Burger, Span } from "./Styled";

const Menu = () => {
  const [open, setOpen] = useToggle();

  return (
    <>
      {open ? (
        <Burger onClick={setOpen}>
            <Span />
            <Span />
            <Span />
        </Burger>
      ) : (
        <Container>
          <Header onClick={setOpen}>
            <Title>Меню</Title>
          </Header>
          <StyledLink href="/">Подробнее о Digital Referral</StyledLink>
          <StyledLink href="/terms">Политика конфиденциальности</StyledLink>
          <StyledLink href="/offer">Правила пользования сервисом</StyledLink>
          <StyledLink href="#">Справка</StyledLink>
        </Container>
      )}
    </>
  );
};

export default Menu;
