/**
 * Type declaration cho SVG files được import qua @svgr/webpack
 * Khi import file .svg, @svgr/webpack sẽ transform nó thành React component
 * Component này có thể nhận các props như className, style, onClick, ref, etc.
 * 
 * Với cấu hình ref: true, component đã được wrap với forwardRef
 * nên có thể sử dụng ref trực tiếp khi import
 */
declare module '*.svg' {
  import React from 'react';

  const ReactComponent: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>
  >;

  export default ReactComponent;
}

declare module '*.svg?url' {
  const content: string;
  export default content;
}
