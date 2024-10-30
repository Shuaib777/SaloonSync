import React, { forwardRef, useEffect, useState } from "react";
import AccordionComp from "../../component/accordion/AccordionComp";
import { IoMdSearch } from "react-icons/io";
import { fetchSaloons } from "../../api/saloonsApi";

const Menu = forwardRef(({ saloonId }, ref) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchSaloons(`menu/${saloonId}/?query=${query}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [query]);

  return (
    <div className="content">
      <div className="contentHeading">
        <div className="heading active">Menu</div>
        <div className="searchMenu">
          <input
            type="text"
            placeholder="search in menu"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <div className="icon">
            <IoMdSearch />
          </div>
        </div>
      </div>
      <div className="menuContent" ref={ref}>
        {data?.map((service, id) => (
          <AccordionComp service={service} key={id} />
        ))}
      </div>
    </div>
  );
});

export default Menu;
