import './App.css';

function App() {
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
              <input type="text" placeholder="First Name"></input>
              <input type="text" placeholder="Last Name"></input>
              <input type="email" placeholder="Email Address"></input>
              <input type="password" placeholder="Password"></input>
              <input type="submit" value="CLAIM YOUR FREE TRIAL"></input>
              <p>By clicking the button, you are agreeing to our <a href="#">Terms and Services</a></p>
          </form>
        </section>
      </main> 
    </div>
  );
}

export default App;
