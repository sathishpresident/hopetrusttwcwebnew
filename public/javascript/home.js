/**
 * bestVolunteers
 */

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
        name: "Abdul Khudus R M",
        designation: "Treasurer",
        image: "images/member/Treasurer.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sandeep A",
        designation: "Manager - Trust",
        image: "images/member/Trustmanager.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Prabakaran R",
        designation: "Manager - Needy Hunters",
        image: "images/member/NHmanager.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Harish K R",
        designation: "Manager - Events",
        image: "images/member/EMmanager.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Albert Paul R",
        designation: "Manager - Fund Raising",
        image: "images/member/FRmanager.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Madhusudhan T",
        designation: "Manager - Fund Raising",
        image: "images/member/FRmanager1.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sivaprashanth P",
        designation: "Manager - Administration",
        image: "images/member/Adminhead.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Evangelin Ruby N",
        designation: "Manager - Internal Strengthening : Core",
        image: "images/member/ISCoreManager.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Ravichandhar P B",
        designation: "Manager - Internal Strengthening : Tech Savvy",
        image: "images/member/ISTSManager.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Jagadeesh Y M",
        designation: "Manager - Internal Strengthening : Career Emulators",
        image: "images/member/ISCEManager.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Mythili P",
        designation:
          "Manager - Internal Strengthening : Sign Lanuguage Intrepreters",
        image: "images/member/ISSLIManager.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Venkataraman R",
        designation: "Manager - Administration Volunteer Coordinator",
        image: "images/member/ADMVC.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Nishanth M",
        designation: "Leader - Needy Hunters",
        image: "images/member/NHLeader.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Arun Kumar K",
        designation: "Leader - Events",
        image: "images/member/EMLeader.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Manigandan S",
        designation: "Leader - Events",
        image: "images/member/EMLeader1.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Goutham S",
        designation: "Leader - Fund Raising",
        image: "images/member/FRLeader.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Richard Franklin J",
        designation: "Leader - Fund Raising",
        image: "images/member/FRLeader1.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Vishali M",
        designation: "Leader - Administration",
        image: "images/member/Adminleader.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Pranav Sabareesh V",
        designation: "Leader - Internal Strengthening : Core",
        image: "images/member/ISCoreLeader.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Subhashini E",
        designation: "Leader - Internal Strengthening : Core",
        image: "images/member/ISCoreLeader1.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Vignesh S",
        designation: "Leader - Internal Strengthening : Tech Savvy",
        image: "images/member/ISTSLeader.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Govindarajulu S",
        designation: "Leader - Internal Strengthening : Tech Savvy",
        image: "images/member/ISTSLeader1.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Jothiram S",
        designation: "Leader - Internal Strengthening : Career Emulators",
        image: "images/member/ISCELeader.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Pratheba V",
        designation:
          "Leader - Internal Strengthening : Sign Lanuguage Intrepreters",
        image: "images/member/ISSLILeader.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Franklin Yesudas A",
        designation: "Leader - Innovation",
        image: "images/member/InnovationLeader.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Bharath Kumar S",
        designation: "Leader - Innovation",
        image: "images/member/InnovationLeader1.jpg",
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
