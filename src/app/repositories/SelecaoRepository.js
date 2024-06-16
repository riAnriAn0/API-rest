import conexao from "../database/conexao.js"

class SelecaoRepository {
    // CRUD
    create(selecao){
        const sql = "INSERT INTO selecoes SET ?;"
        return new Promise((resolve, reject) => {
            conexao.query( sql, selecao,(erro, resultado) => {
                if(erro) return reject("Não foi possivel cadastrar")

                const rows = JSON.parse(JSON.stringify(resultado))
                return resolve(rows)
             }) 
         })
    }

    findAll(){
        const sql = "SELECT * FROM selecoes;"
        return new Promise((resolve, reject) => {
           conexao.query( sql, (erro, resuldato) => {
                if(erro) return reject("Não foi possivel localizar")

                const rows = JSON.parse(JSON.stringify(resuldato))
                return resolve(rows)
            }) 
        })
    }

    findById(id){
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query( sql, id, (erro, resuldato) => {
                if(erro) return reject("Não foi possivel localizar")

                const rows = JSON.parse(JSON.stringify(resuldato))
                return resolve(rows)
            }) 
        })
    }

    update(selecao, id){
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query( sql, [selecao, id], (erro, resuldato) => {
                if(erro) return reject("Não foi possivel atualizar")

                const rows = JSON.parse(JSON.stringify(resuldato))
                return resolve(rows)
            }) 
        })
    }

    delete(id){
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query( sql, id,(erro, resuldato) => {
                if(erro) return reject("Não foi possivel deletar")

                const rows = JSON.parse(JSON.stringify(resuldato))
                return resolve(rows)
            }) 
        })
    }
}

export default new SelecaoRepository()
