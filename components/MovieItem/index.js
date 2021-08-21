/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Modal from "../UI/Modal";

const StyledMovie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;

const NoPoster = styled.div`
  background: #f1f1f1;
  min-width: 150px;
  min-height: 240px;
  display: block;
`;

const WrapperImage = styled.div`
  img {
    max-width: 200px;
    width: 100%;
  }
`;

function Index({ movie }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <StyledMovie>
      <div>
        {movie.Poster != "N/A" && (
          <WrapperImage>
            <img
              src={movie.Poster}
              onClick={() => setModalOpen(true)}
              alt={movie.Title}
              loading="lazy"
            />
          </WrapperImage>
        )}
        {movie.Poster == "N/A" && <NoPoster />}
      </div>
      <h3>
        <Link href={`/${movie.imdbID}`}>{movie.Title}</Link>
      </h3>
      {modalOpen && (
        <Modal setOpenModal={setModalOpen}>
          <img src={movie.Poster} alt={movie.Title} />
        </Modal>
      )}
    </StyledMovie>
  );
}

export default Index;
