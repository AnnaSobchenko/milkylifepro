import Svg from "../_shared/Svg/Svg";
import s from "./ProfileUser.module.scss";

const ProfileUser = ({ content, closeModal }) => {
  console.log("content :>> ", content);
  return (
    <div className={s.card}>     
      <button className={s.btn} onClick={() => closeModal(true)}>
        <Svg name="close" isAllView={true} />
      </button>
      <div className={s.usercard}> 
     
        <p className={s.card__name}>{content.name}</p>
        <p className={s.card__email}>{content.email}</p>
        <p className={s.card__phone}>{content.phone}</p>
      </div>
    </div>
  );
};

export default ProfileUser;
