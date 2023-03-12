import React from "react";
import INFO from "../data/info";

const RenderData = () => {
    return <div className="card">
        {INFO.map(info => {
            return (<div className="card__info" key={info.id}>
                <h1>{info.punchline}</h1>
                <p>{info.setup}</p>
            </div>)
        })}
    </div>;
};

export default RenderData;
