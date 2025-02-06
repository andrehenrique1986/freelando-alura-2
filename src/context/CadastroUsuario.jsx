import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const usuarioInicial = {
  perfil: "",
  interesse: "",
  nomeCompleto: "",
  uf: "",
  cidade: "",
  email: "",
  senha: "",
  senhaConfirmada: "",
};

export const CadastroUsuarioContext = createContext({
  usuario: usuarioInicial,
  erros: {},
  setPerfil: () => null,
  setInteresse: () => null,
  setNomeCompleto: () => null,
  setUf: () => null,
  setCidade: () => null,
  setEmail: () => null,
  setSenha: () => null,
  setSenhaConfirmada: () => null,
  submeterUsuario: () => null,
  voltarParaCadastro: () => null,
});

export const useCadastroUsuarioContext = () => {
  return useContext(CadastroUsuarioContext);
};

export const CadastroUsuarioProvider = ({ children }) => {
  const navegar = useNavigate();

  const [usuario, setUsuario] = useState(usuarioInicial);
  const [erros, setErros] = useState({});

  const setPerfil = (perfil) => {
    setUsuario((estadoAnterior) => ({
      ...estadoAnterior,
      perfil,
    }));
  };

  const setInteresse = (interesse) => {
    setUsuario((estadoAnterior) => ({
      ...estadoAnterior,
      interesse,
    }));
  };

  const setNomeCompleto = (nomeCompleto) => {
    setUsuario((estadoAnterior) => ({
      ...estadoAnterior,
      nomeCompleto,
    }));
  };

  const setCidade = (cidade) => {
    setUsuario((estadoAnterior) => ({
      ...estadoAnterior,
      cidade,
    }));
  };

  const setUf = (uf) => {
    setUsuario((estadoAnterior) => ({
      ...estadoAnterior,
      uf,
    }));
  };

  const setEmail = (email) => {
    setUsuario((estadoAnterior) => ({
      ...estadoAnterior,
      email,
    }));
  };

  const setSenha = (senha) => {
    setUsuario((estadoAnterior) => ({
      ...estadoAnterior,
      senha,
    }));
  };

  const setSenhaConfirmada = (senhaConfirmada) => {
    setUsuario((estadoAnterior) => ({
      ...estadoAnterior,
      senhaConfirmada,
    }));
  };

  const validarFormulario = () => {
    const errosLocal = {};
  
    // Verificar se todos os campos estão preenchidos
    if (!usuario.nomeCompleto) {
      errosLocal.nomeCompleto = "Nome Completo é obrigatório.";
    }
  
    if (!usuario.email) {
      errosLocal.email = "E-mail é obrigatório.";
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(usuario.email)) {
        errosLocal.email = "E-mail inválido.";
      }
    }
  
    if (!usuario.senha) {
      errosLocal.senha = "Senha é obrigatória.";
    } else if (usuario.senha.length < 8) {
      errosLocal.senha = "A senha deve ter pelo menos 8 caracteres.";
    }
  
    if (usuario.senha !== usuario.senhaConfirmada) {
      errosLocal.senhaConfirmada = "As senhas não coincidem.";
    }
  
    if (!usuario.uf) {
      errosLocal.uf = "Selecione um estado.";
    }
  
    if (!usuario.cidade) {
      errosLocal.cidade = "Cidade é obrigatória.";
    }
  
    // Atualizar o estado de erros
    setErros(errosLocal);
  
    // Retornar false se houver erros, caso contrário, true
    return Object.keys(errosLocal).length === 0;
  };
  
  const submeterUsuario = () => {
    if (validarFormulario()) {
      console.log(usuario);
      navegar("/cadastro/concluido");
    }
  };

  const voltarParaCadastro = () => {
    return !usuario.perfil;
  };

  const contexto = {
    usuario,
    erros,
    setPerfil,
    setInteresse,
    setNomeCompleto,
    setUf,
    setCidade,
    setEmail,
    setSenha,
    setSenhaConfirmada,
    submeterUsuario,
    voltarParaCadastro,
  };

  return (
    <CadastroUsuarioContext.Provider value={contexto}>
      {children}
    </CadastroUsuarioContext.Provider>
  );
};
