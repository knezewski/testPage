import styled from "styled-components";

export const Image = styled.img.attrs((props) => ({
   height: props.height || "0px",
   width: props.width || "0px",
   marginTop: props.marginTop || "0px",
 }))`
   height: ${(props) => props.height};
   width: ${(props) => props.width};
   margin-top: ${(props) => props.marginTop};
   border-radius: ${(props) => props.circle ? "50%" : "0%"};
   align-self: center;
`;

export const Container = styled.div`
   display: flex;
   justify-content: center;
`;