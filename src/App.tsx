import { useEffect } from "react"
import "./App.css"
import MainPage from "./MainPage"

function App() {
  useEffect(() => {
    document.title = "Jalen Arms — Software Engineer"
  }, [])

  return <MainPage />
}

export default App
