import { TbStarFilled } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
const Rating = ({rating,reviews}) => {
  return (
    <div className="rating-wrapper">
        <b className="rating">
        <TbStarFilled className="Star-icon"/>{rating} 
        </b>
        <span>{reviews} Reviews</span>


    </div>
  )
}

export default Rating