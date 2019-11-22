import React from "react";
import { WOW } from "wowjs";

class HomePage extends React.Component {
  componentDidMount() {
    new WOW().init();
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <div className="ui inverted vertical masthead center aligned segment">
          <div className="ui text container">
            <h1 className="ui inverted stackable header">
              <img
                className="ui image massive"
                src="/assets/logo.png"
                alt="logo"
              />
              <div className="content"> WANT </div>
            </h1>
            <h2> Get Rich with Loan Funding </h2>
            <div
              onClick={() => history.push("/events")}
              className="ui huge white inverted button"
            >
              투자 둘러보기
              <i className="right arrow icon" />
            </div>
          </div>
        </div>

        <div className="blank"></div>

        <div className="center2 ">
          <h1 className="fonthi"> 100만원의 1년 투자수익은? </h1>
          <h3 className="fonthi2"> 은행 17,133원 </h3>
          <h1 className="wow bounceInDown fonthi3" data-wow-delay="0.5s">
            WANT 93,200 원
          </h1>
        </div>

        <div className="blank"></div>

        <div className="center2 testhi">
          <h1 className="wow bounceIn fontbye" data-wow-delay="1.3s">
            평균 수익률 10.1%
          </h1>

          <h3 className="fonthi12">온라인 플랫폼을 통해 대출자와 투자자를 연결하여 
          <br></br>
          절감한 운영 비용을 높은 수익으로 돌려드립니다.</h3>
        </div>

        <div className="blank"></div>


        <div>
        {/* <h1 className="wow bounceOut" data-wow-delay="0.5s" color>
          애니메이션 적용 확인 완료
        </h1> */}


      </div>
      <div className="center1 fonthi4">
      <h1 className="wow fadeIn" data-wow-delay="3.5s">
         WANT
        </h1>
        </div>

      </div>
    );
  }
}

export default HomePage;
