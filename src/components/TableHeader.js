import React from "react";

const TableHeader = () => {
  return (
    <div className=" bg-light nav-ds shadow ">
      <div class="row">
        <div class="col p-3">
          <div class="dataTables_length" id="dataTable_length ">
            <h6>Approved User</h6>
            <label>Show </label>
            <select
              id="ds"
              name="dataTable_length"
              aria-controls="dataTable"
              class="custom-select custom-select-sm form-control form-control-sm mx-2"
            >
              <option value="10">All</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
        <div class="col p-5">
          <div id="dataTable_filter" class="dataTables_filter ">
            <input
              id="ds1"
              type="search"
              class="form-control form-control-sm "
              placeholder="Search Users"
              aria-controls="dataTable"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
