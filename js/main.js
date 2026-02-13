async function handleSubmit(e, sheet) {
  e.preventDefault();
  const form = e.target; // The form element
  const name = form.name.value.trim(); // Assuming your input has name="name"
  const email = form.email.value.trim(); // Assuming your input has name="phone"
  const service = form.service.value.trim(); // Assuming your input has name="phone"
  // // Validate inputs
  if (!name || !email || !service) {
    console.log("الرجاء إدخال الاسم ورقم الهاتف والخدمة.", "warning");
    return;
  }
  console.log(name, email, service, sheet);
  
  // Show progress bar
  const progressContainer = document.getElementById("preloader");
  progressContainer.classList.remove("d-none");

  try {
    const response = await fetch('submit-sheet.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        name: name,
        email: phone,
        service: form.service.value.trim(),
        compound: sheet
      })
    });

    const result = await response.json();
    if (result.success) {
      name.value = "";
      email.value = "";
      service.value = "";
      window.location.href = 'thank_you.html';

    } else {
        preloader.classList.add('hidden');
        throw new Error(result.error || "Submission failed");

    }
  } catch (error) {
    console.error("Error:", error);
    preloader.classList.add('hidden');
    console.log("حدث خطأ، برجاء المحاولة مرة أخرى.", "danger");
  } finally {
    progressContainer.classList.add("d-none");
    preloader.classList.add('hidden');
  }
}

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);

