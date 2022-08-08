const reshape = () => {
     let rotatables = document.getElementsByClassName("rotating")[0].children;
     for(let i = 0; i < rotatables.length;i++){
        let num = Math.floor(Math.random() * 350 + 10); ;
        rotatables[i].setAttribute("style","transform: rotate(rtdeg)".replace("rt",num))
     }
     return rotatables;
}
const init = (num_rotateables) => {
    let r = document.getElementsByClassName("rotating")[0];
    for(let i = 0; i < num_rotateables;i++)
        r.innerHTML += '<img src="./static/rt.png" lazy>'
}
init(5)
setInterval(reshape,200);


const getUser = (u) => {
  return fetch(`https://api.github.com/users/${u}`)
  .then(response => response.json())
  .then(response => {
      return response;
  })
}

const meongithub = (getUser("thelastnob0dy"))
meongithub.then(x => {
  document.getElementsByClassName("description")[0].children[0].innerHTML = (x["bio"])
})

document.getElementsByClassName("contact")[0].addEventListener("click",() => {
  window.location = "https://discord.gg/a4xtXfURpS"
})