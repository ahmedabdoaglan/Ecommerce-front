import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import styles from "./styles.module.css";

const Item = ({ btnText, actionType, id, title, price, img }) => {
  console.log("id", id);
  const { item } = styles;
  const dispatch = useDispatch();
  const actionHandler = () => {
    if (actionType === "add") {
      dispatch({ type: "cart/addToCart", payload: id });
    }
  };
  return (
    <div className={item}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{price}</h3>
      <Button variant="info" onClick={actionHandler}>
        {btnText || "Add to card"}
      </Button>
    </div>
  );
};

export default Item;
// this img does not work
//         src="https://eg.hm.com/assets/styles/HNM/14317182/04b7fbc49993d530655ebdea0a19b98f006ad467/1/image-thumb__3199024__product_zoom_medium_606x504/04b7fbc49993d530655ebdea0a19b98f006ad467.jpg"
