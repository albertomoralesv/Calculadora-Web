function changeTheme(){
    var id = "t"+this.innerHTML
    $("#"+id).addClass("active_theme")
    if (id=='t1'){
        document.body.style.backgroundColor="hsl(222, 26%, 31%)";
        document.getElementById("main_container").style.backgroundColor="hsl(222, 26%, 31%)";
        if ($("#t1").hasClass("active_theme")){
            document.getElementById("t1").style.backgroundColor = "hsl(6, 63%, 50%)";
            document.getElementById("t1").style.color = "white";
        }
        $("#t2").removeClass("active_theme");
        document.getElementById("t2").style.backgroundColor = "hsl(223, 31%, 20%)";
        document.getElementById("t2").style.color = "white";
        $("#t3").removeClass("active_theme");
        document.getElementById("t3").style.backgroundColor = "hsl(223, 31%, 20%)";
        document.getElementById("t3").style.color = "white";
        document.getElementById("top_container").style.backgroundColor = "hsl(222, 26%, 31%)";
        document.getElementById("calc_title").style.color="white";
        document.getElementById("theme_title").style.color="white";
        document.getElementById("t2").addEventListener("mouseover", function() {
            if ($("#t2").hasClass("active_theme")){
                
            }
            else{
                document.getElementById("t2").style.backgroundColor = "hsl(222, 26%, 31%)";
                document.getElementById("t2").style.color = "hsl(6, 63%, 50%)";
            }
        });   
        document.getElementById("t2").addEventListener("mouseout", function() {
            if ($("#t2").hasClass("active_theme")){
                
            }
            else{
                document.getElementById("t2").style.backgroundColor = "hsl(223, 31%, 20%)";
                document.getElementById("t2").style.color = "white";
            }
        });
        document.getElementById("t3").addEventListener("mouseover", function() {
            if ($("#t3").hasClass("active_theme")){
                
            }
            else{
                document.getElementById("t3").style.backgroundColor = "hsl(222, 26%, 31%)";
                document.getElementById("t3").style.color = "hsl(6, 63%, 50%)";
            }
        });
        document.getElementById("t3").addEventListener("mouseout", function() {
            if ($("#t3").hasClass("active_theme")){
                
            }
            else{
                document.getElementById("t3").style.backgroundColor = "hsl(223, 31%, 20%)";
                document.getElementById("t3").style.color = "white";
            }
        });   
        document.getElementById("mid_container").style.backgroundColor = "hsl(224, 36%, 15%)";
        document.getElementById("screen_number").style.color = "white";
        document.getElementById("bot_container").style.backgroundColor = "hsl(223, 31%, 20%)";
        document.getElementById("7").style.backgroundColor = "hsl(30, 25%, 89%)";
        document.getElementById("7").style.color = "hsl(221, 14%, 31%)";
        document.getElementById("7").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
        document.getElementById("7").addEventListener("mouseover",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("7").style.backgroundColor = "hsl(28, 16%, 65%)";
                document.getElementById("7").style.color = "white";
                document.getElementById("7").style.boxShadow = "0px 5px hsl(30, 25%, 89%)";
            }
        });
        document.getElementById("7").addEventListener("mouseout",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("7").style.backgroundColor = "hsl(30, 25%, 89%)";
                document.getElementById("7").style.color = "hsl(221, 14%, 31%)";
                document.getElementById("7").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
            }
        });
        document.getElementById("8").style.backgroundColor = "hsl(30, 25%, 89%)";
        document.getElementById("8").style.color = "hsl(221, 14%, 31%)";
        document.getElementById("8").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
        document.getElementById("8").addEventListener("mouseover",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("8").style.backgroundColor = "hsl(28, 16%, 65%)";
                document.getElementById("8").style.color = "white";
                document.getElementById("8").style.boxShadow = "0px 5px hsl(30, 25%, 89%)";
            }
        });
        document.getElementById("8").addEventListener("mouseout",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("8").style.backgroundColor = "hsl(30, 25%, 89%)";
                document.getElementById("8").style.color = "hsl(221, 14%, 31%)";
                document.getElementById("8").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
            }
        });
        document.getElementById("9").style.backgroundColor = "hsl(30, 25%, 89%)";
        document.getElementById("9").style.color = "hsl(221, 14%, 31%)";
        document.getElementById("9").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
        document.getElementById("9").addEventListener("mouseover",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("9").style.backgroundColor = "hsl(28, 16%, 65%)";
                document.getElementById("9").style.color = "white";
                document.getElementById("9").style.boxShadow = "0px 5px hsl(30, 25%, 89%)";
            }
        });
        document.getElementById("9").addEventListener("mouseout",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("9").style.backgroundColor = "hsl(30, 25%, 89%)";
                document.getElementById("9").style.color = "hsl(221, 14%, 31%)";
                document.getElementById("9").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
            }
        });
        document.getElementById("DEL").style.backgroundColor = "hsl(225, 21%, 49%)";
        document.getElementById("DEL").style.color = "white";
        document.getElementById("DEL").style.boxShadow = "0px 5px hsl(224, 28%, 35%)";
        document.getElementById("DEL").addEventListener("mouseover",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("DEL").style.backgroundColor = "hsl(224, 28%, 35%)";
                document.getElementById("DEL").style.color = "white";
                document.getElementById("DEL").style.boxShadow = "0px 5px hsl(225, 21%, 49%)";
            }
        });
        document.getElementById("DEL").addEventListener("mouseout",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("DEL").style.backgroundColor = "hsl(225, 21%, 49%)";
                document.getElementById("DEL").style.color = "white";
                document.getElementById("DEL").style.boxShadow = "0px 5px hsl(224, 28%, 35%)";
            }
        });
        document.getElementById("4").style.backgroundColor = "hsl(30, 25%, 89%)";
        document.getElementById("4").style.color = "hsl(221, 14%, 31%)";
        document.getElementById("4").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
        document.getElementById("4").addEventListener("mouseover",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("4").style.backgroundColor = "hsl(28, 16%, 65%)";
                document.getElementById("4").style.color = "white";
                document.getElementById("4").style.boxShadow = "0px 5px hsl(30, 25%, 89%)";
            }
        });
        document.getElementById("4").addEventListener("mouseout",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("4").style.backgroundColor = "hsl(30, 25%, 89%)";
                document.getElementById("4").style.color = "hsl(221, 14%, 31%)";
                document.getElementById("4").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
            }
        });
        document.getElementById("5").style.backgroundColor = "hsl(30, 25%, 89%)";
        document.getElementById("5").style.color = "hsl(221, 14%, 31%)";
        document.getElementById("5").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
        document.getElementById("5").addEventListener("mouseover",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("5").style.backgroundColor = "hsl(28, 16%, 65%)";
                document.getElementById("5").style.color = "white";
                document.getElementById("5").style.boxShadow = "0px 5px hsl(30, 25%, 89%)";
            }
        });
        document.getElementById("5").addEventListener("mouseout",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("5").style.backgroundColor = "hsl(30, 25%, 89%)";
                document.getElementById("5").style.color = "hsl(221, 14%, 31%)";
                document.getElementById("5").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
            }
        });
        document.getElementById("6").style.backgroundColor = "hsl(30, 25%, 89%)";
        document.getElementById("6").style.color = "hsl(221, 14%, 31%)";
        document.getElementById("6").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
        document.getElementById("6").addEventListener("mouseover",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("6").style.backgroundColor = "hsl(28, 16%, 65%)";
                document.getElementById("6").style.color = "white";
                document.getElementById("6").style.boxShadow = "0px 5px hsl(30, 25%, 89%)";
            }
        });
        document.getElementById("6").addEventListener("mouseout",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("6").style.backgroundColor = "hsl(30, 25%, 89%)";
                document.getElementById("6").style.color = "hsl(221, 14%, 31%)";
                document.getElementById("6").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
            }
        });
        document.getElementById("+").style.backgroundColor = "hsl(30, 25%, 89%)";
        document.getElementById("+").style.color = "hsl(221, 14%, 31%)";
        document.getElementById("+").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
        document.getElementById("+").addEventListener("mouseover",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("+").style.backgroundColor = "hsl(28, 16%, 65%)";
                document.getElementById("+").style.color = "white";
                document.getElementById("+").style.boxShadow = "0px 5px hsl(30, 25%, 89%)";
            }
        });
        document.getElementById("+").addEventListener("mouseout",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("+").style.backgroundColor = "hsl(30, 25%, 89%)";
                document.getElementById("+").style.color = "hsl(221, 14%, 31%)";
                document.getElementById("+").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
            }
        });
        document.getElementById("1").style.backgroundColor = "hsl(30, 25%, 89%)";
        document.getElementById("1").style.color = "hsl(221, 14%, 31%)";
        document.getElementById("1").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
        document.getElementById("1").addEventListener("mouseover",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("1").style.backgroundColor = "hsl(28, 16%, 65%)";
                document.getElementById("1").style.color = "white";
                document.getElementById("1").style.boxShadow = "0px 5px hsl(30, 25%, 89%)";
            }
        });
        document.getElementById("1").addEventListener("mouseout",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("1").style.backgroundColor = "hsl(30, 25%, 89%)";
                document.getElementById("1").style.color = "hsl(221, 14%, 31%)";
                document.getElementById("1").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
            }
        });
        document.getElementById("2").style.backgroundColor = "hsl(30, 25%, 89%)";
        document.getElementById("2").style.color = "hsl(221, 14%, 31%)";
        document.getElementById("2").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
        document.getElementById("2").addEventListener("mouseover",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("2").style.backgroundColor = "hsl(28, 16%, 65%)";
                document.getElementById("2").style.color = "white";
                document.getElementById("2").style.boxShadow = "0px 5px hsl(30, 25%, 89%)";
            }
        });
        document.getElementById("2").addEventListener("mouseout",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("2").style.backgroundColor = "hsl(30, 25%, 89%)";
                document.getElementById("2").style.color = "hsl(221, 14%, 31%)";
                document.getElementById("2").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
            }
        });
        document.getElementById("3").style.backgroundColor = "hsl(30, 25%, 89%)";
        document.getElementById("3").style.color = "hsl(221, 14%, 31%)";
        document.getElementById("3").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
        document.getElementById("3").addEventListener("mouseover",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("3").style.backgroundColor = "hsl(28, 16%, 65%)";
                document.getElementById("3").style.color = "white";
                document.getElementById("3").style.boxShadow = "0px 5px hsl(30, 25%, 89%)";
            }
        });
        document.getElementById("3").addEventListener("mouseout",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("3").style.backgroundColor = "hsl(30, 25%, 89%)";
                document.getElementById("3").style.color = "hsl(221, 14%, 31%)";
                document.getElementById("3").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
            }
        });
        document.getElementById("-").style.backgroundColor = "hsl(30, 25%, 89%)";
        document.getElementById("-").style.color = "hsl(221, 14%, 31%)";
        document.getElementById("-").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
        document.getElementById("-").addEventListener("mouseover",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("-").style.backgroundColor = "hsl(28, 16%, 65%)";
                document.getElementById("-").style.color = "white";
                document.getElementById("-").style.boxShadow = "0px 5px hsl(30, 25%, 89%)";
            }
        });
        document.getElementById("-").addEventListener("mouseout",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("-").style.backgroundColor = "hsl(30, 25%, 89%)";
                document.getElementById("-").style.color = "hsl(221, 14%, 31%)";
                document.getElementById("-").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
            }
        });
        document.getElementById(".").style.backgroundColor = "hsl(30, 25%, 89%)";
        document.getElementById(".").style.color = "hsl(221, 14%, 31%)";
        document.getElementById(".").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
        document.getElementById(".").addEventListener("mouseover",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById(".").style.backgroundColor = "hsl(28, 16%, 65%)";
                document.getElementById(".").style.color = "white";
                document.getElementById(".").style.boxShadow = "0px 5px hsl(30, 25%, 89%)";
            }
        });
        document.getElementById(".").addEventListener("mouseout",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById(".").style.backgroundColor = "hsl(30, 25%, 89%)";
                document.getElementById(".").style.color = "hsl(221, 14%, 31%)";
                document.getElementById(".").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
            }
        });
        document.getElementById("0").style.backgroundColor = "hsl(30, 25%, 89%)";
        document.getElementById("0").style.color = "hsl(221, 14%, 31%)";
        document.getElementById("0").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
        document.getElementById("0").addEventListener("mouseover",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("0").style.backgroundColor = "hsl(28, 16%, 65%)";
                document.getElementById("0").style.color = "white";
                document.getElementById("0").style.boxShadow = "0px 5px hsl(30, 25%, 89%)";
            }
        });
        document.getElementById("0").addEventListener("mouseout",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("0").style.backgroundColor = "hsl(30, 25%, 89%)";
                document.getElementById("0").style.color = "hsl(221, 14%, 31%)";
                document.getElementById("0").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
            }
        });
        document.getElementById("/").style.backgroundColor = "hsl(30, 25%, 89%)";
        document.getElementById("/").style.color = "hsl(221, 14%, 31%)";
        document.getElementById("/").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
        document.getElementById("/").addEventListener("mouseover",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("/").style.backgroundColor = "hsl(28, 16%, 65%)";
                document.getElementById("/").style.color = "white";
                document.getElementById("/").style.boxShadow = "0px 5px hsl(30, 25%, 89%)";
            }
        });
        document.getElementById("/").addEventListener("mouseout",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("/").style.backgroundColor = "hsl(30, 25%, 89%)";
                document.getElementById("/").style.color = "hsl(221, 14%, 31%)";
                document.getElementById("/").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
            }
        });
        document.getElementById("*").style.backgroundColor = "hsl(30, 25%, 89%)";
        document.getElementById("*").style.color = "hsl(221, 14%, 31%)";
        document.getElementById("*").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
        document.getElementById("*").addEventListener("mouseover",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("*").style.backgroundColor = "hsl(28, 16%, 65%)";
                document.getElementById("*").style.color = "white";
                document.getElementById("*").style.boxShadow = "0px 5px hsl(30, 25%, 89%)";
            }
        });
        document.getElementById("*").addEventListener("mouseout",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("*").style.backgroundColor = "hsl(30, 25%, 89%)";
                document.getElementById("*").style.color = "hsl(221, 14%, 31%)";
                document.getElementById("*").style.boxShadow = "0px 5px hsl(28, 16%, 65%)";
            }
        });
        document.getElementById("RESET").style.backgroundColor = "hsl(225, 21%, 49%)";
        document.getElementById("RESET").style.color = "white";
        document.getElementById("RESET").style.boxShadow = "0px 5px hsl(224, 28%, 35%)";
        document.getElementById("RESET").addEventListener("mouseover",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("RESET").style.backgroundColor = "hsl(224, 28%, 35%)";
                document.getElementById("RESET").style.color = "white";
                document.getElementById("RESET").style.boxShadow = "0px 5px hsl(225, 21%, 49%)";
            }
        });
        document.getElementById("RESET").addEventListener("mouseout",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("RESET").style.backgroundColor = "hsl(225, 21%, 49%)";
                document.getElementById("RESET").style.color = "white";
                document.getElementById("RESET").style.boxShadow = "0px 5px hsl(224, 28%, 35%)";
            }
        });
        document.getElementById("igual").style.backgroundColor = "hsl(6, 63%, 50%)";
        document.getElementById("igual").style.color = "white";
        document.getElementById("igual").style.boxShadow = "0px 5px hsl(6, 70%, 34%)";
        document.getElementById("igual").addEventListener("mouseover",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("igual").style.backgroundColor = "hsl(6, 70%, 34%)";
                document.getElementById("igual").style.color = "white";
                document.getElementById("igual").style.boxShadow = "0px 5px hsl(6, 63%, 50%)";
            }
        });
        document.getElementById("igual").addEventListener("mouseout",function(){
            if ($("#t1").hasClass("active_theme")){
                document.getElementById("igual").style.backgroundColor = "hsl(6, 63%, 50%)";
                document.getElementById("igual").style.color = "white";
                document.getElementById("igual").style.boxShadow = "0px 5px hsl(6, 70%, 34%)";
            }
        });
    }else if (id=='t2'){
        document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
        document.getElementById("main_container").style.backgroundColor = "hsl(0, 0%, 90%)";
        if ($("#t2").hasClass("active_theme")){
            document.getElementById("t2").style.backgroundColor = "hsl(25, 98%, 40%)";
            document.getElementById("t2").style.color = "white";
        }
        $("#t1").removeClass("active_theme");
        document.getElementById("t1").style.backgroundColor = "hsl(0, 5%, 81%)";
        document.getElementById("t1").style.color = "hsl(60, 10%, 19%)";
        $("#t3").removeClass("active_theme");
        document.getElementById("t3").style.backgroundColor = "hsl(0, 5%, 81%)";
        document.getElementById("t3").style.color = "hsl(60, 10%, 19%)";
        document.getElementById("top_container").style.backgroundColor = " hsl(0, 0%, 90%)";
        document.getElementById("calc_title").style.color="hsl(60, 10%, 19%)";
        document.getElementById("theme_title").style.color="hsl(60, 10%, 19%)";
        document.getElementById("t1").addEventListener("mouseover", function() {
            if ($("#t1").hasClass("active_theme")){
                
            }
            else{
                document.getElementById("t1").style.backgroundColor = "hsl(0, 0%, 90%)";
                document.getElementById("t1").style.color = "hsl(25, 98%, 40%)";
            }
        });   
        document.getElementById("t1").addEventListener("mouseout", function() {
            if ($("#t1").hasClass("active_theme")){
                
            }
            else{
                document.getElementById("t1").style.backgroundColor = "hsl(0, 5%, 81%)";
                document.getElementById("t1").style.color = "hsl(60, 10%, 19%)";
            }
        });
        document.getElementById("t3").addEventListener("mouseover", function() {
            if ($("#t3").hasClass("active_theme")){
                
            }
            else{
                document.getElementById("t3").style.backgroundColor = "hsl(0, 0%, 90%)";
                document.getElementById("t3").style.color = "hsl(25, 98%, 40%)";
            }
        });   
        document.getElementById("t3").addEventListener("mouseout", function() {
            if ($("#t3").hasClass("active_theme")){
                
            }
            else{
                document.getElementById("t3").style.backgroundColor = "hsl(0, 5%, 81%)";
                document.getElementById("t3").style.color = "hsl(60, 10%, 19%)";
            }
        });
        document.getElementById("mid_container").style.backgroundColor = "hsl(0, 0%, 93%)";
        document.getElementById("screen_number").style.color = "hsl(60, 10%, 19%)";
        document.getElementById("bot_container").style.backgroundColor = "hsl(0, 5%, 81%)";
        document.getElementById("7").style.backgroundColor = "hsl(45, 7%, 89%)";
        document.getElementById("7").style.color = "hsl(60, 10%, 19%)";
        document.getElementById("7").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
        document.getElementById("7").addEventListener("mouseover",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("7").style.backgroundColor = "hsl(35, 11%, 61%)";
                document.getElementById("7").style.color = "white";
                document.getElementById("7").style.boxShadow = "0px 5px hsl(45, 7%, 89%)";
            }
        });
        document.getElementById("7").addEventListener("mouseout",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("7").style.backgroundColor = "hsl(45, 7%, 89%)";
                document.getElementById("7").style.color = "hsl(60, 10%, 19%)";
                document.getElementById("7").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
            }
        });
        document.getElementById("8").style.backgroundColor = "hsl(45, 7%, 89%)";
        document.getElementById("8").style.color = "hsl(60, 10%, 19%)";
        document.getElementById("8").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
        document.getElementById("8").addEventListener("mouseover",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("8").style.backgroundColor = "hsl(35, 11%, 61%)";
                document.getElementById("8").style.color = "white";
                document.getElementById("8").style.boxShadow = "0px 5px hsl(45, 7%, 89%)";
            }
        });
        document.getElementById("8").addEventListener("mouseout",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("8").style.backgroundColor = "hsl(45, 7%, 89%)";
                document.getElementById("8").style.color = "hsl(60, 10%, 19%)";
                document.getElementById("8").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
            }
        });
        document.getElementById("9").style.backgroundColor = "hsl(45, 7%, 89%)";
        document.getElementById("9").style.color = "hsl(60, 10%, 19%)";
        document.getElementById("9").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
        document.getElementById("9").addEventListener("mouseover",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("9").style.backgroundColor = "hsl(35, 11%, 61%)";
                document.getElementById("9").style.color = "white";
                document.getElementById("9").style.boxShadow = "0px 5px hsl(45, 7%, 89%)";
            }
        });
        document.getElementById("9").addEventListener("mouseout",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("9").style.backgroundColor = "hsl(45, 7%, 89%)";
                document.getElementById("9").style.color = "hsl(60, 10%, 19%)";
                document.getElementById("9").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
            }
        });
        document.getElementById("DEL").style.backgroundColor = "hsl(185, 42%, 37%)";
        document.getElementById("DEL").style.color = "white";
        document.getElementById("DEL").style.boxShadow = "0px 5px hsl(185, 58%, 25%)";
        document.getElementById("DEL").addEventListener("mouseover",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("DEL").style.backgroundColor = "hsl(185, 58%, 25%)";
                document.getElementById("DEL").style.color = "white";
                document.getElementById("DEL").style.boxShadow = "0px 5px hsl(185, 42%, 37%)";
            }
        });
        document.getElementById("DEL").addEventListener("mouseout",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("DEL").style.backgroundColor = "hsl(185, 42%, 37%)";
                document.getElementById("DEL").style.color = "white";
                document.getElementById("DEL").style.boxShadow = "0px 5px hsl(185, 58%, 25%)";
            }
        });
        document.getElementById("4").style.backgroundColor = "hsl(45, 7%, 89%)";
        document.getElementById("4").style.color = "hsl(60, 10%, 19%)";
        document.getElementById("4").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
        document.getElementById("4").addEventListener("mouseover",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("4").style.backgroundColor = "hsl(35, 11%, 61%)";
                document.getElementById("4").style.color = "white";
                document.getElementById("4").style.boxShadow = "0px 5px hsl(45, 7%, 89%)";
            }
        });
        document.getElementById("4").addEventListener("mouseout",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("4").style.backgroundColor = "hsl(45, 7%, 89%)";
                document.getElementById("4").style.color = "hsl(60, 10%, 19%)";
                document.getElementById("4").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
            }
        });
        document.getElementById("5").style.backgroundColor = "hsl(45, 7%, 89%)";
        document.getElementById("5").style.color = "hsl(60, 10%, 19%)";
        document.getElementById("5").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
        document.getElementById("5").addEventListener("mouseover",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("5").style.backgroundColor = "hsl(35, 11%, 61%)";
                document.getElementById("5").style.color = "white";
                document.getElementById("5").style.boxShadow = "0px 5px hsl(45, 7%, 89%)";
            }
        });
        document.getElementById("5").addEventListener("mouseout",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("5").style.backgroundColor = "hsl(45, 7%, 89%)";
                document.getElementById("5").style.color = "hsl(60, 10%, 19%)";
                document.getElementById("5").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
            }
        });
        document.getElementById("6").style.backgroundColor = "hsl(45, 7%, 89%)";
        document.getElementById("6").style.color = "hsl(60, 10%, 19%)";
        document.getElementById("6").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
        document.getElementById("6").addEventListener("mouseover",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("6").style.backgroundColor = "hsl(35, 11%, 61%)";
                document.getElementById("6").style.color = "white";
                document.getElementById("6").style.boxShadow = "0px 5px hsl(45, 7%, 89%)";
            }
        });
        document.getElementById("6").addEventListener("mouseout",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("6").style.backgroundColor = "hsl(45, 7%, 89%)";
                document.getElementById("6").style.color = "hsl(60, 10%, 19%)";
                document.getElementById("6").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
            }
        });
        document.getElementById("+").style.backgroundColor = "hsl(45, 7%, 89%)";
        document.getElementById("+").style.color = "hsl(60, 10%, 19%)";
        document.getElementById("+").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
        document.getElementById("+").addEventListener("mouseover",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("+").style.backgroundColor = "hsl(35, 11%, 61%)";
                document.getElementById("+").style.color = "white";
                document.getElementById("+").style.boxShadow = "0px 5px hsl(45, 7%, 89%)";
            }
        });
        document.getElementById("+").addEventListener("mouseout",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("+").style.backgroundColor = "hsl(45, 7%, 89%)";
                document.getElementById("+").style.color = "hsl(60, 10%, 19%)";
                document.getElementById("+").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
            }
        });
        document.getElementById("1").style.backgroundColor = "hsl(45, 7%, 89%)";
        document.getElementById("1").style.color = "hsl(60, 10%, 19%)";
        document.getElementById("1").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
        document.getElementById("1").addEventListener("mouseover",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("1").style.backgroundColor = "hsl(35, 11%, 61%)";
                document.getElementById("1").style.color = "white";
                document.getElementById("1").style.boxShadow = "0px 5px hsl(45, 7%, 89%)";
            }
        });
        document.getElementById("1").addEventListener("mouseout",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("1").style.backgroundColor = "hsl(45, 7%, 89%)";
                document.getElementById("1").style.color = "hsl(60, 10%, 19%)";
                document.getElementById("1").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
            }
        });
        document.getElementById("2").style.backgroundColor = "hsl(45, 7%, 89%)";
        document.getElementById("2").style.color = "hsl(60, 10%, 19%)";
        document.getElementById("2").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
        document.getElementById("2").addEventListener("mouseover",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("2").style.backgroundColor = "hsl(35, 11%, 61%)";
                document.getElementById("2").style.color = "white";
                document.getElementById("2").style.boxShadow = "0px 5px hsl(45, 7%, 89%)";
            }
        });
        document.getElementById("2").addEventListener("mouseout",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("2").style.backgroundColor = "hsl(45, 7%, 89%)";
                document.getElementById("2").style.color = "hsl(60, 10%, 19%)";
                document.getElementById("2").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
            }
        });
        document.getElementById("3").style.backgroundColor = "hsl(45, 7%, 89%)";
        document.getElementById("3").style.color = "hsl(60, 10%, 19%)";
        document.getElementById("3").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
        document.getElementById("3").addEventListener("mouseover",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("3").style.backgroundColor = "hsl(35, 11%, 61%)";
                document.getElementById("3").style.color = "white";
                document.getElementById("3").style.boxShadow = "0px 5px hsl(45, 7%, 89%)";
            }
        });
        document.getElementById("3").addEventListener("mouseout",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("3").style.backgroundColor = "hsl(45, 7%, 89%)";
                document.getElementById("3").style.color = "hsl(60, 10%, 19%)";
                document.getElementById("3").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
            }
        });
        document.getElementById("-").style.backgroundColor = "hsl(45, 7%, 89%)";
        document.getElementById("-").style.color = "hsl(60, 10%, 19%)";
        document.getElementById("-").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
        document.getElementById("-").addEventListener("mouseover",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("-").style.backgroundColor = "hsl(35, 11%, 61%)";
                document.getElementById("-").style.color = "white";
                document.getElementById("-").style.boxShadow = "0px 5px hsl(45, 7%, 89%)";
            }
        });
        document.getElementById("-").addEventListener("mouseout",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("-").style.backgroundColor = "hsl(45, 7%, 89%)";
                document.getElementById("-").style.color = "hsl(60, 10%, 19%)";
                document.getElementById("-").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
            }
        });
        document.getElementById(".").style.backgroundColor = "hsl(45, 7%, 89%)";
        document.getElementById(".").style.color = "hsl(60, 10%, 19%)";
        document.getElementById(".").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
        document.getElementById(".").addEventListener("mouseover",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById(".").style.backgroundColor = "hsl(35, 11%, 61%)";
                document.getElementById(".").style.color = "white";
                document.getElementById(".").style.boxShadow = "0px 5px hsl(45, 7%, 89%)";
            }
        });
        document.getElementById(".").addEventListener("mouseout",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById(".").style.backgroundColor = "hsl(45, 7%, 89%)";
                document.getElementById(".").style.color = "hsl(60, 10%, 19%)";
                document.getElementById(".").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
            }
        });
        document.getElementById("0").style.backgroundColor = "hsl(45, 7%, 89%)";
        document.getElementById("0").style.color = "hsl(60, 10%, 19%)";
        document.getElementById("0").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
        document.getElementById("0").addEventListener("mouseover",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("0").style.backgroundColor = "hsl(35, 11%, 61%)";
                document.getElementById("0").style.color = "white";
                document.getElementById("0").style.boxShadow = "0px 5px hsl(45, 7%, 89%)";
            }
        });
        document.getElementById("0").addEventListener("mouseout",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("0").style.backgroundColor = "hsl(45, 7%, 89%)";
                document.getElementById("0").style.color = "hsl(60, 10%, 19%)";
                document.getElementById("0").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
            }
        });
        document.getElementById("/").style.backgroundColor = "hsl(45, 7%, 89%)";
        document.getElementById("/").style.color = "hsl(60, 10%, 19%)";
        document.getElementById("/").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
        document.getElementById("/").addEventListener("mouseover",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("/").style.backgroundColor = "hsl(35, 11%, 61%)";
                document.getElementById("/").style.color = "white";
                document.getElementById("/").style.boxShadow = "0px 5px hsl(45, 7%, 89%)";
            }
        });
        document.getElementById("/").addEventListener("mouseout",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("/").style.backgroundColor = "hsl(45, 7%, 89%)";
                document.getElementById("/").style.color = "hsl(60, 10%, 19%)";
                document.getElementById("/").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
            }
        });
        document.getElementById("*").style.backgroundColor = "hsl(45, 7%, 89%)";
        document.getElementById("*").style.color = "hsl(60, 10%, 19%)";
        document.getElementById("*").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
        document.getElementById("*").addEventListener("mouseover",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("*").style.backgroundColor = "hsl(35, 11%, 61%)";
                document.getElementById("*").style.color = "white";
                document.getElementById("*").style.boxShadow = "0px 5px hsl(45, 7%, 89%)";
            }
        });
        document.getElementById("*").addEventListener("mouseout",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("*").style.backgroundColor = "hsl(45, 7%, 89%)";
                document.getElementById("*").style.color = "hsl(60, 10%, 19%)";
                document.getElementById("*").style.boxShadow = "0px 5px hsl(35, 11%, 61%)";
            }
        });
        document.getElementById("RESET").style.backgroundColor = "hsl(185, 42%, 37%)";
        document.getElementById("RESET").style.color = "white";
        document.getElementById("RESET").style.boxShadow = "0px 5px hsl(185, 58%, 25%)";
        document.getElementById("RESET").addEventListener("mouseover",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("RESET").style.backgroundColor = "hsl(185, 58%, 25%)";
                document.getElementById("RESET").style.color = "white";
                document.getElementById("RESET").style.boxShadow = "0px 5px hsl(185, 42%, 37%)";
            }
        });
        document.getElementById("RESET").addEventListener("mouseout",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("RESET").style.backgroundColor = "hsl(185, 42%, 37%)";
                document.getElementById("RESET").style.color = "white";
                document.getElementById("RESET").style.boxShadow = "0px 5px hsl(185, 58%, 25%)";
            }
        });
        document.getElementById("igual").style.backgroundColor = "hsl(25, 98%, 40%)";
        document.getElementById("igual").style.color = "white";
        document.getElementById("igual").style.boxShadow = "0px 5px hsl(25, 99%, 27%)";
        document.getElementById("igual").addEventListener("mouseover",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("igual").style.backgroundColor = "hsl(25, 99%, 27%)";
                document.getElementById("igual").style.color = "white";
                document.getElementById("igual").style.boxShadow = "0px 5px hsl(25, 98%, 40%)";
            }
        });
        document.getElementById("igual").addEventListener("mouseout",function(){
            if ($("#t2").hasClass("active_theme")){
                document.getElementById("igual").style.backgroundColor = "hsl(25, 98%, 40%)";
                document.getElementById("igual").style.color = "white";
                document.getElementById("igual").style.boxShadow = "0px 5px hsl(25, 99%, 27%)";
            }
        });
    }else if (id=='t3'){
        document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
        document.getElementById("main_container").style.backgroundColor = "hsl(268, 75%, 9%)";
        if ($("#t3").hasClass("active_theme")){
            document.getElementById("t3").style.backgroundColor = "hsl(176, 100%, 44%)";
            document.getElementById("t3").style.color = "black";
        }
        $("#t1").removeClass("active_theme");
        document.getElementById("t1").style.backgroundColor = "hsl(268, 71%, 12%)";
        document.getElementById("t1").style.color = "hsl(52, 100%, 62%)";
        $("#t2").removeClass("active_theme");
        document.getElementById("t2").style.backgroundColor = "hsl(268, 71%, 12%)";
        document.getElementById("t2").style.color = "hsl(52, 100%, 62%)";
        document.getElementById("top_container").style.backgroundColor = "hsl(268, 75%, 9%)";
        document.getElementById("calc_title").style.color="hsl(52, 100%, 62%)";
        document.getElementById("theme_title").style.color="hsl(52, 100%, 62%)";
        document.getElementById("t1").addEventListener("mouseover", function() {
            if ($("#t1").hasClass("active_theme")){
                
            }
            else{
                document.getElementById("t1").style.backgroundColor = "hsl(268, 75%, 9%)";
                document.getElementById("t1").style.color = "hsl(176, 100%, 44%)";
            }
        });   
        document.getElementById("t1").addEventListener("mouseout", function() {
            if ($("#t1").hasClass("active_theme")){
                
            }
            else{
                document.getElementById("t1").style.backgroundColor = "hsl(268, 71%, 12%)";
                document.getElementById("t1").style.color = "hsl(52, 100%, 62%)";
            }
        });
        document.getElementById("t2").addEventListener("mouseover", function() {
            if ($("#t2").hasClass("active_theme")){
                
            }
            else{
                document.getElementById("t2").style.backgroundColor = "hsl(268, 75%, 9%)";
                document.getElementById("t2").style.color = "hsl(176, 100%, 44%)";
            }
        });   
        document.getElementById("t2").addEventListener("mouseout", function() {
            if ($("#t2").hasClass("active_theme")){
                
            }
            else{
                document.getElementById("t2").style.backgroundColor = "hsl(268, 71%, 12%)";
                document.getElementById("t2").style.color = "hsl(52, 100%, 62%)";
            }
        });
        document.getElementById("mid_container").style.backgroundColor = "hsl(268, 71%, 12%)";
        document.getElementById("screen_number").style.color = "hsl(52, 100%, 62%)";
        document.getElementById("bot_container").style.backgroundColor = "hsl(268, 71%, 12%)";
        document.getElementById("7").style.backgroundColor = "hsl(268, 47%, 21%)";
        document.getElementById("7").style.color = "hsl(52, 100%, 62%)";
        document.getElementById("7").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
        document.getElementById("7").addEventListener("mouseover",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("7").style.backgroundColor = "hsl(290, 70%, 36%)";
                document.getElementById("7").style.color = "white";
                document.getElementById("7").style.boxShadow = "0px 5px hsl(268, 47%, 21%)";
            }
        });
        document.getElementById("7").addEventListener("mouseout",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("7").style.backgroundColor = "hsl(268, 47%, 21%)";
                document.getElementById("7").style.color = "hsl(52, 100%, 62%)";
                document.getElementById("7").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
            }
        });
        document.getElementById("8").style.backgroundColor = "hsl(268, 47%, 21%)";
        document.getElementById("8").style.color = "hsl(52, 100%, 62%)";
        document.getElementById("8").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
        document.getElementById("8").addEventListener("mouseover",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("8").style.backgroundColor = "hsl(290, 70%, 36%)";
                document.getElementById("8").style.color = "white";
                document.getElementById("8").style.boxShadow = "0px 5px hsl(268, 47%, 21%)";
            }
        });
        document.getElementById("8").addEventListener("mouseout",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("8").style.backgroundColor = "hsl(268, 47%, 21%)";
                document.getElementById("8").style.color = "hsl(52, 100%, 62%)";
                document.getElementById("8").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
            }
        });
        document.getElementById("9").style.backgroundColor = "hsl(268, 47%, 21%)";
        document.getElementById("9").style.color = "hsl(52, 100%, 62%)";
        document.getElementById("9").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
        document.getElementById("9").addEventListener("mouseover",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("9").style.backgroundColor = "hsl(290, 70%, 36%)";
                document.getElementById("9").style.color = "white";
                document.getElementById("9").style.boxShadow = "0px 5px hsl(268, 47%, 21%)";
            }
        });
        document.getElementById("9").addEventListener("mouseout",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("9").style.backgroundColor = "hsl(268, 47%, 21%)";
                document.getElementById("9").style.color = "hsl(52, 100%, 62%)";
                document.getElementById("9").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
            }
        });
        document.getElementById("DEL").style.backgroundColor = "hsl(281, 89%, 26%)";
        document.getElementById("DEL").style.color = "white";
        document.getElementById("DEL").style.boxShadow = "0px 5px hsl(285, 91%, 52%)";
        document.getElementById("DEL").addEventListener("mouseover",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("DEL").style.backgroundColor = "hsl(285, 91%, 52%)";
                document.getElementById("DEL").style.color = "white";
                document.getElementById("DEL").style.boxShadow = "0px 5px hsl(281, 89%, 26%)";
            }
        });
        document.getElementById("DEL").addEventListener("mouseout",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("DEL").style.backgroundColor = "hsl(281, 89%, 26%)";
                document.getElementById("DEL").style.color = "white";
                document.getElementById("DEL").style.boxShadow = "0px 5px hsl(285, 91%, 52%)";
            }
        });
        document.getElementById("4").style.backgroundColor = "hsl(268, 47%, 21%)";
        document.getElementById("4").style.color = "hsl(52, 100%, 62%)";
        document.getElementById("4").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
        document.getElementById("4").addEventListener("mouseover",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("4").style.backgroundColor = "hsl(290, 70%, 36%)";
                document.getElementById("4").style.color = "white";
                document.getElementById("4").style.boxShadow = "0px 5px hsl(268, 47%, 21%)";
            }
        });
        document.getElementById("4").addEventListener("mouseout",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("4").style.backgroundColor = "hsl(268, 47%, 21%)";
                document.getElementById("4").style.color = "hsl(52, 100%, 62%)";
                document.getElementById("4").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
            }
        });
        document.getElementById("5").style.backgroundColor = "hsl(268, 47%, 21%)";
        document.getElementById("5").style.color = "hsl(52, 100%, 62%)";
        document.getElementById("5").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
        document.getElementById("5").addEventListener("mouseover",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("5").style.backgroundColor = "hsl(290, 70%, 36%)";
                document.getElementById("5").style.color = "white";
                document.getElementById("5").style.boxShadow = "0px 5px hsl(268, 47%, 21%)";
            }
        });
        document.getElementById("5").addEventListener("mouseout",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("5").style.backgroundColor = "hsl(268, 47%, 21%)";
                document.getElementById("5").style.color = "hsl(52, 100%, 62%)";
                document.getElementById("5").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
            }
        });
        document.getElementById("6").style.backgroundColor = "hsl(268, 47%, 21%)";
        document.getElementById("6").style.color = "hsl(52, 100%, 62%)";
        document.getElementById("6").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
        document.getElementById("6").addEventListener("mouseover",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("6").style.backgroundColor = "hsl(290, 70%, 36%)";
                document.getElementById("6").style.color = "white";
                document.getElementById("6").style.boxShadow = "0px 5px hsl(268, 47%, 21%)";
            }
        });
        document.getElementById("6").addEventListener("mouseout",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("6").style.backgroundColor = "hsl(268, 47%, 21%)";
                document.getElementById("6").style.color = "hsl(52, 100%, 62%)";
                document.getElementById("6").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
            }
        });
        document.getElementById("+").style.backgroundColor = "hsl(268, 47%, 21%)";
        document.getElementById("+").style.color = "hsl(52, 100%, 62%)";
        document.getElementById("+").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
        document.getElementById("+").addEventListener("mouseover",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("+").style.backgroundColor = "hsl(290, 70%, 36%)";
                document.getElementById("+").style.color = "white";
                document.getElementById("+").style.boxShadow = "0px 5px hsl(268, 47%, 21%)";
            }
        });
        document.getElementById("+").addEventListener("mouseout",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("+").style.backgroundColor = "hsl(268, 47%, 21%)";
                document.getElementById("+").style.color = "hsl(52, 100%, 62%)";
                document.getElementById("+").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
            }
        });
        document.getElementById("1").style.backgroundColor = "hsl(268, 47%, 21%)";
        document.getElementById("1").style.color = "hsl(52, 100%, 62%)";
        document.getElementById("1").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
        document.getElementById("1").addEventListener("mouseover",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("1").style.backgroundColor = "hsl(290, 70%, 36%)";
                document.getElementById("1").style.color = "white";
                document.getElementById("1").style.boxShadow = "0px 5px hsl(268, 47%, 21%)";
            }
        });
        document.getElementById("1").addEventListener("mouseout",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("1").style.backgroundColor = "hsl(268, 47%, 21%)";
                document.getElementById("1").style.color = "hsl(52, 100%, 62%)";
                document.getElementById("1").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
            }
        });
        document.getElementById("2").style.backgroundColor = "hsl(268, 47%, 21%)";
        document.getElementById("2").style.color = "hsl(52, 100%, 62%)";
        document.getElementById("2").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
        document.getElementById("2").addEventListener("mouseover",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("2").style.backgroundColor = "hsl(290, 70%, 36%)";
                document.getElementById("2").style.color = "white";
                document.getElementById("2").style.boxShadow = "0px 5px hsl(268, 47%, 21%)";
            }
        });
        document.getElementById("2").addEventListener("mouseout",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("2").style.backgroundColor = "hsl(268, 47%, 21%)";
                document.getElementById("2").style.color = "hsl(52, 100%, 62%)";
                document.getElementById("2").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
            }
        });
        document.getElementById("3").style.backgroundColor = "hsl(268, 47%, 21%)";
        document.getElementById("3").style.color = "hsl(52, 100%, 62%)";
        document.getElementById("3").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
        document.getElementById("3").addEventListener("mouseover",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("3").style.backgroundColor = "hsl(290, 70%, 36%)";
                document.getElementById("3").style.color = "white";
                document.getElementById("3").style.boxShadow = "0px 5px hsl(268, 47%, 21%)";
            }
        });
        document.getElementById("3").addEventListener("mouseout",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("3").style.backgroundColor = "hsl(268, 47%, 21%)";
                document.getElementById("3").style.color = "hsl(52, 100%, 62%)";
                document.getElementById("3").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
            }
        });
        document.getElementById("-").style.backgroundColor = "hsl(268, 47%, 21%)";
        document.getElementById("-").style.color = "hsl(52, 100%, 62%)";
        document.getElementById("-").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
        document.getElementById("-").addEventListener("mouseover",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("-").style.backgroundColor = "hsl(290, 70%, 36%)";
                document.getElementById("-").style.color = "white";
                document.getElementById("-").style.boxShadow = "0px 5px hsl(268, 47%, 21%)";
            }
        });
        document.getElementById("-").addEventListener("mouseout",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("-").style.backgroundColor = "hsl(268, 47%, 21%)";
                document.getElementById("-").style.color = "hsl(52, 100%, 62%)";
                document.getElementById("-").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
            }
        });
        document.getElementById(".").style.backgroundColor = "hsl(268, 47%, 21%)";
        document.getElementById(".").style.color = "hsl(52, 100%, 62%)";
        document.getElementById(".").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
        document.getElementById(".").addEventListener("mouseover",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById(".").style.backgroundColor = "hsl(290, 70%, 36%)";
                document.getElementById(".").style.color = "white";
                document.getElementById(".").style.boxShadow = "0px 5px hsl(268, 47%, 21%)";
            }
        });
        document.getElementById(".").addEventListener("mouseout",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById(".").style.backgroundColor = "hsl(268, 47%, 21%)";
                document.getElementById(".").style.color = "hsl(52, 100%, 62%)";
                document.getElementById(".").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
            }
        });
        document.getElementById("0").style.backgroundColor = "hsl(268, 47%, 21%)";
        document.getElementById("0").style.color = "hsl(52, 100%, 62%)";
        document.getElementById("0").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
        document.getElementById("0").addEventListener("mouseover",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("0").style.backgroundColor = "hsl(290, 70%, 36%)";
                document.getElementById("0").style.color = "white";
                document.getElementById("0").style.boxShadow = "0px 5px hsl(268, 47%, 21%)";
            }
        });
        document.getElementById("0").addEventListener("mouseout",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("0").style.backgroundColor = "hsl(268, 47%, 21%)";
                document.getElementById("0").style.color = "hsl(52, 100%, 62%)";
                document.getElementById("0").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
            }
        });
        document.getElementById("/").style.backgroundColor = "hsl(268, 47%, 21%)";
        document.getElementById("/").style.color = "hsl(52, 100%, 62%)";
        document.getElementById("/").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
        document.getElementById("/").addEventListener("mouseover",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("/").style.backgroundColor = "hsl(290, 70%, 36%)";
                document.getElementById("/").style.color = "white";
                document.getElementById("/").style.boxShadow = "0px 5px hsl(268, 47%, 21%)";
            }
        });
        document.getElementById("/").addEventListener("mouseout",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("/").style.backgroundColor = "hsl(268, 47%, 21%)";
                document.getElementById("/").style.color = "hsl(52, 100%, 62%)";
                document.getElementById("/").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
            }
        });
        document.getElementById("*").style.backgroundColor = "hsl(268, 47%, 21%)";
        document.getElementById("*").style.color = "hsl(52, 100%, 62%)";
        document.getElementById("*").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
        document.getElementById("*").addEventListener("mouseover",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("*").style.backgroundColor = "hsl(290, 70%, 36%)";
                document.getElementById("*").style.color = "white";
                document.getElementById("*").style.boxShadow = "0px 5px hsl(268, 47%, 21%)";
            }
        });
        document.getElementById("*").addEventListener("mouseout",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("*").style.backgroundColor = "hsl(268, 47%, 21%)";
                document.getElementById("*").style.color = "hsl(52, 100%, 62%)";
                document.getElementById("*").style.boxShadow = "0px 5px hsl(290, 70%, 36%)";
            }
        });
        document.getElementById("RESET").style.backgroundColor = "hsl(281, 89%, 26%)";
        document.getElementById("RESET").style.color = "white";
        document.getElementById("RESET").style.boxShadow = "0px 5px hsl(285, 91%, 52%)";
        document.getElementById("RESET").addEventListener("mouseover",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("RESET").style.backgroundColor = "hsl(285, 91%, 52%)";
                document.getElementById("RESET").style.color = "white";
                document.getElementById("RESET").style.boxShadow = "0px 5px hsl(281, 89%, 26%)";
            }
        });
        document.getElementById("RESET").addEventListener("mouseout",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("RESET").style.backgroundColor = "hsl(281, 89%, 26%)";
                document.getElementById("RESET").style.color = "white";
                document.getElementById("RESET").style.boxShadow = "0px 5px hsl(285, 91%, 52%)";
            }
        });
        document.getElementById("igual").style.backgroundColor = "hsl(176, 100%, 44%)";
        document.getElementById("igual").style.color = "hsl(198, 20%, 13%)";
        document.getElementById("igual").style.boxShadow = "0px 5px hsl(177, 92%, 70%)";
        document.getElementById("igual").addEventListener("mouseover",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("igual").style.backgroundColor = "hsl(177, 92%, 70%)";
                document.getElementById("igual").style.color = "black";
                document.getElementById("igual").style.boxShadow = "0px 5px hsl(176, 100%, 44%)";
            }
        });
        document.getElementById("igual").addEventListener("mouseout",function(){
            if ($("#t3").hasClass("active_theme")){
                document.getElementById("igual").style.backgroundColor = "hsl(176, 100%, 44%)";
                document.getElementById("igual").style.color = "hsl(198, 20%, 13%)";
                document.getElementById("igual").style.boxShadow = "0px 5px hsl(177, 92%, 70%)";
            }
        });
    }
}

