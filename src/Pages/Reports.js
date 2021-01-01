import React from "react";

const Reports = () => {
  return (
    <>
      <div className="text-center m-5">
        <h3>Reports</h3>
      </div>
      <div className="container m-5">
        <div className="row text-center mb-5">
          <div className="col mb-5 ">
            <div className="card" style={{ width: "17rem", height: "180px" }}>
              <div className="card-body">
                <h6 className="card-title">Approved Tier</h6>
                <br />
                <h4 className="card-text">N 187,357,000</h4>
              </div>
              <div>
                <i class="far fa-arrow-alt-circle-right das1"></i>
              </div>
            </div>
          </div>

          <div className="col mb-5">
            <div className="card" style={{ width: "17rem", height: "180px" }}>
              <div className="card-body">
                <h6 className="card-title">Approved Commissions</h6>
                <br />
                <h4 className="card-text">N 167,357,000</h4>
              </div>
              <div>
                <i class="far fa-arrow-alt-circle-right das1"></i>
              </div>
            </div>
          </div>

          <div className="col mb-5">
            <div className="card" style={{ width: "17rem", height: "180px" }}>
              <div className="card-body">
                <h6 className="card-title">Approved User</h6>
                <br />
                <h4 className="card-text">1,357,000</h4>
              </div>
              <div>
                <i class="far fa-arrow-alt-circle-right das1"></i>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card" style={{ width: "17rem", height: "180px" }}>
              <div className="card-body">
                <h6 className="card-title">Approved Vendor</h6>
                <br />
                <h4 className="card-text">7,357,000</h4>
              </div>
              <div>
                <i class="far fa-arrow-alt-circle-right das1"></i>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card" style={{ width: "17rem", height: "180px" }}>
              <div className="card-body">
                <h6 className="card-title">Approved Reversal</h6>
                <br />
                <h4 className="card-text">7,357,000</h4>
              </div>
              <div>
                <i class="far fa-arrow-alt-circle-right das1"></i>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card" style={{ width: "17rem", height: "180px" }}>
              <div className="card-body">
                <h6 className="card-title">Approved Service Category</h6>
                <br />
                <h4 className="card-text">7,357,000</h4>
              </div>
              <div>
                <i class="far fa-arrow-alt-circle-right das1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
