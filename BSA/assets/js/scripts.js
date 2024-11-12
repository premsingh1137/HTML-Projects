$('.bsa-cards-slider').slick({	  
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                infinite: false,
                arrows: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                infinite: true,
                arrows: true,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                infinite: true,
                arrows: true,
            }
        }
    ]
});


// $(document).ready(function () {
//     $('a.bsa-search-icon').on('click', function () {
//         $(this).find('.bsa-display-none').slideToggle();
//     });
// });
jQuery(document).ready(function(){
    jQuery("li.bsa-search-icon a").click(function () {
       jQuery(".bsa-display-none").toggleClass('bsa-header-search-open');
    });
 });

 $(document).ready(function () {
    $('#flexSwitchCheckDefault').click(function () {
        if (!$("#bsaAccordion .multi-collapse").hasClass("show") && $("#bsaAccordion #collapsePersonal").hasClass("show")) {
            $('#bsaAccordion .multi-collapse').addClass("show");
            $('#bsaAccordion .accordion-button').removeClass("collapsed");
        }
        else if ($("#bsaAccordion .multi-collapse").hasClass("show") && !$("#bsaAccordion #collapsePersonal").hasClass("show")) {
            $('#bsaAccordion .multi-collapse').removeClass("show");
            $('#bsaAccordion .accordion-collapse').addClass("show");
            $('#bsaAccordion .accordion-button').removeClass("collapsed");
        }
        else if ($("#bsaAccordion .accordion-collapse").hasClass("show")) {
            $('#bsaAccordion .accordion-collapse').removeClass("show");
            $('#bsaAccordion .accordion-button').addClass("collapsed");
        }
        else if (!$("#bsaAccordion .accordion-collapse").hasClass("show")) {
            $('#bsaAccordion .accordion-collapse').addClass("show");
            $('#bsaAccordion .accordion-button').removeClass("collapsed");
        }
    });
});