import { useState } from "react";

export default function Comment() {
    const [comment, setComment] = useState("");

    return (
        <>
            <h2>댓글 작성</h2>
            <input
                type="text"
                placeholder="댓글을 입력하세요"
                onChange={(e) => setComment(e.target.value)}
            />
            <p>
                미리보기: <span id="comment-preview">{comment}</span>
            </p>
            <p>
                글자 수: <span id="comment-length">{comment.length}</span>
            </p>
        </>
    );
}
