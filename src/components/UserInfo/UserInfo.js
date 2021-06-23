import { useSelector } from "react-redux";
import { ImageContainer } from "../../components";
import avatar from "../../assets/img/PhotoPlace+tabEdit.png";
import {
  Container,
  Info,
  FullName,
  Text,
  Employees,
  Company,
  Position,
  Icons,
} from "./Styled";


const UserInfo = ({marginTop}) => {

   const {firstname, lastname, orgName, currentPosition } = useSelector((state) => state.auth.data.ownerUser);

  return (
    <>
      <Container
      marginTop={marginTop}
      >
        <ImageContainer circle src={avatar} width="100%" height="100%" />
        <Info>
          <FullName>
            <Text>{firstname}</Text>
            <Text>{lastname}</Text>
          </FullName>
          <Employees>
            <Company>{orgName}</Company>
            <Position>{currentPosition}</Position>
          </Employees>
        </Info>
        <Icons></Icons>
      </Container>
    </>
  );
};

export default UserInfo;
