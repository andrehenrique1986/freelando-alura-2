import { Tipografia } from "../../components/Tipografia/Tipografia";
import { Col, Row } from "react-grid-system";
import { Botao } from "../../components/Botao/Botao";
import { Link } from "react-router-dom";
import { CampoTexto } from "../../components/CampoTexto/CampoTexto";
import { ListaSupensa } from "../../components/ListaSuspensa/ListaSuspensa";
import { useCadastroUsuarioContext } from "../../context/CadastroUsuario";
import styled from "@emotion/styled";

const estadosBrasileiros = [
  { text: "Acre", value: "AC" },
  { text: "Alagoas", value: "AL" },
  { text: "Amapá", value: "AP" },
  { text: "Amazonas", value: "AM" },
  { text: "Bahia", value: "BA" },
  { text: "Ceará", value: "CE" },
  { text: "Distrito Federal", value: "DF" },
  { text: "Espírito Santo", value: "ES" },
  { text: "Goiás", value: "GO" },
  { text: "Maranhão", value: "MA" },
  { text: "Mato Grosso", value: "MT" },
  { text: "Mato Grosso do Sul", value: "MS" },
  { text: "Minas Gerais", value: "MG" },
  { text: "Pará", value: "PA" },
  { text: "Paraíba", value: "PB" },
  { text: "Paraná", value: "PR" },
  { text: "Pernambuco", value: "PE" },
  { text: "Piauí", value: "PI" },
  { text: "Rio de Janeiro", value: "RJ" },
  { text: "Rio Grande do Norte", value: "RN" },
  { text: "Rio Grande do Sul", value: "RS" },
  { text: "Rondônia", value: "RO" },
  { text: "Roraima", value: "RR" },
  { text: "Santa Catarina", value: "SC" },
  { text: "São Paulo", value: "SP" },
  { text: "Sergipe", value: "SE" },
  { text: "Tocantins", value: "TO" },
];

const Erros = styled.div`
  color: ${(props) => props.theme.cores.primarias.b};
  text-align: end;
  margin-top: -10px;
`;

const DadosPessoais = () => {
  const {
    usuario,
    erros,
    setNomeCompleto,
    setUf,
    setCidade,
    setEmail,
    setSenha,
    setSenhaConfirmada,
    submeterUsuario,
  } = useCadastroUsuarioContext();

  const finalizarCadastro = (evento) => {
    evento.preventDefault();
    submeterUsuario();
  };

  const todosCamposPreenchidos =
    usuario.nomeCompleto &&
    usuario.uf &&
    usuario.cidade &&
    usuario.email &&
    usuario.senha &&
    usuario.senhaConfirmada;

  return (
    <form onSubmit={finalizarCadastro}>
      <div style={{ textAlign: "center" }}>
        <Tipografia variante="h1" componente="h1">
          Crie seu cadastro
        </Tipografia>
        <Tipografia variante="body" componente="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores
          freelancers. Em seguida, você poderá dar mais detalhes sobre suas
          demandas e sobre sua forma de trabalho.
        </Tipografia>
      </div>
      <Row justify="center">
        <Col>
          <Row>
            <Col>
              <CampoTexto
                titulo="Nome Completo"
                valor={usuario.nomeCompleto}
                onChange={setNomeCompleto}
                erro={erros.nomeCompleto}
              />
              {!usuario.nomeCompleto && erros.nomeCompleto && (
                <Erros>
                  <Tipografia variante="legenda" componente="legenda">
                    {erros.nomeCompleto}
                  </Tipografia>
                </Erros>
              )}
            </Col>
          </Row>

          <Row>
            <Col lg={4} md={4} sm={4}>
              <ListaSupensa
                titulo="Estado"
                opcoes={estadosBrasileiros}
                valor={usuario.uf}
                onChange={setUf}
                erro={erros.uf}
              />
              {!usuario.uf && erros.uf && (
                <Erros>
                  <Tipografia variante="legenda" componente="legenda">
                    {erros.uf}
                  </Tipografia>
                </Erros>
              )}
            </Col>
            <Col lg={8} md={8} sm={8}>
              <CampoTexto
                titulo="Cidade"
                valor={usuario.cidade}
                onChange={setCidade}
                erro={erros.cidade}
              />
              {!usuario.cidade && erros.cidade && (
                <Erros>
                  <Tipografia variante="legenda" componente="legenda">
                    {erros.cidade}
                  </Tipografia>
                </Erros>
              )}
            </Col>
          </Row>

          <Row>
            <Col>
              <CampoTexto
                titulo="E-mail"
                valor={usuario.email}
                onChange={setEmail}
                tipo="email"
                erro={erros.cidade}
              />
              {!usuario.email && erros.email && (
                <Erros>
                  <Tipografia variante="legenda" componente="legenda">
                    {erros.email}
                  </Tipografia>
                </Erros>
              )}
            </Col>
          </Row>

          <Row>
            <Col lg={6} md={6} sm={6}>
              <CampoTexto
                titulo="Senha"
                valor={usuario.senha}
                onChange={setSenha}
                tipo="password"
                erro={erros.senha}
              />
              {!usuario.senha && erros.senha && (
                <Erros>
                  <Tipografia variante="legenda" componente="legenda">
                    {erros.senha}
                  </Tipografia>
                </Erros>
              )}
            </Col>
            <Col lg={6} md={6} sm={6}>
              <CampoTexto
                titulo="Repita a Senha"
                valor={usuario.senhaConfirmada}
                onChange={setSenhaConfirmada}
                tipo="password"
                erro={erros.senhaConfirmada}
              />
              {!usuario.senhaConfirmada && erros.senhaConfirmada && (
                <Erros>
                  <Tipografia variante="legenda" componente="legenda">
                    {erros.senhaConfirmada}
                  </Tipografia>
                </Erros>
              )}
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col lg={6} md={6} sm={6}>
          <Link to="/cadastro/interesses">
            <Botao variante="secundaria">Anterior</Botao>
          </Link>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "right" }}>
            <Botao disabled={!todosCamposPreenchidos}>Próxima</Botao>
          </div>
        </Col>
      </Row>
    </form>
  );
};

export default DadosPessoais;
