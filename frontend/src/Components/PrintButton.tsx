import React from "react";
import { Button } from "react-bootstrap";

interface PrintButtonProps {
  className?: string;
  onClick: () => void;
  buttonText: string;
  disabled?: boolean;
}

const PrintButton: React.FC<PrintButtonProps> = ({
  className = "",
  onClick,
  buttonText,
  disabled = false,
}) => {
  return (
    <Button className={className} onClick={onClick} disabled={disabled}>
      {buttonText}
    </Button>
  );
};

export default PrintButton;
