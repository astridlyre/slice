import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const siteInfo = {
  title: "slice",
  social: {
    instagram: "#",
    facebook: "#",
  },
  contact: {
    phone: "+1(812)-549-3029",
    email: "support@slice.app",
    address: "1324 Slice Ave",
    city: "San Jose",
    state: "CA",
    zip: "29104",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App siteInfo={siteInfo} />
  </React.StrictMode>,
  document.getElementById("root")
);
