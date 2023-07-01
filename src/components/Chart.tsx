// npm i recharts

import { FC } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088fe", "#00c49f"];

interface IChart {
  totalIncome: number;
  totalExpense: number;
}

interface IData {
  name: string;
  value: number;
}

const Chart: FC<IChart> = ({ totalExpense, totalIncome }) => {
  const data = new Array<IData>(
    { value: totalExpense, name: "Expense" },
    { value: totalIncome, name: "Income" }
  );

  return (
    <PieChart width={240} height={240}>
      <Pie
        data={data}
        cx={"50%"}
        cy={"50%"}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={2}
        dataKey="value"
      >
        {data.map((_, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % VideoColorSpace.length]}
          />
        ))}
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
};

export default Chart;
