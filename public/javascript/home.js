/**
 * bestVolunteers
 */

/** Example */

(function ($) {
  "use strict";

  var bestVolunteers = function () {
    var membersData = [
      {
        name: "Sathish Kumar S",
        designation: "Founder/President",
        image: "images/member/Founder.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Khuthbudin T",
        designation: "Vice President",
        image: "images/member/Vicepresident.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Rekha M",
        designation: "Secretary",
        image: "images/member/Secretary.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Yuvashree S ",
        designation: "Joint Secretary",
        image: "images/member/Jointsecretary.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sandeep A",
        designation: "Associate  Secretary",
        image: "images/member/sandeep.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Harish K R",
        designation: "Manager - Trust",
        image: "images/member/harish.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Nishanth M",
        designation: "Manager - Needy Hunters",
        image: "images/member/nishanth.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Manigandan S",
        designation: "Manager - Event Management",
        image: "images/member/manigandan.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Govindarajulu S",
        designation: "Manager - Event Management",
        image: "images/member/govind.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Richard Franklin J",
        designation: "Manager - Fund Raising",
        image: "images/member/richard_franklin.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Goutham S",
        designation: "Manager - Fund Raising",
        image: "images/member/gowtham.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Franklin Yesudas A",
        designation: "Manager - Internal Strengthening : Core",
        image: "images/member/frankline_yesudas.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sivaprashanth P",
        designation: "Manager - Internal Strengthening : Tech Savvy",
        image: "images/member/siva_prashanth.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Chaitanya Karthik S",
        designation: "Manager - Internal Strengthening : Career Emulators",
        image: "images/member/chathinya_karthi.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Arun Kumar K",
        designation: "Manager - Content Creation",
        image: "images/member/arun_kumar.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Venkataramanan R",
        designation: "Manager - Volunteer Coordinator",
        image: "images/member/venkataraman.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Rajesh R",
        designation: "Manager - Administration",
        image: "images/member/rajesh.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Vishali M",
        designation: "Manager - Administration offline",
        image: "images/member/vishali.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sridhar K",
        designation: "Leader - Needy Hunters",
        image: "images/member/sridhar.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sizana M",
        designation: "Leader - Event Management",
        image: "images/member/sizana.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Jency J",
        designation: "Leader - Event Management",
        image: "images/member/jency.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Subhashini E",
        designation: "Leader - Fund Raising",
        image: "images/member/subhashini.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Mythili  P",
        designation: "Leader - Fund Raising",
        image: "images/member/mythile.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Bharath S",
        designation: "Leader - Administration",
        image: "images/member/bharath_kumar_s.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Soundarya S",
        designation: "Leader - Administration Offline",
        image: "images/member/soundarya.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Pavithra R",
        designation: "Leader - Internal Strengthening : Core",
        image: "images/member/pavithra.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Nachammai RM",
        designation: "Leader - Internal Strengthening : Core",
        image: "images/member/nachammai.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sudharsan D",
        designation: "Leader - Internal Strengthening : Tech Savvy",
        image: "images/member/sudharsun.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Vignesh S",
        designation: "Leader - Internal Strengthening : Tech Savvy",
        image: "images/member/vignesh.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Bharath Kumar S",
        designation: "Leader - Internal Strengthening : Career Emulators",
        image: "images/member/bharath_kumar_s_manager.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Jagadeesh Y M",
        designation: "Organizer - FR,ADM",
        image: "images/member/jagadeesh.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Ravi Chandhar P B",
        designation: "Organizer - NH,EM",
        image: "images/member/ravi_chandhar.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Evangelin Ruby N",
        designation: "Organizer - CE/TS/Core",
        image: "images/member/evangline.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Madhusudhan T",
        designation: "Organizer - FR1,FR2 - Offline",
        image: "images/member/madhusudhan.jpg",
        facebook: "",
        instagram: "",
      },
    ];

    var carousel = $("#best-members-list");
    carousel.trigger("destroy.owl.carousel");
    carousel.find(".owl-stage-outer").children().unwrap();
    carousel.removeClass("owl-center owl-loaded owl-text-select-on");

    var html = membersData
      .map((member, index) => {
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

                            <!-- <div class="cs-post-footer">
                                <div class="cs-footer-share">
                                    <a href="${member.facebook}" target="_blank">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                    <a href="${member.instagram}" target="_blank">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
      })
      .join("");

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
          items: 1,
        },
        480: {
          items: 2,
        },
        767: {
          items: 2,
        },
        991: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  };

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

    var divToPlace = document.getElementById("count-data-list");

    var html = countData
      .map((member, index) => {
        return `<div class="col-md-3">
            <div class="flat-counter">
                <div class="numb-count" data-to=${member.count} data-speed="2000" data-waypoint-active="yes">${member.count}</div>
                <div class="name-count">
                    <p>${member.name}</p>
                </div>
            </div>
        </div>`;
      })
      .join("");

    divToPlace.innerHTML = html;
  };

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

    var divToPlace = document.getElementById("recent-problem-causes");

    var html = fundsData
      .map((fund, index) => {
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
        </div>`;
      })
      .join("");
    divToPlace.innerHTML = html;
    progressBar();
  };

  var progressBar = function () {
    $(".progress-bar").on("on-appear", function () {
      $(this).each(function () {
        var percent = $(this).data("percent");

        $(this)
          .find(".progress-animate")
          .animate(
            {
              width: percent + "%",
            },
            3000
          );

        $(this)
          .parent(".flat-progress")
          .find(".perc")
          .addClass("show")
          .animate(
            {
              width: percent + "%",
            },
            3000
          );
      });
    });
  };

  // Dom Ready
  $(function () {
    bestVolunteers();
    allCount();
    fundsAllocated();
  });

  $("#mainnav ul li a").click(function () {
    var currentid = $(this).attr("href");
    $("html,body").animate(
      { scrollTop: $(currentid).offset().top - 100 },
      "slow"
    );
  });
  $("#mainnav ul li").click(function () {
    $("#mainnav ul li").removeClass("home");
    $(this).addClass("home");
  });
})(jQuery);
