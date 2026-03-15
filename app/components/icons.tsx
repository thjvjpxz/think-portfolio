import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export function IconMail(props: IconProps) {
  const { className = "w-5 h-5", ...rest } = props;
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export function IconGithub(props: IconProps) {
  const { className = "w-5 h-5", ...rest } = props;
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...rest}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  const { className = "w-5 h-5", ...rest } = props;
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function IconExclamationCircle(props: IconProps) {
  const { className = "w-5 h-5", ...rest } = props;
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function IconCheckCircle(props: IconProps) {
  const { className = "w-4 h-4", ...rest } = props;
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" {...rest}>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  const { className = "w-4 h-4", ...rest } = props;
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" {...rest}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function IconGraduationCap(props: IconProps) {
  const { className = "w-6 h-6", ...rest } = props;
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
      <path d="M12 4L3 8l9 4 9-4-9-4zM6.5 10.3V14c0 1.8 2.4 3.2 5.5 3.2s5.5-1.4 5.5-3.2v-3.7M20.5 8.7V13" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export function IconArrowUp(props: IconProps) {
  const { className = "w-5 h-5", ...rest } = props;
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
      <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export function IconMenu({ open, ...props }: IconProps & { open?: boolean }) {
  const { className = "w-5 h-5", ...rest } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );
}

export function IconBook(props: IconProps) {
  const { className = "w-6 h-6", ...rest } = props;
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export function IconSparkles(props: IconProps) {
  const { className = "w-6 h-6", ...rest } = props;
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
      <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3zM19 14l1 2.4L22.4 17 20 18l-1 2.4L18 18l-2.4-1 2.4-.6L19 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export function IconVideo(props: IconProps) {
  const { className = "w-6 h-6", ...rest } = props;
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
      <path d="M15 10l4.55-2.28A1 1 0 0121 8.62v6.76a1 1 0 01-1.45.9L15 14m-8 4h6a2 2 0 002-2V8a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export function IconWallet(props: IconProps) {
  const { className = "w-6 h-6", ...rest } = props;
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
      <path d="M3 7a2 2 0 012-2h13a1 1 0 010 2H5v10h14a2 2 0 002-2v-4h-5a2 2 0 01-2-2 2 2 0 012-2h5V9a2 2 0 00-2-2H3zm13 4h6v4h-6a2 2 0 010-4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export function IconSearch(props: IconProps) {
  const { className = "w-6 h-6", ...rest } = props;
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export function IconCode(props: IconProps) {
  const { className = "w-5 h-5", ...rest } = props;
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
      <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export function IconCube(props: IconProps) {
  const { className = "w-5 h-5", ...rest } = props;
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
      <path d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export function IconCog(props: IconProps) {
  const { className = "w-5 h-5", ...rest } = props;
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...rest}>
      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}
