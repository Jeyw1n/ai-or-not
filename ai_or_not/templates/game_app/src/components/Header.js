import React from "react";

function Header({onOpen}) {
return (
      <header>
        <div className="App-logo">
          <p>AI or NOT</p>
        </div>
        <button className="open-button" onClick={() => onOpen()}>
            Войти
        </button>
      </header>
    );
  }

export default Header;
