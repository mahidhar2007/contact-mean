/**
 * Created by dell on 19-Jun-16.
 */

var bodyParser = require('body-parser');

var contacts = [];

module.exports.getContacts = function (req, res) {

    console.log(' Received Request');
/*    res.json({
        name: 'Alex Martin' ,
        age: 21
    })*/

    res.json(contacts);

}

module.exports.createContact = function (req, res) {

  var  contact = {};
    contact.id = Math.floor(Math.random() *(1000-1) +1 );
    contact.firstName = req.body.firstName || '';
    contact.lastName = req.body.lastName || '';
    contact.age = req.body.age || 0;

    contacts.push(contact);

    res.json({status: 'Success'})
}

module.exports.getContactById = function (req, res) {

    var id = req.params.contactID,
        currcontact;
    if(!id){
        res.json({status: 'error', message: "Unable to find contact by id"});
    }
    contacts.forEach(function(contact){
        if(contact.id == id){
            currcontact = contact;
            return;
        }
    });
    res.json(currcontact);
}

module.exports.updateContactById = function (req, res) {

    var id = req.params.contactID,
        currcontact;
    if(!id){
        res.json({status: 'error', message: "Unable to find contact by id"});
    }
    contacts.forEach(function(contact){
        if(contact.id == id){
            currcontact = contact;
            return;
        }
    });

    currcontact.firstName = req.body.firstName || contact.firstName;
    currcontact.lastName = req.body.lastName || contact.lastName;
    currcontact.age = req.body.age || contact.age;

    res.json(currcontact);
}

module.exports.deleteContactById = function (req, res) {

    var id = req.params.contactID,
        currcontact;
    if(!id){
        res.json({status: 'error', message: "Unable to find contact by id"});
    }
    contacts.forEach(function(contact){
        if(contact.id == id){
            currcontact = "";
            return;
        }
    });

    currcontact.firstName = req.body.firstName || contact.firstName;
    currcontact.lastName = req.body.lastName || contact.lastName;
    currcontact.age = req.body.age || contact.age;

    res.json(currcontact);
}


module.exports.getIndexView = function(req,res){
    res.render('index');
}