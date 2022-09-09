import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/app/hookes";
import { searchFilter } from "../utiles/functions";

const Search = () => {
  const conversations = useAppSelector(
    (state) => state.conversation.conversations
  );
  const dispatch = useDispatch();
  return (
    <section className="sec">
    <div className="d-flex justify-content-center">
      <div className="form-group has-search mt-1">
        <span className="fa fa-search form-control-feedback"></span>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          name="searchFilter"
          onChange={(e) => {
            searchFilter(e.target.value, conversations, dispatch);
            e.preventDefault();
          }}
        />
      </div>
    </div>

    </section>
  );
};

export default Search;
