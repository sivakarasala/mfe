import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

export default () => {
  const marketAppRef = useRef(null);

  useEffect(() => {
    mount(marketAppRef.current);
  });
  return <div ref={marketAppRef}></div>;
};
