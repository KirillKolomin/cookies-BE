import {CookieActions} from "../enums/cookie-actions";
import {CookieOptions} from "express-serve-static-core";

export interface CookieAction {
    action: CookieActions;
    name: string;
    options?: CookieOptions;
    value: string;
}
