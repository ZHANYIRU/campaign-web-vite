import React from "react";
import Arrow from "@/assets/images/Arrow";
import "./Activity.scss";

function Activity() {
  const dayList = ["12/20", "12/24", "12/26"];
  return (
    <div className="activity_container">
      <div className="activity_container_title">
        <h2>LATEST EVENTS</h2>
        <h2>最新活動</h2>
      </div>
      <div className="activity_wrap">
        <div className="activity_contain">
          <div className="left"></div>
          <div className="right">
            <div className="time_line">
              {dayList.map((day, i) => (
                <React.Fragment key={i}>
                  <div className="time_line_day" style={{ "--bgc": "orange" }}>
                    <p>{day}</p>
                    <div className="time_line_bgc" />
                  </div>
                  {i !== dayList.length - 1 && (
                    <div className="time_line_divider" />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="content_title">
              <div className="time">2023/12/20</div>
              <div className="text">參與台北寵物論壇，爭取貓咪友善環境</div>
            </div>
            <div className="content_text">
              <p>
                炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
                VIP 休憩空間。
              </p>
              <div className="arrow_container">
                <div className="arrow_btn">
                  <p>活動詳情</p>
                  <Arrow />
                </div>
                <div className="arrow_wrap">
                  <div className="left">
                    <Arrow />
                  </div>
                  <div className="right">
                    <Arrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>
            參與台北寵物論壇，爭取貓咪友善環境 | 收容所模特兒大比拼！ |
            掃街模式開啟！帶著你的貓耳，來和我一起走！ |
            參與台北寵物論壇，爭取貓咪友善環境 | 收容所模特兒大比拼！ |
            掃街模式開啟！帶著你的貓耳，來和我一起走！ | 參與
          </p>
        </div>
      </div>
      <div className="spotlight_left" />
      <div className="spotlight_right" />
      <div className="shallow_light_left" />
      <div className="shallow_light_right" />
    </div>
  );
}

export default Activity;
