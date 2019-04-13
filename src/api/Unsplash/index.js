import Unsplash from "unsplash-js";
import {API_APPLICATION_ID, API_KEY} from "../../keys";

export const unsplash = new Unsplash({
    applicationId: API_APPLICATION_ID,
    secret: API_KEY
});