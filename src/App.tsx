import s from "./App.module.css";
import Main from "./components/common/Main/Main";
import Sidebar from "./components/common/Sidebar/Sidebar";

function App() {
  return (
    <div className={s.main}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
