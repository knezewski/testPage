import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Box = styled.div.attrs((props) => ({
  padding: props.padding || "0px",
  marginTop: props.marginTop || "0px",
}))`
  width: 100%;
  text-align: center;
  background: #fafafa;
  padding: ${(props) => props.padding};
  margin-top: ${(props) => props.marginTop};
  opacity: ${(props) => props.invisible ? "0" : "1"};
`;

export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  text-align: center;
`;

export const Tagline = styled(Subtitle)`
  font-size: 17px;
  line-height: 23px;
  width: 288px;
  align-self: center;
  margin-top: 70px;
`;

export const Info = styled.p`
  color: #ff0000cc;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0.25px;
  text-align: left;
  margin-top: 42px;
  font-weight: 400;
  text-align: ${(props) => (props.left ? "left" : "center")};
`;
