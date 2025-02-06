import { Tipografia } from "../../components/Tipografia/Tipografia";
import clienteConcluido from "../../assets/imagens/cliente-concluido.png";
import { Col, Row } from "react-grid-system";
import styles from "@emotion/styled";
import { Link } from "react-router-dom";
import { Botao } from "../../components/Botao/Botao";

const Imagem = styles.img`
    max-width: 100%;
    border-radius: 16px;
    gap: 8px;
`;

const Concluido = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Tipografia variante="h1" componente="h1">
        Seu perfil está completo!
      </Tipografia>
      <Tipografia variante="body" componente="body">
        Agora é só começar a se conectar com os melhores freelancers do mercado!
      </Tipografia>

      <Imagem src={clienteConcluido} alt="" />

      <Row style={{ justifyContent: "center", marginTop: 16 }}>
        <Col xl={6} md={6} sm={6}>
          <Link to="/cadastro">
            <Botao variante="secundaria">Voltar para a home</Botao>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Concluido;
