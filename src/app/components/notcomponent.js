import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function GeeksforGeeks() {
  const notify = () => {
    toast("Hello Geeks 4", { position: toast.POSITION.BOTTOM_LEFT });
    toast("Hello Geeks 6", { position: toast.POSITION.BOTTOM_RIGHT });
    toast("Hello Geeks 5", { position: toast.POSITION.BOTTOM_CENTER });
    toast("Hello Geeks 1", { position: toast.POSITION.TOP_LEFT });
    toast("Hello Geeks 3", { position: toast.POSITION.TOP_RIGHT });
    toast("Hello Geeks 2", { position: toast.POSITION.TOP_CENTER });
  };
  return (
    <div className="GeeksforGeeks">
      <button onClick={notify}>Click Me!</button>
    </div>
  );
}
export default GeeksforGeeks;
