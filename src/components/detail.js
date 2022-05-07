import { useParams } from "react-router-dom";

function Detail(props) {
    //console.log(props);
    const param = useParams();
    console.log(param);
    return ( 
        <div>
            This is No.{param.seq} Detail Page...
            <br/>
            title : {param.subject}
            <br/>
            content : {param.content}

        </div>
     );
}

export default Detail;