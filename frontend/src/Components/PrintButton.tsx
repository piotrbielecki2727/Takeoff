import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'

interface PrintButtonProps {
  className: string;
  onClick?: () => void;
  buttonText?: string;
  iconName?: IconProp;
  disabled?: boolean;
  size?: SizeProp;
}

const PrintButton: React.FC<PrintButtonProps> = ({
  className,
  onClick,
  buttonText,
  iconName,
  size = 'xl',
  disabled = false,
}) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {iconName && <FontAwesomeIcon size={size} icon={iconName} />} {buttonText}
    </button>
  );
};

export default PrintButton;
