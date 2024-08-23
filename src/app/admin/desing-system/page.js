"use client"

import React from "react";
import { Grid, GridCol } from "@/components/ui";

const Page = () => {
  return (
    <div className="">
      <Grid className="grid grid-cols-3 grid-flow-row gap-3">
        <div className="text-center font-bold p-4 bg-primary border-lg rounded-lg">
          1
        </div>
        <div className="text-center font-bold p-4 bg-primary border-lg rounded-lg">
          2
        </div>
        <div className="text-center font-bold p-4 bg-primary border-lg rounded-lg">
          3
        </div>
        <div className="  text-center font-bold p-4 bg-primary border-lg rounded-lg">
          3
        </div>
      </Grid>
    </div>
  );
};
export default Page;
