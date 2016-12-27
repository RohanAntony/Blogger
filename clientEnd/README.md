#Client End
- Since the application is a angular based application which means most of the rendering work is done on the front end and also client side routing. I have decided to put it into a seperate folder.
- To integrate , just copy the index.html from views folder and put the files in serverEnd/views.
- Also copy the bower or setup the bower under public folder in serverEnd directory.

- Breaking it into a different folder makes the whole development of client end easier.
- If we move to using Nginx as proxy server, than the transition is also gonna be smooth.
