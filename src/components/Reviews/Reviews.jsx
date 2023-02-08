import { getReviews } from "apiServises";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


export const Reviews = () =>{
    const {movieId} =useParams();
    console.log(movieId) 

    const [items, setitems] = useState([]);

    useEffect(() => {
    if(movieId===null){return}
    getReviews(movieId).then(data=>setitems(items=>[...items,...data.data.results]))
    }, [movieId])


    return (
        <div>
            <ul>
               {items.length>0&&items.map(item=>{
                console.log(item)
                return <li key={item.id}>
                    <h3>Author:{item.author}</h3>
                    <p>{item.content}</p>
                </li>
               })}
            </ul>
        </div>
    )
}