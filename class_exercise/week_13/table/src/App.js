import Table from "./components/Table"

// Just some starter data to populate our table
const data = [
  { name: "Pumpkin", color: "bg-orange-500", count: 5 },
  { name: "Cucumber", color: "bg-green-500", count: 12 },
  { name: "Tomato", color: "bg-red-500", count: 23 },
  { name: "Eggplant", color: "bg-purple-500", count: 7 },
  { name: "Pepper", color: "bg-yellow-500", count: 8 },
  { name: "Blueberry", color: "bg-blue-500", count: 50 },
]

const config = [
  { label: "Name", render: (veg) => veg.name },
  {
    label: "Color",
    render: (veg) => <div className={`p-3 m-2 ${veg.color}`}></div>,
  },
  { label: "Count", render: (veg) => veg.count },
  { label: "Bonus Column", render: (veg) => `${veg.name}s` },
  { label: "Count Squared", render: (veg) => veg.count ** 2 },
]

const data2 = [
  { name: "hello", count: 10 },
  { name: "bye", count: 100 },
]

const config2 = [
  { label: "Greeting", render: (item) => item.name },
  { label: "Waves", render: (item) => item.count * 5 },
]

const keyFn = (item) => {
  return item.name
}

export default function App() {
  return (
    <div className="container p-5">
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  )
}
