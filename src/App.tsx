import Sidebar from "./components/Sidebar/Sidebar";
import RecipePage from "./components/projects/RecipePage/RecipePage";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.main}>
      <Sidebar />
      <RecipePage />
    </div>
  );
}

export default App;
