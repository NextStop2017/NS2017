import React from "react";
import {Router} from "./router.js";
import {Home} from "./home/home.js";
import {Footer} from "./footer/footer.js";

export const App = () => {
  return(
    <div className="container-fluid">
      <div>
        <Router />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
