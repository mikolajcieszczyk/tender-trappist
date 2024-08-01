export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: "red", color: "blue" }}>
      {text}
    </button>
  );
};
