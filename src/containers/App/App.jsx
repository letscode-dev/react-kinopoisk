import { Outlet } from "react-router";
import Header from "../../components/Header";
import ReduxSample from "../Samples/ReduxSample";

const App = () => {
  return (
    <>
      <Header />
      <ReduxSample />
      <Outlet />
    </>
  );
};

export default App;
