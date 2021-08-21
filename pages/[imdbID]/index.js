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

  img {
    max-width: 100%;
    margin-bottom: 1rem;
    @media (min-width: 992px) {
      margin-right: 1rem;
    }
  }
`;

const Badge = styled.span`
  display: inline-block;
  background: #aaa;
  color: #fafafa;
  padding: 4px 8px;
  border-radius: 5px;
  margin-right: 4px;
`;

const DetailContent = styled.div`
  h2 {
    margin-bottom: 16px;
  }
  h3,
  p {
    margin: 8px 0;
  }

  li {
    margin-left: 20px;
  }
`;

function index({ movie }) {
  return (
    <Layout>
      <Container>
        <DetailMovie>
          <img src={movie.Poster} alt={movie.Title} />
          <DetailContent>
            <h2>{movie.Title}</h2>
            <Badge>{movie.Year}</Badge>
            <Badge>{movie.Language}</Badge>
            <Badge>{movie.Runtime}</Badge>
            <p>{movie.Plot}</p>
            {movie.Genre.split(",").map((gen, index) => (
              <Badge key={index}>{gen}</Badge>
            ))}

            <h3>Director</h3>
            <ul>
              {movie.Director.split(",").map((dir, index) => (
                <li key={index}>{dir}</li>
              ))}
            </ul>
            <h3>Actors</h3>
            <ul>
              {movie.Actors.split(",").map((act, index) => (
                <li key={index}>{act}</li>
              ))}
            </ul>
          </DetailContent>
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
