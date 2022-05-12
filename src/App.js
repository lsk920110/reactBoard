
import './App.css';
import { useState,useEffect } from 'react';
import List from './components/list';
import Detail from './components/detail';
import WriteForm from './components/writeForm';
import UpdateForm from './components/updateForm';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App(props) {
  const [data,setData] = useState([]);

  const [boardList, setBoardList] = useState([]);


  
  
    


  
  return (
      <div>        
        <h1>CRUD Board Implement</h1>
        <Router>
          <Routes>
            <Route path="/" 
            element={<List props={boardList}/>} 
            
            />
            <Route path="/detail/:seq" 
            element={<Detail />}/>
            <Route path="/writeForm" element={<WriteForm 
            data={data}
            setData={setData}
            />} />
            <Route path="/updateForm/:seq" element={<UpdateForm />} />

          </Routes>
        </Router>
      </div>

  );
}

export default App;
