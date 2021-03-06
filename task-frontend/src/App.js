import Home from "./containers/Home/Home";

import { Provider } from "react-redux";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
