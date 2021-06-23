import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;
export const ChatCountdown = styled.div`
  width: 500px;
  background: #fafafa;
  padding: 29px 45px 31px 42px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Time = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Hours = styled.div`
  width: 45px;
  border-radius: 7px;
  padding: 3px, 9px, 3px, 9px;
`;
export const Minutes = styled.div`
  width: 65px;
  border-radius: 7px;
  padding: 3px, 9px, 3px, 9px;
`;
export const Numbers = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
`;
export const Info = styled.div`
  margin-top: 24px;
  width: 499px;
  display: grid;
  grid-template-columns: 20px auto;
  gap: 39px;
  position: relative;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  color: #9e9e9e;
`;

export const MessagesContainer = styled.div`
  display: flex;
  width: 700px;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 60px;
  align-items: center;
  margin-bottom: 23px;
`;

export const Day = styled.div`
  width: 90px;
  border-radius: 16px;
  padding: 8px 16px;
  background: #fafafa;
`;
export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
`;
export const MessageChatOwner = styled.div`
  width: 469px;
  padding: 20px;
  background: #ededed;
  border-radius: 16px 16px 0px 16px;
  align-self: flex-end;
`;
export const MessageGuest = styled.div`
  width: 340px;
  padding: 20px;
  background: #c7e4ff;
  border-radius: 16px 16px 16px 0px;
  align-self: flex-start;
`;
export const Message = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.25px;
`;
export const TextEnter = styled.div`
  margin-top: 50px;
  border-top: 1px solid #ededed;
`;
export const Box = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
  gap: 30px;
`;
export const EnterMessage = styled.textarea`
  margin-top: 17px;
  border: 1px solid #ededed;
  width: 400px;
  border-radius: 16px;
  padding: 20px;
  outline: none;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.25px;
  text-align: left;
  resize: none;
`;
