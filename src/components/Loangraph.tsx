import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#4F46E5", "#E11D48"]; 

const LoanGraph = ({ schedule }: any) => {
  if (!Array.isArray(schedule) || schedule.length === 0) {
    return <div className="text-center text-gray-500">No data available</div>;
  }

  console.log(schedule);

  const totalLoan = schedule.reduce((sum, item) => sum + parseFloat(item?.emi || "0"), 0);
  const totalPaid = schedule.slice(0, 2).reduce((sum, item) => sum + parseFloat(item?.emi || "0"), 0);
  const totalRemaining = totalLoan - totalPaid;

  console.log("Total Loan:", totalLoan, "Total Paid:", totalPaid, "Total Remaining:", totalRemaining);

  const data = [
    { name: "Total Paid", value: totalPaid },
    { name: "Total Remaining", value: totalRemaining },
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
      <h2 className="text-lg font-bold text-gray-700 mb-3">Loan Payment Status</h2>
      <PieChart width={300} height={300}>
        <Pie data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default LoanGraph;
