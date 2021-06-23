import { Container, Image } from "./Styled"

const ImageContainer = ({circle, src, width, height, marginTop }) => {
   return (
      <>
         <Container>
            <Image
               circle={circle}
               src={src}
               width={width}
               height={height}
               marginTop={marginTop}
            />
         </Container>
      </>
   )
}

export default ImageContainer;