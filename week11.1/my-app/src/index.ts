export interface Env {}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		if (request.method === 'GET') {
			return Response.json({
				message: 'you sent a get request',
			});
		} else {
			return Response.json({
				message: 'you did not send a get request',
			});
		}
	},
};
