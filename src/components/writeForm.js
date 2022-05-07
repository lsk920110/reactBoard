import { useState } from "react";
import { Link } from "react-router-dom";
import List from "./list";
import { Route,Routes,BrowserRouter as Router } from "react-router-dom";

function WriteForm(props){
    console.log(props);
    
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
    const save =()=>{
        //console.log(subject+content+reg_user);
        props.setData([subject,content,reg_user]);
        //console.log(props);
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

            <Link to="/">
            <input type="button" value="저장"
            onClick={save}
            />
            </Link>

            <Link to="/">
                <input type="button" value="목록"/>
            </Link>
        </div>
    );

}

export default WriteForm;