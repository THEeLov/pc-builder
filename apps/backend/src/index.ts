import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { env } from 'process';
import categoryRoute from './category/routers/category.router'
import productRoute from './product/routers/product.router'
