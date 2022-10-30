# Design Decisions and Thoughts

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
   2. The returned response are wrapped to allow flexibility on future implementation, in case there is a need to process the rusults for presentaiton. 