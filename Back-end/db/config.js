
const mongoose = require('mongoose');

const connectDB = async() =>{
    mongoose.connect ("mongodb://localhost:27017/e-dashboard");
    const productSchema = new mongoose.schema({});
    const product = mongoose.model("products", productSchema);
    const data = await product.find()
        console.warn(data);
    
}
connectDB