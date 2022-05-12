import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail(props) {
    const param = useParams();
    const [detail,setDetail] = useState([]);
    


    useEffect(function(){
        fetch(`/act/detail/${param.seq}`)
        .then((promiseDate)=>promiseDate.json())
        .then((data)=>setDetail(data));    
    }
    ,[]);
    

    return ( 
        <div>
            This is No.{param.seq} Detail Page...
            <br/>
            title : {detail.subject}
            <br/>
            content : {detail.content}
            <br />
            <Link to="/">
                <input type="button" value="목록" />
            </Link>
            <Link to={`/updateForm/${param.seq}`} >
                <input type="button" value="수정" />
            </Link>

        </div>
     );
}

export default Detail;