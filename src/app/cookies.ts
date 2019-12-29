import {Application, Request, Response} from "express";
import {CookieAction} from "./interfaces/cookie-action";
import {CookieActions} from "./enums/cookie-actions";

export default setCookieRouterToApplication;

const doCookieAction = (request: Request, response: Response): void => {
    const cookieAction: CookieAction = request.body;

    if(cookieAction.action === CookieActions.Delete) {
        response.clearCookie(cookieAction.name);
    } else {
        response.cookie(cookieAction.name, cookieAction.value, cookieAction.options);
    }

    response.send('done');
};

function setCookieRouterToApplication(application: Application): void {
    application.route('/cookies')
        .post(doCookieAction);
}

