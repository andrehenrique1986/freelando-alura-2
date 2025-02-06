import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../pages/Cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../pages/Cadastro/LayoutBaseCadastro";
import LayoutBase from "../pages/LayoutBase";
import Interesses from "../pages/Cadastro/Interesses";
import DadosPessoais from "../pages/Cadastro/DadosPessoais";
import Concluido from "../pages/Cadastro/Concluido";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutBase />,
      children: [
        {
          path: "cadastro",
          element: <LayoutBaseCadastro />,
          children: [
            {
              path: '',
              element: <SelecaoCliente />
            },
            {
              path: "interesses",
              element: <Interesses />
            },
            {
              path: "dados-pessoais",
              element: <DadosPessoais />
            },
            {
              path: "concluido",
              element: <Concluido />
            }
          ]
        }
      ]
    }
  ]);
  