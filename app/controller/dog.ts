import { Controller } from "egg";

export default class DogController extends Controller {
	public async index() {
		const { ctx } = this;
		ctx.body = {
			data: await ctx.service.dog.index(),
			baseDir: ctx.app.config.baseDir,
			xixi: "jss",
			haha: "haha",
			lala: "lala1"
		};
	}
}
