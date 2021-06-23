import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  Container,
  Text,
  StyledButton,
  Title,
  Column,
  Subtitle,
  Clipboard,
  CopyButton,
  CopyBox,
  Image,
} from "./Styled";

import imageSrc from "../../assets/icons/copy.svg";


const GeneratedLink = () => {
  const [value, setValue] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleChange = (event) => setValue(event.target.value);

  return (
    <>
      <Container>
        <Column>
          <Title>Рекомендация запроса</Title>
          <Text>
            Для рекомендации у вас есть уникальная реферальная ссылка, которую
            вы можете отправить через любой мессенджер и получить вознаграждение
            в случае успешного запроса
          </Text>
        </Column>
        <Column>
          <Title>3/10 человек</Title>
          <Subtitle>рекомендованы вами на этот запрос</Subtitle>

          <CopyBox>
            <Clipboard value={value} onChange={handleChange}></Clipboard>
            <CopyToClipboard
              text={value}
              onCopy={() => setIsCopied({ copied: true })}
            >
              <CopyButton>
              <div>
                  <Image width="20px" height="10px" src={imageSrc} />
                </div>
              </CopyButton>
            </CopyToClipboard>
            {isCopied ? <span style={{color: 'red'}}>скопировано</span> : null}
          </CopyBox>
            <StyledButton>Скопировать ссылку</StyledButton>
        </Column>
      </Container>
    </>
  );
};

export default GeneratedLink;
