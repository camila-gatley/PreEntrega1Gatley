import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NabBar'

function App() {
  return (
    <>
    <div className="container">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenid@s a GiftPicker!"/>
    </div>
    </>
  )
}

export default App
