import './HomePage.css';

import Chart from '../../components/SideBar/Chart/Chart';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import WidgetLg from '../../components/WidgetLg/WidgetLg';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import { userData } from '../../dummyData';

const HomePage = () => {
  return (
    <div className='homePage'>
      <FeaturedInfo />
      <Chart
        data={userData}
        title='User Analytics'
        grid
        dataKey='Active User'
      />
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default HomePage;
