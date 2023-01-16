
function addRow() {
    var body = document.getElementById('tblBody');
    var row = document.getElementById('content');
    var clone = row.cloneNode(true);
    clone.style.display = "";
    body.appendChild(clone);
    // var buttonEditSave = clone.children[3].children[0];
    // toggleModify(buttonEditSave);

}

function toggleModify(e) {
    var button = e.target;
    var row = button.parentElement.parentElement;
    var inputGoal = row.children[0].firstChild;
    var inputGoal1 = row.children[1].firstChild;
    var inputGoal2 = row.children[2].firstChild;
    inputGoal.readOnly = !inputGoal.readOnly; 
    inputGoal1.readOnly = !inputGoal1.readOnly; 
    inputGoal2.readOnly = !inputGoal2.readOnly;
    if (!inputGoal.readOnly) {
        inputGoal.classList.add('inputEdit');
        inputGoal1.classList.add('inputEdit');
        inputGoal2.classList.add('inputEdit');
    } else {
        inputGoal.classList.remove('inputEdit');
        inputGoal1.classList.remove('inputEdit');
        inputGoal2.classList.remove('inputEdit');
    }
    button.innerText = button.innerText == "Edit"? "Save" :"Edit";
    var tasks = row.children[3].lastChild;
    tasks.innerText = tasks.innerText == "View Tasks"? "TEST": "View Tasks";
    
}
function removeRow(button) {
    button.parentElement.parentElement.remove();
}

function addTask(e){
    var body = document.getElementById('tblBody');
    var row = document.getElementById('addTask');
    var clone = row.cloneNode(true);
    clone.style.display = "";
    e.target.parentElement.nextSibling.parentNode.insertBefore(clone, e.target.parentElement.nextSibling.nextSibling);
}