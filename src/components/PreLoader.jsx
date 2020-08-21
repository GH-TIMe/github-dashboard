import React from "react";
import ContentLoader from "react-content-loader";

const PreLoader = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={160}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="1" />
    <rect x="15" y="16" rx="5" ry="5" width="276" height="32" />
    <rect x="15" y="60" rx="5" ry="5" width="100" height="22" />
    <rect x="33" y="72" rx="0" ry="0" width="3" height="0" />
    <rect x="125" y="60" rx="5" ry="5" width="60" height="22" />
    <rect x="195" y="60" rx="5" ry="5" width="80" height="22" />
    <rect x="15" y="94" rx="5" ry="5" width="50%" height="23" />
    <rect x="15" y="130" rx="5" ry="5" width="67" height="22" />
    <rect x="96" y="130" rx="5" ry="5" width="137" height="22" />
  </ContentLoader>
);

export default PreLoader;
