
function run(){
  let username = document.getElementById('username');
  
  document.getElementById('button').addEventListener('click',function(e){
    e.target.innerHTML = 'demo';
    username.innerHTML = 'username'
  })

}

export default run;