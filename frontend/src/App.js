import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Selection from "./components/Selection";
import Footer from "./components/Footer";
import Modal from "./components/Modal/Modal";

function App() {
  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);
  return (
    <div className="App">
      <Header onOpen={() => setModalInfoOpen(true)} />

      <Selection />

      <Footer />

      <Modal isOpen={modalInfoIsOpen} onClose={() => setModalInfoOpen(false)}>
        <h2>Регистрация</h2>
        <form method="post">
          <label htmlFor="nickname">Nickname</label>
          <input type="text" id="nickname" name="nickname"></input>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email"></input>

          <label>Пол</label>
          <input
            type="radio"
            id="man"
            value="Мужской"
            name="gender"
            style={{display: "inline-block", marginBottom: "0px"}}
          ></input>
          <label htmlFor="man" style={{display: "inline-block", marginTop: "0px"}}>
            Мужской
          </label>
          <br />
          <input
            type="radio"
            id="over_16"
            value="Женщина"
            name="gender"
            style={{display: "inline-block", marginBottom: "0px"}}
          ></input>
          <label htmlFor="woman" style={{display: "inline-block"}}>
            Женский
          </label>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"></input>

          <label htmlFor="password">Confirm password</label>
          <input type="password" id="password-confirm" name="password"></input>

          <button type="reset">Отправить</button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
