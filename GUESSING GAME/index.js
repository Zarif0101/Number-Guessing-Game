const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum - minNum + 1) + minNum);
console.log(answer)
let attempts = 0;
let guess;
let isRunning = true;

document.getElementById('submit').onclick = function(){
    guess = document.getElementById('input').value;
    guess = Number(guess);

    document.getElementById('error1').style.display = 'none';
    document.getElementById('error2').style.display = 'none';
    document.getElementById('hint1').style.display = 'none';
    document.getElementById('hint2').style.display = 'none';
    document.getElementById('hint3').style.display = 'none';


    if(isNaN(guess)){
        document.getElementById('error1').style.display = 'block';
        
    } else if(guess < minNum || guess > maxNum ){
        document.getElementById('error2').style.display = 'block';
        
    } else{
        attempts++;
        document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
        if(guess < answer){
            document.getElementById('hint1').style.display = 'block';
            
        } else if(guess > answer){
            document.getElementById('hint2').style.display = 'block';
            
        }else{
            document.getElementById('hint3').style.display = 'block';
            
        }
        
        
    }
    
    
    
}