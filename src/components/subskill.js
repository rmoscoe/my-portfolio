import React from "react";

export default function Subskill (props) {
    return props.subskills.map((subskill, i) => (
        (i === props.subskills.length - 1 ? <span key={i}>{subskill}</span> : <span key={i}>{subskill} | </span>)
    ));
}