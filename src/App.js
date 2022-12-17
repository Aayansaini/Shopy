import './App.css';
import Background from './component/Background'
import Content from './Content';
import Contenta from './component/Contenta';
import Contentb from './component/Contentb';
function App() {
  return (
   <div className='App'>
    <nav>
      <ul>
        <h2><span id='span-1'>S</span>HOPY</h2>
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
    </div>
   </div>
  );
}
export default App;
