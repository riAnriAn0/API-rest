import SelecaoRepository from "../repositories/SelecaoRepository.js"

class SelecaoControllers{

    async index(req, resp){
        const row = await SelecaoRepository.findAll()
        resp.json(row)
    } 

    async show(req, resp)  {
        const id = req.params.id
        const row = await SelecaoRepository.findById(id)
        resp.json(row)
    }

    async store(req, resp){
       const selecao = req.body
       const row = await SelecaoRepository.create(selecao)
       resp.json(row)
    }

    async update(req, resp)  {
        const id = req.params.id
        const selecao = req.body
        const row = await SelecaoRepository.update(selecao, id)
        resp.json(row)
    }

    async delete(req, resp) {
        const id = req.params.id
        const row = await SelecaoRepository.delete(id)
        resp.json(row)
    }
}

export default new SelecaoControllers()
