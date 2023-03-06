import Buttons from "./components/Buttons";
import Contacts from "./components/Contacts";

function App() {
  return (
      <div className="wrapper">
          <div className="header">
              <Buttons />
              <Contacts />
          </div>
          <div className="content">
              {/*<Content />*/}
          </div>
      </div>
  );
}

export default App;
