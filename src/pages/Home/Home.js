import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect,
  //  Link, withRouter
  } from "react-router-dom";
// import { Container, Header, HeaderTitle, Title, Section } from "./Styled";
import {
  // validRefCodeAsLink,
   validRefCodeAsInvite } from "../../actions/index";

const Home = () => {
  const dispatch = useDispatch();

  const { isRefCodeValid } = useSelector((state) => state.auth);
  // console.log(isRefCodeValid)

  // get pathname
  const pathname = window.location.pathname;
  const refCode = pathname.replace("/", " ").trim();
  // console.log(pathname);
  // const refCode = "aaaa";

  // useEffect(() => {
  //   dispatch(validRefCodeAsLink(refCode));
  // }, []);

  useEffect(() => {
    dispatch(validRefCodeAsInvite(refCode));
  }, [dispatch, refCode]);

  if (isRefCodeValid) {
    return <Redirect to="/authorization" />;
  }

  // if (isRefCodeValid) {
  //   return <Redirect to="/error" />;
  // }

  return (
    <>
      {/* <Container>
        <Header>
          <HeaderTitle>Любой канал коммуникации</HeaderTitle>
        </Header>
        <Section>
          <Link
            to="/authorization"
            style={{
              textDecoration: "none",
            }}
          >
            <Title>Переход по ссылке</Title>
          </Link>
        </Section>
      </Container> */}
    </>
  );
};

export default Home;
