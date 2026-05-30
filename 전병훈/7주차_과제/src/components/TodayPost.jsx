import { useState } from "react";

export default function TodayPost() {
    const [likeCount, setLikeCount] = useState(0);
    const [isLike, setIsLike] = useState(false);

    return (
        <>
            <h1>오늘의 게시글</h1>
            <p>React에서는 화면에 보여지는 값을 어떻게 관리해야 할까?</p>
            <button
                id="like-button"
                onClick={() => {
                    isLike
                        ? setLikeCount((prev) => prev - 1)
                        : setLikeCount((prev) => prev + 1);

                    setIsLike((prev) => !prev);
                }}
            >
                좋아요
            </button>
            <p>
                좋아요 수: <span id="like-count">{likeCount}</span>
            </p>
        </>
    );
}
