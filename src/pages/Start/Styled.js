import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  max-width: 1280px;
  min-width: 414px;
  padding: 0;
  margin: 0 auto;
  background-color: #044154;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
`;

export const Ellipse = styled.div`
  position: absolute;
  /* bottom: 79%;
  right: 71%; */
  height: 955px;
  width: 834px;
  border-radius: 50%;
  border: 8px solid #f38650;
  position: absolute;
  bottom: 76%;
  right: 69%;
  transform: rotateX(39deg);
  @media (max-width: 1100px) {
    display: none;
  }
`;
export const LogoBox = styled.div`
  min-width: 262px;
  max-width: 619px;
  align-self: center;
  margin-top: 200px;
`;

export const Logo = styled.img`
  max-width: 100%;
`;

export const TitleContainer = styled.div`
  min-width: 296px;
  max-width: 793px;
`;

export const Title = styled.p`
  margin-top: 100px;

  font-size: 64px;
  font-weight: 400;
  line-height: 77px;
  text-align: center;
  color: #ece6e3;

  @media (max-width: 600px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
  }
`;

export const Info = styled.div`
  margin-top: 100px;
  min-width: 340px;
  max-width: 621px;
  border-radius: 23px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 35px;
  text-align: left;
  background: #ece6e3;
  @media (max-width: 600px) {
    width: 340px;
    border-radius: 23px;
    padding: 20px 24px 20px 24px;
  }
`;

export const Box = styled.div`
  display: flex;
  max-width: 162px;
  min-width: 122px;
`;

export const InfoTitle = styled.p`
  font-size: 30px;
  font-weight: 400;
  line-height: 45px;

  @media (max-width: 600px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const Release = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 4px;
  align-items: left;
`;
export const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  text-align: left;
  color: #004056;
  @media (max-width: 600px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const Date = styled.p`
  font-size: 36px;
  font-weight: 400;
  line-height: 54px;
  text-align: left;
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 29px;
  display: none;
`;

export const Button = styled.a`
  display: flex;
  flex-wrap: nowrap;
  gap: 14px;
  align-items: center;
  background-color: #044154;
  border-radius: 1rem;
  padding: 1rem;

  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 45px;
  color: #ece6e3;
  cursor: pointer;
  align-self: center;
  text-decoration: none;

  @media (max-width: 600px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    text-align: center;
  }
`;

export const Icon = styled.img`
  height: 57px;
  width: 57px;
  @media (max-width: 600px) {
    height: 30px;
    width: 30px;
  }
`;

export const Question = styled.p`
  font-size: 64px;
  font-weight: 700;
  line-height: 96px;
  text-align: center;
  margin-top: 100px;
  color: #ece6e3;

  @media (max-width: 600px) {
    margin-top: 40px;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: center;

  color: #ece6e3;
  margin-top: 4px;

  @media (max-width: 600px) {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
  }
`;

export const EmailUs = styled.a`
  margin-top: 32px;
  text-decoration: none;
  border-radius: 23px;
  padding: 16px 40px;
  background: #ece6e3;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  cursor: pointer;
  color: #004056;
;

  @media (max-width: 600px) {
    margin-top: 40px;
    width: 132px;
    padding: 8px 19px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  margin-top: 100px;
  border-top: 2px solid #f38550;
  color: #ece6e3;

  @media (max-width: 600px) {
    margin-top: 48px;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  gap: 20px;
  padding: 50px 0px 84px 126px;

  @media (max-width: 600px) {
    text-align: center;
    padding: 30px 72px 52px 72px;
  }
`;

export const Description = styled.p`
  font-size: 17px;
  font-style: regular;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 600px) {
    text-align: center;
  }
`;
export const Email = styled.p`
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 54px;

  @media (max-width: 600px) {
    text-align: center;

    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }
`;
export const CopyRight = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  text-align: left;

  @media (max-width: 600px) {
    display: none;
  }
`;
