import React from 'react';

const HomePage = ({history}) => {
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
          <div onClick={() => history.push('/events')} className="ui huge white inverted button">
            투자 둘러보기 
            <i className="right arrow icon" />
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        BlockChain Loan Funding WebSite
      </div>
    </div>
  );
};

export default HomePage;
