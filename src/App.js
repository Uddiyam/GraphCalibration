import styles from "./App.module.css";
import Header from "./Header";
import chartIcon1 from "./chartIcon1.svg";
import chartIcon2 from "./chartIcon2.svg";
import chartIcon3 from "./chartIcon3.svg";

function App() {
  return (
    <>
      <Header />
      <div className={styles.Container}>
        <div className={styles.InfoWrap}>
          <div className={styles.Info}>
            <span>그래프치과란?</span>
            <div className={styles.InfoBox}></div>
          </div>
          <div className={styles.Line}></div>
          <div className={styles.CategoryWrap}>
            <div className={styles.Category}>
              <span>교정 가능한 차트 유형</span>
              <div className={styles.ChartIconWrap}>
                <img className={styles.ChartIcon} src={chartIcon1} />
                <img className={styles.ChartIcon} src={chartIcon2} />
                <img className={styles.ChartIcon} src={chartIcon3} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.FileUpWrap}>
          <div className={styles.FileUp}>사진 파일은 하나만 업로드 ..</div>
        </div>
      </div>
    </>
  );
}

export default App;
