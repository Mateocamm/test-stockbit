import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import MovieItem from "../MovieItem"

const ListMovies = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0px 1rem;
  width: 100%;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    padding: 0px 3rem;
  }

  @media (min-width: 1100px) {
    padding: 0px 14rem;
  }
`;

function Index({ data, loading, error }) {
  return (
    <>
      <ListMovies>
        {data &&
          data.map((item) => <MovieItem movie={item} key={item.imdbID} />)}
      </ListMovies>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
    </>
  );
}

const mapStateToProps = (state) => ({
  data: state.data.Search,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
