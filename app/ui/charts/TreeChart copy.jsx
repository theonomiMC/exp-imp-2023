"use client";
import { numFormater } from "@/app/lib/utils";
import { Treemap, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    name: "russia",
    share: "18.55%",
    children: [
      { name: "wine", size: 144314749 },
      {
        name: "Waters (natural or artificial mineral waters)",
        size: 54113242,
      },
      {
        name: "mineral waters",
        size: 52996321,
      },
      { name: "ethyl alcohol", size: 50225573 },
      { name: "Ferro-alloys", size: 46599555 },
    ],
  },
  {
    name: "Turkey",
    share: "10.66%",
    children: [
      { name: "Electrical energy", size: 52672095 },
      {
        name: "T-shirts, singlets and other vests, knitted or crocheted",
        size: 48901126,
      },
      { name: "Men's or boys' cloths", size: 30089021 },
      { name: "Ferro-alloys", size: 28540280 },
      { name: "Special purpose motor vehicles", size: 13002316 },
    ],
  },
  {
    name: "China",
    share: "10.27%",
    children: [
      { name: "Copper ores and concentrates", size: 190888955 },
      { name: "Precious-metal ores and concentrates", size: 19788 },
      { name: "Wine", size: 9402780 },
      { name: "Ginger, saffron, turmeric", size: 5039333 },
      { name: "Copper waste and scrap", size: 2875103 },
    ],
  },
  {
    name: "Bulgaria",
    share: "8.91%",
    children: [
      { name: "Copper ores and concentrates", size: 218653880 },
      { name: "Mineral or chemical fertilisers, nitrogenous", size: 1755600 },
      {
        name: "Sacks and bags, of a kind used for the packing of goods",
        size: 1223127,
      },
      { name: "Men's or boys' shirts", size: 543033 },
      { name: "Copper waste and scrap", size: 1690800 },
    ],
  },
  {
    name: "Armenia",
    share: "6.53%",
    children: [
      { name: "Self-propelled bulldozers, excavators", size: 16403308 },
      { name: "Ethyl alcohol", size: 14134998 },
      { name: "Waters", size: 9527691 },
      {
        name: "Articles of plaster or of compositions based on plaster",
        size: 7444013,
      },
      { name: "Flours, meals and pellets", size: 7287318 },
    ],
  },
  {
    name: "Azerbaijan",
    share: "5.38%",
    children: [
      { name: "Live bovine animals", size: 16068295 },
      { name: "Live sheep and goats", size: 16068295 },
      {
        name: "Mineral Waters",
        size: 11400060,
      },
      {
        name: "Ferro-alloys",
        size: 5985610,
      },
      { name: "Self-propelled bulldozers, excavators", size: 5492664 },
    ],
  },
  {
    name: "Spain",
    share: "2.88%",
    children: [
      { name: "Copper ores and concentrates", size: 56490905 },
      { name: "Ethyl alcohol", size: 5041349 },
      { name: "Manganese oxides", size: 477750 },
      {
        name: "Nuts",
        size: 4919933,
      },
      { name: "Mineral or chemical fertilisers, nitrogenous", size: 4328708 },
    ],
  },
  {
    name: "Switzerland",
    share: "2.85%",
    children: [
      { name: "Gold", size: 62112726 },
      { name: "Petroleum oils", size: 4117615 },
      { name: "Precious-metal ores and concentrates", size: 3442480 },
      {
        name: "Nuts",
        size: 1066670,
      },
      {
        name: "Beauty/make-up preparations for skincare",
        size: 674220,
      },
    ],
  },
  {
    name: "United States",
    share: "2.83%",
    children: [
      { name: "Ferro-alloys", size: 51790447 },
      { name: "Wine", size: 4242537 },
      { name: "Fruit juices", size: 2456869 },
      {
        name: "Parts and accessories of the motor vehicles",
        size: 1366854,
      },
      { name: "Parts of goods of heading", size: 1264244 },
    ],
  },
  {
    name: "Ukraine",
    share: "2.6%",
    children: [
      { name: "Ethyl alcohol", size: 19391634 },
      { name: "Wine", size: 11612887 },
      {
        name: "Waters (natural or artificial mineral)",
        size: 11780859,
      },
      {
        name: "Petroleum oils",
        size: 5199825,
      },
      { name: "Copper waste and scrap", size: 3827443 },
    ],
  },
];

const COLORS = [
  "#C9392D",
  "#4BA449",
  "#1B72F8",
  "#0E7490",
  "#EC4899",
  "#B91C1C",
  "#84CC16",
  "#FBBF24",
  "#EA580Cs",
  "#4B5563",
];

const CustomizedContent = (props) => {
  const {
    root,
    depth,
    x,
    y,
    width,
    height,
    index,
    colors,
    name,
    value,
    share,
  } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill:
            depth < 2
              ? colors[Math.floor((index / root.children.length) * 10)]
              : "#ffffff00",
          stroke: "#fff",
          strokeWidth: 1 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {depth === 1 ? (
        <text
          x={x + width / 2}
          y={y + height / 2 + 7}
          textAnchor="middle"
          fill="#222"
          fontSize={16}
          fontWeight={300}
        >
          {name}
        </text>
      ) : null}
      {depth === 1 ? (
        <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
          {index + 1}
        </text>
      ) : null}
      {name}
    </g>
  );
};
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "rgba(255,255,255,0.8)", padding: "10px" }}>
        <p>{`${payload[0].payload.root.name}`}</p>
        <p>{`${payload[0].payload.name} : ${new Intl.NumberFormat("en", {
          style: "currency",
          currency: "USD",
        }).format(payload[0].value)}`}</p>
        <p>{`% of Total Exports : ${payload[0].payload.root.share}`}</p>
      </div>
    );
  }

  return null;
};
export default function TreeChart() {
  return (
    <ResponsiveContainer width="100%" aspect={1.5}>
      <Treemap
        width={400}
        height={200}
        data={data}
        dataKey="size"
        stroke="#fff"
        fill="#8884d8"
        content={<CustomizedContent colors={COLORS} />}
      >
        <Tooltip content={<CustomTooltip />} />
      </Treemap>
    </ResponsiveContainer>
  );
}
