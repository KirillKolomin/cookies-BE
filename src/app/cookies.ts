import {Application, Request, Response} from "express";

export default setCookieRouterToApplication;

const setCookie = (request: Request, response: Response): void => {
    console.log(request);

    response.send(true);
};

function setCookieRouterToApplication(application: Application): void {
    application.route('/cookies')
        .post(setCookie);
}

