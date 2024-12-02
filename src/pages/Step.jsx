import { Outlet, useLocation } from "react-router";

import { Progress } from "../components";


export const Step = () => {

  let location = useLocation();
  const activeStep = location.pathname.split('/')[2]

  return (
    <div className="container">
      <div className="wrapper">
        <Progress steps={4} activeStep={activeStep} />
        <Outlet />
      </div>
    </div>
  );
};
