import BarChartBox from "../../components/barChartBox/BarChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import {
  barChartBoxIntent,

} from "../../data";
import "./home.scss";

import Example from "../../components/barChart/BarChat";

const Home = () => {
  return (
    <div className="home">
      <div className="box box2">
      <h1>Top 3 of Intent</h1>
        <Example/>
      </div>
     
      <div className="box box4">
        <PieChartBox />
      </div>

      <div className="box box8">
        <BarChartBox {...barChartBoxIntent} />
      </div>

    </div>
  );
};

export default Home;
