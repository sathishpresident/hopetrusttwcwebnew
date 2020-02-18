/**
  * bestVolunteers
*/

; (function ($) {

    'use strict'

    var bestVolunteers = function () {
        var membersData = [{
            'name': 'Sathish Kumar',
            'designation': 'Founder/President',
            'image': 'images/member/Founder.jpg'
        },
        {
            'name': 'Khuthbudin',
            'designation': 'Vice President',
            'image': 'images/member/Vicepresident.jpg'
        },
        {
            'name': 'Rekha Moorthy',
            'designation': 'Secretary',
            'image': 'images/member/Secretary.jpg'
        },   
        {
            'name': 'Yuvashree Suresh',
            'designation': 'Joint Secretary',
            'image': 'images/member/Jointsecretary.jpg'
        },
        {
            'name': 'Abdul Khudus',
            'designation': 'Treasurer',
            'image': 'images/member/Treasurer.jpg'
        },
        {
            'name': 'Sandeep',
            'designation': 'Manager - Trust',
            'image': 'images/member/Trustmanager.jpg'
        },
        {
            'name': 'Albert Paul',
            'designation': 'Manager - Fund Raising',
            'image': 'images/member/FRmanager.jpg'
        },
        {
            'name': 'Prabakaran',
            'designation': 'Manager - Needy Hunters',
            'image': 'images/member/NHmanager.jpg'
        },
        {
            'name': 'Harish',
            'designation': 'Manager - Events',
            'image': 'images/member/EMmanager.jpg'
        },
        {
            'name': 'Sivaprasanth',
            'designation': 'Administrator - Trust',
            'image': 'images/member/Adminhead.jpg'
        }
    ];

        var carousel = $('#best-members-list');
        carousel.trigger('destroy.owl.carousel');
        carousel.find('.owl-stage-outer').children().unwrap();
        carousel.removeClass("owl-center owl-loaded owl-text-select-on");

        var html = membersData.map((member, index) => {
            return `<div class="cs-module-4">
            <div class="item">
                <div class="overlay"></div>
                <img src=${member.image} alt="image">
            </div>
            <div class="demo">
                <div class="cs-post">
                    <div class="cs-post-header">
                        <div class="cs-category-links">
                            <h6 class="name">
                                <a href="javascript:;">${member.name}</a>
                            </h6>
                            <span class="position">${member.designation}</span>

                            <div class="cs-post-footer">
                                <div class="cs-footer-share">
                                    <a href="javascript:;" target="_blank">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                    <a href="javascript:;" target="_blank">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    <a href="javascript:;" target="_blank">
                                        <i class="fa fa-google-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        }).join('');

        carousel.html(html);

        carousel.owlCarousel({
            loop: false,
            nav: false,
            margin: 30,
            dots: true,
            auto: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    var allCount = function () {
        var countData = [
        //     {
        //     'name' : 'Volunteers',
        //     'count': 101
        // },
        // {
        //     'name' : 'Events',
        //     'count': 13
        // },
        // {
        //     'name' : 'Donations',
        //     'count': '2.1L'
        // },
        // {
        //     'name' : 'Counting Beneficiaries',
        //     'count': '32000..'
        // }
    ];

        var divToPlace = document.getElementById('count-data-list');

        var html = countData.map((member, index) => {
            return `<div class="col-md-3">
            <div class="flat-counter">
                <div class="numb-count" data-to=${member.count} data-speed="2000" data-waypoint-active="yes">${member.count}</div>
                <div class="name-count">
                    <p>${member.name}</p>
                </div>
            </div>
        </div>`
        }).join('');

        divToPlace.innerHTML = html;
    }

    var fundsAllocated = function () {
        var trustAmount = 100000;
        var fundsData = [
            // {
            //     imageUrl : 'images/about/index-1/3.jpg',
            //     title : 'Education',
            //     spendAmount : 20000
            // },
            // {
            //     imageUrl : 'images/about/index-1/5.jpg',
            //     title : 'Society',
            //     spendAmount : 40000
            // },
            // {
            //     imageUrl : 'images/about/index-1/4.jpg',
            //     title : 'Awareness',
            //     spendAmount : 25000
            // },
            // {
            //     imageUrl : 'images/about/index-1/6.jpg',
            //     title : 'Old Age Homes',
            //     spendAmount : 15000
            // }
        ];

        var divToPlace = document.getElementById('recent-problem-causes');

        var html = fundsData.map((fund, index) => {
            const percentageUse = (fund.spendAmount / trustAmount) * 100;
            return `<div class="post">
            <div class="wrap-post">
                <div class="img-recent-causes">
                    <a href="#">
                        <img src=${fund.imageUrl} alt="image">
                    </a>
                </div>
                <div class="post-recent-causes">
                    <h6 class="title-post">
                        <a href="#">${fund.title}</a>
                    </h6>
                </div>
                <div class="donation-amount">
                    <div class="donation-v1">
                        <p>${fund.spendAmount}</p>
                        <span>/</span>
                    </div>
                    <div class="donation-v2">
                        <p>${trustAmount}</p>
                    </div>
                </div>
                <div class="flat-progress">
                    <div class="perc">${percentageUse}%</div>
                    <div class="progress-bar" data-percent=${percentageUse} data-waypoint-active="yes">
                        <div class="progress-animate"></div>
                    </div>
                </div>
            </div>
        </div>`
        }).join('');
        divToPlace.innerHTML = html;
        progressBar();
    }

    var progressBar = function () {
        $('.progress-bar').on('on-appear', function () {
            $(this).each(function () {
                var percent = $(this).data('percent');

                $(this).find('.progress-animate').animate({
                    "width": percent + '%'
                }, 3000);

                $(this).parent('.flat-progress').find('.perc').addClass('show').animate({
                    "width": percent + '%'
                }, 3000);
            });
        });
    };

    // Dom Ready
    $(function () {
        bestVolunteers();
        allCount();
        fundsAllocated();
    });

    $("#mainnav ul li a").click(function(){
        var currentid = $(this).attr('href');
        $('html,body').animate({ scrollTop: $(currentid).offset().top -100}, 'slow');
    });
    $("#mainnav ul li").click(function(){
        
        $("#mainnav ul li").removeClass('home');
        $(this).addClass('home');
    });

})(jQuery);