import { PowerPartial } from "egg";
import { DefaultConfig } from "./config.default";

export default () => {
	const config: PowerPartial<DefaultConfig> = {};
	config.news = {
		pageSize: 30
	};
	return config;
};
