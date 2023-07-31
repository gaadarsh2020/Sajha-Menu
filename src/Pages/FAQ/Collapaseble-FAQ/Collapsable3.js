import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./Collapsable3.css";

function Collapsable3() {
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
export default Collapsable3;
