let count = 0;

const value = document.querySelector("#countLabel");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decreaseBtn")){
            count--;
        }
        else if(styles.contains("increaseBtn")){
            count++;
        }
        else{
            count=0;
        }

        if(count > 0){
            value.style.color = "green";
        }
        else if(count<0){
            value.style.color = "red";
        }
        else{
            value.style.color = "#222"
        }
        value.textContent=count;

        
    })
})
