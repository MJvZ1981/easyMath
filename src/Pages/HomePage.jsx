import { useState } from "react";

import Nav from "../base/Nav";
import Footer from "../base/Footer";
import Body from "../base/Body";

function HomePage() {
  const [twenty, setTwenty] = useState(false);
  const [hundred, setHundred] = useState(false);

  return (
    <div>
      <Nav
        twenty={twenty}
        hundred={hundred}
        onTwenty={setTwenty}
        onHundred={setHundred}
      />
      <Body
        twenty={twenty}
        hundred={hundred}
        onTwenty={setTwenty}
        onHundred={setHundred}
      />
      <Footer />
    </div>
  );
}

export default HomePage;
