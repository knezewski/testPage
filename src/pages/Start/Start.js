import {
  Container,
  Ellipse,
  Logo,
  LogoBox,
  Title,
  Info,
  InfoTitle,
  Box,
  Release,
  Subtitle,
  Date,
  Buttons,
  Button,
  Icon,
  Question,
  Text,
  EmailUs,
  Footer,
  FooterInfo,
  Description,
  Email,
  CopyRight,
} from "./Styled";

import logo from "../../assets/icons/logo.svg";
import logoInfo from "../../assets/icons/logos.svg";
import apple from "../../assets/icons/apple.svg";
import playstore from "../../assets/icons/playstore.svg";

const Start = () => {
  return (
    <>
      <Container>
        <Ellipse />
        <LogoBox>
          <Logo src={logo} />
        </LogoBox>
        <Title>
          Найдется все и везде <br></br> с помощью рекомендаций!
        </Title>
        <Info>
          <Box>
            <Logo src={logoInfo} />
          </Box>
          <InfoTitle>
            Сервис по поиску исполнителей через профессиональные рекомендации
          </InfoTitle>
          <Release>
            <Subtitle>Дата запуска проекта </Subtitle>
            <Date>07.07.2021</Date>
          </Release>
          <Buttons>
            <Button href="#">
              <Icon src={apple}></Icon>App Store
            </Button>
            <Button href="#">
              <Icon src={playstore}></Icon>Google Play
            </Button>
          </Buttons>
        </Info>

        <Question>Хотите создать свой сервис?</Question>
        <Text>на инфраструктуре digref</Text>
        <EmailUs href="mailto:info@digref.com">Напишите нам</EmailUs>
        <Footer>
          <FooterInfo>
            <Description>
              Сервисы на основе рекомендаций для вашего бизнеса
            </Description>
            <Email>support@digref.com</Email>
            <CopyRight>© Все права защищены. </CopyRight>
          </FooterInfo>
        </Footer>
      </Container>
    </>
  );
};

export default Start;
