import s from "./ExpensesCalculator.module.css";
import Balance from "./components/Balance/Balance";
import ChartTable from "./components/ChartTable/ChartTable";

const ExpensesCalculator = () => {
  return (
    <div className={s.main}>
      <div className={s.balance}>
        <Balance />
      </div>
      <div className={s.chart}>
        <ChartTable />
      </div>
    </div>
  );
};

export default ExpensesCalculator;
