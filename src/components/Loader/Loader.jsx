import { Circles } from "react-loader-spinner";
import classes from "./Loader.module.css";

function Loader() {
  return (
    <div className={classes["loader-container"]}>
      <Circles
        height="100"
        width="100"
        color="rgb(175, 172, 172)"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
}

export default Loader;
