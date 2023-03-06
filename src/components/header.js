import React from 'react';
import Nav from "./nav";
import "../assets/css/header.css";

export default function Header (props) {
    return (
        <Nav currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
    );
}