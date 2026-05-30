import { useState } from "react";
import useLike from "./hooks/useLike";

// LikePost.jsx

function LikePost() {
  const [commentText, setCommentText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { likeCount, isLiked, handleLikeClick } = useLike();

  return (
    <div style={{ padding: "24px" }}>
      <h1>오늘의 게시글</h1>

      <p>React에서는 화면에 보여지는 값을 어떻게 관리해야 할까?</p>

      <button onClick={handleLikeClick}>
        {isLiked ? "좋아요 취소" : "좋아요"}
      </button>

      <p>좋아요 수: {likeCount}</p>

      <hr />

      <h2>댓글 작성</h2>

      <input
        type="text"
        value={commentText}
        placeholder="댓글을 입력하세요"
        onChange={(e) => setCommentText(e.target.value)}
      />

      <p>미리보기: {commentText}</p>

      <p>글자 수: {commentText.length}</p>

      <hr />

      <button onClick={() => setIsModalOpen(true)}>안내 모달 열기</button>

      <div
        style={{
          display: isModalOpen ? "block" : "none",
          marginTop: "16px",
          padding: "16px",
          border: "1px solid #999",
          borderRadius: "8px",
        }}
      >
        <h2>안내</h2>
        <p>이 모달도 React 상태로 관리할 수 있음!!</p>
        <button onClick={() => setIsModalOpen(false)}>안내 모달 닫기</button>
      </div>
    </div>
  );
}

export default LikePost;
