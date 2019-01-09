1) A CRUD-Heavy Application: Using Node.js Is Simply a Bad Idea because there are other better solution other than node.js for powring the CPU intensive app. Node.js leverages an event-based, non-blocking I/O model, using a single CPU. So its not running on multi thread.
So if you want to make CpU heavy software then using this is not good idea. But if you make it multi thread you have to purchase more CPU with more RAM which will will cost lo

2) A simple CRUD (or HTML) application. For making the simple web application PHP and many more would be best for small scale. use cases like this one, where data's provided, straightforwardly, by the server and where there's no need for a separate API, render Node.js superfluous.There are other frameworks suited specifically for this type of projects. its like you driving formula no.1 car but you stuck in traffic because you dont have straight path to run it.
As per Graph we can 
 Nodejs can Handle = 3614 requests per second.
 PHP can Handle = 1773 requests per second
 Go can Handle =4542 requests per second
 
 Hence nodejs is for meduim level web applications.

 3)  A Relational Database-Backed Server-Side App
 Because its relational database tools aren't as reliable, robust and easy to work with as other frameworks' toolboxes.
 Node'js “worker” is geared at solving HTTP server calling issues (rather than intense computing issues. Node.js hasn't been built with the “solving the compute scaling” issue in mind

