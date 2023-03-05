import React, { useState, useEffect } from "react";
import "../assets/css/menuItem.css";

export default function MenuItem(props) {
    return props.options.map((choice, i) => (
        <div className="dropdown-item" key={i}>
            <label className="checkbox">
                <input type="checkbox" onChange={props.handleSelectionChange} value={choice} />
                {choice}
            </label>
        </div>
    ));
}