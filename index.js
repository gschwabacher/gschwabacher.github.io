
function project_click_handler(){
    alert("pop up");
}

function on_page_ready(){
    $(".project").click(project_click_handler)
}

$(document).ready(on_page_ready)