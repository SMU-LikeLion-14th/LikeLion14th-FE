import { useState } from "react";

export default function InformationModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsModalOpen(true)}>안내 모달 열기</button>
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
                    <button onClick={() => setIsModalOpen(false)}>닫기</button>
                </div>
            )}
        </>
    );
}
