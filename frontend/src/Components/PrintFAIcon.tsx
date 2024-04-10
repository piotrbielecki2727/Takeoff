import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'

interface PrintFAIconProps {
    iconName?: IconProp;
    size?: SizeProp;
    color?: string;

}

const FAIcon: React.FC<PrintFAIconProps> = ({
    size,
    iconName,
    color,
}) => {
    return (
        <> {iconName && <FontAwesomeIcon size={size} icon={iconName} style={{ color }} />}</>
    );
};

export default FAIcon;
