import Button from "../components/Button"
import { MdFlutterDash } from "react-icons/md"

export default function ButtonPage() {
  const handleClick = () => {
    console.log("click")
  }

  return (
    <div className="flex">
      <Button>Default</Button>

      <Button primary rounded outline onClick={handleClick}>
        Buy Now
      </Button>

      <Button success rounded className="mb-8">
        <MdFlutterDash />
        {/* Icon will have the same color as text-color */}
        Sign out
      </Button>

      <Button danger outline>
        Delete
      </Button>
    </div>
  )
}
