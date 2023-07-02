import './App.css'
import Navbar from './common/navbar'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail'
import ProductListing from './components/ProductListing'

function App() {

  return (
    <>
    <Navbar />
        <Router>
      <Routes>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/" Component={ProductListing} />
        <Route path="/product-detail/:id" Component={ProductDetail} />
        </Routes>
    </Router>
    </>
  )
}

export default App