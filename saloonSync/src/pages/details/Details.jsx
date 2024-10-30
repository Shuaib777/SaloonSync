import React, { useEffect, useRef } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import AccordionComp from "../../component/accordion/AccordionComp";
import useSaloon from "../../hooks/useSaloon";
import { CircularProgress } from "@mui/material";
import Menu from "./Menu";

const DetailsPage = () => {
  const ref = useRef();
  const { saloonId } = useParams();

  const { data, loading } = useSaloon(saloonId);

  const handleBook = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="details">
      {!loading ? (
        <>
          <div className="detailsBanner">
            <div className="imageContainer">
              <img src={data?.imageURL} />
            </div>
            <div className="bannerContent">
              <span className="name">{data?.saloonName}</span>
              <span className="address">{data?.address}</span>
              <span className="category">
                <span className="icon">A</span>
                <span className="categoryName">{data?.category}</span>
              </span>
              <span className="category">
                <span className="icon">A</span>
                <span className="categoryName">9:00 am - 9:00 pm</span>
              </span>
              <span className="book">
                <span className="bookButton" onClick={handleBook}>
                  Book Now
                </span>
              </span>
            </div>
          </div>

          {/* <div className="content">
            <div className="contentHeading">
              <div className="heading active">Menu</div>
              <div className="searchMenu">
                <input type="text" placeholder="search in menu" />
                <div className="icon">
                  <IoMdSearch />
                </div>
                
              </div>
              <MenuInput />
            </div>
            <div className="menuContent" ref={ref}>
              {data?.menu?.map((service, id) => (
                <AccordionComp service={service} key={id} />
              ))}
            </div>
          </div> */}
          <Menu ref={ref} saloonId={saloonId} />
        </>
      ) : (
        <div className="loading">
          <CircularProgress color="inherit" />
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
