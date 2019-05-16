const mongoose = require('mongoose');

var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/mongodb');

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on ('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log('connection opened successfully!');
});

var QuotesModelSchema = new Schema({
    quote: String,
    author: String,
});

var QuotesSchema = mongoose.model('QuotesModel',QuotesModelSchema);

function insertQuote() {

    var quote = new QuotesSchema({
        quote: 'If you do what you\'ve always done, you\'ll get what you\'ve always got',
        author: 'Tony Robbins'
    });

    quote.save( function(err, docs) {
        if (err) 
            console.log(err)
        else
            console.log(docs)
    });
}

function insertQuote() {

    var quote = new QuotesSchema({
        quote: 'If you do what you\'ve always done, you\'ll get what you\'ve always got',
        author: 'Tony Robbins'
    });

    quote.save( function(err, docs) {
        if (err) 
            console.log(err)
        else
            console.log(docs)
    });
}

function selectQuote() {

    QuotesSchema.find({},function(err, docs) {
        if (err) 
            console.log(err)
        else
            console.log(docs)
    });
};

insertQuote();

selectQuote();