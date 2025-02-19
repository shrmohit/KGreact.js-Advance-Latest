import "./App.css";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import Controls from "./components/Controls";
import PrivacyMessage from "./components/PrivacyMessage";
import { useSelector } from "react-redux";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <center className="px-4 py-5 my-5 text-center">
        <Container>
          <Header />
          <div className="col-lg-6 mx-auto">
            {privacy ? <PrivacyMessage /> : <DisplayCounter />}

            <Controls />
          </div>
        </Container>
      </center>
    </>
  );
}

export default App;
