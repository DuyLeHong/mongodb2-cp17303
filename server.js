// buoc 1: cài đặt NodeJS
// bước 2: chạy example

const express = require('express')
const app = express()
const port = 3000


const mongoose = require('mongoose');

const uri = 'mongodb+srv://lehongduybk:password@cluster0.mmpj6ea.mongodb.net/cp17303?retryWrites=true&w=majority';

const nvModel = require('./nhanvienModel');

app.get('/', async (req, res) => {
  await mongoose.connect(uri);
  
  let nvs = await nvModel.find({tuoi: 23});

  console.log(nvs)

  res.send(nvs);
})

app.get('/add_nv', async (req, res) => {
  await mongoose.connect(uri);

  arrNewNv = [];

  arrNewNv.push({
    ten: 'Tran Phuong Anh',
    tuoi: 24,
    diachi: 'HP'
  });

  arrNewNv.push({
    ten: 'Nguyen Tuan Minh',
    tuoi: 25,
    diachi: 'HG'
  });
  
  let kq = await nvModel.insertMany(arrNewNv);

  console.log(kq);

  let nvs = await nvModel.find();

  res.send(nvs);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

