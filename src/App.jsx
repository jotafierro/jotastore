import './App.scss'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

const App = () => (
  <>
    <Navbar />
    <ItemListContainer greeting={'Welcome my store!'}/>
  </>
)

export default App
