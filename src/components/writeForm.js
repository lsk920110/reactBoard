import { useState } from "react";
import { Link } from "react-router-dom";
import List from "./list";
import { Route,Routes,BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

function WriteForm(props){
    //console.log(props);
    
    const [subject,setSubject] = useState('');
    const [content,setContent] = useState('');
    const [reg_user,setReg_user] = useState('');
    
    const subjectChange =(e)=>{
        setSubject(e.target.value);
    }
    const contentChange =(e)=>{
        setContent(e.target.value);
    }
    const reg_userChange =(e)=>{
        setReg_user(e.target.value);
    }    
    const save = async() =>{
        //let config = {headers: { "Content-Type": 'application/json'}};
        //let jsonData = {key1:"value1",key2:"value2"};
        let params = {
            "subject":subject,
            "content":content,
            "reg_user":reg_user
        };
        console.log(params);


        let data = await axios({
            method : 'post',
            url : '/act/write',
            //data : "asdasdasd",
            data : params,
            headers: {'Content-Type': 'application/json' }
        });
        console.log(data);

    }


    return (
        <div>
            제목<input 
            type="text" 
            value={subject}
            onChange={subjectChange}
            /><br/>
            작성자
            <input 
            type="text" 
            value={reg_user}
            onChange={reg_userChange}
            />
            <br/>
            내용
            <textarea
            onChange={contentChange}
            >
            {content}
            </textarea>
            
            
            
            <br/>
{/*             
            <Link to="/">
            </Link> */}

            <input type="button" value="저장"
            onClick={save}
            />

            <Link to="/">
                <input type="button" value="목록"/>
            </Link>
        </div>
    );

}

export default WriteForm;