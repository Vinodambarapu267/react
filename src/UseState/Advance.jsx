import React,{useState} from "react";
function Advance(){
    const Array=[
        {
            id:"egearntg grhe",
            first:"Bhanu",
            last:"Goddeti",
            age:21,
        },
        {
            id:"hb s ",
            first:"pushpa",
            last:"gandikota",
            age:21,
        },
        {
            id:"21hm1a0417",
            first:"mallika",
            last:"edula",
            age:21,
        },
        {
            id:"21hm1a0403",
            first:"vinod",
            last:"Ambarapu",
            age:21,
        }
    ]

    const[data ,setdata]=useState(Array);
    console.log(Array);
    const forget=(comingId)=>{
        const filterData=Array.filter((eachObj)=>{
            return eachObj.id &=comingId;
        });
        setdata(filterData);
    };
    console.log(useState(Array));
    console.log(Array);
    return(
        <div>
            <ul>{
            Array.map((eachObj,index)=>{
            const{first,last,age,id}=eachObj; 
            return(
                <li key={index}>
                    <div>{id}</div>
                <div>firstname: <strong>{first}</strong></div>
                <div>lastname: <strong>{last}</strong></div>
                <div>age:<strong>{age}</strong></div>
                <button onClick={()=>forget(id)}>delete me</button>
            </li>
            );
            })}
            </ul>
        </div>
    );

}
export default Advance;