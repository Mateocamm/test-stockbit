import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { searchMovies } from "../../actions";
import Container from "../../components/UI/Container";

const InputSearch = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  margin: 1rem 0;
`;

function Index({ searchMovies }) {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filter) searchMovies(filter, 1);
  }, [filter]);

  return (
    <Container>
      <InputSearch
        type="text"
        value={filter}
        placeholder="Search Movies"
        onChange={(evt) => setFilter(evt.target.value)}
      />
    </Container>
  );
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  searchMovies(filter, page) {
    dispatch(searchMovies(filter, page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
