import React from "react";
import "../assets/css/menuItem.css";

export default function MenuItem(props) {
    const choices = props.options.map((choice) => {
        let choiceText = choice[0].toUpperCase();
        if (choice.length > 1) {
            for (let i = 1; i < choice.length; i++) {
                choiceText += choice[i];
            }
        }
        return choiceText;
    })
    return choices.map((choice, i) => (
        <div className="dropdown-item" key={`${choice}-${i}`} onClick={props.handleMenuClick}>
            {choice}
        </div>
    ));
}