const express = require('express')
const cors = require('cors')
const  jwt   = require('jsonwebtoken')
const bcrypt  = require('bcrypt')
const {save, fetch} = require('./db/db')
const { middleware } = require('./middleware')

const app = express()

app.use(cors({origin:'*'}))
app.use(express.json())



const currencies = ["USD","EUR",'GBP','AUD','CAD','CHF']

const accounts = {
                USD:{
                    sizes:[10000,25000,50000,100000,200000],
                    cost: [100,200,300,500,1000]
                },
                EUR:{
                    sizes:[10000,22000,45000,90000,180000],
                    cost: [100,180,273,457,913]
                },
                GBP:{
                    sizes:[10000,20000,35000,70000,140000],
                    cost: [79,160,240,400,800]
                },
                AUD:{
                    sizes:[10000,25000,50000,100000,200000],
                    cost: [100,200,300,500,1000]
                },
                CAD:{
                    sizes:[10000,25000,50000,100000,200000],
                    cost: [100,200,300,500,1000]
                },
                CHF:{
                    sizes:[10000,25000,50000,100000,200000],
                    cost: [100,200,300,500,1000]
                },
}

const secret = "key12wert09876tk87uygvwdiujdiujfcd87aoiuytreadsfcgghbjkklkjhgfrtyuimnbvcnbvc"

app.get('/api/verify',middleware,async (req,res)=>{
        try {
            res.send({success:true})   
        } catch (error) {
            res.send({error:'Unable to process request'})   
        }
})
app.post('/api/register',async (req,res)=>{
        try {
            const sql = "INSERT INTO users SET ?"
            const salt = bcrypt.genSaltSync(10)
            req.body.password = bcrypt.hashSync(req.body.password,salt)
            const userdata = await save(sql,[req.body])
            let user = req.body
            delete user.password
            let token = jwt.sign({...user,id:userdata.insertId},secret,{
            expiresIn:'24h'
            })
            res.send({user,token})   
        } catch (error) {
            res.send({error:error.message})   
        }
})
app.post('/api/order',middleware, async (req,res)=>{
        try {
            const sql = "INSERT INTO orders SET ?"
            let min = 13000000;
            let max = 15000000;
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            req.body.orderid = randomNumber
            req.body.userid = req.user.id
            req.body.amount = accounts.USD.cost[req.body.size]
            const sql2 = "SELECT * FROM coupons WHERE coupon = ? AND status = 1"
            const coupons = await fetch(sql2,[req.body.coupon])
            if(coupons?.length > 0) req.body.amount = accounts.USD.cost[req.body.size] * 0.9

            const r = await save(sql,[req.body])
            res.send({success:true,number:randomNumber})   
        } catch (error) {
            console.log(error)
            res.send({error:'Unable to process request'})   
        }
})
app.get('/api/order/:id',middleware, async (req,res)=>{
        try {
            const sql = "SELECT * FROM orders WHERE orderid = ? AND userid = ?"
            const orders = await fetch(sql,[req.params.id, req.user.id])
            if(orders.length > 0) return res.send(orders[0])
            res.send({})   
        } catch (error) {
            res.send({error:'Unable to process request'})   
        }
})
app.get('/api/coupon/:id',middleware, async (req,res)=>{
        try {
            const sql = "SELECT * FROM coupons WHERE coupon = ? AND status = 1"
            const coupons = await fetch(sql,[req.params.id])
            if(coupons?.length > 0) return res.send({valid:true})
            res.status(500).send({error:'Invalid coupon code'})   
        } catch (error) {
            res.send({error:'Unable to process request'})   
        }
})
app.get('/api/orders/all/open',middleware, async (req,res)=>{
        try {
            const sql = "SELECT * FROM orders WHERE userid = ? AND status = 0"
            const orders = await fetch(sql,[req.user.id])
            res.send(orders)
        } catch (error) {
            res.status(500).send({error:'Unable to process request'})   
        }
})
app.get('/api/orders/all',middleware, async (req,res)=>{
        try {
            const sql = "SELECT * FROM orders WHERE userid = ?"
            const orders = await fetch(sql,[req.user.id])
            res.send(orders)
        } catch (error) {
            res.status(500).send({error:'Unable to process request'})   
        }
})

app.post('/api/order/update/:id',middleware,async (req,res)=>{
        try {
            console.log(req.body)
            const sql = "UPDATE orders SET ? WHERE orderid = ? AND userid = ?"
            const data = {
                status:1,
                tscode: req.body.id
            }
            const r = await save(sql,[data,req.params.id,req.user.id])
            res.send({success:true})   
        } catch (error) {
            res.send({error:'Unable to process request'})   
        }
})
app.post('/api/support',middleware,async (req,res)=>{
        try {
            req.body.userid = req.user.id
            const sql = "INSERT INTO support SET ?"
            const r = await save(sql,[req.body])
            res.send({success:true})   
        } catch (error) {
            res.send({error:'Unable to process request'})   
        }
})

app.post('/api/login',async (req,res)=>{
   try {
     const users = await fetch("SELECT * FROM `users` WHERE `email`=?",[req.body.email])
     if(users.length!=1) return res.status(401).send({error:"Email or Password is wrong"})
     if(!bcrypt.compareSync(req.body.password,users[0].password)) return res.status(401).send({error:"Email or password is wrong"})
     let user = users[0]
     delete user.password
     let token = jwt.sign({...user},secret,{
      expiresIn:'24h'
     })
        
     res.send({user:{...user},token})
   } catch (error) {
       res.send({error:error.message})   
   }
})

app.listen(5000)