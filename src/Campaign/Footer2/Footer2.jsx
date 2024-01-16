import VoteIcon from "@/assets/images/VoteIcon";
import "./Footer2.scss";

function Footer2() {
  return (
    <div className="footer2_container">
      <div className="footer2_left">
        <div className="left">
          <div className="vote_icon">
            <div className="icon">
              <VoteIcon />
            </div>
            <div className="number">
              <p>好喵</p>
              <p>3</p>
            </div>
          </div>
          <div className="clickme">點擊我就喵喵叫給你聽</div>
        </div>
        <div className="right">
          <p>喵立翰</p>
          <p>少年立委</p>
        </div>
      </div>
      <div className="footer2_right">
        <div>
          <p>
            凍蒜！凍蒜！<span>TAIWAN O.1</span>2024 VOTE NO.3
            凍蒜！凍蒜！凍蒜！凍蒜！<span>TAIWAN O.1</span>2024 VOTE NO.3
          </p>
        </div>
        <div>
          <p>
            <span>ELECTIONS</span>少年立委 清流參選 台灣的未來，差您一票
            凍蒜！凍蒜！<span>ELECTIONS</span>少年立委 清流參選
            台灣的未來，差您一票
          </p>
        </div>
        <div>
          <p>
            TAIWAN O.1 <span>ELECTIONS 凍蒜！凍蒜！ </span>TAIWAN O.1{" "}
            <span>ELECTIONS 凍蒜！凍蒜！ </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
