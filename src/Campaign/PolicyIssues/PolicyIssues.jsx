import FacebookIcon from "@/assets/images/FacebookIcon";
import InstagramIcon from "@/assets/images/InstagramIcon";
import { policyData, chartData } from "./utils";
import "./PolicyIssues.scss";
import { useEffect, useState } from "react";

function PolicyIssues() {
  const [select, setSelect] = useState(1);
  const [policyItem, setPolicyItem] = useState([]);

  const chartbgc = (id) => {
    return select === id ? "issue_wrap_yellow" : "";
  };

  const policyContentImage = () => {
    switch (select) {
      case 2:
        return "right_image2";
      case 3:
        return "right_image3";
      default:
        return "";
    }
  };

  useEffect(() => {
    const policy = policyData.filter((policy) => policy.id === select);
    const chart = chartData.filter((policy) => policy.id === select);
    setPolicyItem([
      { ...policy[0], oneText: chart[0]?.oneText, twoText: chart[0]?.twoText },
    ]);
  }, [select]);
  return (
    <div className="policy_container" id="policy">
      <div className="policy_title">
        <h2>POLICY ISSUES</h2>
        <h2>政策議題</h2>
      </div>
      <div className="issue_container">
        {chartData.map((chart) => (
          <div
            className={`issue_wrap ${chartbgc(chart.id)}`}
            key={chart.id}
            onClick={() => setSelect(chart.id)}
          >
            <div className="title">{chart.title}</div>
            <p>{chart.oneText}</p>
            <p>{chart.twoText}</p>
          </div>
        ))}
      </div>
      <div className="policy_wrap">
        {policyItem.map((policy) => (
          <>
            <div className="title">
              <h3>{policy.mainTitle}</h3>
              <div className="share">
                <p>分享</p>
                <FacebookIcon />
                <InstagramIcon />
              </div>
            </div>
            <div className="policy_contant_wrap">
              <div className="left">
                {policy.content.map((item, i) => (
                  <div className="contant" key={i}>
                    <div className="title">{item.title}</div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
              <div className={`right ${policyContentImage()}`}>
                <div style={{ right: select === 2 ? "54px" : "32px" }}>
                  <p>{policy.oneText}</p>
                  <p>{policy.twoText}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default PolicyIssues;
