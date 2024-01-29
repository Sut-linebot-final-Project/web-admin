import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss";
import { useNavigate } from "react-router-dom";

type Props = {
  columns: GridColDef[];
  rows: object[];
};
const DataTable = (props: Props) => {
  const navigate = useNavigate();
  const handleDelete = (id: number) => {
    //delete
    console.log(id + "has been deleted!");
  };
  const handleEdit = (id: number) => {
    //edit
    console.log(id + " has been edited!");
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <div
            className="edit"
            onClick={() => navigate(`/intent/${params.row.displayName}/detail`)}
          >
            <img src="/view.svg" alt="" />
          </div>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
