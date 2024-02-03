const edugit = document.getElementById("github");
const edulive = document.getElementById("project1-git");

const bangit = document.getElementById("github2");
const banlive = document.getElementById("project2-git");

const blogit = document.getElementById("github3");
const blolive = document.getElementById("project3-git");

function openInNewTab(url) {
    window.open(url, '_blank');
}

edugit.addEventListener("click", () => {
    openInNewTab("https://github.com/imlnr/software-kalaakar-5678")
});
edulive.addEventListener("click", () => {
    openInNewTab("https://cw-p5.netlify.app/")
})

bangit.addEventListener("click", () => {
    openInNewTab("https://github.com/bsaha12/pixel-pioneer-7654")
})
banlive.addEventListener("click", () => {
    openInNewTab("https://pixel-pioneer-7654.netlify.app/")
})

blogit.addEventListener("click", () => {
    openInNewTab("https://github.com/anshukumari181405/overwought-skin")
})
blolive.addEventListener("click", () => {
    openInNewTab("https://software-kalaakar-5678.netlify.app/")
})
