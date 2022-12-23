
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text  data typed by the user
 * 
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text.trim().split(" ")[0]==="hello"){
    hello(text.trim().substring(5));
  }
  else if(text === 'help\n'){
    help();
  }
  else if(text === 'list\n'){
    list()
  }
  else if(text.startsWith('add')){
    add(text)
  }
  else if(text.startsWith('remove')){
    remove(text)

  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  console.log('hello'+text+'!')
}

let List= ["task1" , "task2" , "task3"]
function list() {
List.map((index)=>{
  console.log(`${List.indexOf(index)+1}-${index}`)
})
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
// add
function add(text){
  if(text.slice(3).trim() == ""){
    console.log('error')
  }
    else {
      List.push(text.slice(3).trim())
      console.log('added')
    }
  }
  // remove
  function remove(text){
    if (text.slice(6).trim() == ""){
      List.pop
    }
    else if(parseInt(text.substring(6))>List.length){
      console.log ("error")
    }
     else {
         List.splice(parseInt(text.substring(6))-1,1)
    }
  }

/* help print the description about the command
 * @returns {void}
 */
function help(){
  console.log('hello + name to say "hello name!" \nquit or exit to close the application \nlist is array \nadd to add elment to array \nremove to remove element from array');
}

// The following line starts the application
startApp("mohamad melhem")
