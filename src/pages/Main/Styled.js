import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 360px;
  max-width: 700px;
  margin: 0 auto;
  /* border: 1px solid blue; */
  @media (max-width: 1100px) {
    padding: 15px 24px;
  }
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  min-width: 312px;
  margin: 0 auto;
  margin-top: 50px;
  /* border: 1px solid red; */
  @media (max-width: 1100px) {
    margin-top: 24px;
    margin: 0 ;
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
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0.5px;
  text-align: center;
  margin-top: 24px;
`;

export const Subtitle = styled(Title)`
  font-weight: 600;
  margin-top: 0;
`;

export const Deadline = styled(Title)`
  line-height: 25px;
  text-align: left;
  text-transform: lowercase;
  margin-top: 0;
`;

export const Text = styled(Title)`
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
  @media (max-width: 600px) {
    width: 312px;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 23px;
    text-align: left;
  }
`;

export const Request = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-top: 24px;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 29px;
    letter-spacing: 0.5px;
    text-align: left;
  }
`;

export const RewardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  @media (max-width: 600px) {
    margin-top: 0px;
  }
`;

export const Reward = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 21px;
  @media (max-width: 600px) {
    align-items: flex-end;
  }
`;
export const TextReward = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
  @media (max-width: 600px) {
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 23px;
    text-align: left;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
`;

export const Amount = styled.p`
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
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
`;
