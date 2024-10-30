import React from "react";
import "./style.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdExpandMore } from "react-icons/md";

const AccordionComp = ({ service }) => {
  return (
    <div className="accordionComp">
      <Accordion className="accordion" defaultExpanded>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="heading">{service?.menuCategory}</div>
        </AccordionSummary>
        <AccordionDetails>
          {service?.menuItems?.map((menuItem, id) => (
            <div className="item" key={id}>
              <div className="name">{menuItem.menuName}</div>
              <div className="category">{menuItem.gender}</div>
              <div className="priceTime">
                <div className="price">₹{menuItem.price}</div>
                <div className="time">10 Min</div>
              </div>
              <div className="addButton">+</div>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionComp;
