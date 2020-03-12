import React from 'react';

export default () => <h1 className="sticky-inner">Sticky</h1>;
.sticky {
    position: sticky;
    top: 0;
    z-index: 100; /* this is optional and should be different for every project */
  }