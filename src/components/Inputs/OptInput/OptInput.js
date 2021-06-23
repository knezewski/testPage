// import { useState } from "react";
import {
   InputFieldText,
   Container,
   Form,
   Error,
 } from "../Styled";

 const OptInput = ({ onSubmit, onFocus, onBlur, onChange, errorText, errorColor, errorBorder, values, inputRefs }) => {

    return (
       <>
          <Container>
             <Form
               center
             >
                  {values.map((n, i) => (
                     <InputFieldText
                        key={i}
                        value={values[i]}
                        data-index={i}
                        ref={input => inputRefs[i] = input}
                        maxLength="1"
                        width="60px"
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSubmit={onSubmit}
                        onChange={onChange}
                        errorColor={errorColor}
                        errorBorder={errorBorder}
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                     />
                   ))
               }
             </Form>
                <Error>{errorText}</Error>
          </Container>
       </>
    );
 };

 export default OptInput;
