import React from "react";
import "./App.css";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CommentBox />
        <CommentList />
      </header>
    </div>
  );
}

export default App;
