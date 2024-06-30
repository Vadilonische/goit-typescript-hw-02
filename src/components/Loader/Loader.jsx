import css from "./Loader.module.css";
import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={css.loaderContainer}>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <p>Loading Images, please wait...</p>
    </div>
  );
}
