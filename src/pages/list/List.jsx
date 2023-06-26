import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  // Hotel data array
const hotelData = [
  {
    id: 1,
    title: "Roomshala 087 Green High",
    distance: "5.5km from center",
    taxi: "Limited-time Deal",
    subtitle: "Deluxe Double Room (2 adults + 1 child)",
    feature: "1 Full Bed",
    cancelop: " Free Cancellation",
    cancelOpSubtitle: "No prepayment needed- pay at the property ",
    remark:"Exceptional",
    rating: "8.9",
    price: "₹8000",

    image: "https://cf.bstatic.com/xdata/images/hotel/square200/455197695.webp?k=3fb5a81def8bc705140147f8ac7591abdeee6bd3ee6d1fbf1a7441125b64af3b&amp;o=",
  },
  {
    id: 2,
    title: "Skon Boutique by Orion Hotels",
    distance: "7.9 km from center",
    taxi: "Getaway Deal",
    subtitle: "Superior Double or Twin Room",
    feature: "Multiple bed types",
    cancelop: "Cancellation available",
    cancelOpSubtitle: "Only 1 room left at this price in our site",
    rating: "9.2",
    remark:"Very Good",
    price: "₹6200",
    image: "https://cf.bstatic.com/xdata/images/hotel/square200/331568749.webp?k=5b96314c7c62caa457fdfa1765674e20b04db87f8f81b4b96739a5ca3a926d08&amp;o=",
  },
  {
    id: 3,
    title: "The Singh Empire",
    distance: "5 km",
    taxi: "Taxi available",
    subtitle: "Double Room",
    feature: "Bed: 1 double or 2 twins",
    cancelop: "Free Cancellation ",
    cancelOpSubtitle: "Breakfast Included",
    rating: "9.2",
    price: "₹7800",
    remark: "Excellent",
    image: "https://cf.bstatic.com/xdata/images/hotel/square200/345556576.webp?k=1c9760e198a0a4211d3708b78e08f31b56ebca82e6756b486952a0594d6fa3a4&o=",
  },
  {
    id: 4,
    title: "The Leena International",
    distance: "1.2 km from center",
    taxi: "Getaway Deal",
    subtitle: "Deluxe Room- non view",
    feature: "1 King Bed",
    cancelop: "Cancellation available",
    cancelOpSubtitle: "Only 7 rooms left at this price on our site",
    rating: "9.2",
    remark: "Good",
    price: "₹2100",
    image: "https://cf.bstatic.com/xdata/images/hotel/square200/459994101.webp?k=fdf2e243f481900a1081f755c9557e7846fc74b5ae7161647f76aad1b4376073&amp;o=",
  },
  {
    id: 5,
    title: "The Lalit- New Mumbai",
    distance: "0.7 km from center",
    taxi: "New Property Deal",
    subtitle: "Twin Room",
    feature: "2 Twin Beds",
    cancelop: "Free Cancellation ",
    cancelOpSubtitle: "Travel Sustainability property",
    rating: "9.2",
    remark: "Very Good",
    price: "₹4800",
    image: "https://cf.bstatic.com/xdata/images/hotel/square200/220291701.webp?k=e282e0330a61d470e492cfc23c943a9204cc5de040cbeb54d760e673b98f4faa&amp;o=",
  },
  {
    id: 6,
    title: "Hotel Shri Vinayak",
    distance: "5 km",
    taxi: "Limited-time Deal",
    subtitle: "1 King Bed",
    feature: "Premier King Room- Free Wifi",
    cancelop: "Cancellation available",
    cancelOpSubtitle: "No prepayment needed- pay at the propertyy",
    rating: "9.2",
    remark: "Very Good",
    price: "₹6500",
    image: "https://cf.bstatic.com/xdata/images/hotel/square200/154282511.webp?k=50f517d8723245d210986cf3533b8138f975c75dd177d26de9bca6a03e9a13e7&amp;o=",
  },
  // Add more hotel objects as needed
];





  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
  {hotelData.map((hotel) => (
    <SearchItem
      key={hotel.id}
      title={hotel.title}
      distance={hotel.distance}
      taxi={hotel.taxi}
      subtitle={hotel.subtitle}
      feature={hotel.feature}
      cancelop={hotel.cancelop}
      cancelOpSubtitle={hotel.cancelOpSubtitle}
      rating={hotel.rating}
      price={hotel.price}
      remark={hotel.remark}
      image={hotel.image}
    />
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default List;
