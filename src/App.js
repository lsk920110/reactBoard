import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { useState,useEffect } from 'react';
import List from './components/list';
import Detail from './components/detail';
import WriteForm from './components/writeForm';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App(props) {
  const [data,setData] = useState(['asdasd']);
  console.log(props);

  const [boardList, setBoardList] = useState([]);
  useEffect(()=>{
      let boardArray =[
          {"seq":1,
          "subject":"제목1",
          "content":"내용입니다.1",
          "reg_user":"강아지",
          "reg_date":"2022-05-07"} ,
          {"seq":2,
          "subject":"제목2",
          "content":"내용입니다.2",
          "reg_user":"너구리",
          "reg_date":"2022-05-06"}            
      ] 
      setBoardList(boardArray);

  },[]);

  
  const[text,setText] = useState([]);
  const overlayChk = async() => {
    console.log('중복체크 : ',text);
      //get 으로 보내기
      //let {data} = await axios.get('/main/overlay/'+text);
      //post 로보내기(JSON 형태로 보낸다.)
      let {data} = await axios.get('/act/home');
      
      console.log(data);
      setText(data);
      console.log(test);
      
    }
    /*

  const hashmap = async()=>{
    let {data} = await axios.get('/act/hashmap');
    console.log(data);
    //setText(data);
  }
  const vo = async()=>{
    let {data} = await axios.get('/act/vo');
    console.log(data);
    //setText(data);
  }
  hashmap();
  vo();
  */


  
  return (
      <div>        
        <Router>
          <Routes>
            <Route path="/" 
            element={<List props={boardList}/>} 
            
            />
            <Route path="/detail/:seq/:subject/:content" 
            element={<Detail />}/>
            <Route path="/writeForm" element={<WriteForm 
            data={data}
            setData={setData}
            />} />
          </Routes>
        </Router>
      </div>

  );
}

export default App;
