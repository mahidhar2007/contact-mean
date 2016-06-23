/**
 * Created by dell on 19-Jun-16.
 */

' use strict';

var controller = require('./core.server.controller');
module.exports = function (app) {
    app
        .route('/')
        /*.get(function(request, response){

            console.log('request received !!');

         });*/

/*          .get (controller.getContacts)
            .post(controller.createContact);*/
        .get(controller.getIndexView);

    app
        .route('/contact/:contactID')
            .get(controller.getContactById)
            .put(controller.updateContactById)
            .delete(controller.deleteContactById);
}


