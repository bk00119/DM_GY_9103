import Link from "components/Link"

export default function HomePage() {
  return (
    <div className="flex flex-row px-8 py-4">
      <Link to="/" primary solid hover>Home</Link>
      <Link to="/accordian" primary outline hover>Accordian</Link>
      <Link to="/button" secondary solid hover >Button</Link>
    </div>
  )
}
