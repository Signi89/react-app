import React from "react";
import images from "./images/google.jpg";

function Message() {
  const name = "Signi";
  if (name)
    return (
      <>
        <h1>Hello {name}</h1>
        <img src={images} alt="me" />
        <h3>Subscribe to my Newsletter</h3>
        <form>
          <input type="text" placeholder="Email address" className="email" />
          <div className="btn">
            <button>Subscribe</button>
          </div>
        </form>
      </>
    );
}

export default Message;
