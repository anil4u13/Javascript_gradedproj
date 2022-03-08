	var divCounter = 0;
	var inputCounter = 0;
	var editBtnCounter = 0;
	document.getElementById("add_item").addEventListener("click", function (e){
		e.preventDefault();
		var item = document.getElementById("listItems").value;
		var list = document.getElementById("list");
		
		console.log(list);
			
		if(!item)
		{
			alert("enter task in to-do list");
			return;
		}
		
		var task_div = document.createElement("div");
		task_div.id = "task"+ ++divCounter;
		task_div.className="col-md-12 task_element"
		
		var task_content = document.createElement("div");
		task_content.id = "content";
		task_content.className = "col-md-6 task_content";
		
		var task_input = document.createElement("input");
		task_input.id = "task_item"+ ++inputCounter;
		task_input.className = "form-control";
		task_input.value = item;
		task_input.setAttribute("readonly", "readonly");
		
		task_content.appendChild(task_input);
		task_div.appendChild(task_content);
		
		
		var task_actions = document.createElement("div");
		task_actions.id = "actions";
		task_actions.className="col-md-6 task_actions";
		
		var edit_btn = document.createElement("button");
		edit_btn.id = "edit"+ ++editBtnCounter;
		edit_btn.className = "btn btn-success";
		edit_btn.setAttribute("onclick", "edit_operation("+task_input.id+","+edit_btn.id+")");
		edit_btn.innerHTML = "Edit";
		
		var delete_btn = document.createElement("button");
		delete_btn.id = "delete";
		delete_btn.className = "btn btn-danger";
		delete_btn.setAttribute("onclick", "delete_operation("+task_div.id+")");
		delete_btn.innerHTML = "Delete";

		
		task_actions.appendChild(edit_btn);
		task_actions.appendChild(delete_btn);
		
		task_div.appendChild(task_actions);
		list.appendChild(task_div);
	});
	
	
	function edit_operation(task_input_element, editbtn){
		task_input_element.removeAttribute("readonly");
		editbtn.innerHTML = "Save";
		editbtn.addEventListener("click", function(){
		task_input_element.setAttribute("readonly", "readonly");
		});
	}
		
	function delete_operation(task_div_element){
		if(confirm("are you sure?"))
		{
			task_div_element.remove();
		}else{
			return;
		}
	}
			