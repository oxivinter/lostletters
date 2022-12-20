# Lost Letters
## A React.js project inspired by Elden Ring

In Elden Ring, players can leave messages on the ground for other players to read. Players can rate other people's messages.
The messages left on the ground have a strict restriction on format and a set list of available words at the player's disposal. 

With these restrictions, the players have managed to creatively express a variety of ideas in different situations, where the message's words have little to no meaning unless contextualized around the specific spot where the message was placed. Thus, players who have gone through dangerous areas can warn newcomers of traps, hidden passages, important items or dangerous enemies ahead.

## The Project

This React project has two primary objectives:

+ Allow the user to **compose** a message in the aforementioned fashion, adhering to the restrictions on writing messages currently found in Elden Ring. The message can be submitted along with a name for identification between users.
+ Allow the user to **retrieve** messages from the non-relational database, according to the following possible options:
  + Retrieve a random message from the database
  + Retrieve a specific message from the database (by searching for its ID)
  + Retrieve a specific set of messages from the database (by searching for the author's name)

Additionally, the project has the following secondary objectives:

+ Allow the user to **reply** to a specific message from the database, retrieving the original message along with the reply (and eventually, all replies in the thread) upon query.
+ Allow the user to **appraise** a specific message (with either a POSITIVE or NEGATIVE score), saving this interaction in the message itself along with the name of the user who rated.
  + A message cannot have more than one rating from a specific user, and if a rating is found to already exist, it must be replaced with the new one.
+ Eventually, an authentication system will be added to allow users to maintain a static identity and review all submitted messages or replies.

## The Reason

This React project exists mostly as an opportunity to practice front-end development and UI design. It also provides a fun —yet hopefully non-absorbing— way of social interaction; where the cryptic nature of messages (and their subsequent replies) will make communication both challenging but quirky and entertaining.

Since the project at this point has no prospect of becoming publicly known or having a big upstream of users, there is no hurry to optimize any code, although optimization is one of the project's eventual objectives if only for the purpose of practice.

## The Stack

The project will be a single-page application running on React.js (https://reactjs.org/) on the front end.  
It will use Node.js (https://nodejs.org/en/) for all back-end operations.  
Server hosting, load balancing and caching services are not determined yet.  
Data storage and querying services will most likely implement MongoDB (https://www.mongodb.com/).  
