import "./Support.scss";
import { moneyFormat } from "@/utils";
function Support() {
  return (
    <div className="support_container">
      <div className="right">
        <div className="support_title">
          <h2>SUPPROT US</h2>
          <h2>小額捐款</h2>
        </div>
        <div className="content">
          <p>
            邀請您一同加入保證金募資專案，任何一筆捐款，無論金額，都能幫助喵喵我推動寵物福利。
          </p>
          <p>
            本專案募集資金將100%用於參選保證金，並且公開專案帳目；當選後，退還的保證金將提撥給地方黨部，作為黨務運作之用。
          </p>
          <p>
            您的支持，會直接幫助喵喵黨能在各地推出更多的候選人，並在各地繼續深耕。
          </p>
        </div>
        <div className="total_fundraising">
          <div className="money">
            <p>募款累計</p>
            <p>{moneyFormat(3294255)}</p>
          </div>
          <p>需要保證金 1000萬</p>
        </div>
        <div className="donate">
          <div className="donate_wrap">
            <div className="text">輕鬆捐</div>
            <div className="donate_money">$600</div>
            <div className="text2">
              <p>為他撐過風風雨雨</p>
            </div>
          </div>
          <div className="donate_wrap">
            <div className="text">小額捐</div>
            <div className="donate_money">$1200</div>
            <div className="text2">
              <p>為他覆蓋前方泥濘</p>
            </div>
          </div>
          <div className="donate_wrap">
            <div className="text">力挺捐</div>
            <div className="donate_money">$8800</div>
            <div className="text2">
              <p>全力相挺！ 為他全力以赴</p>
            </div>
          </div>
          <div className="donate_wrap">
            <div className="text">自由捐</div>
            <div className="donate_money">$8800</div>
            <div className="text2">
              <p>最高額度新台幣十萬元整</p>
              <p>為他披荊斬棘前行</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
