import { useState } from 'react'

export default function SearchBar(props) {
  const [term, setTerm] = useState('')
  
  const handleChange = (event) => {
    setTerm(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault() // prevents from reloading
    props.onSubmit(term)
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleChange} value={term}/>
      </form>
    </div>
  );
}
