import { useState } from "react"
import { GoChevronDown, GoChevronUp } from "react-icons/go"

export default function Accordion({ items }) {
  const [expandedIndex, setExpendedIndex] = useState(-1)
  function handleClick(expandIndex) {
    setExpendedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === expandIndex) {
        // close when clicked the same index again
        return -1
      }
      return expandIndex
    })
  }
  const renderedItem = items.map((item, index) => {
    const isExpanded = index === expandedIndex
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronUp /> : <GoChevronDown />}
      </span>
    )

    return (
      <div key={item.id}>
        <div
          onClick={() => handleClick(index)}
          className="flex justify-between p-3 bg-gray-100 border-b items-centered"
        >
          {item.heading} {icon}
        </div>
        {/* if true return the content, otherwise nothing */}
        {isExpanded && <div>{item.content}</div>}
      </div>
    )
  })

  return <div>{renderedItem}</div>
}
