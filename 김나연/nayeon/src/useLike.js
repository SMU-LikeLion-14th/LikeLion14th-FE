import {useState} from "react";

export function useLike(){
  const [likeCount, setlikeCount]=useState(0);
  const [isLiked,setIsLiked]=useState(false);

  const toggleLike=()=>{
    if(isLiked){
      setlikeCount((prev)=>prev-1);
    }else{
      setlikeCount((prev)=>prev+1);
    }
    setIsLiked(!isLiked);
  }
  return{likeCount, isLiked,toggleLike};
}