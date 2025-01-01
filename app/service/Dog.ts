import { Service } from "egg";

export default class DogService extends Service {
	async index() {
		return "dog";
	}
}
