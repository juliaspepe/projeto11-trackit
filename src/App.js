import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageCadastro from "./PageCadastro";
import PageHabitos from "./PageHabitos";
import PageHistoricos from "./PageHistorico";
import PageLogin from "./PageLogin";
import PageHoje from "./PageHoje"
import GlobalStyle from "./style/GlobalStyle"


export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<PageLogin />} />
                <Route path="/cadastro" element={<PageCadastro />} />
                <Route path="/habitos" element={<PageHabitos />} />
                <Route path="/hoje" element={<PageHoje />} />
                <Route path="/historico" element={<PageHistoricos />} />
            </Routes>
        </BrowserRouter>
    )
}