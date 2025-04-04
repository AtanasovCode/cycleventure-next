import * as React from "react";

const ToggleIcon = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="55"
        fill="none"
        viewBox="0 0 54 55"
        className="w-8 h-auto"
    >
        <g id="toggle">
            <g id="globe-moon">
                <circle
                    id="globe"
                    cx="26.983"
                    cy="27.506"
                    r="15"
                
                ></circle>
                <path
                    id="moon"
                    fill="#000"
                    fillRule="evenodd"
                    d="M26.887 14.9c-3.798 3.426-5.19 8.995-3.046 14.05 2.144 5.057 7.179 8.08 12.371 7.945a12.3 12.3 0 0 1-3.73 2.325c-6.487 2.57-13.971-.596-16.716-7.071s.288-13.806 6.775-16.376a12.6 12.6 0 0 1 4.346-.873"
                    clipRule="evenodd"
                ></path>
            </g>
            <g id="sun-rays">
                <rect
                    id="ray"
                    width="3"
                    height="10"
                    x="25.483"
                    y="0.684"
                    rx="1.5"
                ></rect>
                <rect
                    id="ray_2"
                    width="3"
                    height="10"
                    x="43.719"
                    y="29.006"
                    rx="1.5"
                    transform="rotate(-90 43.719 29.006)"
                ></rect>
                <rect
                    id="ray_3"
                    width="3"
                    height="10"
                    x="0.247"
                    y="29.006"
                    rx="1.5"
                    transform="rotate(-90 .247 29.006)"
                ></rect>
                <rect
                    id="ray_4"
                    width="3"
                    height="10"
                    x="25.483"
                    y="44.328"
                    rx="1.5"
                ></rect>
                <rect
                    id="ray_5"
                    width="3"
                    height="10"
                    x="6.956"
                    y="9.602"
                    rx="1.5"
                    transform="rotate(-45 6.956 9.602)"
                ></rect>
                <rect
                    id="ray_6"
                    width="3"
                    height="10"
                    x="39.877"
                    y="16.732"
                    rx="1.5"
                    transform="rotate(-135 39.877 16.732)"
                ></rect>
                <rect
                    id="ray_7"
                    width="3"
                    height="10"
                    x="9.138"
                    y="47.473"
                    rx="1.5"
                    transform="rotate(-135 9.138 47.473)"
                ></rect>
                <rect
                    id="ray_8"
                    width="3"
                    height="10"
                    x="37.817"
                    y="40.463"
                    rx="1.5"
                    transform="rotate(-45 37.817 40.463)"
                ></rect>
            </g>
        </g>
    </svg>
);

export default ToggleIcon;
