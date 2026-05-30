// LikePost.jsx

import { useState } from "react";
import { useLike } from "./useLike";

function LikePost() {
  const {likeCount, isLiked, toggleLike}=useLike();
  const [commentText,setComment]=useState("");
  const [isModalOpen,setModal]=useState(false);

  

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>오늘의 게시글</h1>

      <p>
        React에서는 화면에 보여지는 값을 어떻게 관리해야 할까?
      </p>

      <button onClick={toggleLike}>
        {isLiked ? "좋아요 취소":"좋아요"}
      </button>

      <p>
        좋아요 수: <span>{likeCount}</span>
      </p>

      <hr />

      <h2>댓글 작성</h2>

      <input
        type="text"
        placeholder="댓글을 입력하세요"
        onChange={handleCommentChange}
      />

      <p>
        미리보기: <span id="comment-preview">{commentText}</span>
      </p>

      <p>
        글자 수: <span id="comment-length">{commentText.length}</span>
      </p>

      <hr />

      <button onClick={handleOpenModal}>안내 모달 열기</button>

      <div
        id="modal"
        style={{
          display: "none",
          marginTop: "16px",
          padding: "16px",
          border: "1px solid #999",
          borderRadius: "8px",
        }}
      >
        <h2>안내</h2>
        <p>이 모달도 React 상태로 관리할 수 있음!!</p>
        <button onClick={handleCloseModal}>닫기</button>
      </div>
    </div>
  );
}

export default LikePost;