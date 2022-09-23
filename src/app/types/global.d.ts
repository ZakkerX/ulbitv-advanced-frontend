declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  // eslint-disable-next-line import/no-default-export
  export default SVG;
}

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';

declare const __IS_DEV__: boolean;
