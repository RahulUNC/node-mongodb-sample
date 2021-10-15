module.exports = (app) => {
    const resumes = require('../controllers/resume.controller.js');

    // Create a new Note
    app.post('/resumes', resumes.create);

    // Retrieve all Notes
    app.get('/notes', resumes.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', resumes.findOne);

}