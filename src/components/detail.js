import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail(props) {
    //console.log(props);
    const param = useParams();
    console.log(param);
    const [detail,setDetail] = useState([]);

    useEffect(function(){
        fetch(`act/detail/${param.seq}`)
        .then((promiseDate)=>promiseDate.json())
        .then((data)=>setDetail(data));    
    }
    ,[]);


    return ( 
        <div>
            This is No.{param.seq} Detail Page...
            <br/>
            title : 
            <br/>
            content : 
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