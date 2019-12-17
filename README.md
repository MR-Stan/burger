# Burger
A Node, Express, Handlebars, and MySQL burger themed web application that lets users input the names of burgers they'd like to eat... and then devour them.

## Functionality
Using a self-made ORM, the app has 3 basic CRUD functions:

1. READ the MySQL database and display the information to the DOM using Handlebars
2. UPDATE a burger by clicking "Devour It" (utilizes /burger/eat/:id route in Express to change the burger's "devoured" status in the MySQL database 
3. CREATE a new burger using the "Order a burger" form which adds the burger to the mySQL database


## Deployed Link
https://damp-coast-89242.herokuapp.com/index
