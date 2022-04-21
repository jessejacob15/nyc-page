import "./App.css";
import EmailForm from "./components/EmailForm/EmailForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <p>
        <code>namelessyouthclub.</code>
      </p>
      <div className="d-flex align-items-center justify-content-center">
        <img src="https://i.imgur.com/RRPTWKE.png" className="icon" />
      </div>
      <EmailForm />
    </div>
  );
}

export default App;
