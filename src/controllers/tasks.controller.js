const { Local } = require("../models/local.model");

const vistaUno = (req, res) => {
  res.json({ title: "Api mcdonalds" });
};

const showLocals = async (req,res)=>{
    const locals = await Local.find();
    res.status(200).json({locals});
}

const addLocal = async (req, res) => {
  try {
    const local = new Local(req.body);
    await local.save();
    res.status(201).json({ msg: "tienda agregada" });
  } catch (error) {
    console.error(error);
    res.status(400).json({msg: `Add not completed`}); 
  }
};

const editLocal = async(req,res)=>{
    try {
        const {id} = req.params;
        await Local.findByIdAndUpdate(id,req.body);
        res.status(201).json({msg: `Local ${req.body.name} editado`});
    } catch (error) {
       console.error(error);
       res.status(400).json({msg: `Edit not completed`}); 
    }
}

const deleteLocal = async(req,res)=>{
    try {
        const {id} = req.params;
        await Local.findByIdAndDelete(id,req.body);
        res.status(200).json({msg: "deleting local"});
    } catch (error) {
        console.error(error); 
        res.status(400).json({msg: "Delete not completed"});
    }
}

module.exports = {
  vistaUno,
  addLocal,
  showLocals,
  editLocal,
  deleteLocal,
};
