class Jogo{
    constructor(){
        this.init();
        //this.mostrarJogo();
        this.display;
        this.idX;
        this.idO;
        this.escolher = 'X';
        this.jogadas = 0;
        this.marca1 ="";
        this.marca2 ="";
        this.marca3 ="";
        this.marca4 ="";
        this.marca5 ="";
        this.marca6 ="";
        this.marca7 ="";
        this.marca8 ="";
        this.marca9 ="";
        this.vencedor = "";
        this.vitX;
        this.vitO;
        this.vic;
        this.contX = 0;
        this.contO = 0;
        this.newGame()
        
    }
    
    init(){
        
        let buttons = document.querySelectorAll("td");
        
            buttons.forEach(btn =>{
                btn.addEventListener('click', e =>{
    
                let id = btn.id;
    
                btn.innerHTML = this.escolher;
                
    
                    if(this.escolher == 'X'){
                        this.idX = id ;
                        this.caseX();
                    }else if(this.escolher == 'O'){
                        this.idO = id;
                        this.caseO();
                    }
                               
                    
                    this.troca();
                    
                });
            });
        
    }

    caseX(){
        switch(this.idX){
            case '1':
                if(this.marca1 == ""){
                    this.marca1 = 'X';
                }else{
                    console.log('lugar ocupado');
                    console.log(this.marca1);
                }
                
                this.verificar(this.escolher);
                break;
            case '2':
                this.marca2 = 'X';
                this.verificar(this.escolher);
                break;
            case '3':
                this.marca3 = 'X';
                this.verificar(this.escolher);
                break;
            case '4':
                this.marca4 = 'X';
                this.verificar(this.escolher);
                break;
            case '5':
                this.marca5 = 'X';
                this.verificar(this.escolher);
                break;
            case '6':
                this.marca6 = 'X';
                this.verificar(this.escolher);
                break;
            case '7':
                this.marca7 = 'X';
                this.verificar(this.escolher);
                break;
            case '8':
                this.marca8 = 'X';
                this.verificar(this.escolher);
                break;
            case '9':
                this.marca9 = 'X';
                this.verificar(this.escolher);
                break;
                }
    }

    caseO(){
        switch(this.idO){
            case '1':
                this.marca1 = 'O';
                this.verificar(this.escolher);
                break;
            case '2':
                this.marca2 = 'O';
                this.verificar(this.escolher);
                break;
            case '3':
                this.marca3 = 'O';
                this.verificar(this.escolher);
                break;
            case '4':
                this.marca4 = 'O';
                this.verificar(this.escolher);
                break;
            case '5':
                this.marca5 = 'O';
                this.verificar(this.escolher);
                break;
            case '6':
                this.marca6 = 'O';
                this.verificar(this.escolher);
                break;
            case '7':
                this.marca7 = 'O';
                this.verificar(this.escolher);
                break;
            case '8':
                this.marca8 = 'O';
                this.verificar(this.escolher);
                break;
            case '9':
                this.marca9 = 'O';
                this.verificar(this.escolher);
                break;
                
                }
    }
    verificar(value)
    {
        if( this.marca1 == value && this.marca2 == value&& this.marca3 == value){
            this.vencedor = value;
            this.victory();
        }else if(this.marca4 == value && this.marca5 == value&& this.marca6 == value){
            this.vencedor = value;
            this.victory();
        }else if(this.marca7 == value && this.marca8 == value&& this.marca9 == value){
            this.vencedor = value;
            this.victory();
        }else if(this.marca1 == value && this.marca4 == value&& this.marca7 == value){
            this.vencedor = value;
            this.victory();
        }else if(this.marca2 == value && this.marca5 == value&& this.marca8 == value){
            this.vencedor = value;
            this.victory();
        }else if(this.marca3 == value && this.marca6 == value&& this.marca9 == value){
            this.vencedor = value;
            this.victory();
        }else if(this.marca1 == value && this.marca5 == value&& this.marca9 == value){
            this.vencedor = value;
            this.victory();
        }else if(this.marca3 == value && this.marca5 == value&& this.marca7 == value){
            this.vencedor = value;
            this.victory();
        }
    }

    escolherX(){
        this.escolher = 'X';
        
    }
    escolherO(){
        this.escolher = 'O';
        
    }
    troca(){
        if(this.escolher == 'X'){
            this.escolher = 'O';
        }else{
            this.escolher ='X';
        }
    }
   

    victory(){
        
        let a = this.vencedor;
        this.resultJogo();
        if(a == "X"){
            document.querySelector('.legendVictory2').innerHTML = this.vencedor;
            this.contX++;
            this.contX = this.contX.toString();
            document.querySelector('.vx1').innerHTML = this.contX;
            //this.resetGame();
        }else if(a == "O"){
            document.querySelector('.legendVictory2').innerHTML = this.vencedor;
            this.contO++;
            this.contO = this.contO.toString();
            document.querySelector('.vo1').innerHTML =  this.contO;
            //this.resetGame();
           
        }
    }

    resetGame(){
        document.querySelectorAll('td').forEach(t =>{
            t.innerHTML = '';
        });
            this.escolher = '';
            this.vic = '';
            this.marca1 ="";
            this.marca2 ="";
            this.marca3 ="";
            this.marca4 ="";
            this.marca5 ="";
            this.marca6 ="";
            this.marca7 ="";
            this.marca8 ="";
            this.marca9 ="";
        
        
    }
    
    resultJogo(){
       
        document.querySelector('.legendVictory').style.display = 'block';
        document.querySelector('.result').style.display = 'block';
    }
    newGame(){
        
        document.querySelector('.legendVictory').style.display = 'none';
        document.querySelector('.result').style.display = 'none';
        this.resetGame();
    }
}
jogo = new Jogo();