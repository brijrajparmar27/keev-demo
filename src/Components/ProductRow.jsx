const ProductRow = (
  props = {
    date: "2020/08/11 at 10:10 Pm",
    id: 1,
    img: "https://5.imimg.com/data5/AI/EB/ZD/ANDROID-27339705/product-jpeg-250x250.jpg",
    inStock: true,
    name: "Product 5",
    price: 10,
  }
) => {
  return (
    <div className="product_row">
      <input type="checkbox" name="cb" id="cb" className="prod_cb" />
      <div className="prod_thumb">
        <img src={props.img} />
      </div>
      <h3 className="prod_name">{props.name}</h3>
      <h3 className="prod_stock">{props.inStock?"In Stock":"Not Available"}</h3>
      <h3 className="prod_price">£{props.price}</h3>
      <h3 className="prod_date">{props.date}</h3>
    </div>
  );
};
export default ProductRow;
