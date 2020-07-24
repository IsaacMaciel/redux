import React, { useState } from "react";
import "./App.css";

import Intervalo from "./components/Intervalo";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";

export default (props) => {
    return (
        <div className="App">
            <h1>Exercício React-Redux (Simples)</h1>
            <div className="linha">
                <Intervalo></Intervalo>
            </div>

            <div className="linha">
                <Media></Media>
                <Soma></Soma>
                <Sorteio></Sorteio>
            </div>
        </div>
    );
};
