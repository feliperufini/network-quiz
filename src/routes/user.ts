import { randomUUID } from 'node:crypto'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { prisma } from '../libs/prisma'

export async function userRoutes(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().get('/', async () => {
		const users = await prisma.user.findMany()

		return { users }
	})

	app.withTypeProvider<ZodTypeProvider>().get('/:id', async (request) => {
		const getUsersParamsSchema = z.object({
			id: z.string().uuid(),
		})
		const { id } = getUsersParamsSchema.parse(request.params)

		const user = await prisma.user.findUniqueOrThrow({
			where: { id },
		})

		return { user }
	})

	app
		.withTypeProvider<ZodTypeProvider>()
		.post('/', async (request, response) => {
			const createUsersBodySchema = z.object({
				name: z.string(),
			})

			const { name } = createUsersBodySchema.parse(request.body)

			await prisma.user.create({
				data: {
					id: randomUUID(),
					name,
				},
			})

			return response
				.status(201)
				.send({ message: 'Usuário cadastrado com sucesso!' })
		})

	app
		.withTypeProvider<ZodTypeProvider>()
		.put('/:id', async (request, response) => {
			const getUsersParamsSchema = z.object({
				id: z.string().uuid(),
			})
			const { id } = getUsersParamsSchema.parse(request.params)

			const updateUsersBodySchema = z.object({
				name: z.string(),
			})
			const { name } = updateUsersBodySchema.parse(request.body)

			await prisma.user.update({
				where: { id },
				data: {
					name,
				},
			})

			return response
				.status(200)
				.send({ message: 'Usuário atualizado com sucesso!' })
		})

	app
		.withTypeProvider<ZodTypeProvider>()
		.delete('/:id', async (request, response) => {
			const getUsersParamsSchema = z.object({
				id: z.string().uuid(),
			})
			const { id } = getUsersParamsSchema.parse(request.params)

			await prisma.user.delete({ where: { id } })

			return response
				.status(200)
				.send({ message: 'Usuário deletado com sucesso!' })
		})
}
