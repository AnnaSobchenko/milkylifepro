import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsAdmin,
  getIsLoggedIn,
  getUserProfile,
} from "../../redux/auth/authSelector";
import {
  addReviews,
  approveReview,
  getReviews,
  removeReview,
} from "../../redux/reviews/reviewsOperations";
import { getAllReviews } from "../../redux/reviews/reviewsSelector";
import s from "./ReviewsPage.module.scss";
import { Formik } from "formik";

const ReviewsPage = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(getUserProfile);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isAdmin = useSelector(getIsAdmin);
  const [isShow, setIsShow] = useState(false);

  const renderForm = () => {
    setIsShow((prev) => !prev);
  };

  const approveReviewAdmin = async (e) => {
    await dispatch(approveReview(e.target.value));
    dispatch(getReviews());
  };

  const removeReviewAdmin = async (e) => {
    await dispatch(removeReview(e.target.value));
    dispatch(getReviews());
  };

  const onSubmitReview = (values) => {
    setIsShow(false);
    const reviewInfo = { ...values, ...userInfo };
    dispatch(addReviews(reviewInfo));
    dispatch(getReviews());
  };

  useEffect(() => {
    dispatch(getReviews());
  }, []);
  const Reviews = useSelector(getAllReviews);
  return (
    <div className={`container ${s.reviews}`}>
      <ul>
        {Reviews.map(
          (el) =>
            (el.isApprove || isAdmin) && (
              <li key={el._id}>
                <p>"{el.review}"</p>
                <p className={s.item__user}>{el.name}</p>
                {isAdmin && !el.isApprove && (
                  <div className={s.adminAprove}>
                    <button
                      type="button"
                      value={el._id}
                      onClick={(e) => approveReviewAdmin(e)}
                    >
                      Погодити відгук
                    </button>
                    <button
                      type="button"
                      value={el._id}
                      onClick={(e) => removeReviewAdmin(e)}
                    >
                      Видалити відгук
                    </button>
                  </div>
                )}
              </li>
            )
        )}
      </ul>
      {isLoggedIn && !isShow && (
        <button type="button" onClick={renderForm} className={s.btn__render}>
          Залишити відгук
        </button>
      )}

      {isLoggedIn && isShow && (
        <Formik initialValues={{ review: "" }} onSubmit={onSubmitReview}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className={s.form__review}>
              <label className={s.form__name}>
                <img
                  src={userInfo.avatarURL}
                  width="30"
                  height="30"
                  alt="user profile avatar"
                />
                {userInfo.name}
              </label>

              <textarea
                type="text"
                name="review"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Напиши відгук тут"
                className={s.form__text}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={s.form__btn}
              >
                Надіслати
              </button>
            </form>
          )}
        </Formik>
      )}
      {isLoggedIn && isShow && (
        <button type="button" onClick={renderForm} className={s.btn__render}>
          Залишу відгук іншим разом
        </button>
      )}
    </div>
  );
};

export default ReviewsPage;
