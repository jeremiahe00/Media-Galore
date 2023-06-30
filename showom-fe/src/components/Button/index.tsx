import { styled } from "styled-components";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return <ButtonComponent onClick={onClick}>{text}</ButtonComponent>;
};

const ButtonComponent = styled.button`
  background-color: red;
  border: 1px solid green;
  color: white;
`;
