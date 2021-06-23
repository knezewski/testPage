import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 360px;
  max-width: 700px;
  margin: 0 auto;
  border: 1px solid blue;
  @media (max-width: 600px) {
    padding: 15px 24px;
  }
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
  @media (max-width: 1100px) {
    margin-top: 0px;
    background: transparent;
    padding: 0px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  text-align: center;
`;
export const Title = styled.p`
  display: none;
  @media (max-width: 1100px) {
    display:block;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    text-align: center;
    margin-top: 174px;
  }
`;

export const Tagline = styled.p`
  font-size: 17px;
  font-weight: 600;
  line-height: 23px;
  width: 288px;
  align-self: center;
  margin-top: 70px;
  text-align: center;
  @media (max-width: 600px) {
    align-self: flex-start;
    text-align: left;
  }
`;

export const Image = styled.img.attrs((props) => ({
  height: props.height || "0px",
  width: props.width || "0px",
  marginTop: props.marginTop || "0px",
}))`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin-top: ${(props) => props.marginTop};
  align-self: center;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Info = styled.p`
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0.25px;
  text-align: left;
  margin-top: 42px;
  font-weight: 400;
  text-align: ${(props) => (props.left ? "left" : "center")};
  @media (max-width: 1100px) {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin-top: 16px;
  }
`;
