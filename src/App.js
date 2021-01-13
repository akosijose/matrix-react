import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  LineBy2,
  LineBy2x2,
  LineBy2x3,
  LineBy2x4,
  LineBy2x5,
} from "./pages/LineBy2";
import {
  LineBy3,
  LineBy3x2,
  LineBy3x3,
  LineBy3x4,
  LineBy3x5,
} from "./pages/LineBy3";
import {
  LineBy4,
  LineBy4x2,
  LineBy4x3,
  LineBy4x4,
  LineBy4x5,
} from "./pages/LineBy4";
import {
  LineBy5,
  LineBy5x2,
  LineBy5x3,
  LineBy5x4,
  LineBy5x5,
} from "./pages/LineBy5";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        {/* line by 2 */}
        <Route path="/lineBy2" exact component={LineBy2} />
        <Route path="/lineBy2/2x2" exact component={LineBy2x2} />
        <Route path="/lineBy2/2x3" exact component={LineBy2x3} />
        <Route path="/lineBy2/2x4" exact component={LineBy2x4} />
        <Route path="/lineBy2/2x5" exact component={LineBy2x5} />

        {/* line by 3 */}
        <Route path="/lineBy3" exact component={LineBy3} />
        <Route path="/lineBy3/3x2" exact component={LineBy3x2} />
        <Route path="/lineBy3/3x3" exact component={LineBy3x3} />
        <Route path="/lineBy3/3x4" exact component={LineBy3x4} />
        <Route path="/lineBy3/3x5" exact component={LineBy3x5} />

        {/* line by 4 */}
        <Route path="/lineBy4" exact component={LineBy4} />
        <Route path="/lineBy4/4x2" exact component={LineBy4x2} />
        <Route path="/lineBy4/4x3" exact component={LineBy4x3} />
        <Route path="/lineBy4/4x4" exact component={LineBy4x4} />
        <Route path="/lineBy4/4x5" exact component={LineBy4x5} />

        {/* line by 5 */}
        <Route path="/lineBy5" exact component={LineBy5} />
        <Route path="/lineBy5/5x2" exact component={LineBy5x2} />
        <Route path="/lineBy5/5x3" exact component={LineBy5x3} />
        <Route path="/lineBy5/5x4" exact component={LineBy5x4} />
        <Route path="/lineBy5/5x5" exact component={LineBy5x5} />
      </Switch>
    </Router>
  );
}

export default App;
