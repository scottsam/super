import React from "react";
import TableHeader from "../components/TableHeader";

const Service = () => {
  return (
    <>
      <section>
        <TableHeader />
      </section>
      <div>
        <section className="jumbotron bg-light mt-3">
          <div class="container  table-responsive">
            <h3>Users</h3>
            <table
              class="table table-hover  dataTable"
              id="dataTable"
              cellspacing="0"
              role="grid"
              aria-describedby="dataTable_info"
            >
              <thead>
                <tr role="row">
                  <th
                    class="sorting_asc"
                    tabindex="0"
                    aria-controls="dataTable"
                    rowspan="1"
                    colspan="1"
                    aria-sort="ascending"
                    aria-label="Name: activate to sort column descending"
                  >
                    NAME
                  </th>
                  <th
                    class="sorting"
                    tabindex="0"
                    aria-controls="dataTable"
                    rowspan="1"
                    colspan="1"
                    aria-label="Position: activate to sort column ascending"
                  >
                    PHONE NO
                  </th>
                  <th
                    class="sorting"
                    tabindex="0"
                    aria-controls="dataTable"
                    rowspan="1"
                    colspan="1"
                    aria-label="Office: activate to sort column ascending"
                  >
                    EMAIL
                  </th>
                  <th
                    class="sorting"
                    tabindex="0"
                    aria-controls="dataTable"
                    rowspan="1"
                    colspan="1"
                    aria-label="Age: activate to sort column ascending"
                  >
                    ROLE
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr role="row" class="odd">
                  <td class="sorting_1">Airi Satou</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>33</td>
                </tr>
                <tr role="row" class="even">
                  <td class="sorting_1">Angelica Ramos</td>
                  <td>Chief Executive Officer (CEO)</td>
                  <td>London</td>
                  <td>47</td>
                </tr>
                <tr role="row" class="odd">
                  <td class="sorting_1">Ashton Cox</td>
                  <td>Junior Technical Author</td>
                  <td>San Francisco</td>
                  <td>66</td>
                </tr>
                <tr role="row" class="even">
                  <td class="sorting_1">Bradley Greer</td>
                  <td>Software Engineer</td>
                  <td>London</td>
                  <td>41</td>
                </tr>
                <tr role="row" class="odd">
                  <td class="sorting_1">Brenden Wagner</td>
                  <td>Software Engineer</td>
                  <td>San Francisco</td>
                  <td>28</td>
                </tr>
                <tr role="row" class="even">
                  <td class="sorting_1">Brielle Williamson</td>
                  <td>Integration Specialist</td>
                  <td>New York</td>
                  <td>61</td>
                </tr>
                <tr role="row" class="odd">
                  <td class="sorting_1">Bruno Nash</td>
                  <td>Software Engineer</td>
                  <td>London</td>
                  <td>38</td>
                </tr>
                <tr role="row" class="even">
                  <td class="sorting_1">Caesar Vance</td>
                  <td>Pre-Sales Support</td>
                  <td>New York</td>
                  <td>21</td>
                </tr>
                <tr role="row" class="odd">
                  <td class="sorting_1">Cara Stevens</td>
                  <td>Sales Assistant</td>
                  <td>New York</td>
                  <td>46</td>
                </tr>
                <tr role="row" class="even">
                  <td class="sorting_1">Cedric Kelly</td>
                  <td>Senior Javascript Developer</td>
                  <td>Edinburgh</td>
                  <td>22</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default Service;
