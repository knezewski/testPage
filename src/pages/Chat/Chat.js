import imgSrc from "../../assets/icons/Shape.svg";
import vector from "../../assets/icons/Vector.svg";

import { Header, ImageContainer } from "../../components";
import {
  Container,
  ChatCountdown,
  Title,
  Wrapper,
  Time,
  Hours,
  Minutes,
  Numbers,
  Info,
  Subtitle,
  Day,
  Text,
  MessagesContainer,
  MessageChatOwner,
  MessageGuest,
  Message,
  TextEnter,
  EnterMessage,
  Box,
} from "./Styled";

const Chat = () => {
  return (
    <>
      <Container>
        <Header title="Digital Referral"></Header>
        <ChatCountdown>
          <Wrapper>
            <Title>Чат закроется через</Title>
            <Time>
              <Hours>
                <Numbers>47 ч</Numbers>
              </Hours>
              <Minutes>
                <Numbers> 55 мин</Numbers>
              </Minutes>
            </Time>
          </Wrapper>
        </ChatCountdown>
        <Info>
          <div>
            <ImageContainer width="20px" height="20px" src={imgSrc} />
          </div>
          <Subtitle>
            Это ваш общий чат с инициатором запроса. Вся информация из этого
            диалога будет стерта после закрытия запроса инициатором.
          </Subtitle>
        </Info>
        <MessagesContainer>
          <Day>
            <Text>Сегодня</Text>
          </Day>

          <MessageChatOwner>
            <Message>
              Здравствуйте, сам недавно столкнулся с похожей проблемой, мне
              помогли в Юридеческой фирме “Юрист”, обратитесь к Кристине
              Владимировне, телефон 8 900 789 78 90, divnaya.k.@mail.com.
            </Message>
          </MessageChatOwner>
          <MessageGuest>
            <Message>Спасибо, как обращусь отпишусь</Message>
          </MessageGuest>

          <TextEnter>
            <Box>
              <EnterMessage></EnterMessage>
              <div style={{ alignSelf: "flex-end" }}>
                <ImageContainer width="20px" height="20px" src={vector} />
              </div>
            </Box>
          </TextEnter>
        </MessagesContainer>
      </Container>
    </>
  );
};

export default Chat;
