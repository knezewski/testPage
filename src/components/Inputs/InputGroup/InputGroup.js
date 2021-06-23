import {
  InputField,
  InputLabel,
  Container,
  Form,
  Title,
  Error,
} from "../Styled";

const InputGroup = ({ title, onSubmit, onChange, onFocus, onBlur, errorText, errorColor, errorBorder }) => {
   return (
      <>
         <Container>
            <Title>{title}</Title>
            <Form
               column
            >
               <InputLabel>телефон</InputLabel>
               <InputField
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSubmit={onSubmit}
                  onChange={onChange}
                  errorColor={errorColor}
                  errorBorder={errorBorder}
                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
               />
               <Error
                  left
               >
                  {errorText}
               </Error>
            </Form>
         </Container>
      </>
   );
};

export default InputGroup;
