// Déclarer la bibliothèque select2 pour modifier les selects du formulaire de tri

// tri Catégorie
$(document).ready(function(){
    $('#category-filter').select2({
        dropdownParent:'below',
    });
});

$(document).ready(function(){
    $("#category-filter").hover(
        function(){
            // Fonction exécutée lorsque le survol commence
            $(this).find("a").css("color","#fff"); // changer la couleur de fond à rouge (#ff0000)
        },
        function() {
            // Fonction exécutée losrque le survol se termine
            $(this).find("a").css("color","#000"); //Rétablir la couleur de fond par défaut
        }
    );
});

// tri format
$(document).ready(function(){
    $('#format-filter').select2({
        dropdownParent:'below',
    });
});

$(document).ready(function(){
    $("#format-filter").hover(
        function(){
            // Fonction exécutée lorsque le survol commence
            $(this).find("a").css("color","#fff"); // changer la couleur de fond à rouge (#ff0000)
        },
        function() {
            // Fonction exécutée losrque le survol se termine
            $(this).find("a").css("color","#000"); //Rétablir la couleur de fond par défaut
        }
    );
});

//tri date
$(document).ready(function(){
    $('#date-sort').select2({
        dropdownParent:'below',
    });
});

$(document).ready(function(){
    $("#date-sort").hover(
        function(){
            // Fonction exécutée lorsque le survol commence
            $(this).find("a").css("color","#fff"); // changer la couleur de fond à rouge (#ff0000)
        },
        function() {
            // Fonction exécutée losrque le survol se termine
            $(this).find("a").css("color","#000"); //Rétablir la couleur de fond par défaut
        }
    );
});