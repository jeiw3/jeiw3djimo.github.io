document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems,{
        hover:false,
    });
    //Slider principal
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems,{
        indicators:false,
        height:500,
        duration:400,
        interval:3000
    });
    //AQUI PONEMOS EL CODIGO DEL NAV-MOBILE
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,{
        edge:'right',
    });
     //AQUI CODIGO DEL SCROLLSPY
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems)
    //Init tabs en seccion acerca de
    var el = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(el,{
        //opciones de los tabs
    });
    //Init del modal productos
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
    //Init materialboxed
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);

});

//Cambiamos el color de todos los botones al mismo color
let botones=document.getElementsByClassName("btn-producto")
for(i=0;i<botones.length;i++){
    botones[i].className="btn-small teal modal-trigger btn-producto"
    botones[i].innerHTML='<i class="material-icons">local_mall</i>'
}

