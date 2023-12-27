import HeaderIcon from "@/assets/images/HeaderIcon";
import VoteIcon from "@/assets/images/VoteIcon";
import "./Main.scss";
function Main() {
  return (
    <div className="main_container">
      <div className="main_item">
        <div className="main_people"></div>
        <div className="main_title">
          <HeaderIcon />
          <p>台灣的明天</p>
          <p>喵先鋪路</p>
          <span>2024 立委 3號參選人 少年立委 勤政愛民 愛您！！</span>
        </div>
        <div className="main_right">
          <div className="slogan">
            <div className="slogan_time">20</div>
            <div className="slogan_time">24</div>
            <div className="slogan_time">01</div>
            <div className="slogan_time">13</div>
            <div className="slogan_text">由您選擇 台灣的未來</div>
          </div>
          <div className="main_time">
            <p className="main_time_number">3</p>
            <div className="main_time_day">
              <div className="day">
                <div className="day_number">36</div>
                <div className="day_text">DAY</div>
              </div>
              <div className="hour">
                <div className="hour_number">07</div>
                <div className="hour_text">HOUR</div>
              </div>
              <div className="min">
                <div className="min_number">58</div>
                <div className="min_text">MIN</div>
              </div>
              <div className="sec">
                <div className="sec_number">32</div>
                <div className="sec_text">SEC</div>
              </div>
            </div>
          </div>
        </div>
        <div className="main_bottom">
          <p>
            少年立委 <VoteIcon /> 清流參選 凍蒜！凍蒜！ 台灣的明天，喵先鋪路
            請支持3號立委候選人 少年立委 <VoteIcon /> 清流參選 凍蒜！凍蒜！
            台灣的明天，喵先鋪路
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
