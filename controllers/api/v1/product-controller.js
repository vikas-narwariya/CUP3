const ProductModal=require('../../../modal/Product')
const {validationResult}=require("express-validator")
// POST
module.exports.createProduct=async(req,res)=>{
    try
    {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
const data=await ProductModal.create(req.body)
res.status(200).json({msg:"the product created sucess",data:data})
    }catch(error){
        console.log("Here is some error in creating product",error);

        res.status(500).json({msg:"Internal Server Error"})
    }
};
// GET
module.exports.getProduct=async(req,res)=>{
    try{
const data=await ProductModal.find({})
res.status(200).json({msg:"product get sucess",data:data})
    }catch(error){
        console.log("error in getting producrt",error);

        res.status(500).json({msg:"internal server error"})
    }
};

//UPDATE
module.exports.updateProduct = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { id } = req.params;
      const updatedData = await ProductModel.findByIdAndUpdate(
        id,
         req.body ,
        { new: true }
      );
      res.status(200).json({
        message: "Product updated successfully",
        data: updatedData,
      });
    } catch (error) {
      console.log("Error in updation");
      res.sendStatus(500).json({ message: error.message });
    }
  };
  
  
  // DELETE
  module.exports.deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteData = await ProductModal.findByIdAndDelete(id);
      res.status(200).json({
        message: "The Product is Deleted Successfully",
        data: deleteData,
      });
    } catch (error) {
      console.log("Error in Deleting the Product");
      res.sendStatus(500).json({ message: error.message });
    }
  };