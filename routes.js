
module.exports = app =>{
    const usersController = require('../controller/usersController');
    const studiosController = require('../controller/studiosController');
    const photostudio_usersController = require('../controller/photostudio_usersController');
    const photosController = require('../controller/photosController');
    const collectionsController = require('../controller/collectionsController');
    const categoriesController = require('../controller/categoriesController');
    const bookingController = require('../controller/bookingController');
    const book_appointmentController = require('../controller/book_appointmentController');
    const adminController = require('../controller/adminController');
    console.log("test");

    //users
app.post('/users/add', usersController.insertUserInfo);
app.get('/users', usersController.allUserId);
app.put('/users/up', usersController.updateUser);

   //studios
app.post('/studios/add',studiosController.insertStudioInfo);
app.get('/studios', studiosController.allStudioId);
app.put('/studios/up', studiosController.updateStudio);

   //photostudio_users
app.post('/photostudio/add',photostudio_usersController.insertPhotostudioInfo);
app.get('/photostudio', photostudio_usersController.allPhotostudioId);
app.put('/photostudio/up', photostudio_usersController.updatePhotostudio); 

   //photos
app.post('/photos/add',photosController.insertPhotoInfo);
app.get('/photos', photosController.allPhotoId);
app.put('/photos/up', photosController.updatePhoto);

   //collections
app.post('/collections/add',collectionsController.insertCollectionInfo);
app.get('/collections', collectionsController.allCollectionId);
app.put('/collections/up', collectionsController.updateCollection);
     
   //categories
app.post('/categories/add',categoriesController.insertCategoriesInfo);
app.get('/categories', categoriesController.allCategoriesId);
app.put('/categories/up', categoriesController.updateCategories);

    //booking
app.post('/booking/add',bookingController.insertBookingInfo);
app.get('/booking', bookingController.allBookingId);
app.put('/booking/up', bookingController.updateBooking);

    //booking_appointment
app.post('/appointment/add',book_appointmentController.insertAppointmentInfo);
app.get('/appointment', book_appointmentController.allAppointmentId);
app.put('/appointment/up', book_appointmentController.updateAppointment);

    //Admin
app.post('/admin/add', adminController.insertAdminInfo);
app.get('/admin', adminController.allAdminId);
app.put('/admin/up', adminController.updateAdmin);
};

