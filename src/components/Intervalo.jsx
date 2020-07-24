import "./Intervalo.css";
import { connect } from "react-redux";

import React from "react";

import Card from "./Card";

import { alterarNumeroMinimo } from "../store/actions/numeros";
const Intervalo = ({ min, max, alterarMinimo }) => {
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo</strong>
                    <input
                        type="number"
                        value={min}
                        onChange={(e) => alterarMinimo(e.target.value)}
                        name=""
                        id=""
                    />
                </span>
                <span>
                    <strong>Máximo</strong>
                    <input type="number" value={max} readOnly name="" id="" />
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

const mapActionCreatorsToProp = (dispatch) => {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapActionCreatorsToProp)(Intervalo);
