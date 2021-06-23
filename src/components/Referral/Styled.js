import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid blue; */
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
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0.5px;
  text-align: center;
`;

export const Subtitle = styled(Title)`
  font-weight: 600;
`;