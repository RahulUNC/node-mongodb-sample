module.exports = (app) => {
    const resumes = require('../controllers/resume.controller.js');

    // Create a new Resume
    app.post('/resumes', resumes.create);

    // Retrieve all Resumes
    app.get('/resumes', resumes.findAll);

    // Retrieve a single Resume with resumeId
    app.get('/resumes/:resumeId', resumes.findOne);

    // Delete a Resume with ResumeId
    app.delete('/notes/:ResumeId', resumes.delete);

}