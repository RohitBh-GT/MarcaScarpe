import Shoes from '../models/shoes.js';

export const addProduct = (req, res) => {
    const product = req.body;
    const newShoes = new Shoes(product);
    newShoes.save(err => {
        if(err)  return res.status(404).json({ message: 'Cant Add the product - ' + err});
        else return res.status(200).json({ message: 'Product Added+ \n' + newShoes });
    });
}

export const getAllProducts = async(req,res) => {
    try {
        const allProducts = await Shoes.find();
        return res.status(200).json(allProducts);
    } catch (error) {
        return res.status(404).json('Products not found');
    }
}