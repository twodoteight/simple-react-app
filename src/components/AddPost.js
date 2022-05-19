import React from "react"
import { useState } from "react"
const AddPost = ({ onAdd }) => {
  const [text, setText] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert("Please add announcement text")
      return
    }
    onAdd({ text })
    setText("")
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="Add Annoucement"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <input type="submit" value="Create" className="button button-block" />
    </form>
  )
}

export default AddPost
