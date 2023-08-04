import React, { useEffect, useRef } from "react";
import ScrollRoll from "./ScrollRoll";
import Banner from "./Banner";

function Content() {
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  
  const [currentUrl, setCurrentUrl] = React.useState("");
  const getLastSegmentFromUrl = (url: string) => {
    const diviser = url.split("/");
    return diviser[diviser.length - 1];
  };

  let lastSegment = getLastSegmentFromUrl(currentUrl);

  if (lastSegment == "") {
    lastSegment = "Pagina inicial";
        return (
          <>
            <Banner />
            <ScrollRoll />
          </>
          );
  }else if (lastSegment === "About") {
    return <h1>About</h1>;
  } else if (lastSegment === "Login") {
    return <h1>Login</h1>;
  }
}

export default Content;
