import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledMovie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const NoPoster = styled.div`
  background: #f1f1f1;
  width: 300px;
  height: 420px;
`;

function index({ movie }) {
  return (
    <StyledMovie>
      <div>
        {movie.Poster != "N/A" && (
          <img src={movie.Poster} alt={movie.Title} loading="lazy" />
        )}
        {movie.Poster == "N/A" && <NoPoster />}
      </div>
      <h3>
        <Link href={`/${movie.imdbID}`}>{movie.Title}</Link>
      </h3>
    </StyledMovie>
  );
}

export default index;
