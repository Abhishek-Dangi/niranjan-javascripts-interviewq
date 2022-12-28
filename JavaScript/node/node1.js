//question answer
//https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-interview-questions

// package.json: -
//     All npm packages contain a file, usually in the project root, called package.json - this file holds various metadata relevant to the project

// npm: -NPM is a package manager for Node.js packages, or modules if you like.www.npmjs.com hosts thousands of free packages to download and use.The NPM program is installed on your computer when you install Node.js.

// Node js is single treated language it compile line to line code asyncoust in nature
//NodeJS : It is Javascript based server side development environment , used to develop server side for web based applications , along with this it can be used to implement network based application.

// //drowback of node
// let a = 10;
// let b = 0;

// setTimeout(() => {
//     b = 20;
// }, 2000)
// console.log(a + b);
// // output is :-
// 10



// promise is give promis to give result or reject
// resolve will return success result and will attach result in .then
// reject will return error message  and will attach result in .catch

// resolve will return succes result then result will be attach in then
// reject will return err message then err will be attach in catch

// //drowback of node
// let a = 10;
// let b = 0;

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(30)
//     }, 2000)
// })

// promise.then((data) => {
//     console.log(a + data);
// })
// output is :-
// 40


//how work event loop in node?
// event loop in nodejs
// call stack
// node API
// callback quetue

//Q. If Node.js is single-threaded, then how does it handle concurrency?
//ans  Node js uses an event loop to maintain concurrency and perform non-blocking I/O operations

//Q. What are the advantages of using promises instead of callbacks?
//ans-- They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events. In other words also, we may say that, promises are the ideal choice for handling multiple callbacks at the same time, thus avoiding the undesired callback hell situation.

//Q. How is Node.js most frequently used?
//   Real-time chats
//   Internet of Things
//   Real-time collaboration tools
//   Streaming applications



// node connect with mongo
// import mongoose form 'mongoose';
// const url = "mongodb://localhost:27017/abhidatabase";
//mongoose.connect(url);

//types of API in node
// There are various types of APIs available such as WEB APIs, LOCAL APIs, PROGRAM APIs, etc

// Types of API functions in Node.js:

// Asynchronous, Non - blocking functions
// Synchronous, Blocking functions

// buffer in nodejs
//Node.js is used to perform operations on raw binary data. Generally, Buffer refers to the particular memory location in memory.

// session
//A session will contain some unique data about that client to allow the server to keep track of the user’s state.

// cookies
//Cookies are files created by websites you visit. They make your online experience easier by saving browsing information.
//4. Why is Node.js Single-threaded?

// Node.js is single - threaded for async processing.By doing async processing on a single - thread under typical web loads, more performance and scalability can be achieved instead of the typical thread - based implementation.

// interview questions
//Q1:- what is REPL
// ans :- Read Eval Print Loop and it represents a computer environment like a windows or unix


    // Read − Reads user's input, parses the input into JavaScript data-structure, and stores in memory.

    // Eval − Takes and evaluates the data structure.

    // Print − Prints the result.

    // Loop − Loops the above command until the user presses ctrl-c twice.


//Q:- what do you mean by asynchronous API?
// all APIs of the nodejs libarary are asynchronous that is non-blocking. It essentially means a nodejs  based server never waits for an API to return data. the server moves to the next API after calling it and a notification mechanism of events of node.js helps the server to get a response fromm the previous API call.

//Q2:- what is callback hell?
// The asynchronous function requires callbacks as a return parameter. when multiple asynchronous function are chanined together then callback hell situation comes up.

//Q:- How can you avoid callback hell in nodejs?
//ans:-  JavaScript provides an easy way of escaping from callback hell. This is done by event queue and promises. A promise is a returned object from an asynchronous functions, to which callback methods can be added based on the previous functions reuslt.


//Q:- how does node.js handle child treads?
//ans:-  nodejs , in its essence, is a single thread process . It does not expose child threads and thread management methods to the developer.

