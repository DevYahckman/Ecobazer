import { Table } from "antd";
import React from "react";
import useOrderHistory from "../useOrderHistory";
import {columns} from '../../user/columns'

const OrderHistory = () => {
 const {orderHistory}= useOrderHistory()
  return (
    <div className="p-5 shadow-sm border rounded-lg">
      <p className="font-semibold text-deepGray">Recent Order History</p>
    
    <div>
      < Table dataSource={orderHistory} columns={columns} />
    </div>
    </div>
  );
};

export default OrderHistory;
