import React from "react";
import "../assets/css/menuItem.css";

export default function MenuItem(props) {
    return props.options.map((choice, i) => (
        <div className="dropdown-item" key={i}>
            <label className="checkbox">
                <input type="checkbox" onChange={props.handleSelectionChange} value={choice} className="mr-2" />
                {choice}
            </label>
        </div>
    ));
}