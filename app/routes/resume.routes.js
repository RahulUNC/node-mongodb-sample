module.exports = (app) => {
    const resumes = require('../controllers/resume.controller.js');

    // Create a new Note
    app.post('/resumes', resumes.create);

    // Retrieve all Notes
    app.get('/resumes', resumes.findAll);

    // Retrieve a single Note with noteId
    app.get('/resumes/:Id', resumes.findOne);

}