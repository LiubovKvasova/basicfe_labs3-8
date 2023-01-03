import './index.css';

const GoodsCard = (props) => (
  <li className="goods-card">
    <img src={props.url} alt={props.title} />
    <p>{props.title}</p>
    <p>Cost: {props.price}$</p>
  </li>
);

export default GoodsCard;
