export default function ArrowUpRightIcon({ props }: { props?: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-up-right"
      {...props}
    >
      <line x1={7} y1={17} x2={17} y2={7} />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}
