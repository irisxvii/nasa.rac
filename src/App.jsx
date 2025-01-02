import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Main from './components/Main'
import SideBar from './components/SideBar'

function App() {
  const [showModal, setShowModal] = useState(false)

function handleToggleModal() {
  setShowModal(!showModal)
}

useEffect(() => {
  async function fetchAPIData() {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
    const url = 'https://api.nasa.gov/planetary/apod' + 
    `?api_key=${NASA_KEY}`
    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log('DATA\n',data)
    } catch (error) {
      console.log(error.message)
    }
  }
  fetchAPIData()
},[])

  return (
    <>
      <Main />
      {showModal && (
        <SideBar handleToggleModal={handleToggleModal} /> 
      )}
      <Footer handleToggleModal={handleToggleModal}/>
    </>
  )
}

export default App
