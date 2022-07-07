import './TopBar.css';

import LanguageIcon from '@mui/icons-material/Language';
import Logo from '../../assets/images/lama.png';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import User from '../../assets/images/default-user-icon.png';

const TopBar = () => {
  return (
    <div className='topBar'>
      <div className='topBarWrapper'>
        <div className='topLeft'>
          <span className='logoWrapper'>
            <img className='logo' src={Logo} alt='Logo' />
          </span>
        </div>
        <div className='topRight'>
          <div className='topBarIconWrapper'>
            <NotificationsNoneIcon />
            <span className='topBarIconBadge'>2</span>
          </div>
          <div className='topBarIconWrapper'>
            <LanguageIcon />
            <span className='topBarIconBadge'>2</span>
          </div>
          <div className='topBarIconWrapper'>
            <SettingsIcon />
          </div>
          <img className='topBarAvatar' src={User} alt='User' />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
