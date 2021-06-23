import { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  Referral,
  Recommendation,
  Button,
  GeneratedLink,
  ModalWindow,
  UserInfo,
} from "../../components";

import imageSrc from "../../assets/icons/ic_16_monetablago.svg";

import {
  Container,
  Deadline,
  Request,
  Text,
  RewardContainer,
  Reward,
  Wrapper,
  Amount,
  Image,
  Section,
  Box,
  TextReward
} from "./Styled";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "grid",
    placeItems: "center",
    "&:focus": {
      outline: "none",
    },
  },
}));

const Main = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [isShown, setIsShown] = useState(true);

  const closeModalWindow = () => {
    setOpen(false);
  };

  const openModalWindow = () => {
    setOpen(true);
  };

  const bodyUnauth = (
    <ModalWindow
      ref={closeModalWindow}
      onClick={closeModalWindow}
      href="/registration"
      title="Вы готовы перейти к решению запроса?"
      text="Для этого вам потребуется зарегистрироваться и перейти к чату с
      инициатором запроса"
    ></ModalWindow>
  );
  const bodyAuth = (
    <ModalWindow
      ref={closeModalWindow}
      onClick={closeModalWindow}
      href="/chat"
      title="Вы готовы решить запрос?"
      text="Для этого перейдите к чату с инициатором запроса"
    ></ModalWindow>
  );

  return (
    <>
      <Container>
        <Modal
          className={classes.modal}
          onEscapeKeyDown={closeModalWindow}
          open={open}
        >
          {isAuthenticated ? bodyAuth : bodyUnauth}
        </Modal>
        <Referral />
        <Section>
          <Deadline>истекает через 3 дня</Deadline>
          <Text>
            Нужна помощь в получении статуса резидента <br></br> Сколково
          </Text>
          <Request>
            Хочу стать резидентом фонда Сколково, три раза <br></br>
            получил отказ по заявке. Посоветуйте компетентных <br></br>
            людей, способных помочь в решении моего вопроса.<br></br>
          </Request>
          <RewardContainer>
            <Reward>
              <TextReward>Вознаграждение цепочки рекомендодателей</TextReward>
              <Wrapper>
                <div>
                  <Image width="16px" height="16px" src={imageSrc} />
                </div>
                <Amount>12</Amount>
              </Wrapper>
            </Reward>
            <Reward>
              <TextReward>Вознаграждение исполнителя</TextReward>
              <Wrapper>
                <div>
                  <Image width="16px" height="16px" src={imageSrc} />
                </div>
                <Amount>24</Amount>
              </Wrapper>
            </Reward>
          </RewardContainer>
        {isShown ? (
          <Recommendation onClick={() => setIsShown(false)} />
        ) : (
          <GeneratedLink />
        )}

        {isAuthenticated ? (
          <div style={{ marginTop: "44px" }}>
            <Text>Инициатор запроса</Text>
            <UserInfo marginTop="32px" />
          </div>
        ) : null}

        <Text>Активность по запросу</Text>
        </Section>
        <Box marginTop="203px" padding="18px 100px">
          <Button
            onClick={openModalWindow}
            primary={false}
            padding="14px 171px"
            text="Решить вопрос"
          />
        </Box>
      </Container>
    </>
  );
};

export default Main;
