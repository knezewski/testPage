import styled from "styled-components";

// export const Container = styled.div`
//   display: grid;
//   place-items: center;
//   width:100vw;
//   height:100vw;
//   position: relative;
 
//   opacity: 0;
// `;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  margin-top: 8px;
`;
export const Box = styled.div`
  width: 450px;
  border-radius: 20px;
  padding: 25px 15px 25px 25px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
  background: #fff;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 33px;
  text-align: left;
`;
export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.5px;
  text-align: left;
`;
export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-end;
`;
export const Button = styled.button`
  width: 75px;
  padding: 5px 8px 5px 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  background: #fff;
  border: transparent;
  cursor:pointer;

  &:hover {
    font-weight: 600};
  }
`;

