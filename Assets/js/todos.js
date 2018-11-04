//Check off spefific todos by clicking
$("ul").on("click", "li", function () { 
    $(this).toggleClass("completed");
});

//Click on x to delete todo
$("ul").on("click", "span", function (e) { 
   $(this).parent().fadeOut(500, function(){
       $(this).remove();
   });
   e.stopPropagation();
});

//Enter a new todo with enter
$("input[type='text']").keypress(function (e) { 
    if(e.which === 13){
        var todoText = $(this).val();
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
        $(this).attr("placeholder", "Add more To Dos");
        $(this).val("");
    }
});

