import './App.css';
import { useState } from 'react';
import MyFooter from './layout/myFooter';
import NavBar from './layout/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Main/main';

function App() {
  const [pageType, setPageType] = useState('HResource'); 

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <NavBar onPageChange={setPageType} />
      <div style={{ marginLeft: '200px' }}>
        <MainPage pageType={pageType} />
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
