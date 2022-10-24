import { createContext } from "react";

export const InfoContext = createContext({});

export const diasDaSemana = [
    { id: 0, name: "D", dayName: "Domingo", clicado: false },
    { id: 1, name: "S", dayName: "Segunda", clicado: false },
    { id: 2, name: "T", dayName: "Terça", clicado: false },
    { id: 3, name: "Q", dayName: "Quarta", clicado: false },
    { id: 4, name: "Q", dayName: "Quinta", clicado: false },
    { id: 5, name: "S", dayName: "Sexta", clicado: false },
    { id: 6, name: "S", dayName: "Sabado", clicado: false }
];