/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../../components/UI/Layout";
import Container from "../../components/UI/Container";
import { getMovie } from "../../lib/movies";
import styled from "styled-components";

const DetailMovie = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }

  img{
    max-width:100%;
    margin-bottom: 1rem;
    @media (min-width: 992px) {
      margin-right: 1rem;
    }
  }
`;

function index({ movie }) {
  return (
    <Layout>
      <Container>
        <DetailMovie>
          <img src={movie.Poster} alt={movie.Title} />
          <div>
            <h2>{movie.Title}</h2>
            <p>{movie.Plot}</p>
          </div>
        </DetailMovie>
      </Container>
    </Layout>
  );
}

export default index;

export async function getServerSideProps({ params }) {
  const imdbID = params.imdbID;

  const movie = await getMovie(imdbID);

  return {
    props: {
      movie,
    },
  };
}
