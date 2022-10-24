import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageCadastro from "./PageCadastro";
import PageHabitos from "./PageHabitos/PageHabitos";
import PageHistoricos from "./PageHistorico";
import PageLogin from "./PageLogin";
import PageHoje from "./PageHoje"
import GlobalStyle from "./style/GlobalStyle"
import { InfoContext } from "./InfoContext";
import { useState } from "react";


export default function App() {
    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [name, setName] = useState(undefined)
    const [image, setImage] = useState(undefined)
    const [cancelar, setCancelar] = useState(false)
    const [salvar, setSalvar] = useState(false)
    const [nomeHabito, setNomeHabito] = useState('')
    const [habitos, setHabitos] = useState([])
    const [botaoClicado, setBotaoClicado] = useState(false)
    const [token, setToken] = useState('')
    const [idDoHabito, setIdDoHabito] = useState('')
    const [clicked, setClicked] = useState(false)
    const [checked, setChecked] = useState(false)
    const [contador, setContador] = useState(0)
    const config = {headers:{Authorization: `Bearer ${token}`}}

    return (
        <InfoContext.Provider value={{email, setEmail, password, setPassword, name, setName, image, setImage, cancelar, setCancelar, salvar, setSalvar, nomeHabito, setNomeHabito, botaoClicado, setBotaoClicado, token, setToken, habitos, setHabitos, idDoHabito, setIdDoHabito, clicked, setClicked, checked, setChecked, contador, setContador, config}}>
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
        </InfoContext.Provider>
    )
}