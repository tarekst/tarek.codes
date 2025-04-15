'use client'

import React from "react";
import {DownArrowIcon} from "@/app/icons";

interface ScrollButtonProps {
    targetId: string;
    topLabel?: string,
    bottomLabel?: string,
    additionalClassNames?: string;
    icon?: React.ReactNode;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ targetId, topLabel, bottomLabel, icon, additionalClassNames }: ScrollButtonProps)=> {
    const handleClick = () => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const defaultClasses = 'mt-8 focus:outline-none flex flex-col items-center gap-2';
    const combinedClasses = additionalClassNames
        ? `${defaultClasses} ${additionalClassNames}`
        : defaultClasses;

    return (
        <button onClick={handleClick} className={combinedClasses}>
            {topLabel}
            {icon || <DownArrowIcon size={24} />}
            {bottomLabel}
        </button>
    );
};

export default ScrollButton;