document.getElementById("t1").addEventListener("click",changeTheme);
document.getElementById("t2").addEventListener("click",changeTheme);
document.getElementById("t3").addEventListener("click",changeTheme);

var operation=[];
var result=[];

array=['1','2','3','4','5','6','7','8','9','0','.','/','*','-','+']
numeros=['1','2','3','4','5','6','7','8','9','0','.']
signos=['/','*','-','+']

document.addEventListener("keypress", function(event) {
    if (array.includes(event.key)){
        buttonAnimation(event.key);
        if(operation.length<15){
            operation.push(event.key);
            console.log(operation);
            $("#screen_number").text(operation.join(""));
        }
    }
});

function buttonAnimation(currentKey) {
    var activeButton = document.getElementById(currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
}

document.addEventListener("keydown", function(event) {
    console.log(event.which);
    if (event.which==8){
        operation.pop();
        console.log(operation);
        $("#screen_number").text(operation.join(""));
        if(operation.length==0){
            $("#screen_number").text('0');
        }
        buttonAnimation("DEL");
    }
    
})

document.addEventListener("keydown", function(event) {
    console.log(event.which);
    if (event.which==13){
        buttonAnimation("igual");
        console.log(event);
        resolver();
    }
    
})

var numberOfKeys = document.querySelectorAll(".key").length;

for (var i = 0; i < numberOfKeys; i++) {
    document.querySelectorAll(".key")[i].addEventListener("click", function() {
        if(this.innerHTML=='='){
            var buttonInnerHTML = 'igual';
            resolver();
        }else{
            var buttonInnerHTML = this.innerHTML;
            if(buttonInnerHTML=='DEL'){
                operation.pop();
                console.log(operation);
                $("#screen_number").text(operation.join(""));
                if(operation.length==0){
                    $("#screen_number").text('0');
                }
            }else if (buttonInnerHTML=='RESET'){
                operation=[];
                console.log(operation);
                $("#screen_number").text('0');
            }else{
                if(operation.length<15){
                    operation.push(buttonInnerHTML);
                    console.log(operation);
                    $("#screen_number").text(operation.join(""));
                }
            }
        }
        buttonAnimation(buttonInnerHTML);
    });
}

num=[];

function resolver(){
    var error=0;
    result=[];
    for(var i=0; i<operation.length; i++){
        if(numeros.includes(operation[i])){
            num.push(operation[i]);
        }else{
            if (num.length>0){
                result.push(num.join(""));
            }
            result.push(operation[i]);
            num=[];
        }
        if(i==operation.length-1){
            if(numeros.includes(operation[i])){
                result.push(num.join(""));
                num=[];
            }else{
                error=1;
            }
        }
    }
    console.log(result);
    for(var i=0;i<result.length;i=i+2){
        if(signos.includes(result[i])){
            error=1;
        }
    }
    for(var i=1;i<result.length;i=i+2){
        if(signos.includes(result[i])){
            
        }else{
            error=1;
        }
    }
    if(result.length<3){
        error=1;
    }
    var num1=0;
    var op_size=result.length;
    if (error==0){
        for(var i=1;i<op_size;i=i+2){
            if(i<result.length){
                if(result[i]=='/'){
                    num1=parseFloat(result[i-1])/parseFloat(result[i+1]);
                    result.splice(i-1,3,num1.toString());
                    i=i-2;
                    continue;
                }
                if(result[i]=='*'){
                    num1=parseFloat(result[i-1])*parseFloat(result[i+1]);
                    result.splice(i-1,3,num1.toString());
                    i=i-2;
                }
            }  
        }
        for(var i=1;i<op_size;i=i+2){
            if(i<result.length){
                if(result[i]=='-'){
                    num1=parseFloat(result[i-1])-parseFloat(result[i+1]);
                    result.splice(i-1,3,num1.toString());
                    i=i-2;
                    continue;
                }
                if(result[i]=='+'){
                    num1=parseFloat(result[i-1])+parseFloat(result[i+1]);
                    result.splice(i-1,3,num1.toString());
                    i=i-2;
                }
            }  
        }
    }
    console.log(result);
    if(result.length>1){
        switch(result[1]){
            case '*': num1=parseFloat(result[0])*parseFloat(result[2]);result.splice(0,3,num1.toString());break;
            case '/': num1=parseFloat(result[0])/parseFloat(result[2]);result.splice(0,3,num1.toString());break;
            case '+': num1=parseFloat(result[0])+parseFloat(result[2]);result.splice(0,3,num1.toString());break;
            case '-': num1=parseFloat(result[0])-parseFloat(result[2]);result.splice(0,3,num1.toString());break;
            
        }
    }
    console.log(result);
    console.log(num1);
    console.log(error);
    if(error==0){
        $("#screen_number").text(num1);
    }else{
        $("#screen_number").text("Syntax Error");
    }
    operation=[];
}

