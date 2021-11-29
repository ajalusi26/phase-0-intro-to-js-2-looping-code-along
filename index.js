// Code your solutions in this file
function writeCards(){
    const name = [ 'Lisa', 'Kaitlin', 'Jan' ];
    const action = ['surprise'];
    const messages = [];
    
    for ( let i = 0; i < name.length; i++){
        messages.push(`Thank you, ${name[i]}, for the wonderful ${action} gift!`)
        }
        return messages
}

function countDown(){
   for (let i = 10; i >= 0; i--){
       console.log(i);
   }
}