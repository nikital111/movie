import React from "react";
import "./Header.css";
import { connect } from "react-redux";

const Header = (props) => {
  const { title } = props;
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

const StateTo = (state) => {
  return {
    title: state.header.title,
  };
};

export default connect(StateTo)(Header);
