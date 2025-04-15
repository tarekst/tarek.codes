import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    height?: number;
    width?: number;
}

export const CheckIcon: React.FC<IconProps> = ({ size, height, width, style: customStyle, ...props }) => (
    <svg
        fill="none"
        height={size || height || 24}
        viewBox="0 0 24 24"
        width={size || width || 24}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
        fill="currentColor"
            />
    </svg>
);

export const ProgressIcon: React.FC<IconProps> = ({ size, height, width, style: customStyle, ...props }) => (
    <svg
        fill="currentColor"
        height={size || height || 24}
        viewBox="0 0 24 24"
        width={size || width || 24}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M19.43 12.98c.04-.32.07-.66.07-.98 0-.32-.03-.66-.07-.98l2.11-1.65a.5.5 0 00.12-.64l-2-3.46a.5.5 0 00-.61-.22l-2.49 1a7.007 7.007 0 00-1.69-.98l-.38-2.65a.5.5 0 00-.5-.42h-4a.5.5 0 00-.5.42l-.38 2.65c-.6.24-1.16.55-1.69.98l-2.49-1a.5.5 0 00-.61.22l-2 3.46a.5.5 0 00.12.64l2.11 1.65c-.04.32-.07.66-.07.98 0 .32.03.66.07.98l-2.11 1.65a.5.5 0 00-.12.64l2 3.46c.14.24.43.34.68.22l2.49-1c.53.43 1.09.78 1.69.98l.38 2.65c.05.28.28.48.5.48h4c.22 0 .45-.2.5-.48l.38-2.65c.6-.24 1.16-.55 1.69-.98l2.49 1c.25.12.54.02.68-.22l2-3.46a.5.5 0 00-.12-.64l-2.11-1.65zM12 15.5A3.5 3.5 0 1115.5 12 3.504 3.504 0 0112 15.5z"/>
    </svg>
);

export const PlanningIcon: React.FC<IconProps> = ({ size, height, width, style: customStyle, ...props }) => (
    <svg
        fill="currentColor"
        height={size || height || 24}
        viewBox="0 0 24 24"
        width={size || width || 24}
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'translate(1px, 0px)', ...customStyle }}
        {...props}
    >
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a1.003 1.003 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
    </svg>
);

export const ClosedIcon: React.FC<IconProps> = ({ size, height, width, style: customStyle, ...props }) => (
    <svg
        fill="currentColor"
        height={size || height || 24}
        width={size || width || 24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'translate(1px, 0px)', ...customStyle }}
        {...props}
    >
        <path d="M12 17a2 2 0 100-4 2 2 0 000 4z" />
        <path d="M17 8V6a5 5 0 00-10 0v2H5v12h14V8h-2zm-8-2a3 3 0 016 0v2H9V6z" />
    </svg>
);

export const DownArrowIcon: React.FC<IconProps> = ({ size, ...props }) => (
    <svg
        width={size || 24}
        height={size || 24}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M12 16L6 10h12L12 16z" />
    </svg>
);

export const UpArrowIcon: React.FC<IconProps> = ({ size, ...props }) => (
    <svg
        width={size || 24}
        height={size || 24}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M12 16L6 10h12L12 16z" transform="rotate(180 12 12)" />
    </svg>
);