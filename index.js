import express from 'express' //"type": "module", en packa
import mongoose from 'mongoose'

const Animal = mongoose.model('Animal', new mongoose.Schema({
  tipo: String,
  estado: String,
}))

const app = express()

mongoose.connect('mongodb://juampi:password@monguito:27017/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('listando... ')
  const animales = await Animal.find();
  return res.send(animales)
})
app.get('/crear', async (_req, res) => {
  console.log('creando item...')
  await Animal.create({ tipo: 'Perro', estado: 'durmiendo' })
  return res.send(`Item creado! `)
})

app.listen(3000, () => console.log('listening...'))