const chai = require('chai')
const controller = require("../app/controllers/resume.controller")
const expect = chai.expect
const request = require('supertest')
const server = require("../server")

describe("API", ()=>{
    it("Should get all resumes", async () => {
        const res = await request(server)
        .get("/resumes")
        .expect(200)
        expect(res.body).to.be.an('array')
    })
    it("Should return 404 with unassociated ID", async () => {
        const res = await request(server)
        .get("/resumes/2")
        .expect(404)
    })
    it("Should return a resume based on ID", async () => {
        const res = await request(server)
        .get("/resumes/61858e6df29ef500221a1e4f")
        .expect(200)
        const resume = {
            "_id": "61858e6df29ef500221a1e4f",
            "name": "Habib Khadri",
            "link": "https://drive.google.com/file/d/1_HYqEm9-L49kzmsFRoidDwMdjrlOxHbC/view?usp=sharing",
            "major": "Business, CS",
            "tags": "Project Management, Trello, Organization",
            "approved": "approved",
            "createdAt": "2021-11-05T20:05:01.290Z",
            "updatedAt": "2021-11-05T20:06:42.017Z",
            "__v": 0
        }
        expect(res.body).to.deep.eq(resume)
    })
    it("Should create a new resume, approve it and delete it", async() => {
        const body = {
            "name": "Test Khadri",
            "link": "https://drive.google.com/file/d/1_HYqEm9-L49kzmsFRoidDwMdjrlOxHbC/view?usp=sharing",
            "major": "Business, CS",
            "tags": "Project Management, Trello, Organization",
            "approved": "pending"
        }
        const postRes = await request(server)
        .post("/resumes")
        .send(body)
        .expect(200)
        const id = postRes.body._id
        const approveBody = {
            "approved": "approved"
        }
        const approveRes = await request(server)
        .put(`/resumes/${id}`)
        .send(approveBody)
        .expect(200)
        const deleteRes = await request(server)
        .delete(`/resumes/${id}`)
        .expect(200)
        const getById = await request(server)
        .get(`/resumes/${id}`)
        .expect(404)
    })
})