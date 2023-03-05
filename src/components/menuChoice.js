import React, { useState, useEffect } from "react";
import "../assets/css/menuItem.css";

export default function MenuItem(props) {
    return props.options.map((choice, i) => (
        <div className="dropdown-item" key={`${choice}-${i}`} onClick={props.handleMenuClick}>
                {choice}
        </div>
    ));
}