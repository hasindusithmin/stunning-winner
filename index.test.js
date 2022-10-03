
const supertest = require('supertest')
const assert = require('assert')
const {app,customers} = require('./index')

// describe('GET /',()=>{
//     it('should return "Welcome to our REST API!"',async()=>{
//         const res = await supertest(app).get('/');
//         assert.equal(res.statusCode,200)
//         assert.equal(res.text,'Welcome to our REST API!')
//     })
// })

describe('GET /api/customer',()=>{
    it('should return all customers',async()=>{
        const res = await supertest(app).get('/api/customers')
        assert.equal(res.statusCode,200)
        assert.equal(res.body.length,customers.length)
        res.body.forEach((customer,index)=>{
            assert.equal(customer.id,customers[index].id)
            assert.equal(customer.name,customers[index].name)
        })
    })
})
