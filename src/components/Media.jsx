import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

const Media = ({ min, max }) => (
    <Card title="Média dos números" green>
        <div>
            <span>
                <span>Resultado:</span>
                <strong>{(min + max) / 2}</strong>
            </span>
        </div>
    </Card>
);

const mapStateToProps = (state) => {
    const { min, max } = state.numeros;
    return {
        min,
        max,
    };
};

export default connect(mapStateToProps)(Media);
