"use client";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Anonymous_Pro } from "next/font/google";


const anonBold = Anonymous_Pro({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap"
})

ChartJS.register(ArcElement, Tooltip, Legend)
const data: ChartData<"doughnut", number[], string> = {
  labels: [
    "Presale holders",
    "Initial liquidity",
    "Marketing",
    "Utility",
    "Reserve"
  ],
  datasets: [{
      label: "%",
      data: [50, 40, 2, 5, 3],
      backgroundColor: [
        "rgba(227, 60, 18, 1)",
        "rgba(20, 150, 220, 1)",
        "rgba(141, 98, 154, 1)",
        "rgba(14, 158, 94, 1)",
        "rgba(255, 78, 150, 1)"
      ],
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "rgb(0, 0, 0)"
  }]
};


const options: ChartOptions<"doughnut"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  }
}


function LegendText(header: string, text: string, color: string ) {
  return (
    <div className="flex flex-row w-full sm:ml-0 ml-4">
      <div className="relative ">
        <div className="absolute right-2 border-solid border-l-[27px] border-r-[27px] border-l-transparent border-r-transparent border-t-[54px] border-t-black"></div>
        <div className={`${color} absolute right-2 w-[0px] h-[0px] border-solid border-l-[25px] border-r-[25px] border-r-transparent border-l-transparent border-t-[50px]`}></div>
      </div>
      <div className="flex flex-col p-2">
          <div><p className={anonBold.className}>{header}</p></div>
          <div><p>{text}</p></div>
      </div>
    </div>
  );
}



interface TokenChartProps {
  className?: string;
}
  
export default function TokenChart({className}: TokenChartProps) {
  return (
    <div className={`${className} flex flex-col gap-4`}>
      <Doughnut data={data} options={options} className="mt-2 mb-2"></Doughnut>
      {LegendText("50% - Presale holders", "Token supply distributed to presale participants.", "border-t-goku-orange")}
      {LegendText("40% - Initial Liquidity", "Token supply allocated towards initial liquidity distribution", "border-t-homeworld-blue")}
      {LegendText("2% - Marketing", "Used for marketing promotions, community and advertising", "border-t-sunshoe-plum")}
      {LegendText("5% - Utility", "Portion put towards the XDCP ecosystem and project developments", "border-t-clouded-pine")}
      {LegendText("3% - Reserve", "Token supply reserved for exchange listings, additional liquidity and expansion opportunities", "border-t-flirty-salmon")}
    </div>
  );
}
