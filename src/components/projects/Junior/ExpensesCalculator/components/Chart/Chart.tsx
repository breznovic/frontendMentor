import s from "./Chart.module.css";

const Chart = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>Spending - Last 7 days</div>
      <div className={s.chart}>Chart</div>
      <hr className={s.hr} />
      <div className={s.total}>
        <div>
          <div className={s.totalMonth}>Total this month</div>
          <div className={s.totalMonthSum}>$478.33</div>
        </div>
        <div>
          <div className={s.percentage}>+2.4%</div>
          <div className={s.percentageTitle}>from last month</div>
        </div>
      </div>
    </div>
  );
};

export default Chart;

//   chart column background-color: hsl(10, 79%, 65%);
