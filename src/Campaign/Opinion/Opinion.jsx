import "./Opinion.scss";

function Opinion() {
  return (
    <div className="opinion_container" id="opinion">
      <div className="opinion_wrap">
        <div className="top">
          <div className="opinion_title">
            <h2>CONTACT US</h2>
            <h2>您的聲音，我們的行動！</h2>
            <p>
              親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！
            </p>
          </div>
          <div className="people3"></div>
        </div>
        <div className="bottom">
          <div className="left">
            <p>您的名字</p>
            <input type="text" placeholder="請輸入您的姓名" />
            <p>您的 Email</p>
            <input type="text" placeholder="請輸入您的電子郵件" />
            <p>您的手機號碼</p>
            <input type="text" placeholder="09-xxx-xxx" />
          </div>
          <div className="right">
            <p>您的建言</p>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>送出意見</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opinion;
