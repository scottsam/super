import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="text-center m-5">
        <h3>Dashboard</h3>
      </div>
      <div className="container m-5">
        <div className="row text-center">
          <div className="col mb-5">
            <div className="card" style={{ width: "17rem", height: "180px" }}>
              <div className="card-body">
                <h6 className="card-title">Total Income</h6>
                <br />
                <h4 className="card-text">N 187,357,000</h4>
              </div>
            </div>
          </div>

          <div className="col mb-3">
            <div className="card" style={{ width: "17rem", height: "180px" }}>
              <div className="card-body">
                <h6 className="card-title">Global Wallet Balance</h6>
                <br />
                <h4 className="card-text">N 167,357,000</h4>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{ width: "17rem", height: "180px" }}>
              <div className="card-body">
                <h6 className="card-title">No of Customers</h6>
                <br />
                <h4 className="card-text">1,357,000</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "17rem", height: "180px" }}>
              <div className="card-body">
                <h6 className="card-title">No. of Transaction</h6>
                <br />
                <h4 className="card-text">7,357,000</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
