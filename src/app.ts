import fastifyCors from '@fastify/cors'
import fastify from 'fastify'
import {
	serializerCompiler,
	validatorCompiler,
} from 'fastify-type-provider-zod'
import { errorHandler } from './error-handler'
import { questionRoutes } from './routes/questions'
import { scoreboardRoutes } from './routes/scoreboards'
import { userRoutes } from './routes/user'

export const app = fastify() // fastify({ logger: true })

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.setErrorHandler(errorHandler)

app.register(fastifyCors, {
	origin: '*',
})

app.register(questionRoutes, {
	prefix: 'questions',
})

app.register(scoreboardRoutes, {
	prefix: 'scoreboards',
})

app.register(userRoutes, {
	prefix: 'users',
})
