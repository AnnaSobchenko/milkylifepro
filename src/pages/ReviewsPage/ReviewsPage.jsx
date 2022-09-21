import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../redux/reviews/reviewsOperations";
import { getAllReviews } from "../../redux/reviews/reviewsSelector";
import s from "./ReviewsPage.module.scss";

const ReviewsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, []);
  const Reviews = useSelector(getAllReviews);
  return (
    <div className={`container ${s.reviews}`}>
      <ul>
        {Reviews.map((el) => (
          <li key={el._id}>
            <p>"{el.review}"</p>
            <p className={s.item__user}>{el.user}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsPage;
