// import express from 'express';
import express, {Request, Response }from 'express';
import { Todo } from '../models/user_model';


const router= express.Router()
 
//post request

router.post("/add", async (req: Request, res: Response) => {
   
  const {title, description } = req.body;
  const dataItem = await Todo.create({ title, description })

  return res.status(200).json({
    data: dataItem,
  });

});

//getData


router.get("/", async (req: Request, res: Response) => {
  try {
    const dataItem = await Todo.find({});
    res.status(200).json({
      data: dataItem
    })
  } catch (error) {
    console.log(error)
  }
});

//delete

router.delete("/delete", async (req: Request, res: Response) => {

  const filter = {
    title: req.body.title
  }
  const dataItem = await Todo.deleteOne(filter);
  res.status(200).json({
    data: dataItem
  })
 
});


///updata data

router.put("/update", async (req: Request, res: Response) => {

  const filter = {
    title: req.body.title
  }
  const updateData = {
    description: req.body. description
  }
  const dataItem = await Todo.updateOne(filter, updateData, {
    new: true
  });
  res.status(200).json({
    data: dataItem
  }); 
 
});

export { router };





















