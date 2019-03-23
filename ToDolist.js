// cross out specific todos by clicking
$("ul").on("click","li",function()
	{
		$(this).toggleClass("completed");
	})

/*Click on X to delete toDo*/
$("ul").on("click", "span", function(e){
	/*only span fires*/
	e.stopPropagation();
	$(this).parent().fadeOut(500,function()
		{
		$(this).remove();
		})
})

$("#toggleForm").click(function(){
	$("input[type='text']").fadeToggle();
})

$("input[type='text']").keypress(function(e)
	{if (e.which===13)
		{
			/*newTodo extraction*/
			var newTodo=$(this).val();
			$(this).val("");
			/*creating new li and adding*/
			$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodo + "</li>");
		}
	});