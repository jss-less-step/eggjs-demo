import { Context } from "egg";
import moment from "moment";
import { appendFileSync } from "node:fs";
import { BizConfig } from "../../config/config.default";
/**
 * 日志中间件 记录请求日志
 */
export default (options: BizConfig["requestTimeLogger"]) => {
	return async (ctx: Context, next: () => Promise<any>) => {
		console.log("options", options);
		// 请求开始时间戳
		const requestStartTime = Date.now();
		const formatedRequestStartTime = moment(requestStartTime).format("YYYY-MM-DD HH:mm:ss");
		await next();
		const requestEndTime = Date.now();
		const ms = requestEndTime - requestStartTime;
		if (options.allowedMethods.includes(ctx.method)) {
			const logTime = `[${ctx.method}] ${formatedRequestStartTime} - ${ctx.url} - ${ms}ms`;
			appendFileSync("./log.txt", logTime + "\n");
		}
	};
};
