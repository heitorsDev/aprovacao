/*
Um array vazio chamado usuarios para armazenar os usuários.
Uma função adicionarUsuario(nome, idade, email) que adiciona um novo usuário ao array.
Verificações de que os campos de entrada estão preenchidos e que a idade é maior que 0, retornando uma mensagem de erro caso contrário.
Uma função listarUsuarios() que exibe no console todos os usuários cadastrados.
*/

let usuarios = []

function adicionarUsuario(nome, idade, email){
    if (typeof(nome)!="string" && typeof(idade)!="number" && typeof(email)!="string" && idade<0){
        return "CREDENCIAIS INVALIDAS"
    }
    let atualUser = {
        nome: nome,
        idade: idade,
        email: email
    }
    usuarios.push(atualUser)
    return "USUÁRIO CRIADO"
}
function listarUsuarios(){
    for (let i = 0; i<usuarios.length; i++){
        let atualPrint = usuarios[i]
        console.log(`Usuário número ${i}\nNome: ${atualPrint.nome}\nEmail: ${atualPrint.email}\nIdade: ${atualPrint.idade}`)
    }

}

console.log(adicionarUsuario("Heitor", 18, "heitor@gmail"))


listarUsuarios()