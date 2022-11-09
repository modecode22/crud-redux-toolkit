import './App.css'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
function App() {

  return (
    <div className=" flex flex-col   bg-slate-50 min-h-screen">
      <Header />
      <Outlet/>
    </div>
  );
}

export default App
