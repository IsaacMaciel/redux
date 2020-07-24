import "./Intervalo.css";
import React from "react";

import Card from "./Card";

export default (props) => (
    <Card title="Intervalo de Números" red>
        <div className="Intervalo">
            <span>
                <strong>Mínimo</strong>
                <input type="number" value={0} readOnly name="" id="" />
            </span>
            <span>
                <strong>Máximo</strong>
                <input type="number" value={10} readOnly name="" id="" />
            </span>
        </div>
    </Card>
);
