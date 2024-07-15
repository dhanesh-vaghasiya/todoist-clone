
reloadJS()
// Define a function to reload or re-run your JavaScript logic
function reloadJS() {
    
    if (window.innerWidth<960){
        document.querySelector("#nav-menu").style.display = "none"
        document.querySelector("#nav-menu-btn").style.display = "inline"
    } else {
        
        document.querySelector("#nav-menu").style.display = "flex"
        document.querySelector("#nav-menu-btn").style.display = "none"
    }

    document.querySelector("#nav-resourse-btn").addEventListener('mousemove', ()=>{
        console.log("DJfldfkdjhjjj")
        document.querySelector("#menu-extra-list").style.display = "block"
    })
    
    
    document.querySelector("#nav-resourse-btn").addEventListener('mouseleave', ()=>{
        console.log("DJfldfkdjhjjj")
        document.querySelector("#menu-extra-list").style.display = "none"

    })

}

// Add event listener for window resize
window.addEventListener('resize', function() {
    // Call your reloadJS function here
    reloadJS();
});