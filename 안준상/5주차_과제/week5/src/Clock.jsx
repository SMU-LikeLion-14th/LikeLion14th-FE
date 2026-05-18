import React from "react";

function Clock(props) {
  return (
    <div>
      <h1>어디 서버 시간이지</h1>
      <h2>현재 시간은 {new Date().toLocaleTimeString()}입니다.</h2>
    </div>
  );
}

export default Clock;
