import FacebookIcon from "@/assets/images/FacebookIcon";
import InstagramIcon from "@/assets/images/InstagramIcon";
import "./PolicyIssues.scss";

function PolicyIssues() {
  return (
    <div className="policy_container" id="policy">
      <div className="policy_title">
        <h2>POLICY ISSUES</h2>
        <h2>政策議題</h2>
      </div>
      <div className="issue_container">
        <div className="issue_wrap">
          <div className="title">喵的保障</div>
          <p>寵物醫療</p>
          <p>保障方案</p>
        </div>
        <div className="issue_wrap">
          <div className="title">喵的福利</div>
          <p>打造寵物</p>
          <p>休閒天堂</p>
        </div>
        <div className="issue_wrap">
          <div className="title">
            <p>喵的教育</p>
          </div>
          <p>推廣寵物</p>
          <p>飼養教育</p>
        </div>
      </div>
      <div className="policy_wrap">
        <div className="title">
          <h3>為毛孩子謀福利！ 推動寵物醫療保障方案</h3>
          <div className="share">
            <p>分享</p>
            <FacebookIcon />
            <InstagramIcon />
          </div>
        </div>
        <div className="policy_contant_wrap">
          <div className="left">
            <div className="contant">
              <div className="title">設立寵物醫療基金</div>
              <p>每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用</p>
            </div>
            <div className="contant">
              <div className="title">提供醫療補助</div>
              <p>
                每隻寵物每年可獲得高達新台幣 20,000
                元的醫療補助，減輕飼主的經濟壓力
              </p>
            </div>
            <div className="contant">
              <div className="title">合作動物醫院</div>
              <p>目前已有和超過 200 家動物醫院進行初步的合作討論</p>
            </div>
          </div>
          <div className="right">
            <div>
              <p>寵物醫療</p>
              <p>保障方案</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PolicyIssues;
