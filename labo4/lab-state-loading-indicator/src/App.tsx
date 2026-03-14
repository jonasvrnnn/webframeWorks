import { useState } from "react"
import { ColorRing } from 'react-loader-spinner'
const LoadingIndicator = () => {
  return (
    <ColorRing
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />
  )
}
function App() {
  const [loading, setloading] = useState(false);
  const handleStartLoading: React.MouseEventHandler<HTMLButtonElement> = () => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 3000)
  }
  return (
    <div>
      {loading ? <LoadingIndicator /> : <button onClick={handleStartLoading}>start loading</button>}
    </div>
  )
}

export default App
