     let cnt = 1;
     let frst = document.getElementById("frst");
     let scnd = document.getElementById("scnd");
     let thrd = document.getElementById("thrd");
     let four = document.getElementById("four");


    function few(a){
      cnt = cnt+a;
      trs(cnt);
       // console.log(cnt);
    }
    function trs(wrk){
         
        frst.style.display = "none";
        scnd.style.display = "none";
        thrd.style.display = "none";
        
       four.style.display = "none";
       if(wrk == 5){
          wrk = 1;
          cnt = 1;
       }
       if(wrk == 0){
          wrk = 4;
          cnt = 4;
       }
      
        console.log(wrk);
         if(wrk == 1){
            frst.style.display = "block";
         }
        if(wrk == 2){
            scnd.style.display = "block";
        }
        else if(wrk == 3){
            thrd.style.display = "block";
        }
       else if(wrk == 4){
            four.style.display = "block";
        }

        
         
    }