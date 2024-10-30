import React from "react";
import "./style.scss"; // Import CSS file

// Import all images from the assets folder
import SalonHero from "../../assets/Salon+hero.jpg";
import SubImage1 from "../../assets/sub-image1.png";
import SubImage2 from "../../assets/sub-image2.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="heroBanner">
        <div className="wrapper">
          <img src={SalonHero} alt="" width="100%" height="700px" />
        </div>
        <div className="content">
          <div className="heading">
            <p>
              Get Appointment For <span>Nearby Beauty Services</span>
            </p>
          </div>
          <div className="items">
            <div className="item" onClick={() => navigate("/explore")}>
              <p>Hair and Beauty Appointment</p>
              <img src={SubImage1} alt="" />
            </div>
            <div className="item" onClick={() => navigate("/explore")}>
              <p>Find top-rated salons, Spas, and Parlours Around You</p>
              <img src={SubImage2} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="descriptionSection">
        <div className="description">
          <div className="heading">
            Salon And Parlour Services At Home Nearby You
          </div>
          <div className="content">
            What annoys you more? Not being able to find reliable salons or
            waiting in the long queues for your turn? Whatever it may be,
            Saloon-Sync has the solution for it. We’re an online salon booking
            app with a comprehensive range of top-rated male, female, and unisex
            salons in your locality. You can compare your desired parlour and
            salon services at home, and their prices, with offers and discounts,
            and pick the one suiting your budget, time, and requirement the
            most. We understand all salon-related hustles, so we got you- at
            home/at salon service, 0 booking time, reserved slots, 0 booking
            charges, and 0 waiting time. Also, you can check the genuine user
            reviews and ratings before booking an online salon and experience
            high-quality services without wasting your precious time. Whether
            you are looking for a stylish new haircut, facial, waxing, or any
            last-minute salon appointment, Saloon-Sync happens to be your go-to
            salon and spa booking app. We believe in grooming to our level best,
            as in our opinion, Everyone deserves to look good!
          </div>
        </div>
        <div className="services">
          <div className="heading">
            Why Choose Salon-Sync For Salon At Home Services?
          </div>
          <div className="items">
            <div className="item">
              <FaClock />
              <p>
                <span className="subheading">Zero Booking Time</span>
                <span>
                  Enjoy your desired service from the comfort of your home with
                  0 booking time. Book in an instant, and our artist will turn
                  up at the decided time.
                </span>
              </p>
            </div>
            <div className="item">
              <IoSearchOutline />
              <p>
                <span className="subheading">Salon At Home Services</span>
                <span>
                  Beating busy schedules all around, Zoylee delivers your
                  desired services to your doorstep at the time you choose.
                </span>
              </p>
            </div>
            <div className="item">
              <FaCalendarAlt />
              <p>
                <span className="subheading">Reserved Slots</span>
                <span>
                  The best part is you can take any service at your convenience.
                  The slot you book will stay untouched until you take the
                  service.
                </span>
              </p>
            </div>
            <div className="item">
              <IoWalletOutline />
              <p>
                <span className="subheading">0 Booking Charges</span>
                <span>
                  Now book all your favorite services tension-free, as no
                  booking charge will be deducted.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
