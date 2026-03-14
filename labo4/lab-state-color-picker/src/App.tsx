import { useState } from "react"

const ColorPicker = () => {
  const [color, setcolor] = useState("#000000")
  const handleColor: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setcolor(event.target.value)
  }
  const handleSelect: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setcolor(event.target.value)
  }
  return (
    <div>
      <input type="color" value={color} onChange={handleColor} />
      <select onChange={handleSelect}>
        <option value="#000000">black</option>
        <option value="#FF0000">red</option>
        <option value="#00FF00">green</option>
        <option value="#0000FF">blue</option>
      </select>
      <div style={{ backgroundColor: color, width: 100, height: 100 }}></div>
    </div>
  )
}
function App() {


  return (
    <div>
      <ColorPicker />
    </div>
  )
}

export default App
