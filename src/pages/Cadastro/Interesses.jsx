import GroupRadio from "../../components/RadioButton/GroupRadio/GroupRadio";
import { Tipografia } from "../../components/Tipografia/Tipografia";
import { Col, Row } from "react-grid-system";
import { Botao } from "../../components/Botao/Botao";
import { Link, useNavigate } from "react-router-dom";
import { useCadastroUsuarioContext } from "../../context/CadastroUsuario";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

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
  
  const { 
    usuario, 
    setInteresse, 
    voltarParaCadastro 
  } = useCadastroUsuarioContext();

  const [erro, setErro] = useState("");
  const navegar = useNavigate();

  useEffect(() => {
    if (voltarParaCadastro()) {
      navegar('/cadastro');
    }
  }, [navegar, voltarParaCadastro]);


  const Erros = styled.div`
  color: ${(props) => props.theme.cores.primarias.b};
  text-align: center;
  
`;

  // Função para verificar se o interesse foi selecionado
  const podeIrParaProximo = usuario.interesse !== "";

  const handleProxima = () => {
    if (!podeIrParaProximo) {
      setErro("Por favor, selecione uma área de interesse.");
    } else {
      setErro("");
      navegar("/cadastro/dados-pessoais");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Tipografia variante="h1" componente="h1">
        Crie seu cadastro
      </Tipografia>
      <Tipografia variante="h3" componente="h2">
        Qual a área de interesse?
      </Tipografia>

      {(!usuario.interesse && erro) && (
                      <Erros>
                        <Tipografia variante="legenda" componente="legenda">
                          {erro}
                        </Tipografia>
                      </Erros> )}

      <GroupRadio 
        opcoes={opcoes} 
        valor={usuario.interesse} 
        onChange={setInteresse} 
      />

       
      <Row justify="center">
        <Col lg={6} md={6} sm={6}>
          <Link to="/cadastro">
            <Botao variante="secundaria">Anterior</Botao>
          </Link>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <Link to={podeIrParaProximo ? "/cadastro/dados-pessoais" : "#"}>
            <div style={{ textAlign: "right" }}>
              <Botao onClick={handleProxima} disabled={!podeIrParaProximo}>
                Próxima
              </Botao>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Interesses;
