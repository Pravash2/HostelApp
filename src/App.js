import React from "react";
import AppBar from "./AppBar";
import Bottom from "./BottomNavbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <AppBar />
        <Bottom />
      </div>
    );
  }
}

export default App;
