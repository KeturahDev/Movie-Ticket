// Buisness Logic------------------
function Ticket (movie, time, age, numTickets) {
  this.movie = movie,
  this.time = time,
  this.age = age, 
  this.numTickets = numTickets;
}

Ticket.prototype.calculatePrice = function() {
  var price = 10;
  
  if(this.movie === "Gentlemen" || this.movie === "Trolls: Age of Rock") {
    price += 2;
  }
  if(this.time === "matinee") {
    price -= 2;
  }
  if(this.age < 12 || this.age > 55) {
    price -= 5;
  }
  price *= this.numTickets;
  return price;
}



// User Interface Logic --------------------

function displayTicketDetails(ticket) {
  var htmlString = "<h2 class='movieTitle'>" + ticket.movie + "</h2><hr><p class=ticketInfo>Age: " + ticket.age + "<br>Time: " + ticket.time + "<br>Quantity: " + ticket.numTickets + "</p><hr><h3 class='price'>Price: $" + ticket.calculatePrice() + "</h3>";
  $("#output").html(htmlString);
}

$(document).ready(function() {
  $('#formy').submit(function(event) {
    event.preventDefault();
    
    var movie = $('select#movie').val();
    var time = $('select#time').val();
    var age = $('input#age').val();
    var numTickets = $("#numTickets").val();
    
    var newTicket = new Ticket(movie, time, age, numTickets)
    displayTicketDetails(newTicket);
  })
})