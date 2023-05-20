const rateItems = document.querySelectorAll(".middle nav");
const btnEl = document.querySelector(".ctn");
const contEl= document.querySelector(".container");
const showEl = document.querySelector(".sec-container");
const resultEl = document.querySelector("h5")
let timeout; 

rateItems.forEach((rateItem)=>{

    rateItem.addEventListener("click", ()=>{
      /*   rateItem.textContent.style.color="white"; */
        //! will result  in a TypeError since  the style property cannot be set on a string;
        rateItem.style.backgroundColor= "white";
        resultEl.innerText = `You selected ${rateItem.textContent} out of 5`;
      clearTimeout(timeout);
      timeout = setTimeout(()=>{
        rateItem.style.backgroundColor= "";
        
      }, 5000)
 
      
     
    });
});

 btnEl.addEventListener("click", function(){
    if (showEl.style.display === "block") {
        showEl.style.display = "none";
        contEl.style.display = "block";
    } else {
        showEl.style.display = "block";
        contEl.style.display = "none";
    }
});

//! The following code uses event delegation which is the best practice  since it can improve performance and modularity
/* const rateContainer = document.querySelector(".middle nav");
rateContainer.addEventListener("click", (event) => {
    if (event.target.matches(".middle nav")) {
      const rateItem = event.target;
      rateItem.style.backgroundColor= "white";
      resultEl.innerText = `You selected ${rateItem.textContent} out of 5`;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        rateItem.style.backgroundColor= "";
      }, 5000);
    }
}); */
//*when we click on a nav element, the event bubbles up to the parent container and we can use event.target to reference the actual element that was clicked. We can then perform the same logic as before.
//? We use event.target  property to determine which element triggered the event. When a user clicks  on an element the ".middle" container, the event bubbles up the DOM tree until it reaches the .middle container. At that point , the event listener attached to the .middle is triggered.