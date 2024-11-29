import { randomUUID } from 'node:crypto'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { prisma } from '../libs/prisma'

export async function questionRoutes(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().get('/', async () => {
		const questions = await prisma.question.findMany()

		return { questions }
	})

	app.withTypeProvider<ZodTypeProvider>().get('/:id', async (request) => {
		const getQuestionsParamsSchema = z.object({
			id: z.string().uuid(),
		})
		const { id } = getQuestionsParamsSchema.parse(request.params)

		const question = await prisma.question.findUniqueOrThrow({
			where: { id },
		})

		return { question }
	})

	app
		.withTypeProvider<ZodTypeProvider>()
		.post('/', async (request, response) => {
			const createQuestionsBodySchema = z.object({
				questions: z.array(
					z.object({
						enunciation: z.string(),
						options: z.array(z.string()),
						answer: z.number().int(),
					}),
				),
			})

			const { questions } = createQuestionsBodySchema.parse(request.body)

			await Promise.all(
				questions.map((question) =>
					prisma.question.create({
						data: {
							id: randomUUID(),
							enunciation: question.enunciation,
							options: JSON.stringify(question.options),
							answer: question.answer,
						},
					}),
				),
			)

			return response
				.status(201)
				.send({ message: 'Questões cadastradas com sucesso!' })
		})

	app
		.withTypeProvider<ZodTypeProvider>()
		.put('/:id', async (request, response) => {
			const getQuestionsParamsSchema = z.object({
				id: z.string().uuid(),
			})
			const { id } = getQuestionsParamsSchema.parse(request.params)

			const updateQuestionsBodySchema = z.object({
				enunciation: z.string(),
				options: z.string().array(),
				answer: z.number(),
			})
			const { enunciation, options, answer } = updateQuestionsBodySchema.parse(
				request.body,
			)

			await prisma.question.update({
				where: { id },
				data: {
					enunciation,
					options: JSON.stringify(options),
					answer,
				},
			})

			return response
				.status(200)
				.send({ message: 'Questão atualizada com sucesso!' })
		})

	app
		.withTypeProvider<ZodTypeProvider>()
		.delete('/:id', async (request, response) => {
			const getQuestionsParamsSchema = z.object({
				id: z.string().uuid(),
			})
			const { id } = getQuestionsParamsSchema.parse(request.params)

			await prisma.question.delete({ where: { id } })

			return response
				.status(200)
				.send({ message: 'Questão deletada com sucesso!' })
		})
}
