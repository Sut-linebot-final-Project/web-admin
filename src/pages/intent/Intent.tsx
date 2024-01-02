import { GridColDef } from "@mui/x-data-grid";
<<<<<<< HEAD
import { useState } from "react";
import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable";
import "./intent.scss";
import { intentsData } from "./__mock__";

const columns: GridColDef[] = [
  { field: "id", headerName: "Intent ID", width: 90 },
  {
    field: "intentName",
    headerName: "Display Name",
    width: 350,
    editable: true,
  },
  // {
  //   field: "lastName",
  //   headerName: "Last name",
  //   width: 350,
  //   editable: true,
  // },
=======
import { userRows } from "../../data";
import { useEffect, useState } from "react";
import Add from "../../components/add/Add";
import axios from "axios";

const columns: GridColDef[] = [
  // { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'id',
    headerName: 'IntentID',
    width: 350,
    editable: true,
  },
  {
    field: 'displayName',
    headerName: 'Display Name',
    width: 350,
    editable: true,
  },



];
const rows = [
  { id: '1', lastName: 'Snow', firstName: 'Jon' },
  { id: '2', lastName: 'Lannister', firstName: 'Cersei' },
  { id: '3', lastName: 'Lannister', firstName: 'Jaime'},
  { id: '4', lastName: 'Stark', firstName: 'Arya' },
  { id: '5', lastName: 'Targaryen', firstName: 'Daenerys' },
  { id: '6', lastName: 'Melisandre', firstName: 'Lone'},
  { id: '7', lastName: 'Clifford', firstName: 'Ferrara'},
  { id: '8', lastName: 'Frances', firstName: 'Rossini' },
  { id: '9', lastName: 'Roxie', firstName: 'Harvey' },
>>>>>>> a698aed (Conect api)
];
async function getIntent() {
  let res = await axios.post('http://localhost:5000/listintent');
  // let data = res.data;
  // console.log(res);
  return res
  
}

const Intent = () => {
  const [open, setOpen] = useState(false);
  const [intent, setIntent] = useState([]);

  const listIntent = async () => {
    let res = await getIntent();
    if (res) {
      setIntent(res.data.intentsData);
      console.log(res.data.intentsData);
    }
  };
  useEffect(() => {
    listIntent();
   
  }, []);
  return (
    <div className="intent">
<<<<<<< HEAD
      <div className="info">
        <h1>Intent</h1>
        <button onClick={() => setOpen(true)}>Add New</button>
      </div>
      <DataTable columns={columns} rows={intentsData} />
      {open && <Add slug="intent" columns={columns} setOpen={setOpen} />}
=======
        <div className="info">
          <h1>Intent</h1>
          <button onClick={()=>setOpen(true)}>Add New</button>
        </div>
        <DataTable columns={columns} rows={intent}/>
        {open && <Add slug="intent" columns={columns} setOpen={setOpen} />} 
>>>>>>> a698aed (Conect api)
    </div>
  );
};

export default Intent;
