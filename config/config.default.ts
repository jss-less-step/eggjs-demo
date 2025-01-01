import { EggAppConfig, PowerPartial } from "egg";
import * as fs from "node:fs";
import * as path from "node:path";

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig> & BizConfig;
// app special config scheme
export interface BizConfig {
	sourceUrl: string;
	news: {
		pageSize: number;
		serverUrl: string;
	};
	requestTimeLogger: {
		allowedMethods: string[];
	};
}
export default function (appInfo: EggAppConfig) {
	const config = {
		sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
		news: {
			pageSize: 30,
			serverUrl: "https://hacker-news.firebaseio.com/v0"
		},
		requestTimeLogger: {
			allowedMethods: ["POST"]
		},
		keys: appInfo.name + "123456",
		view: {
			defaultViewEngine: "nunjucks",
			mapping: {
				".tpl": "nunjucks"
			}
		},
		siteFile: {
			"/favicon.ico": fs.readFileSync(path.join(appInfo.baseDir, "app/public/favicon.png"))
		},
		security: {
			csrf: {
				enable: false
			}
		}
	} as DefaultConfig;

	return {
		...(config as {})
	} as BizConfig;
}
