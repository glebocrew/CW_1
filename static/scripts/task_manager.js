var tasks;
if (localStorage.tasks != undefined && localStorage.tasks[0] != "") {
    tasks = localStorage.tasks.split(sep=",");
    console.log(tasks);

} else{
    tasks = []
}

var button = document.querySelector(".add_task");
var task_input = document.querySelector(".task_add");

function update(){
    console.log(tasks);
    var i = 0;
    // console.log(tasks);
    document.querySelector(".tasks").replaceChildren();
    tasks.forEach(task => {
        if (task == ""){
            return;
        } 
        var current = document.createElement("task");
        var del_button = document.createElement("del-task")

        current.id = "task-" + i;
        current.className = "task";
        current.textContent = "task_" + i + ". " + task;


        del_button.className = "del-task";
        del_button.textContent = "manager.del_task()";
        del_button.tagName = "button";
        del_button.addEventListener("click", () => {
            tasks.splice(tasks.indexOf(task), 1);
            update();
            console.log(tasks.indexOf(task));
            console.log(tasks);
        });
        document.querySelector(".tasks").appendChild(current);
        document.querySelector("#" + current.id).appendChild(del_button);

        task_input.value = "";
        ++i;
    });
    localStorage.tasks = tasks;
}


function add(element){
    tasks.push(element);
    update();
};

function del(i){
    del_task_element(i);
    update()
};


button.addEventListener("click", () => {

    if (task_input.value != "") {

        
        add(task_input.value);
        update();
        
        //     document.querySelector(".tasks").replaceChildren();
        //     tasks.forEach(task => {
        //         var current = document.createElement("task");
        //         var del_button = document.createElement("del-task")
    
        //         current.id = "task-" + i;
        //         current.className = "task";
        //         current.textContent = "task_" + i + ". " + task;
    
        //         del_button.className = "del-task";
        //         del_button.textContent = "manager.del_task()";
        //         del_button.tagName = "button";
        //         del_button.addEventListener("click", () => {
        //             tasks = del_task_element(i);
        //             update();
        //             console.log(tasks);
        //         });
    
        //         document.querySelector(".tasks").appendChild(current);
        //         document.querySelector("#" + current.id).appendChild(del_button);
    
        //         task_input.value = "";
        //         ++i;
        //     });
        // }
    }});
    
update();