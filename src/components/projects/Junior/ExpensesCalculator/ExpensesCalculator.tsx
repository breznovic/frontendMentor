import s from "./ExpensesCalculator.module.css";
import Balance from "./components/Balance/Balance";
import Chart from "./components/Chart/Chart";

const ExpensesCalculator = () => {
  return (
    <div className={s.main}>
      <div>
        <Balance />
      </div>
      <div>
        <Chart />
      </div>
    </div>
  );
};

export default ExpensesCalculator;

/*     .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
 

  My balance
  $921.48

  Spending - Last 7 days

  mon
  tue
  wed
  thu
  fri
  sat
  sun

  Total this month
  $478.33

  +2.4%
  from last month
    */
