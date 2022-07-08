import './FeaturedInfo.css';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeaturedInfo = () => {
  return (
    <div className='featuredInfo'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revenue</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,617</span>
          <span className='featuredMoneyRate'>
            -11.4 <ArrowDownwardIcon className='featuredIcon negative' />
          </span>
        </div>
        <span className='featuredSub'>Month Over Month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$9,459</span>
          <span className='featuredMoneyRate'>
            -1.2 <ArrowDownwardIcon className='featuredIcon negative' />
          </span>
        </div>
        <span className='featuredSub'>Month Over Month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Cost</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,328</span>
          <span className='featuredMoneyRate'>
            +3.7 <ArrowUpwardIcon className='featuredIcon' />
          </span>
        </div>
        <span className='featuredSub'>Month Over Month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
