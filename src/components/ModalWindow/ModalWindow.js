import { Box, Title, Text, Buttons, Button } from "./Styled";

const ModalWindow = ({ ref, onClick, href, title, text }) => {
  return (
    <>
      <Box>
        <Title>{title}</Title>
        <Text>
          {text}
        </Text>
        <Buttons>
          <Button ref={ref} onClick={onClick}>Отмена</Button>
          <Button
            as="a"
            href={href}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Перейти
          </Button>
        </Buttons>
      </Box>
    </>
  );
};

export default ModalWindow;
