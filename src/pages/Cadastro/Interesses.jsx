import { useState } from "react";
import GroupRadio from "../../components/RadioButton/GroupRadio/GroupRadio";
import { Tipografia } from "../../components/Tipografia/Tipografia";
import { Col, Row } from "react-grid-system";
import { Botao } from "../../components/Botao/Botao";
import { Link } from "react-router-dom";

const opcoes = [
  {
    valor: 1,
    label: "TI e Programação",
  },
  {
    valor: 2,
    label: "Design e Multimídia",
  },
  {
    valor: 3,
    label: "Revisão",
  },
  {
    valor: 4,
    label: "Tradução",
  },
  {
    valor: 5,
    label: "Transcrição",
  },
  {
    valor: 6,
    label: "Marketing",
  },
];

const Interesses = () => {
  const [opcao, setOpcao] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <Tipografia variante="h1" componente="h1">
        Crie seu cadastro
      </Tipografia>
      <Tipografia variante="h3" componente="h2">
        Qual a área de interesse?
      </Tipografia>
      <GroupRadio opcoes={opcoes} valor={opcao} onChange={setOpcao} />
      <Row justify="center">
        <Col lg={6} md={6} sm={6}>
          <Link to="/cadastro">
            <Botao variante="secundaria">Anterior</Botao>
          </Link>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <Link to="/cadastro/dados-pessoais">
            <div style={{ textAlign: "right" }}>
              <Botao>Próxima</Botao>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Interesses;
