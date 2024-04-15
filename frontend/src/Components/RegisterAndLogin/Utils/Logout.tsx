import Cookies from "js-cookie";
import { removeToken } from "../../../Utils/AuthUtils";

const Logout = (callback: any) => {
    removeToken();
    callback();
}

export default Logout;