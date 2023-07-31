import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./collapsable.css";

function Collapsable() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div classname="wrapper">
      <div className="accordian">
        {data.map((item, i) => (
          <div className="item" onClick={() => toggle(i)}>
            <div className="title">
              <h3>{item.question}</h3>
              <AddIcon className="Icon" />
            </div>
            <div className={selected === i ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    question: "Can Place order without waiter app ?",
    answer:
      "we can place order in the  sajha menu from the Online portal for customers.",
  },
  {
    question: "Can Place order without waiter app ?",
    answer:
      "we can place order in the  sajha menu from the Online portal for customers",
  },
  {
    question: "Can Place order without waiter app ?",
    answer:
      "we can place order in the  sajha menu from the Online portal for customers.",
  },
  {
    question: "Can Place order without waiter app ?",
    answer:
      "we can place order in the  sajha menu from the Online portal for customers.",
  },
  {
    question: "Can Place order without waiter app ?",
    answer:
      "we can place order in the  sajha menu from the Online portal for customers.",
  },
];
export default Collapsable;
// import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import AddIcon from "@mui/icons-material/Add";

// export default function BasicAccordion() {
//   return (
//     <div>
//       <Accordion>
//         <AccordionSummary
//           AddIcon={<AddIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//           width={20}
//         >
//           <Typography>Accordion 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           AddIcon={<AddIcon />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography>Accordion 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion disabled>
//         <AccordionSummary
//           AddIcon={<AddIcon />}
//           aria-controls="panel3a-content"
//           id="panel3a-header"
//         >
//           <Typography>Disabled Accordion</Typography>
//         </AccordionSummary>
//       </Accordion>
//     </div>
//   );
// }
