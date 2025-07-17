import styled from "styled-components";

export const Container = styled.section`
  margin-top: 8rem;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2b2b2b;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);

  .heading-all {
    text-align: center;
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
    letter-spacing: 0.08em;
  }

  .work-d {
    width: 100%;
    // background: #181c22;
    border-radius: 1rem;
    // padding: 2rem;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  }

  .work-d img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    background: #fff;
    box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    max-width: 100%;
    min-width: 0;
  }

  @media (max-width: 600px) {
    padding: 2rem 0.5rem;
    .heading-all {
      font-size: 2.1rem;
    }
    .work-d {
      padding: 1rem;
    }
    .work-d img {
      max-width: 100vw;
      min-width: 120px;
    }
  }
`