jQuery((e=>{e(".select").on("click",".select__head",(function(){e(this).hasClass("open")?(e(this).removeClass("open"),e(this).next().fadeOut()):(e(".select__head").removeClass("open"),e(".select__list").fadeOut(),e(this).addClass("open"),e(this).next().fadeIn())})),e(".select").on("click",".select__item",(function(){e(".select__head").removeClass("open"),e(this).parent().fadeOut(),e(this).parent().prev().text(e(this).text()),e(this).parent().prev().prev().val(e(this).text())})),e(document).click((function(t){e(t.target).closest(".select").length||(e(".select__head").removeClass("open"),e(".select__list").fadeOut())}))})),jQuery((e=>{e(".menu__link").on("click",(function(){e(".menu__link").removeClass("menu__link_active"),e(this).addClass("menu__link_active")}))})),jQuery((e=>{e(".header__menu").on("click",(function(){e(".menu__icon, .menu__body").toggleClass("active")}))}));
