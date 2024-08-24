import Tag from "../Tag"
import {Card, Descricao, Titulo} from "./styles"

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250"/>
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum obcaecati, laudantium voluptatum autem atque dicta enim est velit, alias sint illo non quibusdam similique, voluptas modi id nam repellendus. Sequi!
    </Descricao>
  </Card>
)

export default Product