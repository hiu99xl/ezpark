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