//Q3:- does mongodb support foregin key constraints?
//Q4:- how can you achieve transaction and locking in mongodb?


//Q5:- If Node.js is single-threaded then how does it handle concurrency?
//Ans: Node provides a single thread to programmers so that code can be written easily and without a bottleneck.
// node internally uses multiple POSIX threads for vaious I/O operation such as file, dns, network call and more.
//when node gets an I/O request it creates or users a thread to perform that I/O operation and once the operation is done. It pushes the result to the event queue.
// on each such event, the event loop reuns and checks the queue and if the execution stack of node is empty then it adds the queue result to the exection stack.


//Q6:- what is stream and what are the types of streams available  in node.js?
// ans: streams are a collection data that might not be available all at once and don't have to fit in memory. Streams provide chunks of the data in continous manner. it is useful to read a large set of data and precess  it . 4types of streams:-
//1 : Readable
//2 : Writeable
//3 : Duplex
//4 : Transform

// Q7:- What are the features of Event loop?
// ans:features of event loop are:
//1: the event loop is an endless loop, which waits for tasks, executes them and then sleeps until it recevies more tasks.
//2: it executes tasks from the event queue only when the call stack is empyty i.e there is no ongoing task.
//3: it allows us to use callbacks and promises.
//4: it executes the tasks starting from the oldest first.


//Q8:- what is the purpose of module. exprots in node.js?
//ans: this is used to expose functions of a particular module or file to be used elsewhere in the project. this can be used to encapsulate all similar function in a file which further improves the project structure.

//Q9:- what is node js streams/
// ans: streams are instances of event emitter which can be used to work with streaming data in nodejs . They can be used for handlinng and maniplating streaming large files(videos, mp3, and more) over the network. they use buffers as their temporary storage.

//Q10:- What is NPM?
// ans - npm stands for node package manager esponsible for managing all the packages and modules for Node.js.

//Q11:- Why is Node.js preferred over other backend technologies like Java and PHP?
// ans- nodejs is very fast.
//      npm has over 50000 bundles available at the developers disposal
//      better synchronization of code betw sever and client due to same code base


//Q12:- Which database is more popularly used with Node.js?
//ans:- MongoDB is the most common database used with Node.js. It is a NoSQL, cross-platform, document-oriented database that provides high performance, high availability, and easy scalability.

//Q13- What does event-driven programming mean?
//ans- An event-driven programming approach uses events to trigger various functions. An event can be anything, such as typing a key or clicking a mouse button. A call-back function is already registered with the element executes whenever an event is triggered.

//Q14- What is an EventEmitter in Node.js?
//ans- EventEmitter is a class that holds all the objects that can emit events
//--   Whenever an object from the EventEmitter class throws an event, all attached functions are called upon synchronously


//Q15-- What is the Express.js package?

//Q16-- What are streams in Node.js?
//ans-     Readable
//         writable
//         duplex
//         transform




//react.js questions
//Q1:- what is Reconciliation?
//Q2:- what is pure components?
//Q3:- what is react hooks?
//Q4:- what is routing?
//Q5:- what is JAX?
//Q6:- what is prop drilling?
//Q7:- what's the difference bet a "smart" component and a "dumb" component?
//Q8:- what are higher-order components?
//ans: a higher-order component (HOC) is function that takes a component and returns a new component. its pattern that is drived from reacts compositional nature.





// mongodb:-
// Q1:- what is sharding in mongoDb?
//Q2:- what is mongoose?
//Q3:- how do you delete a document in mongodb?
// ans: the curd api in mongodb provides deleteone and deletemany methods to delete a document. both of these methods take a filter document as their first parameter.
//Q4:- whatt is the mongo shell?
//ans: it is a javascript shell that allows interaction with a mongodb instance from the command line . with that one can perform administreative functions , inspecting an instance, or exploring mongodb.

//Q5: - what is Replica set in mongodb?
// ans: a replica set in mongodb in a group of mongod processes that maintan the same data set. 


