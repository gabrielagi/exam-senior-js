import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { LayoutContainer } from "./styled-components";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </Provider>
  );
}

export default App;
