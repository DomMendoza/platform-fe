import React, { useState, useMemo } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export default function BetHistory() {
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: "make", headerClass: "header-style", cellClass: "cell-style" },
    { field: "model", headerClass: "header-style", cellClass: "cell-style" },
    { field: "price", headerClass: "header-style", cellClass: "cell-style" },
    { field: "electric", headerClass: "header-style", cellClass: "cell-style" },
  ]);

  return (
    <div className="flex flex-col gap-2 h-full">
      <p className="text-lg font-bold uppercase font-['Poppins']">
        Bet History
      </p>
      <div style={gridStyle} className="ag-theme-quartz bg-white rounded-lg">
        {/* <AgGridReact rowData={rowData} columnDefs={colDefs} /> */}
      </div>
    </div>
  );
}
