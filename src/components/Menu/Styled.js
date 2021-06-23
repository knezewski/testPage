import styled from "styled-components";

export const Container = styled.div`
  /* width: 385px; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  text-align: right;
`;

export const Burger = styled(Container)`
  gap: 5px;
  align-items: flex-end;
  cursor: pointer;
`;

export const Span = styled.span`
  height: 3px;
  width: 29px;
  border-radius: 5px;
  background: #ededed;
`;

export const Header = styled.div`
  border-bottom: 1px solid #ededed;
  padding: 14px 0px;
  cursor: pointer;
`;

export const Title = styled.p`
  font-weight: 500;
  line-height: 25px;

  &:hover {
    font-weight: 600;
  }
`;

export const StyledLink = styled.a.attrs((props) => ({
  href: props.href || "#",
}))`
  font-weight: 400;
  text-align: right;
  color: #000;
  text-decoration: none;

  &:hover {
    color: #9e9e9e;
  }
`;
