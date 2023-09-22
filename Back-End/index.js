const express = require('express');
const client = require('./db');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());

app.get("/", (req, res)=>{
    res.json("Server is running");
})

app.get("/books", async(req, res)=>{
  const command = 'select * from books'
  await client.query(command, (err, data)=>{
    if(err){
      return res.json(err);
    }
    //console.log(data)
    return res.json(data)
  })
})

app.post("/books", async(req, res)=>{
  const {title, details, price, cover} = req.body;
  const command = `insert into books(title, details, price, cover) values('${title}', '${details}', '${price}', '${cover}')`;
  await client.query(command, (err, data)=>{
    if(data.rowCount==1){
      return res.json("successfylly registered");
  }
  return res.json(err);
  })
  
})


app.put("/books/:id", async(req, res)=>{
  const {title, details, price, cover} = req.body;
  const {id} = req.params;
  const command = `update books set title = '${title}', details = '${details}', price = '${price}', cover = '${cover}' where id = ${id}`;
  await client.query(command, (err, data)=>{
    if(data){
      return res.json("successfylly Updated");
  }
  return res.json(err);
  })
})

app.delete("/books/:id", async(req, res)=>{
  const {id} = req.params;
  const command = `DELETE FROM books WHERE ID = ${id}`;
  await client.query(command, (err, data)=>{
    if(data){
      return res.json("Successfylly Delete");
    }else{
      return res.json(err);
    }
    
  })
})

app.listen(3000, ()=>{
  console.log("Server started");
});