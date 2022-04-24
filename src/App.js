import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [userName, setUserName] = React.useState("");
  const [nameError, setNameError] = React.useState(null);
  const [userLastName, setUserLastName] = React.useState("");
  const [userLastNameError, setUserLastNameError] = React.useState(null);
  const [userEmail, setUserEmail] = React.useState("");
  const [userEmailError, setUserEmailError] = React.useState(null);
  const [userPassword, setUserPassword] = React.useState("");
  const [userPasswordError, setUserPasswordError] = React.useState(null);
  const inputName = React.useRef();
  const inputLastName = React.useRef();
  const inputEmail = React.useRef();
  const inputPassword = React.useRef();

  function handleChange(event) {
    event.preventDefault();
    validateEmpty();
    validateEmail();
  }

  function validateEmpty() {
    if (userName.length === 0) {
      setNameError('First Name cannot be empty');
      inputName.current.classList.add("error");
    } else {
      setNameError(null);
      inputName.current.classList.remove("error");
    }
    if (userLastName.length === 0) {
      setUserLastNameError('Last Name cannot be empty');
      inputLastName.current.classList.add("error");
    } else {
      setUserLastNameError(null);
      inputLastName.current.classList.remove("error");
    }
    if (userPassword.length === 0) {
      setUserPasswordError('Password cannot be empty')
      inputPassword.current.classList.add("error");
    } else {
      setUserPasswordError(null);
      inputPassword.current.classList.remove("error");
    }
  }

  function validateEmail() {
    const regexEmail = /\S+@\S+\.\S+/;
    
    if (regexEmail.test(userEmail) === false) {
      setUserEmailError('Looks like this is not an email');
      inputEmail.current.classList.add("email-error");
    } else {
      setUserEmailError(null);
      inputEmail.current.classList.remove("email-error");
    }
  }

  function changeInput({target}) {
    if (target.id === "1") {
      setUserName(target.value);
      setNameError(null);
      inputName.current.classList.remove("error");
    }
    if (target.id === "2") {
      setUserLastName(target.value);
      setUserLastNameError(null);
      inputLastName.current.classList.remove("error");
    }
    if (target.id === "3") {
      setUserEmail(target.value);
      setUserEmailError(null);
      inputEmail.current.classList.remove("email-error");
    }
    if (target.id === "4") {
      setUserPassword(target.value);
      setUserPasswordError(null);
      inputPassword.current.classList.remove("error");
    }
  }


  return (
    <div className="App">
      <main className="container">
        <section className="text-area">
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. Waching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </section>
        <section className="form-area">
          <div className="try-it">
            <p><span>Try it free 7 days </span>then $20/mo. thereafter</p>
          </div>
          <form className="claim-form">
              <input id="1" ref={inputName} type="text" onChange={changeInput} placeholder={nameError ? "" : "First Name"}></input>
              {nameError ? <p>{nameError}</p> : ""}
              <input id="2" ref={inputLastName} type="text"  onChange={changeInput} placeholder={userLastNameError ? "" : "Last Name"}></input>
              {userLastNameError ? <p>{userLastNameError}</p> : ""}
              <input id="3" ref={inputEmail} type="email" onChange={changeInput} placeholder={userEmailError ? "email@example.com" : "Email Address"}></input>
              {userEmailError ? <p>{userEmailError}</p> : ""}
              <input id="4" ref={inputPassword} type="password"  onChange={changeInput} placeholder={userPasswordError ? "" : "Password"}></input>
              {userPasswordError ? <p>{userPasswordError}</p> : ""}
              <input type="submit" onClick={handleChange} value="CLAIM YOUR FREE TRIAL"></input>
              <div className="terms-advice">
                <p>By clicking the button, you are agreeing to our <a href="#">Terms and Services</a></p>
              </div>
          </form>
        </section>
      </main> 
    </div>
  );
}

export default App;
