let array = [

    ["Group Id", "Project Name"],
    
    ["G6", "Develop a Software for Categorization of cases"],
    
    ["G8", "Develop a Software for Categorization of cases"],
    
    ["G41", "Crowd Sourcing model for preparing large question \
    banks"],
    
    ["G47", "Crowd Sourcing model for preparing large question \
    banks"],
    
    ["G30", "Online project platform for sharing"],
    
    ["G26", "Online project platform for sharing"],
    
    ["G33", "Centralized grievance system portal"],
    
    ["G38", "Centralized grievance system portal"]
    
    ]




let tb=document.querySelector(".array_tabl");

for(let i=0;i<array.length;i++)
{

    let tr1=document.createElement("tr");
    
    for(let j=0;j<2;j++){
        let td1=document.createElement("td");
        
        let note=document.createTextNode(array[i][j]);
        td1.appendChild(note);
        tr1.appendChild(td1);
        td1.classList.add("tdborder");

    }
    tb.appendChild(tr1);
}
tb.classList.add("tdborder");
console.log(tb.classList);