import styled from "styled-components";

export const Container = styled.div.attrs((props) => ({
  marginTop: props.marginTop || '0px'
}))`
  display: grid;
  grid-template-columns: 58px 282px;
  grid-gap: 16px;
  margin-top: ${(props) => props.marginTop}
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FullName = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  text-transform: capitalize;
`;

export const Employees = styled.div`
  display: grid;
  grid-template-columns: 58px 150px;
  grid-gap: 16px;
  align-items: end;
`;

export const Company = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`;

export const Position = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 19px;
`;

export const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
