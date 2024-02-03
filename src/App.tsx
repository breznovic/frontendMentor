import Sidebar from "./components/Sidebar/Sidebar";
import s from "./App.module.css";
import ExpensesCalculator from "./components/projects/Junior/ExpensesCalculator/ExpensesCalculator";

function App() {
  return (
    <div className={s.main}>
      <Sidebar />
      <ExpensesCalculator />
    </div>
  );
}

export default App;
