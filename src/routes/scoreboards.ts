import { randomUUID } from 'node:crypto'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { prisma } from '../libs/prisma'

export async function scoreboardRoutes(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().get('/', async () => {
		const scoreboards = await prisma.scoreboard.findMany()

		return { scoreboards }
	})

	app.withTypeProvider<ZodTypeProvider>().get('/:user_id', async (request) => {
		const getQuestionsParamsSchema = z.object({
			user_id: z.string().uuid(),
		})
		const { user_id } = getQuestionsParamsSchema.parse(request.params)

		const scoreboards = await prisma.scoreboard.findMany({
			where: { user_id },
		})

		return { scoreboards }
	})

	app
		.withTypeProvider<ZodTypeProvider>()
		.post('/', async (request, response) => {
			const createQuestionsBodySchema = z.object({
				score: z.number(),
				user_id: z.string().uuid(),
			})

			const { score, user_id } = createQuestionsBodySchema.parse(request.body)

			await prisma.scoreboard.create({
				data: {
					id: randomUUID(),
					score,
					user_id,
				},
			})

			return response
				.status(201)
				.send({ message: 'Pontuação cadastrada com sucesso!' })
		})
}
