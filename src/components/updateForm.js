import { useState,useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import List from "./list";
import { Route,Routes,BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

function UpdateForm(props){

    const param = useParams();
    const [detail,setDetail] = useState([]);

    //console.log(param.seq);//그냥 param을 찍으면 오류가 생기면서 뷰가 안그려짐
    useEffect(function(){
        fetch(`/act/detail/${param.seq}`)
        .then((promoiseDate)=>promoiseDate.json())
        .then((data)=>{
            setSubject(data.subject);
            setContent(data.content);
            setReg_user(data.reg_user);        
        });

    },[]);



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
    const save =async()=>{
        let params = {
            "seq":param.seq,
            "subject":subject,
            "content":content,
            "reg_user":reg_user
        };
        let data = await axios({
            method : 'post',
            url : '/act/write',
            data : params,
            headers : {'Content-Type':'application/json'}
        });
        window.location.href="/";
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
            defaultValue={content}
            >
            
            </textarea>
            
            
            
            <br/>
            
            <Link to="/">
            </Link>

            <input type="button" 
            onClick={save}
            value="저장"/>
            

            <Link to="/">
                <input type="button" value="목록"/>
            </Link>
        </div>
    );

}

export default UpdateForm;