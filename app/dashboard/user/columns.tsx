"use client";
export const columns = [
  {
    title: "OrerID",
    dataIndex: "OrerID",
    key: "orderID",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "View Details",
    dataIndex: "viewDetails",
    key: "viewDetails",
    render: () => {
      return (
        <span className="text-success text-medium cursor-pointer">
          View Details
        </span>
      );
    },
  },
];
