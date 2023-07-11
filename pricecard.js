module.exports = function(app){
    var Pricecard = Object.getPrototypeOf(app).Pricecard = new app.Component("pricecard");
    // Pricecard.debug = true;
    Pricecard.createdAt      = "2.3.4";
    Pricecard.lastUpdate     = "2.3.4";
    Pricecard.version        = "1";
    // Pricecard.factoryExclude = true;
    // Pricecard.loadingMsg     = "This message will display in the console when component will be loaded.";
    // Pricecard.requires       = [];

    // Pricecard.prototype.onCreate = function(){
    // do thing after element's creation
    // }
    return Pricecard;
}