import "./App.css";
import Background from "./component/Background";
import Content from "./Content";
import Contenta from "./component/Contenta";
import Contentb from "./component/Contentb";
import pna from "../src/assets/pna.png";
import pnb from "../src/assets/pnb.png";
import pnc from "../src/assets/pnc.png";
import pne from "../src/assets/pne.png";
import Box_1 from "./component/Box-1";
import boxa from "../src/assets/boxa.png";
import boxb from "../src/assets/boxb.png";
import boxc from "../src/assets/boxc.png";
import boxd from "../src/assets/boxd.png";
import pnf from "../src/assets/pnf.jpg";
function App()
{
  return (
    <div className="App">
      <nav>
        <ul>
          <h2>
            <span id="span-1">X</span>MEN
          </h2>
          <li>Home</li>
          <li>Product</li>
          <li>Rate</li>
        </ul>
      </nav>
      <div className="back">
        <Background />
      </div>
      <div className="b-1">
        <Content />
      </div>

      <div className="c-1">
        <Contenta />
      </div>

      <div className="c-2">
        <Contentb />

        <div className="Conatainerpic-1">
          <img src={pna} alt="pna" />
        </div>
        <br></br>
        <h3>GRAHICS SWEATSHIRTS</h3>
        <p>UP TO 70% OFF</p>
        <div className="Conatainerpic-1">
          <img src={pnb} alt="pnb" />
        </div>
        <br></br>
        <h3>CHUNKY SWEATERS</h3>
        <p>UP TO 70% OFF</p>
        <div className="Conatainerpic-1">
          <img src={pnc} alt="pnc" />
        </div>
        <br></br>
        <h3>HODDIES JACKETS</h3>
        <p>UP TO 50% OFF</p>
        <div className="Conatainerpic-1">
          <img src={pne} alt="pne" />
        </div>
        <br></br>
        <h3>BOHO-CHIC COAT</h3>
        <p>UP TO 30% OFF</p>
      </div>
      <div className="ad">
        <h1>Fashion</h1>
        <h2>Up to 20% to 70%</h2>
      </div>

      <div className="waste"></div>

      <div className="marquee">
        <marquee>
          {/* <img src={boxb} alt="boxb"/> */}
          <p>
            <img src={boxa} alt="boxa" />
            TOP BRANDS,
            <img src={boxa} alt="boxa" /> Grand Offers{" "}
            <img src={boxa} alt="boxa" />
            CLOTHING FOOTWEAR
            <img src={boxa} alt="boxa" /> ACCESSORIES ALL THATS NEW Clothing
            Footwear <img src={boxa} alt="boxa" />
            Accessories INTERNATIONAL <img src={boxa} alt="boxa" /> BRANDS
            WINTERWEAR NIGHT & LOUNGEWEAR GROOMINGNEW ETHNIC
            <img src={boxa} alt="boxa" /> & FESTIVEHOT Kurtas And
            <img src={boxa} alt="boxa" /> ShirtsNehru Jackets{" "}
            <img src={boxd} alt="boxd" /> WESTERN WEAR Jackets &
            CoatsJeansShirtsShorts & 3/4thsSweatshirts & HoodiesTrack
            PantsTrousers & PantsT-Shirts FOOTWEAR <img src={boxa} alt="boxa" />
            Casual ShoesFlip-Flops & SlippersFormal Shoes Sandals Sneakers
            Sports <img src={boxa} alt="boxa" />
            Shoes ACCESSORIES BackpacksBags & WalletsBeltsCaps &
            <img src={boxa} alt="boxa" /> HatsFashion AccessoriesLuggage &
            <img src={boxa} alt="boxa" />
            TrolleysSocksSunglasses & FramesWatches{" "}
            <img src={boxa} alt="boxa" />
            PRECIOUS JEWELLERY Gold And Silver CoinsGold And Diamond
            <img src={boxa} alt="boxa" /> JewellerySilver Jewellery INNERWEAR
            BriefsTrunks & BoxersVests
            <img src={boxa} alt="boxa" />
          </p>
        </marquee>
      </div>
      <div className="waste"></div>

      <div className="Box_1">
        <Box_1 />
      </div>

      <div className="Box_2">
      <img src={pnf} alt="pnf" />
      </div>
    </div>
  );
}
export default App;
