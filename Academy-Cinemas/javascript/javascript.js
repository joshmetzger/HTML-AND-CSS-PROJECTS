// initialize popovers

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
});

// init toast
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl)
})

// function to display toast with selected options
function displaySelectedMovieOptions(){
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    // display toast
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show();
}

function buyTickets(){
    displaySelectedMovieOptions();
}

$(document).on("scroll", function(){
    // when scroll from top over 50px:
    if ($(document).scrollTop() > 50){
        // once met, add nav-shrink class selector to the same HTML element that has thee nav class
        $("nav").addClass("nav-shrink");
        // adjust position of the mobile drop menu to accomodate new height decrease
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        // if page has not been scrolled down or is back at the top of the nav-shrink class selector is removed from the HTML element with the nav class selector
        $("nav").removeClass("nav-shrink");
        // margin for drop down is now returned to original amount
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});

//close mobile menu when nav link is clicked
$(document).ready(function(){
    // onclick when el contains just nav-link class and not dropdown-toggle and then also close when an element with the class .dropdown-item (each movie lin) has been clicked
    $(".navbar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function() {
    //    collapse navbar when link or dropdown item is clicked
        $(".navbar-collapse").collapse('hide');
    });
});



// tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// get element and display it's description in a tooltip
function displayDescription(element){
    var description = element.innerText;
    // console.log(description);

    element.setAttribute('data-bs-title', description);
    var tooltip = new bootstrap.Tooltip(element);
    tooltip.show();
}

