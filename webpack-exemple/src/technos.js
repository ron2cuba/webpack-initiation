import _ from 'lodash';

const result = _.compact(["aze", "", "mkjug", 0, ":jkhv"]);

const technos = [
    {id: 1, name: "Angular", details: "FrontEnd"},
    {id: 2, name: "Node", details: "Backend"},
    {id: 3, name: "React", details: "Frontend"},
    {id: 4, name: "Vue", details: "Frontend"}
]
const mainDiv = document.getElementById("main");
function display(technos){
    const divs = technos.map(techno =>{
        return `<div>${techno.id}:${techno.name} est un technologie ${techno.details}</div>`
    });
    mainDiv.innerHTML = divs.join('');
};

display(technos);