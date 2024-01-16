import "./Section.scss";
function Section() {
  return (
    <section className="section_container" id="section">
      <div className="advocate">
        <div className="advocate_title">
          <h2>ADVOCATE</h2>
          <h2>候選人主張</h2>
          <div className="advocate_title_name">
            <p>喵立翰</p>
            <p>MIAO LI-HAN</p>
          </div>
        </div>
        <div className="advocate_contain">
          <div className="advocate_contain_title">
            <h3>我堅信！</h3>
            <h3>
              藉由推動更完善的貓咪福利和相關政策，更是間接地投資於
              <span>台灣的未來</span>
            </h3>
          </div>
          <p>
            畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
            GDP 經濟帶來巨大效益。
          </p>
          <p>
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。
          </p>
          <div className="divider" />
          <p>護航台灣的幸福經濟，從照顧每一隻貓咪開始。</p>
        </div>
      </div>
      <div className="right">
        <div className="right_people"></div>
      </div>
    </section>
  );
}

export default Section;
