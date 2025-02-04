import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../pages/Cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../pages/Cadastro/LayoutBaseCadastro";
import LayoutBase from "../pages/LayoutBase";


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
              path: "cliente",
              element: <h1>Interesses</h1>
            },
            {
              path: "dados-pessoais",
              element: <h1>Dados Pessoais</h1>
            },
            {
              path: "concluido",
              element: <h1>Concluído</h1>
            }
          ]
        }
      ]
    }
  ]);
  