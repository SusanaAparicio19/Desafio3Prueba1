import express from 'express'
import { ProductManager } from './ProductManager.js'
import { PORT, PRODUCTS_JASON } from "./config.js"

const ProdMan = new ProductManager(PRODUCTS_JASON)//{ ruta: 'products.json' }

const app = express()

app.get('/products', async (request, response) => {

    try{
        const prd = await ProdMan.getProducts()
        response.json(prd)
    }catch (error) {
        response.json({
            status: 'error',
            message: error.message
        })
    }
})

app.listen(PORT, () => {
    console.log(`Conectado al puerto ${PORT}`);
})