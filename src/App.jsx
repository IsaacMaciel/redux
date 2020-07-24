import React from "react";
import "./App.css";

import Card from "./components/Card";
import Intervalo from "./components/Intervalo";

export default (props) => (
    <div className="App">
        <h1>Exercício React-Redux (Simples)</h1>
        <div className="linha">
            <Intervalo></Intervalo>
        </div>

        <div className="linha">
            <Card title="Card 3" green>
                W
            </Card>
            <Card title="Card 4 " purple>
                Z
            </Card>

            <Card title="Card 2" blue>
                Y
            </Card>
        </div>
    </div>
);
