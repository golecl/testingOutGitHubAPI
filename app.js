//import Octokit from "./.github/actions-scripts/use-the-api.mjs";

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});

const octokit = new Octokit({ 
    auth: 'YOUR-TOKEN',
  });

const grapher = document.querySelector('.req');

grapher.addEventListener('click', function(){
    const graphData = octokit.request("GET /repos/{owner}/{repo}/commits", {
        owner: "golecl",
        repo: "testingOutGitHubAPI"
      });
    console.log(graphData)
});