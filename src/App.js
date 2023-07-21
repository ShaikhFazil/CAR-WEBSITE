import './App.css';
import Auction from "./components/Auction/Auction"
import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"
import Search  from "./components/Search/Search"
import Trending from "./components/Trending/Trending"
import Seller from "./components/Seller/Seller"
import Footer from "./components/Footer/Footer" 


function App() {
  return (
    <div className='title'>
<Nav />
<Home />
<Search />
 <Trending />
<Seller />
<Auction />
<Footer />


    </div>
  );
}

export default App;
