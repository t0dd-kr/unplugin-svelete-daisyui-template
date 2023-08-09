import { rest } from 'msw'
import { values } from './fixtures/msw-demo'

// Mock relative URLs that map to your
// routes' data endpoints. This mock only
// happens for client-side requests.
//
// Note that if you use shadow endpoints, this still works
// as the endpoint gets created by SvelteKit.
export const handlers = [
	rest.get('/msw/demo/__data.json', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json({ values }))
	}),
]
