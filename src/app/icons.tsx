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
        style={{ marginRight: '4px', ...customStyle }}
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
        style={{ transform: 'translate(1px, 0px)', marginRight: '4px', ...customStyle }}
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
        style={{ transform: 'translate(1px, 0px)', marginRight: '4px', ...customStyle }}
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

export const PlayIcon: React.FC<IconProps> = ({ size, height, width, style: customStyle, ...props }) => (
    <svg
        fill="none"
        height={size || height || 24}
        width={size || width || 24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={customStyle}
        {...props}
    >
        <path
            d="M8 5.14v14.72a.5.5 0 00.8.4l10.49-7.36a.5.5 0 000-.8L8.8 4.74a.5.5 0 00-.8.4z"
            fill="currentColor"
        />
    </svg>
);

export const ShieldIcon: React.FC<IconProps> = ({ size, height, width, style: customStyle, ...props }) => (
    <svg
        fill="currentColor"
        height={size || height || 24}
        width={size || width || 24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: '4px', ...customStyle }}
        {...props}
    >
        <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 17.93c-3.72-1.18-6-5.08-6-8.84V6.3l6-2.25 6 2.25v4.79c0 3.76-2.28 7.66-6 8.84zm-1-5.43l-2.5-2.5 1.41-1.41L11 11.67l3.59-3.58L16 9.5l-5 5z"/>
    </svg>
);

export const OpenSourceIcon: React.FC<IconProps> = ({ size, height, width, style: customStyle, ...props }) => (
    <svg
        fill="currentColor"
        height={size || height || 24}
        width={size || width || 24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'translate(1px, 0px)', marginRight: '4px', ...customStyle }}
        {...props}
    >
        <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
    </svg>
);

export const ArchiveIcon: React.FC<IconProps> = ({ size, height, width, style: customStyle, ...props }) => (
    <svg
        fill="currentColor"
        height={size || height || 24}
        width={size || width || 24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'translate(1px, 0px)', marginRight: '4px', ...customStyle }}
        {...props}
    >
        <path d="M3 3h18v4H3V3zm1 5h16v13H4V8zm5 3h6v2H9v-2z"/>
    </svg>
);

export const TerminalIcon: React.FC<IconProps> = ({ size, height, width, style: customStyle, ...props }) => (
    <svg
        fill="currentColor"
        height={size || height || 24}
        width={size || width || 24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'translate(1px, 0px)', marginRight: '4px', ...customStyle }}
        {...props}
    >
        <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v12h16V6H4zm2.5 8.5L9 12 6.5 9.5 8 8l4 4-4 4-1.5-1.5zM13 16h5v-2h-5v2z"/>
    </svg>
);

export const EyeOffIcon: React.FC<IconProps> = ({ size, height, width, style: customStyle, ...props }) => (
    <svg
        fill="currentColor"
        height={size || height || 24}
        width={size || width || 24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'translate(1px, 0px)', marginRight: '4px', ...customStyle }}
        {...props}
    >
        <path d="M3.71 2.29a1 1 0 00-1.42 1.42l2.2 2.2A10.94 10.94 0 002 12c1.73 4.39 6 7.5 10 7.5a9.77 9.77 0 005.1-1.4l2.19 2.19a1 1 0 001.42-1.42zM12 17.5c-3.18 0-6.53-2.31-8-5.5a8.93 8.93 0 012.18-3.11L8.1 10.8A4 4 0 0013.2 15.9l1.69 1.69A7.85 7.85 0 0112 17.5z"/>
        <path d="M12 6.5c3.18 0 6.53 2.31 8 5.5a8.85 8.85 0 01-1.32 2.17l1.45 1.45A10.84 10.84 0 0022 12c-1.73-4.39-6-7.5-10-7.5a9.86 9.86 0 00-3.38.6l1.62 1.62A7.93 7.93 0 0112 6.5z"/>
    </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ size, height, width, style: customStyle, ...props }) => (
    <svg
        fill="none"
        height={size || height || 24}
        width={size || width || 24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={customStyle}
        {...props}
    >
        <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            fill="currentColor"
        />
    </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ size, height, width, style: customStyle, ...props }) => (
    <svg
        fill="none"
        height={size || height || 24}
        width={size || width || 24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={customStyle}
        {...props}
    >
        <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
            fill="currentColor"
        />
    </svg>
);

export const GithubIcon: React.FC<IconProps> = ({ size, height, width, style: customStyle, ...props }) => (
    <svg
        fill="none"
        height={size || height || 24}
        width={size || width || 24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={customStyle}
        {...props}
    >
        <path
            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
            fill="currentColor"
        />
    </svg>
);