import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div.attrs((props) => ({
   padding: props.padding || "0px",
   marginTop: props.marginTop || "0px",
   marginBottom: props.marginBottom || "0px",
 }))`
   width: 300px;
   text-align: center;
   padding: ${(props) => props.padding};
   margin-top: ${(props) => props.marginTop};
   margin-bottom: ${(props) => props.marginBottom};
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
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  text-align: center;
`;
