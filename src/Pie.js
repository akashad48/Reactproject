
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';


const data = [
    { name: 'Total New Customers', value: 260 },
    { name: 'Group B', value: 330 },
    { name: 'Group C', value: 200 },
  
  ];
  
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
         <path
          d={`M${cx},${cy}L${cx + outerRadius * Math.cos(-midAngle * (Math.PI / 180))},${cy + outerRadius * Math.sin(-midAngle * (Math.PI / 180))}L${cx + outerRadius * Math.cos(-midAngle * (Math.PI / 180))},${cy + outerRadius * Math.sin(-midAngle * (Math.PI / 180))}`}
          fill={fill}
        />
         <text x={cx} y={cy} dy={-10} textAnchor="middle">
          {`${(value / data.reduce((acc, cur) => acc + cur.value, 0) * 100).toFixed(2)}%`}
        </text>
    </g>
  );
};

export default renderActiveShape;