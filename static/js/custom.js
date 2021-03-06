$(document).ready(function() {
    /* ---- slick slider start ---- */

    $(function() {
        $('#example').barrating({
            theme: 'fontawesome-stars-o',
            readonly: true
        });
    });

    $('.sslider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fa fa-angle-right"></i></button>',
    });

    $('.best_seller_slider').slick({
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoPlay: true
                }
            }
        ]
    });

    $('.partner_slider').slick({
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoPlay: true
                }
            }
        ]
    });


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.pro-slider-nav'
    });

    $('.pro-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '80px',
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fa fa-angle-right"></i></button>',
    });
    $('.slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-thumb'
    });
    $('.slider-thumb').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        fade: false,
        infinite: true,
        asNavFor: '.slider-big'
    });
    /* ---- slick slider end ---- */


    var searchForm = $(".search-form")
    var searchInput = searchForm.find("[name='q']")
    var typingTimer;
    var typingInterval = 500
    var searchBtn = searchForm.find("[type='submit']")
    searchInput.keyup(function(event) {
        // key released
        clearTimeout(typingTimer)

        typingTimer = setTimeout(perfomSearch, typingInterval)
    })

    searchInput.keydown(function(event) {
        // key pressed
        clearTimeout(typingTimer)
    })

    function displaySearching() {
        searchBtn.addClass("disabled")
        searchBtn.html("<i class='fa fa-spin fa-spinner'></i> Searching...")
    }

    function perfomSearch() {
        displaySearching()
        var query = searchInput.val()
        setTimeout(function() {
            window.location.href = '/search/?q=' + query
        }, 500)

    }


    /* ---- For Mobile Menu Dropdown ---- */
    $('#menu span.opener').on("click", function() {
        if ($(this).hasClass("plus")) {
            $(this).parent().find('.mobile-sub-menu').slideDown();
            $(this).removeClass('plus');
            $(this).addClass('minus');
        } else {
            $(this).parent().find('.mobile-sub-menu').slideUp();
            $(this).removeClass('minus');
            $(this).addClass('plus');
        }
        return false;
    });
    /* ---- For Mobile Menu Dropdown ---- */

    /*---Mobile menu icon ---*/
    var navbar_toggle = $('.navbar-toggle i');
    var menu_var = $('#menu');
    $('.navbar-toggle').on("click", function() {

        if (menu_var.hasClass('menu-open')) {
            menu_var.removeClass('menu-open');
            navbar_toggle.removeClass('fa-close');
            navbar_toggle.addClass('fa-bars');
        } else {
            menu_var.addClass('menu-open');
            navbar_toggle.addClass('fa-close');
            navbar_toggle.removeClass('fa-bars');
        }
        return false;
    });
    /*---Mobile menu icon ---*/

    /* ------------ Account Tab  ------------ */
    $('.account-tab-stap').on('click', 'li', function() {
        $('.account-tab-stap li').removeClass('active');
        $(this).addClass('active');


    });


    /* Price-range */

    $(".account-tab-stap li").click(function() {
        location.href = $(this).find("a").attr("href");
    });

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 800,
        values: [75, 500],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));

    /* Price-range */

    $('.main-box').on('click', 'div', function() {
        $('.main-box div').removeClass('active');
        $(this).addClass('active');
        var selected_size = $(this).html()
        $('.size').val(selected_size)


    });

    $('select[name=quantity_cart]').on('change', function() {
        $('#quantity').val(this.value)
        $('#quantity-form').submit()
    })

    $('.main-box-color').on('click', 'div', function() {
        $('.main-box-color div').removeClass('active');
        $(this).addClass('active');
        var selected_color = $(this).css("background-color")
        $('.color').val(selected_color)

    });



    $(".add_to_cart").on("click", function(event) {
        var myModal = $(this).find('input[name=product_id]').val()
        console.log(myModal)
        $('#a' + myModal).modal('show');
        console.log(myModal)
        //               $.confirm({
        //     title: 'Prompt!',
        //     content: '' +
        //     '<div class="color-btn">'+
        //         '<div class="btn-btn" >'+
        //          '<h3> Color</h3>'+ 
        //           '<div class="main-box-color">'+
        //             '{% for  color in object.colors.all %}'+
        //             '<div class="red-box" style="background-color:{{color.available_color}}"></div>'+
        //             '{% endfor %}'+
        //           '</div></div><div class="center-btn"><h3>Select size <span>size guide</span></h3>'+

        //         ' <div class="main-box">'+
        //           '<div class="box active {% if "small" not in object_size %} disable {% endif %}">S</div>'+
        //          '<div class="box {% if "medium" not in object_size %} disable {%else%} {% endif %}">M</div>'+
        //            '<div class="box {% if "large" not in object_size %} disable{%else%} {% endif %}">L</div>'+
        //            '<div class="box {% if "extraLarge" not in object_size %} disable {% endif %}">XL</div>' +
        //            ' </div> </div> </div>',

        // });
    });

    $('.add_cart_form').submit(function(event) {

        if ($('.color').val() != '' && $('.size').val() != '') {
            return;
        }

        if ($('.color').val() == '') {
            $.alert({
                title: "Oops!",
                content: "You Forgot to Select Color",
                theme: "supervan",
            })
        }
        if ($('.size').val() == '') {
            $.alert({
                title: "Oops!",
                content: "You Forgot to Select Size",
                theme: "modern",
            })
        }
        event.preventDefault();
    });

    $('#add_wishlist_form').click(function(event) {

        if ($('.color').val() != '' && $('.size').val() != '') {
            return;
        }
        if ($('.color').val() == '') {
            $.alert({
                title: "Oops!",
                content: "You Forgot to Select Color",
                theme: "supervan",
            })
        }
        if ($('.size').val() == '') {
            $.alert({
                title: "Oops!",
                content: "You Forgot to Select Size",
                theme: "modern",
            })
        }
        $('#add_wishlist_form').submit()
        // event.preventDefault();

    });


})
