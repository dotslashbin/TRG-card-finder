# Design Decisions and Thoughts

BACKEND
1. Created the loaders folder that carries the responsibility of loading the framework into the application.
   1. In this implementation, express is being loaded in modules in such a way the process is open for modification. For example, if we are to implement middlewares, it will be pretty clear where these are to reside. 
   2. This also provides an advantage in code organization to avoid stress to the reader. 
   3. The file Routes.ts was made to carry the responsibility of holding all the route definitions for express. This is an advantage when we will have a volume of routes to define int he future. 
2. Created "helpers" folder to hold files that contain functions that are usuefull for the entire app but does not really bind to a relevant structure. They are meant to be easily accessible. 
   1. Repsonse.ts holds methods that are intended to wrap the output to be returned with the request. 
3. Created a serivces folder to hold the implementations of the various core features of the application.
   1. Each feature are meant to be functioning as services that can be utilised by the handlers. 
   2. The services will contain the bulk of the implementation
4. The service ScryfallFetcher has the axios implementation which was designed to return both "success" and "failed" results. At this point, there has been no critical benefit to evaluating the axios reults, therefore we just send it back. 
   1. The GET handler then evaluates if return of the service is successfull or failed. Based on this, it will decided on what to return as a response. 
   2. The returned response are wrapped to allow flexibility on future implementation, in case there is a need to process the rusults for presentation. 
   
FRONTEND
1. In the interest of time, I decided to swerve away from using global store managers such as redux, redux-saga or rtk tookkit, which are both my favourite approaches to date. 
   - Judging by the specs, I knew it it could be done with a single flow of components so I did not exert as much effort in decoupling compared to how I would have done it with a bigger scale. 
   - I could have impelmented loaders listening from a globally avaiable state in redux
2. I decided to separate the search box and the "cards" component that displays the results
   1. I tend to follow single responsibility in both classes functions
   2. This modular approach will open up possibilities of easier collaboration with other team members who I might be working with.
3. API is called using AXIOS rather than fetch because I wanted to use promises to keep away from a callback hell. 


NOTE: To give you an idea on how I could have done better at this, I'd like to share some of the demo projects I have built before. are the ff: 

1. https://github.com/dotslashbin/picapi -> backend NodeJS with database implementation
2. https://github.com/dotslashbin/ivsdemo -> backend NodeJS with database implementation with docker 
3. https://gitlab.com/joshuarpf/single-deck-blackjack-client -> reactjs frontend with a more complex structure than this one
4. https://gitlab.com/joshuarpf/drag-n-do -> full front-end and back-end application in similar stack