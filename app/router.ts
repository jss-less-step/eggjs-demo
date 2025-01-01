import { Application } from "egg";

export default (app: Application) => {
	const { controller, router, middleware } = app;
	const logger = middleware.requestTimeLogger({
		allowedMethods: ["GET", "POST"]
	});
	router.redirect("/", "/news");
	router.get("/news", logger, controller.news.list);
	router.get("/news/item/:id", logger, controller.news.detail);
	router.get("/news/user/:id", controller.news.user);
	router.get("/dog", logger, controller.dog.index);
};
