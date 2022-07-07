import './App.css';

import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div>
      <TopBar />
      <div className='container'>
        <SideBar />
        <div className='others'>Other Pages</div>
      </div>
    </div>
  );
}

export default App;
