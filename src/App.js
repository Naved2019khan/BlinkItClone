import "./App.css";
import Home from "./pages/home/Home";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyProvider from "./ContextAPI/MyProvider";

function App() {
  return (
    <MyProvider>
      <Home />
    </MyProvider>
  );
}

export default App;
