import "./header.css";
import MenuCard from "./MenuCard";

const Header = () => {
  const menus = [
    {
      id: 1,
      title: "Recent Posts",
      icon: "fa-solid fa-chart-pie",
    },
    {
      id: 2,
      title: "Products",
      icon: "fa-solid fa-store",
    },
    {
      id: 3,
      title: "Coupons",
      icon: "fa-solid fa-ticket",
    },
    {
      id: 4,
      title: "Users",
      icon: "fa-solid fa-users",
    },
    {
      id: 5,
      title: "Settings",
      icon: "fa-solid fa-gears",
    },
    {
      id: 6,
      title: "Account",
      icon: "fa-solid fa-id-card",
    },
  ];
  return (
    <div className="header">
      <div className="header_items_parent">
        <div className="context_contain">
          <div className="app_title">
            <i className="fa-solid fa-cart-shopping"></i>
            <h2>GoShopping</h2>
          </div>
          <div className="contexts">
            <div className="context_stuff">
              <i className="fa-solid fa-eye"></i>
              <a href="#">view my Site</a>
            </div>
            <div className="context_stuff">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <a href="#">Logout</a>
            </div>
          </div>
        </div>

        <div className="title_contain">
          <h2>Products</h2>
        </div>

        <div className="cards_contain">
          {menus.map((each) => {
            return (
              <MenuCard key={each.id} icon={each.icon} title={each.title} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
