const express = require('express');
const student = require('./students');
const router = new express.Router();


// router.post("/student" , (req, res) =>{ 

//     console.log(req.body);
//     const users = new student(req.body)
//     users.save().then(()=>{
//         res.status(201).send(users);
//     }).catch((e)=>{
//         res.status(201).send(e);
//     })

// })


// router.post("/student", async(req, res)=>{    //this code is written for create data (same as upper code), post request

//     try {

//         const users = new student(req.body)
//         const StoreData = await users.save();
//         res.status(201).send(StoreData);

//     } catch (e) {
//         res.status(400).send(e);
//     }

// })



// router.get("/student", async(req, res)=>{            //this is get request for read all data
//     try {
//         const StudentData =  await student.find();
//         res.send(StudentData);
//     } catch (e) {
//         res.send(e);
//     }
// })



// router.get("/student/:id", async(req, res)=>{       // this is get request for read data by id
//     try {
//         const _id = req.params.id;
//         const FindId = await student.findById(_id);
//         console.log(FindId);

        
//         if (! FindId) {
//             return res.status(404).send();
//         }else{
//             res.send(FindId);
//         }
        
//     } catch (e) {
//         res.status(500).send(e);
//     }

// })

// router.delete("/student/:id", async(req, res)=>{    // this is delete request for delete data by id
//     try {
        
//         const id = req.params.id;
//         const DeleteData =  await student.findByIdAndDelete(id);
//         if (!DeleteData) {
//             return res.status(404).send();
//         }else{
//             res.send(DeleteData);
//         }

//     } catch (e) {
//         res.status(505).send(e);
//     }
// })

 
// router.patch("/student/:id", async(req, res)=>{    //this is patch request for update data by id
//     try {
        
//         const id = req.params.id;
//         const UpdateData = await student.findByIdAndUpdate(id ,req.body);
//         res.send(UpdateData)
  
//     } catch (e) {
//         res.status(404).send(e);
//     }
// })

module.exports = router;