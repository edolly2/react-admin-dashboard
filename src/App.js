import './App.css';

import HomePage from './pages/HomePage/HomePage';
import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div>
      <TopBar />
      <div className='container'>
        <SideBar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
