// LikePost.jsx

import { useState } from "react";
import { useModal } from "./useModal";

function LikePost() {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState("");

  const { isModalOpen, openModal, closeModal } = useModal();

  const handleLikeClick = () => {
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(!isLiked);
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>오늘의 게시글</h1>
      <p>React에서는 화면에 보여지는 값을 어떻게 관리해야 할까?</p>

      {/* 좋아요 기능 */}
      <button onClick={handleLikeClick}>
        {isLiked ? "좋아요 취소" : "좋아요"}
      </button>
      <p>좋아요 수: {likeCount}</p>

      <hr />

      {/* 댓글 기능 */}
      <h2>댓글 작성</h2>
      <input
        type="text"
        placeholder="댓글을 입력하세요"
        onChange={(e) => setComment(e.target.value)}
      />
      <p>미리보기: {comment}</p>
      <p>글자 수: {comment.length}</p>

      <hr />

      {/* 모달 기능 */}
      <button onClick={openModal}>안내 모달 열기</button>

      {isModalOpen && (
        <div
          style={{
            marginTop: "16px",
            padding: "16px",
            border: "1px solid #999",
            borderRadius: "8px",
          }}
        >
          <h2>안내</h2>
          <p>이 모달도 React 상태로 관리할 수 있음!!</p>
          <button onClick={closeModal}>닫기</button>
        </div>
      )}
    </div>
  );
}

export default LikePost;
