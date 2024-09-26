import React from "react";
import Card from "./Card";
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card 
      name = "Beyonce"
      img = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      contact = "+123 456 789"
      email = "b@beyonce.com"
      />
      <Card 
      name = "Itachi Uchiha"
      img = "https://i.pinimg.com/736x/9a/63/06/9a6306db28f70d27f39249e0044da128.jpg"
      contact = "+123 456 789"
      email = "tsukuyomi@gmail.com"
      />
      <Card 
      name = "Doctor Doom"
      img = "https://upload.wikimedia.org/wikipedia/en/6/60/Doctor_Doom_%282018%29.jpg"
      contact = "+123 456 679"
      email = "thisismyproperty.com"
      />
    </div>
  );
}

export default App;
