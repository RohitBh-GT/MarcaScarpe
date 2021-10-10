import Shoes from '../models/shoes.js';

export const addProduct = (req, res) => {
    const product = req.body;
    const newShoes = new Shoes(product);
    newShoes.save(err => {
        if(err)  return res.status(404).json({ message: 'Can\'t Add the product - ' + err});
        else return res.status(200).json({ message: 'Product Added'});
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

export const addReview = async(req,res) => {
    const review = req.body;
    const { id } = req.params;
    try {
        if(!(mongoose.Types.ObjectId.isValid(id))){
            return ( res.status(404).send('No such product exists.'));
        }
        const updatedProduct = await Shoes.findOneAndUpdate({_id:id},{"$push":{"productReviews":review}},{ 'new': true });
        return res.status(201).json({id,review});
    } catch (error) {
       return res.status(404).json({message:'Server problem.Not able to add review.'});  
    }
}