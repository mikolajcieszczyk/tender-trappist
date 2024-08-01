export interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({ text, onClick, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ backgroundColor: "red", color: "white" }}
    >
      {text}
    </button>
  );
};
