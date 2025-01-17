
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
  else if(text.startsWith('edit')){
    if(text==="edit\n"){
      console.log("error")
    }
    edit(text)
  }

else if(text.startsWith('check')){
  check(text)
}else if(text.startsWith('uncheck')){
  uncheck(text)}

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

let List= [{list : "task1" , done : true}, 
           {list : "task2" , done : false}, 
           {list : "task3" , done : true}]
function list() {
for (let i = 0; i < List.length; i++) {
  if(List[i].done){
    console.log("[+]" + ":" + List[i].list)
    
  }
  else{
    console.log("[]" + ":" + List[i].list)
  }
  
}
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
      List.push({list:text.slice(3).trim(),done:false})
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
  // eddit
  function edit(text){
    let n = text.trim().split(" ").slice(1);
    if(Number.isInteger(parseInt(n[0]))){
      List[parseInt(n[0] -1 )] = n.slice(1).join(" ");
    } 
    
    else {
      n = n.join(" ");
      List[List.length -1] = n;
    }
  }
  // chek
  function check(text){
    if(text.slice(5).trim()==""){
      console.log("error")
    }else{
      List[parseInt(text.slice(6).trim())-1].done =true;
    }
  }
  //uncheck function
  function uncheck(text){
    if(text.slice(7).trim()==""){
      console.log("error")
    }else{
      List[parseInt(text.slice(8).trim())-1].done =false;
    }}
/* help print the description about the command
 * @returns {void}
 */
function help(){
  console.log('hello + name to say "hello name!" \nquit or exit to close the application \nlist is array \nadd to add elment to array \nremove to remove element from array');
}

// The following line starts the application
startApp("mohamad melhem")
