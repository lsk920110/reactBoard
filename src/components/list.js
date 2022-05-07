import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../static/list.css";

function List({props}) {
    console.log(props);
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

    return ( 
        <div>
            <Link to="/writeForm">
                <input type="button" value="글쓰기"/>
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                        {props.map((board)=>(
                        <tr>
                            <td>{board.seq}</td>
                            <td><Link to={`/detail/${board.seq}/${board.subject}/${board.content}`}
                            
                            >{board.subject}</Link></td>
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