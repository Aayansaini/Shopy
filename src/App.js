import './App.css';
import Background from './component/Background'
import Content from './Content';
import Contenta from './component/Contenta';
import Contentb from './component/Contentb';
import pna from '../src/assets/pna.png';
import pnb from '../src/assets/pnb.png';
import pnc from '../src/assets/pnc.png';
import pne from '../src/assets/pne.png';
function App() {
  return (
   <div className='App'>
    <nav>
      <ul>
        <h2><span id='span-1'>X</span>MEN</h2>
        <li>Home</li>
        <li>Product</li>
        <li>Rate</li>
      </ul>
    </nav>
    <div className='back'>
    <Background/>
    </div>
    <div className='b-1'>
      <Content/>
    </div>

    <div className='c-1'>
    <Contenta/>
    </div>

    <div className='c-2'>
      <Contentb/>

    <div className='Conatainerpic-1'>
    <img src={pna} alt="pna"/>
    </div>
    <br></br>
    <h3>GRAHICS SWEATSHIRTS</h3>
    <p>UP TO 70% OFF</p>
    <div className='Conatainerpic-1'>
    <img src={pnb} alt="pnb"/>
    </div>
    <br></br>
    <h3>CHUNKY SWEATERS</h3>
    <p>UP TO 70% OFF</p>
    <div className='Conatainerpic-1'>
    <img src={pnc} alt="pnc"/>
    </div>
    <br></br>
    <h3>HODDIES JACKETS</h3>
    <p>UP TO 50% OFF</p>
    <div className='Conatainerpic-1'>
    <img src={pne} alt="pne"/>
    </div>
    <br></br>
    <h3>BOHO-CHIC COAT</h3>
    <p>UP TO 30% OFF</p>
    </div>
    <div className='ad'>
      <h1>Fashion</h1>
      <h2>Up to 20% to 70%</h2>
    </div>

    <div className='marquee'>
      <marquee>WORKING ON THIS PROJECT</marquee>
    </div>
   </div>
  );
}
export default App;
