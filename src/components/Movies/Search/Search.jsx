import React from "react";
import "./Search.css";
import { connect } from "react-redux";
import { API_KEY, LINK } from "../../../config/apikey";

const Search = (props) => {
  const { Send } = props;

  const SearchFilm = (e) => {
    e.preventDefault();
    fetch(`${LINK}${e.target.in_title.value}${API_KEY}`)
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        Send(response);
      });
  };

  return (
    <form onSubmit={SearchFilm}>
      <input type="text" placeholder="Enter film title" name="in_title" />
      <button>Search</button>
    </form>
  );
};

const DispatchTo = (dispatch) => {
  return {
    Send: (data) => {
      dispatch({ type: "SEARCH", payload: { data } });
    },
  };
};

export default connect(null, DispatchTo)(Search);
