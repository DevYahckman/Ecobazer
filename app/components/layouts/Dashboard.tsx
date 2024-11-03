import React from "react";

// const role = "user";

interface Props {
  children: React.ReactNode;
}

const Dashboard = ({ children }: Props) => {
  return (
    <div>
      <aside></aside>
      <div>{children}</div>
    </div>
  );
};

export default Dashboard;
