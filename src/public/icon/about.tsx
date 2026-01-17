import type { SVGProps } from "react";

// 공통 스타일을 적용하기 위해 타입을 지정합니다.
type IconProps = SVGProps<SVGSVGElement>;

export const TechIcon = (props: IconProps) => (
  <svg
    className="size-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#155DFC"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" />
    <path d="M20 2V6M22 4H18" />
    <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" />
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <svg
    className="size-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#00A63E"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20 6L9 17L4 12" />
  </svg>
);

export const FeedbackIcon = (props: IconProps) => (
  <svg
    className="size-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#9810FA"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" />
    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" />
    <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005" />
    <path d="M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" />
  </svg>
);
