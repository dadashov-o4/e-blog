import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Inspiring from './components/Inspiring'
import ArticlesSection from './components/ArticlesSection'
function App() {

  return (
    <>
    <div className='container'>
      <Navbar/>
      <Inspiring/>
      <ArticlesSection/>
    </div>
    </>
  )
}

export default App
