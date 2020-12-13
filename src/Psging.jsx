import React, { useEffect, useState } from "react";
import Axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import Paginat from "react-bootstrap-table2-paginator";
import * as ReactBootstrap from "react-bootstrap";
const Paging = () => {
  const [Classmarker, setClassmarker] = useState([]);
  const [Loading, setLoading] = useState(false);

  const PagingData = async () => {
    try {
      const data = await Axios.get(
        "https://classmarker-app.herokuapp.com/mockData"
      );

      setClassmarker(data.data);
      setLoading(true);
    } 
    catch (Err) 
    {
      console.log(Err);
    }
  };

  const columns = [
    { dataField: "name", text: "Name" },
    { dataField: "email", text: "Email" },
    { dataField: "company", text: "Company" },
    { dataField: "job", text: "Job" },
    { dataField: "city", text: "City" },
    { dataField: "phone", text: "Phone" },
    { dataField: "Fav Movie", text: "Fav Movie" },
  ];
  useEffect(() => {
    PagingData();
  }, []);

  return (
      <div>
     {
         Loading ? (
            
            <BootstrapTable
            keyField="id"
            data={Classmarker}
            columns={columns}
            pagination={Paginat()}
            />
         ) : (
             <ReactBootstrap.Spinner animation="grow" />
         )
     }
      </div>
  );
};

export default Paging;
