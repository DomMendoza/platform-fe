import React, { useState, useMemo } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const dateFilterParams = {
  comparator: (filterLocalDateAtMidnight, cellValue) => {
    const cellDate = asDate(cellValue);
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
    return 0;
  },
};

const asDate = (dateAsString) => {
  const splitFields = dateAsString.split("/");
  return new Date(
    Number.parseInt(splitFields[2]),
    Number.parseInt(splitFields[1]) - 1,
    Number.parseInt(splitFields[0])
  );
};

export default function BetHistory() {
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

  const [rowData, setRowData] = useState([
    {
      date: "2024-04-24",
      amount: 100,
      validBet: 80,
      payout: 200,
      jackpotContributionClassic: 20,
    },
    {
      date: "2024-04-25",
      amount: 150,
      validBet: 120,
      payout: 250,
      jackpotContributionClassic: 30,
    },
    {
      date: "2024-04-26",
      amount: 200,
      validBet: 160,
      payout: 300,
      jackpotContributionClassic: 40,
    },
    {
      date: "2024-04-27",
      amount: 250,
      validBet: 200,
      payout: 350,
      jackpotContributionClassic: 50,
    },
    {
      date: "2024-04-28",
      amount: 300,
      validBet: 240,
      payout: 400,
      jackpotContributionClassic: 60,
    },
  ]);

  const [columnDefs] = useState([
    {
      field: "date",
      filter: "agDateColumnFilter",
      filterParams: dateFilterParams,
      cellStyle: (params) => {
        if (params.node.rowPinned) {
          return {
            fontWeight: "600",
            backgroundColor: "gainsboro",
            textAlign: "center",
          };
        } else {
          return null;
        }
      },
      headerClass: "header-style",
      cellClass: "cell-style",
      cellRenderer: (params) => {
        const cellValue = params.value;
        if (params.node.rowPinned) {
          return `Total:`;
        } else {
          return cellValue;
        }
      },
      flex: 1,
    },
    {
      field: "amount",
      headerName: "Bet Amount",
      filter: "agTextColumnFilter",
      cellStyle: (params) => {
        if (params.node.rowPinned) {
          return {
            fontWeight: "600",
            backgroundColor: "gainsboro",
            textAlign: "center",
          };
        } else {
          return null;
        }
      },
      headerClass: "header-style",
      cellClass: "cell-style",
      valueFormatter: (params) => {
        return "₱" + formatNumber(params.value);
      },
      flex: 1,
    },
    {
      field: "amount",
      headerName: "Valid Bet",
      filter: "agNumberColumnFilter",
      cellStyle: (params) => {
        if (params.node.rowPinned) {
          return {
            fontWeight: "600",
            backgroundColor: "gainsboro",
            textAlign: "center",
          };
        } else {
          return null;
        }
      },
      headerClass: "header-style",
      cellClass: "cell-style",
      valueFormatter: (params) => {
        return "₱" + formatNumber(params.value);
      },
      flex: 1,
    },
    {
      field: "payout",
      headerName: "Jackpot Payout",
      filter: "agTextColumnFilter",
      cellStyle: (params) => {
        if (params.node.rowPinned) {
          return {
            fontWeight: "600",
            backgroundColor: "gainsboro",
            textAlign: "center",
          };
        } else {
          return null;
        }
      },
      headerClass: "header-style",
      cellClass: "cell-style",
      valueFormatter: (params) => {
        return "₱" + formatNumber(params.value);
      },
      flex: 1,
    },

    {
      field: "jackpotContributionClassic",
      headerName: "Jackpot Contribution",
      filter: "agTextColumnFilter",
      cellStyle: (params) => {
        if (params.node.rowPinned) {
          return {
            fontWeight: "600",
            backgroundColor: "gainsboro",
            textAlign: "center",
          };
        } else {
          return null;
        }
      },
      headerClass: "header-style",
      cellClass: "cell-style",
      valueFormatter: (params) => {
        return "₱" + formatNumber(params.value);
      },
      flex: 1,
    },
  ]);

  const formatNumber = (number) => {
    return (Math.round((number + Number.EPSILON) * 100) / 100)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <div className="flex flex-col gap-2 h-full">
      <p className="text-lg font-bold uppercase font-['Poppins']">
        Bet History
      </p>
      <div
        style={gridStyle}
        className="ag-theme-quartz rounded-lg overflow-x-auto"
      >
        <div className="min-w-[600px] h-full">
          <AgGridReact rowData={rowData} columnDefs={columnDefs} />
        </div>
      </div>
    </div>
  );
}
