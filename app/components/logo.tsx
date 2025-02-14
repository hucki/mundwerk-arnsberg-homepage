interface LogoProps {
  size?: number;
}
export const Logo = ({ size = 135 }: LogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 135 135`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
    >
      <g transform="matrix(0.377,0,0,0.377,-84.6,0)">
        <path
          d="M403.554,0.186C502.478,0.186 582.67,80.378 582.67,179.302C582.67,278.226 502.478,358.417 403.554,358.417C304.63,358.417 224.439,278.226 224.439,179.302C224.439,80.378 304.63,0.186 403.554,0.186ZM403.554,28.976C320.531,28.976 253.229,96.278 253.229,179.302C253.229,262.325 320.531,329.628 403.554,329.628C486.578,329.628 553.88,262.325 553.88,179.302C553.88,96.278 486.578,28.976 403.554,28.976Z"
          style={{ fill: "rgb(244,121,32)", fillRule: "nonzero" }}
        />
        <path
          d="M529.006,193.629C512.413,255.389 474.573,304.147 403.554,304.147L403.13,304.147C332.112,304.147 294.271,255.389 277.679,193.629L529.006,193.629Z M317.715,222.433C333.517,253.82 366.035,275.343 403.554,275.343C441.073,275.343 473.592,253.82 489.394,222.433L317.715,222.433Z"
          style={{ fill: "rgb(244,121,32)", fillRule: "evenodd" }}
        />
      </g>
    </svg>
  );
};

interface TextLogoProps {
  className?: string;
  hasSubline?: boolean;
  textSize?: string;
}

export const TextLogo = ({
  className = "",
  hasSubline = true,
  textSize = "text-2xl",
}: TextLogoProps) => {
  return (
    <span
      className={`not-italic grid grid-cols-1 ${
        hasSubline && "grid-rows-2"
      }  ${className}`}
    >
      <span className={`${textSize} font-bold`}>
        <span className="text-primary">MUND</span>
        <span className="text-secondary dark:text-gray-400">WERK</span>
      </span>
      {hasSubline && (
        <span className="text-secondary dark:text-gray-400 whitespace-nowrap">
          Logopädische Praxis
        </span>
      )}
    </span>
  );
};

interface ComboLogoProps {
  size?: number;
  className?: string;
}
export const ComboLogo = ({ size = 42, className = "" }: ComboLogoProps) => {
  return (
    <div
      className={`grid grid-cols-[auto_auto] gap-2 justify-items-end items-center  ${className}`}
    >
      <Logo size={size} />
      <TextLogo className="justify-self-start" />
    </div>
  );
};
