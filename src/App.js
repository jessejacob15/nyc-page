import "./App.css";
import EmailForm from "./components/EmailForm/EmailForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <p>namelessyouthclub</p>
      <div className="d-flex align-items-center justify-content-center">
        <div className="pics">
          <img src="https://i.imgur.com/1avwSH3.png" className="icon" />
          <img src="https://i.imgur.com/ModnZSi.png" className="icon" />
          <img src="https://i.imgur.com/EYgsSbN.png" className="icon" />
          <img src="https://i.imgur.com/UXQPvqO.png" className="icon" />
          <img src="https://i.imgur.com/dEPuacq.png" className="icon" />
        </div>
      </div>
      <EmailForm />
    </div>
  );
}

export default App;
