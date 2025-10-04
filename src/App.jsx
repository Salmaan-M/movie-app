import './css/App.css'
import NavBar from './components/Navbar'
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import { MovieProvider } from './contexts/MovieContext';
import {Routes,Route} from 'react-router-dom'
function App() {
  const movieNumber=2;

  return (
    
    <MovieProvider>

    <main className='main-content'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
      </Routes>
    </main>
    </MovieProvider>
    
  )
}


// function Text({disp}){
//   return (
//     <div>{disp}</div>
//   )
// }

export default App
