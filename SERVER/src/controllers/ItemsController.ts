import { Request, Response } from 'express';
import knex from'../database/conection';

class ItemsController{

    async show(request:Request, response: Response){
        const { id } = request.params;

        const point = await knex('points').where('id',id).first();

        if(!point){
            return response.status(400).json({message:'point not found.'});
        }else{
            const items = await knex('items')
               .join('point_items', 'items.id', '=', 'point_items.item_id')
               .where('point_items.point_id',id)
               .select('items.title');  

            return response.json({point,items});
        }

    }

    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item =>{
            return {
                id: item.id,
                title:item.title,
                image_url:`http://localhost:3333/uploads/${item.image}`,
            };
        });
    
    
    
        return response.json(serializedItems);
    }  
}

export default ItemsController;








