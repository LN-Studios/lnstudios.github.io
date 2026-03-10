console.log("hai :3");

const header = document.getElementById("header");
const footer = document.getElementById("footer");

header.innerHTML = `
<div>
  <h1>
    <a href="index.html"
      ><img
        src="images/logo_v1-1.png"
        width="120"
        height="120"
        alt="LN Studios"
    /></a>
    LN Studios
  </h1>
  <nav id="nav">
    <ul>
      <li>
        <a href="index.html">Home</a>
      </li>
      <li>
        <a href="about.html">About Me</a>
      </li>
      <li>
        <a href="socials.html">Socials</a>
      </li>
      <li>
        <a href="projects.html">Projects</a>
      </li>
    </ul>
  </nav>
</div>

`;

footer.innerHTML = `
  <div>
    <p>This website was made from scratch without the use of any generative AI</p>
    <p>Last updated 3/9/2026</p>
  </div>

`;
