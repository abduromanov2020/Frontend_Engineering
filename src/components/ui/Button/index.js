import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0.6rem 1.6rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  border: none;
  background-color: ;
  font-weight: bold;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
  cursor: pointer;
  color: #111;

  background-color: ${({ variant, theme }) =>
    theme.colors[variant] || theme.colors.primary};

  ${({ size, theme }) => theme.size[size] || theme.size.md};

  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 50%;
    `}
`;

export default Button;
