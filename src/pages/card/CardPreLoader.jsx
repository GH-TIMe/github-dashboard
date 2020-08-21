import React from "react";
import ContentLoader from "react-content-loader";

const CardPreLoader = () => (
  <ContentLoader
    speed={2}
    width={320}
    height={160}
    viewBox="0 0 320 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="5" width="100" height="24" />
    <rect x="110" y="0" rx="5" ry="5" width="60" height="24" />
    <rect x="180" y="0" rx="5" ry="5" width="82" height="24" />
    <rect x="0" y="33" rx="5" ry="5" width="35" height="35" />
    <rect x="44" y="33" rx="5" ry="5" width="35" height="35" />
    <rect x="88" y="33" rx="5" ry="5" width="35" height="35" />
    <rect x="132" y="33" rx="5" ry="5" width="35" height="35" />
    <rect x="176" y="33" rx="5" ry="5" width="35" height="35" />
    <rect x="0" y="77" rx="5" ry="5" width="35" height="35" />
    <rect x="44" y="77" rx="5" ry="5" width="35" height="35" />
    <rect x="88" y="77" rx="5" ry="5" width="35" height="35" />
    <rect x="132" y="77" rx="5" ry="5" width="35" height="35" />
    <rect x="176" y="77" rx="5" ry="5" width="35" height="35" />
  </ContentLoader>
);

export default CardPreLoader;
