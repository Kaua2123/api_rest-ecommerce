import express from 'express';
import cors from 'cors';
import path from 'path';

import userRoutes from './src/routes/userRoutes';
import productRoutes from './src/routes/productRoutes';
import userProductRoutes from './src/routes/userProductRoutes';
import requestRoutes from './src/routes/requestRoutes';
import imageRoutes from './src/routes/imageRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import './src/database';

const app = express();

app.use(cors()); // inicializando o CORS
app.use(express.urlencoded({ extended: true })); // parser de objetos
app.use(express.json()); // permitindo o uso de json
app.use(express.static(path.resolve(__dirname, 'uploads'))); // arquivos estáticos (imagens)
app.use(userRoutes, productRoutes, userProductRoutes, requestRoutes, imageRoutes, tokenRoutes);

export default app;
