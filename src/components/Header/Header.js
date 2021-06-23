import { useSelector } from "react-redux";
import { Menu, UserInfo } from "../../components";
import { Container, Title } from "./Styled";

const Header = ({ title }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <Container>
        <Title>{title}</Title>
        {isAuthenticated ? <UserInfo /> : <Menu />}
      </Container>
    </>
  );
};

export default Header;
