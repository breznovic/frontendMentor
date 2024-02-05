import s from "./ExpensesCalculator.module.css";
import Balance from "./components/Balance/Balance";
import Chart from "./components/Chart/Chart";

const ExpensesCalculator = () => {
  return (
    <div className={s.main}>
      <div className={s.balance}>
        <Balance />
      </div>
      <div className={s.chart}>
        <Chart />
      </div>
    </div>
  );
};

export default ExpensesCalculator;

/*     .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
 
  mon
  tue
  wed
  thu
  fri
  sat
  sun

  
    */
