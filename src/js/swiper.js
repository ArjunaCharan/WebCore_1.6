import Swiper from './swiper-bundle.js'

            let swiper_brands = Swiper;
            let swiper_tech = Swiper;
            let swiper_price = Swiper;
            let init = false;
            /* Which media query
            **************************************************************/
            function swiperMode() {
            let mobile = window.matchMedia('(min-width: 320px) and (max-width: 767.98px)');
            let not_mobile = window.matchMedia('(min-width: 768px)');
            // Enable (for mobile)
            if (mobile.matches) {
                if (!init) {
                init = true;
                swiper_brands = new Swiper('.mySwiper-brands', {
                    centeredSlides: true,
                    spaceBetween: 10,
                    pagination: {
                        el: '.mySwiper-brands__pagination',
                        type: 'bullets',
                        clickable: true,
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1.28,
                            
                        },
                        340: {
                            slidesPerView: 1.36,
                        },
                        380: {
                            slidesPerView: 1.52,
                        },    
                        420: {
                            slidesPerView: 1.68,
                        },
                        460: {
                            slidesPerView: 1.84,
                        },
                        500: {
                            slidesPerView: 2,
                        },
                        540: {
                            slidesPerView: 2.16,
                        },
                        580: {
                            slidesPerView: 2.32,
                        },
                        620: {
                            slidesPerView: 2.48,
                        },
                        660: {
                            slidesPerView: 2.64,
                        }
                    }
                });
                swiper_tech = new Swiper('.mySwiper-tech', {
                    centeredSlides: true,
                    spaceBetween: 10,
                    pagination: {
                        el: '.mySwiper-tech__pagination',
                        type: 'bullets',
                        clickable: true,
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1.28,
                        },
                        340: {
                            slidesPerView: 1.36,
                        },
                        380: {
                            slidesPerView: 1.52,
                        },    
                        420: {
                            slidesPerView: 1.68,
                        },
                        460: {
                            slidesPerView: 1.84,
                        },
                        500: {
                            slidesPerView: 2,
                        },
                        540: {
                            slidesPerView: 2.16,
                        },
                        580: {
                            slidesPerView: 2.32,
                        },
                        620: {
                            slidesPerView: 2.48,
                        },
                        660: {
                            slidesPerView: 2.64,
                        }
                    }
                });
                swiper_price = new Swiper('.mySwiper-price', {
                    centeredSlides: true,
                    spaceBetween: 10,
                    pagination: {
                        el: '.mySwiper-price__pagination',
                        type: 'bullets',
                        clickable: true,
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1.19,
                        },
                        340: {
                            slidesPerView: 1.25,
                        },
                        380: {
                            slidesPerView: 1.4,
                        },    
                        420: {
                            slidesPerView: 1.55,
                        },
                        460: {
                            slidesPerView: 1.7,
                        },
                        500: {
                            slidesPerView: 1.85,
                        },
                        540: {
                            slidesPerView: 2,
                        },
                        580: {
                            slidesPerView: 2.15,
                        },
                        620: {
                            slidesPerView: 2.3,
                        },
                        660: {
                            slidesPerView: 2.45,
                        }
                    }
                });
                }
            } else if (not_mobile.matches) {
                if (init) {
                    swiper_brands.destroy(true, true);
                    swiper_tech.destroy(true, true);
                    swiper_price.destroy(true, true);
                    init = false;
                }
            
            }
            }
            
            window.addEventListener('load', function() {
            swiperMode();
            });

            window.addEventListener('resize', function() {
            swiperMode();
            });