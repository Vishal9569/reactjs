import Text from "./component/Text";
import Para from "./component/Para";
import CurrentTime from "./component/CurrentTime";
import "./App.css";
function App() {
  return <center className="Container">
    <Text className="text"></Text>
    <Para className="para"></Para>
    <CurrentTime className="CurrentTime"></CurrentTime>

  </center>
}

export default App;