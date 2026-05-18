// LikePost.jsx

import Comment from "./components/Comment";
import InformationModal from "./components/modal/InformationModal";
import TodayPost from "./components/TodayPost";

function LikePost() {
    return (
        <div style={{ padding: "24px" }}>
            <TodayPost />
            <hr />
            <Comment />
            <hr />
            <InformationModal />
        </div>
    );
}

export default LikePost;
