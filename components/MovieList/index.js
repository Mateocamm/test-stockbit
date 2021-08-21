import React, { useState, useRef, useCallback } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import MovieItem from "../MovieItem";
import { searchMovies } from "../../actions";

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

const Loading = styled.div`
  text-align: center;
`;

function Index({ data, loading, error, page, hasMore, filter, searchMovies }) {
  const observer = useRef();

  const lastMovieElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("search more movies");
          searchMovies(filter, page + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <ListMovies>
        {data &&
          data.map((item, index) => {
            if (data.length === index + 1) {
              return (
                <div key={item.imdbID} ref={lastMovieElementRef}>
                  <MovieItem movie={item} />
                </div>
              );
            } else {
              return <MovieItem movie={item} key={item.imdbID} />;
            }
          })}
      </ListMovies>
      {loading && <Loading>Loading...</Loading>}
      {error && <div>Error: {error}</div>}
    </>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
  hasMore: state.hasMore,
  page: state.page,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  searchMovies(filter, page) {
    dispatch(searchMovies(filter, page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
