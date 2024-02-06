import Sidebar from "./components/Sidebar/Sidebar";
import s from "./App.module.css";
import ExpensesCalculator from "./components/projects/Junior/ExpensesCalculator/ExpensesCalculator";
import RecipePage from "./components/projects/Junior/RecipePage/RecipePage";

function App() {
  return (
    <div className={s.main}>
      <Sidebar />
      <RecipePage />
    </div>
  );
}

export default App;
