import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  padding: 0px 1rem;

  z-index: 100;
  box-shadow: 2px 0 10px rgba(100, 100, 100, 0.3);

  backdrop-filter: saturate(180%) blur(20px);

  @media (min-width: 992px) {
    padding: 0px 3rem;
  }
  @media (min-width: 1100px) {
    padding: 0px 14rem;
  }
`;

function index() {
  return (
    <StyledHeader>
      <h1>
        <Link href="/">Movies App</Link>
      </h1>
    </StyledHeader>
  );
}

export default index;
