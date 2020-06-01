import express from 'express';

const app = express();

app.get('/user',(request,response)=>{
    console.log('Listagem de usuários');

    response.json([
        'Antonio',
        'Maria'
    ]);
}); 

app.listen(3333);