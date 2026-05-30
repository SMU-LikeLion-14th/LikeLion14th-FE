// LikePost.jsx
import { useState } from "react";
import useLike from "./custom_hook/useLike";

function LikePost() {
  // const [likeCount, setLikeCount] = useState(0);
  // const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 좋아요 - 기존 코드
  // const handleLikeClick = () => {
  //   if (isLiked) {
  //     setLikeCount(likeCount - 1);
  //     setIsLiked(false);
  //   } else {
  //     setLikeCount(likeCount + 1);
  //     setIsLiked(true);
  //   }
  // };

  // 좋아요 - 커스텀 훅 사용
  const { likeCount, isLiked, handleLikeClick } = useLike();

  // 댓글 작성
  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  // 모달 열고 닫기
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>오늘의 게시글</h1>

      <p>React에서는 화면에 보여지는 값을 어떻게 관리해야 할까?</p>

      <button onClick={handleLikeClick}>
        {isLiked ? "좋아요 취소" : "좋아요"}
      </button>

      <p>
        좋아요 수: <span>{likeCount}</span>
      </p>

      <hr />

      <h2>댓글 작성</h2>

      <input
        type="text"
        placeholder="댓글을 입력하세요"
        value={commentText}
        onChange={handleCommentChange}
      />

      <p>
        미리보기: <span>{commentText}</span>
      </p>

      <p>
        글자 수: <span>{commentText.length}</span>
      </p>

      <hr />

      <button onClick={handleOpenModal}>안내 모달 열기</button>
      {isModalOpen && (
        <div
          id="modal"
          style={{
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
      )}
    </div>
  );
}

export default LikePost;
