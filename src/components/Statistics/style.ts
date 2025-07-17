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
    // color: var(--blue, #4f8cff);
    letter-spacing: 0.08em;
  }

  .stats-card-inn {
    width: 100%;
    max-width: 900px;
    
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    display: flex;
    align-items: center;
  }

  .stats-1 {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    flex-wrap: nowrap;
  }

  .stats-1 img {
    display: block;
    height: auto;
    border-radius: 0.5rem;
    background: #fff;
    box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    flex: 1 1 0;
  }

  .stats-1 img:nth-child(3) {
    margin-top: 2rem;
    flex-basis: 100%;
    align-self: center;
  }

  @media (max-width: 900px) {
    .stats-1 {
      flex-direction: column;
      gap: 2rem;
      align-items: center;
    }
    .stats-1 img {
      max-width: 100vw;
    }
    .stats-1 img:nth-child(3) {
      margin-top: 2rem;
    }
  }

  @media (max-width: 700px) {
    padding: 2rem 0.5rem;
    .heading-all {
      font-size: 2.1rem;
    }
    .stats-card-inn {
      padding: 1rem;
    }
    .stats-1 img {
      max-width: 100vw;
      width: 100%; // Ensure images take full width on mobile
      height: auto;
    }
  }
`;
