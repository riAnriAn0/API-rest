import app from './src/app.js'
import conexao from './src/app/database/conexao.js';

const PORT = 3001;

conexao.connect((erro) =>{
    if (erro) {
        console.log(erro)
    }else{
        console.log('Conexão realizada com sucesso')
        // escutar a porta 3001
        app.listen(PORT , ()=>{
            console.log(`Servidor rodando em: http://localhost:${PORT}`);
        })
    }
})


