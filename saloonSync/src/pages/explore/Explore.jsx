import React, { useState } from "react";
import "./style.scss";
import Card from "../../component/card/Card";
import Filter from "../../component/filter/Filter";
import { Pagination } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import CircularProgress from "@mui/material/CircularProgress";
import useSaloon from "../../hooks/useSaloon";

const Explore = () => {
  const [page, setPage] = useState(1);
  const [mobileCondition, setMobileCondition] = useState(false);

  const handleChange = async (_, value) => {
    setPage(value);
  };

  const { data, loading } = useSaloon();

  console.log(data);

  return (
    <div className="explore">
      {!loading ? (
        <div
          className={`contentWrapper ${
            mobileCondition ? "showMobilepref" : ""
          }`}
        >
          <Filter />
          <div className="cardsContainer">
            <div className="cardsContainerHeader">
              <div className="heading">Saloons</div>
              <div
                className="icon"
                onClick={() => setMobileCondition((prev) => !prev)}
              >
                {mobileCondition ? <IoMdClose /> : <VscSettings />}
              </div>
            </div>
            <div className="cards">
              {data?.saloons?.map((data, id) => (
                <Card data={data} key={id} />
              ))}
            </div>
            <div className="pages">
              <Pagination
                count={20}
                shape="rounded"
                variant="outlined"
                size={window.innerWidth < 768 ? "small" : "large"}
                page={page}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      ) : (
        <CircularProgress color="inherit" />
      )}
    </div>
  );
};

export default Explore;
