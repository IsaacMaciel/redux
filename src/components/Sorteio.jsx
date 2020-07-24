import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

const Sorteio = ({ min, max }) => {
    const numeroAleatorio = parseInt(Math.random() * (max - min) + min);
    return (
        <Card title="Sorteio de um Número" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{numeroAleatorio}</strong>
                </span>
            </div>
        </Card>
    );
};

const mapStateToProps = (state) => {
    const { min, max } = state.numeros;
    return {
        min,
        max,
    };
};

export default connect(mapStateToProps)(Sorteio);
