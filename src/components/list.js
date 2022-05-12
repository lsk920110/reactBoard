
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../static/list.css";
import axios from "axios";

function List({props}) {

    const[boardList,setBoardList] = useState([]);

    //console.log(props);
    /*
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
    */
    const listCall = async()=>{
        let data = await axios({
            method : 'get',
            url : 'act/listCall',
            headers : {'Content-Type':'application/json'}
        });
        setBoardList(data.data);
        console.log(boardList);
    }
    useEffect(()=>{
        listCall();
    }
    ,[]);
    

    
    









    return ( 
        <div>
            <Link to={`/writeForm`}>
                <input type="button" value="write" />
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>seq</th>
                        <th>title</th>
                        <th>user</th>
                        <th>date</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList.map((board)=>(
                        <tr key={board.seq}>
                            <td>{board.seq}</td>
                            <td><Link to={`/detail/${board.seq}`}>{board.subject}</Link></td>
                            <td>{board.reg_user}</td>
                            <td>{board.reg_date}</td>
                        </tr>

                    ))}
                    
                </tbody>


            </table>

        </div>


    );
}

export default List;