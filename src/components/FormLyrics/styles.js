import styled from "styled-components";

export const Form = styled.form`
  /* background-color: var(--secondary); */
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
  width: 80%;
`;

export const Input = styled.input`
  border: 1px solid black;
  border-radius: 0.25rem;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

export const Button = styled.button`
  background-color: var(--primary);
  border: 1px solid black;
  border-radius: 0.25rem;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 1.25rem;
  margin-top: 1rem;
  padding: 0.75rem;
  :active {
    background-color: var(--button);
  }
`;