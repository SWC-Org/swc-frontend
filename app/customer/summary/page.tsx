import ReusableTable from "@components/Tables/ReusableTable";
import { Typography } from "@mui/material";
import React from "react";

const data = [
  {
    location: "Bed Room 1",
    Plantation_Shutters: "done",
    Roller_Blinds: "done",
    Curtains: "done",
  },
  {
    location: "Bed Room 2",
    Plantation_Shutters: "done",
    Roller_Blinds: "done",
    Curtains: "done",
  },
  {
    location: "Living Room",
    Plantation_Shutters: "add",
    Roller_Blinds: "done",
    Curtains: "done",
  },
  {
    location: "Kitchen",
    Plantation_Shutters: "done",
    Roller_Blinds: "add",
    Curtains: "done",
  },
  {
    location: "Bathroom",
    Plantation_Shutters: "done",
    Roller_Blinds: "done",
    Curtains: "add",
  },
  {
    location: "Study Room",
    Plantation_Shutters: "add",
    Roller_Blinds: "done",
    Curtains: "done",
  },
  {
    location: "Dining Room",
    Plantation_Shutters: "done",
    Roller_Blinds: "done",
    Curtains: "done",
  },
  {
    location: "Attic",
    Plantation_Shutters: "done",
    Roller_Blinds: "done",
    Curtains: "done",
  },
  {
    location: "Basement",
    Plantation_Shutters: "done",
    Roller_Blinds: "done",
    Curtains: "done",
  },
  {
    location: "Patio",
    Plantation_Shutters: "done",
    Roller_Blinds: "done",
    Curtains: "done",
  },
  {
    location: "Balcony",
    Plantation_Shutters: "done",
    Roller_Blinds: "done",
    Curtains: "done",
  },
];

const columns = [
  { id: "location", label: "Window Location" },
  { id: "Plantation_Shutters", label: "Plantation Shutters", numeric: true },
  { id: "Roller_Blinds", label: "Roller Blinds", numeric: true },
  { id: "Curtains", label: "Curtains", numeric: true },
];

export default function page() {
  return (
    <div className="px-32">
      <section>
        <Typography variant="h4">Summary</Typography>
        <p className="my-10 opacity-50">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquen t perlvinar.
          Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
          Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet
          lacinia. Aliquam in elementum tellus.as
        </p>
      </section>
      <ReusableTable
        data={data}
        columns={columns}
        title="Window Details"
        dense={false} // Optional, defaults to false
        rowsPerPageOptions={[5, 10, 25]} // Optional, defaults to [5, 10, 25]
        initialRowsPerPage={5} // Optional, defaults to 5
      />
    </div>
  );
}
