var interaval;
        var h=m=s="00";
        var brojac=0;
        var nula="0";
        $(document).ready(function(){
            document.getElementById("sati").innerHTML=String(h);
            document.getElementById("minuti").innerHTML=String(m);
            document.getElementById("sekundi").innerHTML=String(s);
        });

        $("#pause").click(function(){

            clearInterval(interaval);
            brojac=0;

        });

        $("#reset").click(function(){
            clearInterval(interaval);
            brojac=0;
            h=m=s="00";
            document.getElementById("sati").innerHTML=String(h);
            document.getElementById("minuti").innerHTML=String(m);
            document.getElementById("sekundi").innerHTML=String(s);
        });

        $("#play").click(function(){
            brojac+=1;
            if(brojac===1){
            interaval=setInterval(function(){
                    s=parseInt(s)+1;

                    if(String(s).length<2)
                        document.getElementById("sekundi").innerHTML=String(nula+s);
                    else
                        document.getElementById("sekundi").innerHTML=String(s);

                    if(s=="60"){
                        s="00";
                        m=parseInt(m)+1;
                        
                        if(String(m).length<2){
                            document.getElementById("minuti").innerHTML=String(nula+m);
                            document.getElementById("sekundi").innerHTML=String(s);
                        }
                        else{
                            document.getElementById("minuti").innerHTML=String(m);
                            document.getElementById("sekundi").innerHTML=String(s);
                        }
                    }
                    if(m=="60"){
                        m="00";
                        h=parseInt(h)+1;
                        if(String(h).length<2){
                            document.getElementById("sati").innerHTML=String(nula+h);
                            document.getElementById("minuti").innerHTML=String(m);
                        }
                        else{
                            document.getElementById("minuti").innerHTML=String(m);
                            document.getElementById("sati").innerHTML=String(h);
                        }
                    }
                }, 1000);
            }
        });