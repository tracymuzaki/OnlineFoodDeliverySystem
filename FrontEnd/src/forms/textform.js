import { useState } from "react";


export function TextForm() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute "
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your description is: ${textarea} `)
}

  return (
    <>
    <h1>The textarea form</h1>
 
    <form onSubmit={handleSubmit}>
    <label>Description:</label>
      <textarea value={textarea} onChange={handleChange} />
     
      <input type="submit" />
    </form>
    </>
  )
}
