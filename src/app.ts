import express from 'express';
import prisma from './lib/prisma/client';
import 'express-async-errors';

const app = express();
app.get('/', async (request, response) => {
    const users = await prisma.user.findMany();
    response.json(users);
});

export default app;
