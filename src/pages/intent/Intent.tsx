import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable";
import "./intent.scss";



import { useEffect} from "react";

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
        <div className="info">
          <h1>Intent</h1>
          <button onClick={()=>setOpen(true)}>Add New</button>
        </div>
        <DataTable columns={columns} rows={intent}/>
        {open && <Add slug="intent" columns={columns} setOpen={setOpen} />} 
    </div>
  );
};

export default Intent;
