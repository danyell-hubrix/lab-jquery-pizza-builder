// Write your Pizza Builder JavaScript in this file.

// Helper function to update prices
function updatePrice() {
    const hasPepperonni = $('.btn-pepperonni').hasClass('active');
    const hasMushrooms = $('.btn-mushrooms').hasClass('active');
    const hasGreenPepper = $('.btn-green-peppers').hasClass('active');
    const hasWhiteSauce = $('.btn-sauce').hasClass('active');
    const hasGlutenFreeCrust = $('.btn-crust').hasClass('active');

    let price = 10;
    price += hasPepperonni ? 1 : 0;
    price += hasMushrooms ? 1 : 0;
    price += hasGreenPepper ? 1 : 0;
    price += hasWhiteSauce ? 3 : 0;
    price += hasGlutenFreeCrust ? 5 : 0;

    $('.price > strong').text('$' + price);
}

/*
Function to add/remove a topping.
btn: (string) CSS selector of topping button
democlass: (string) CSS selector of topping shown on "demo" pizza
pricesel: (string) CSS selector of topping cost in price display
togclass: (optional, string) CSS selector of class to toggle (for sauce, crust)
*/
function configTopping(btn,democlass,pricesel,togclass = undefined) {
    $(btn).click(function() {
        if (undefined == togclass)
            $(democlass).toggle();
        else
            $(democlass).toggleClass(togclass);
        $(pricesel).toggle();
        $(btn).toggleClass('active');
        updatePrice();
    });
}

$(document).ready(function() {
    configTopping('.btn-pepperonni','.pep','.price > ul li:nth-child(1)');
    configTopping('.btn-mushrooms','.mushroom','.price > ul li:nth-child(2)');
    configTopping('.btn-green-peppers','.green-pepper','.price > ul li:nth-child(3)');
    configTopping('.btn-sauce','.sauce','.price > ul li:nth-child(4)','sauce-white');
    configTopping('.btn-crust','.crust','.price > ul li:nth-child(5)','crust-gluten-free');
    
    /*
        Create default pizza as specified for Iteration 2:

        "Make it so regular sauce and crust are selected
        by default. Also write the JavaScript code that
        will let users select white sauce and gluten-
        free crust if they want to choose them.""
    */ 
    $('.crust').toggleClass('crust-gluten-free');
    $('.sauce').toggleClass('sauce-white');
    $('.price > ul li:nth-child(4)').toggle();
    $('.price > ul li:nth-child(5)').toggle();
    
    if(!$('.pep').is(':visible')) $('.btn-pepperonni').removeClass('active');
    if(!$('.mushroom').is(':visible')) $('.btn-mushrooms').removeClass('active');
    if(!$('.green-pepper').is(':visible')) $('.btn-green-peppers').removeClass('active');
    if(!$('.crust').hasClass('crust-gluten-free')) $('.btn-crust').removeClass('active');
    if(!$('.sauce').hasClass('sauce-white')) $('.btn-sauce').removeClass('active');

});