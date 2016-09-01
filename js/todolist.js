function addTask() {

    var newTaskInput = document.form1.task.value;
    //bruker name-attr. til elementene. Finnes andre måter også.

    var theList = document.getElementById("theList");
    var label = document.createElement("label");
    theList.appendChild(label);

    var inputElement = document.createElement("input");	//lager en ny <input>
    label.appendChild(inputElement);

    var attribute = document.createAttribute("type");
    attribute.value = "checkbox";
    inputElement.setAttributeNode(attribute);			//setter attribute til <input>. (Kan visst også bare bruke elem.setAttribute("type", "value"))

    var node = document.createTextNode(newTaskInput);	//denne lager bare tekst
    label.appendChild(node);							//legger den teksten inni <label>

    var br = document.createElement("br");
    label.appendChild(br);
};

function clearTasks() {

    var theList = document.getElementById("theList");

    var numberOfLabels = theList.getElementsByTagName("label").length;

    for (var i = 0; i < numberOfLabels; i++) {
        if (theList.getElementsByTagName("input").item(i).checked === true) {
            var checkedTask = theList.getElementsByTagName("label").item(i);
            theList.removeChild(checkedTask);			//fjerner et elem, alle hopper en index tilbake
            numberOfLabels -= 1;
            i -= 1;
        };

    };

};
