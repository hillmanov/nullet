nullet
======

Quickly check to see if sub obejects exits in an object.


###Install
    npm install nullet


###Usage
    var nullet = require('nullet');
    
    var person = {
        firstName: 'Ron',
        lastName: 'Swanson',
        likes: {
            food: {
                meat: 'bacon',
                drink: 'scotch'
            },
            instrument: 'saxaphone'
        },
        saySomething: function() { return 'No'; }
    }
    
    var nameOfPerson     = nullet.get(person, 'firstName', 'No Name')
      , favoriteMeat     = nullet.get(person, 'likes.food.meat', 'No favorite meat')
      , favoriteIcecream = nullet.get(person, 'likes.food.icecream', 'No favorite icecream')
      , promptResult     = nullet.get(person, 'saySomething', function() { return 'No response'; })()
      , soundResult      = nullet.get(person, 'barkLikeADog', function() { return 'Would not bark like a dog' })()
      ;
     
    console.log("Name of person: " + nameOfPerson);
    console.log("Favorite meat: " + favoriteMeat);
    console.log("Favorite icecream: " + favoriteIcecream);
    console.log("What did he say? " + promptResult);
    console.log("Bark like a dog! " + soundResult);
    
    

    
    
    