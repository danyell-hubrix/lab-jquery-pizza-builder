// Write your Pizza Builder JavaScript in this file.

/*
Simple array of pizza toppings/options.
btn: (string) CSS selector of topping button
price: (number) price of that topping or option
dc: (string) CSS selector of topping shown on "demo" pizza
psel: (string) CSS selector of topping cost in price display
togc: (optional, string) CSS selector of class to toggle (for sauce, crust)
*/
var pizzaOptions = [
    {btn: '.btn-pepperonni', price: 1, dc: '.pep', psel: '.price > ul li:nth-child(1)' }
    , {btn: '.btn-mushrooms', price: 1, dc: '.mushroom', psel: '.price > ul li:nth-child(2)' }
    , {btn: '.btn-green-peppers', price: 1, dc: '.green-pepper', psel: '.price > ul li:nth-child(3)' }
    , {btn: '.btn-sauce', price: 3, dc: '.sauce', psel: '.price > ul li:nth-child(4)',
        togc: 'sauce-white'}
    , {btn: '.btn-crust', price: 5, dc: '.crust', psel: '.price > ul li:nth-child(5)',
        togc: 'crust-gluten-free' }
];

// Helper function to update prices
function updatePrice() {
    var price = 10;
    for (var i = 0; i < pizzaOptions.length; i++) {
        var hasOption = $(pizzaOptions[i].btn).hasClass('active');
        price += hasOption ? pizzaOptions[i].price : 0;
    }

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

    // Set up all our click functions and initialize toppings etc. status
   for (var i = 0; i < pizzaOptions.length; i++) {
        configTopping(pizzaOptions[i].btn,pizzaOptions[i].dc,
            pizzaOptions[i].psel,pizzaOptions[i].togc); // declares + binds "click" function
        if (undefined === pizzaOptions[i].togc) {
            if(!$(pizzaOptions[i].dc).is(':visible'))
            $(pizzaOptions[i].btn).removeClass('active');
        }
        else {
            if(!$(pizzaOptions[i].dc).hasClass(pizzaOptions[i].togc))
                $(pizzaOptions[i].btn).removeClass('active');
        }
    }

    updatePrice(); // ensure initial price displayed is correct
});