import logo from './logo.svg';
import Login from './Pages/Login/Login'
import ProjectForm from './components/Project/ProjectForm'
import MainDashboard from './components/Dashboard/MainDashboard';
import { BrowserRouter, Routes,Route } from "react-router-dom"
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    
    <BrowserRouter>
    
      <Routes>
         <Route path="/" element={<Login/>} />

        
         <Route path="/createProject" element={<ProjectForm/>} /> 

         <Route path="/dashboard" element={<MainDashboard />}/>
             {/* <Route path="/dashboard/projectData" element={<DataTable />} />  */}
    </Routes>
    

</BrowserRouter>
  );
}

export default App;
