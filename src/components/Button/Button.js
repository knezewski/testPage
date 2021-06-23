
import { StyledButton } from "./Styled"

const Button = ({text, primary, onClick, marginTop, width, padding }) => {
   return (
      <>
         <StyledButton
            primary={primary}
            onClick={onClick}
            width={width}
            marginTop={marginTop}
            padding={padding}
         >
            {text}
         </StyledButton>
      </>
   )
}

export default Button;
