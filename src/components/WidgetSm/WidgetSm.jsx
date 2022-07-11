import './WidgetSm.css';

import UserImg from '../../assets/images/default-user-icon.png';
import VisibilityIcon from '@mui/icons-material/Visibility';

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <h3 className='widgetSmTitle'>New Members</h3>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img src={UserImg} alt='' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Kallie Shoning</span>
            <span className='widgetSmUserJobTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmBtn'>
            <VisibilityIcon className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src={UserImg} alt='' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Kallie Shoning</span>
            <span className='widgetSmUserJobTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmBtn'>
            <VisibilityIcon className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src={UserImg} alt='' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Kallie Shoning</span>
            <span className='widgetSmUserJobTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmBtn'>
            <VisibilityIcon className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src={UserImg} alt='' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Kallie Shoning</span>
            <span className='widgetSmUserJobTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmBtn'>
            <VisibilityIcon className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src={UserImg} alt='' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Kallie Shoning</span>
            <span className='widgetSmUserJobTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmBtn'>
            <VisibilityIcon className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src={UserImg} alt='' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Kallie Shoning</span>
            <span className='widgetSmUserJobTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmBtn'>
            <VisibilityIcon className='widgetSmIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
