import ProductRow from "../ProductRow";
import "./frag1.css";

const Frag1 = () => {
  const data = [
    {
      id: 1,
      name: "Product 5",
      img: "https://5.imimg.com/data5/AI/EB/ZD/ANDROID-27339705/product-jpeg-250x250.jpg",
      inStock: true,
      price: 10.0,
      date: "2020/08/11 at 10:10 Pm",
    },
    {
      id: 2,
      name: "Shirt",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3-guQ8iXM5vHnZXClA-QEAqwGOUCDVa554mYnLBat1ZqBwCuc96mZXw6nhUlE1DLBOE&usqp=CAU",
      inStock: true,
      price: 10.0,
      date: "2020/08/11 at 10:10 Pm",
    },
    {
      id: 3,
      name: "Shirt 2",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqDND_u0FYTfubWjoaNvTm4_Fl9b1zy4EjJ4CFo-tvED2uDR8g2o8h7NSMehAbNcF-QY&usqp=CAU",
      inStock: true,
      price: 10.0,
      date: "2020/08/11 at 10:10 Pm",
    },
  ];
  return (
    <div className="frag1">
      <div className="heading">
        <h3>Products</h3>
        <div className="ImExBtn_contain">
          <div className="ImExBtn">Import</div>
          <div className="ImExBtn">Export</div>
        </div>
      </div>

      <div className="options">
        <a href="#">All (2)</a>|<a href="#">Published (2)</a>|
        <a href="#">Trash (1)</a>|<a href="#">Sorting</a>
      </div>

      <div className="products ">
        <div className="products_contain">

          <div className="product_row products_heading" >
            <input type="checkbox" name="cb" id="cb" className="prod_cb" />
            <div className="prod_thumb">
              <img src="https://image.shutterstock.com/image-vector/empty-placeholder-image-icon-design-260nw-1366372628.jpg" />
            </div>
            <h3 className="prod_name">Name</h3>
            <h3 className="prod_stock">Stock</h3>
            <h3 className="prod_price">Price</h3>
            <h3 className="prod_date">Date</h3>
          </div>

          {data.map((each) => {
            return <ProductRow name={each.name} img={each.img}  price={each.price} date={each.date} inStock={each.inStock}/>;
          })}

        </div>
      </div>
    </div>
  );
};
export default Frag1;
