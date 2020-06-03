import express from 'express';

const app = express();

app.get('/users',(request,response)=>{
    console.log('Listagem de usuários');

    return response.json([
        'Antonio',
        'Maria',
        'Cleito',
        'Daniel',
        'Pedro'
    ]);
}); 

app.post('/users',(request,response) => {
    const user = {
        name: 'Diego',
        email:'diego@rocketseat.com.br'
    };
    return response.json(user);
});

app.listen(3333);