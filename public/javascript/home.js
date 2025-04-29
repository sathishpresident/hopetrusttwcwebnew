/**
 * bestVolunteers
 */

/** Example */

(function ($) {
  "use strict";

  var bestVolunteers = function () {
    var membersData = [
      // {
      //   name: "Sathish Kumar S",
      //   designation: "Founder/President",
      //   image: "images/member/Founder.jpg",
      //   facebook: "",
      //   instagram: "",
      // },
      // {
      //   name: "Khuthbudin T",
      //   designation: "Vice President",
      //   image: "images/member/Vicepresident.jpg",
      //   facebook: "",
      //   instagram: "",
      // },
      // {
      //   name: "Rekha M",
      //   designation: "Secretary",
      //   image: "images/member/Secretary.jpg",
      //   facebook: "",
      //   instagram: "",
      // },
      // {
      //   name: "Yuvashree S ",
      //   designation: "Joint Secretary",
      //   image: "images/member/Jointsecretary.jpg",
      //   facebook: "",
      //   instagram: "",
      // },
      // {
      //   name: "Sandeep A",
      //   designation: "Associate  Secretary",
      //   image: "images/member/sandeep.jpg",
      //   facebook: "",
      //   instagram: "",
      // },
      // {
      //   name: "Harish K R",
      //   designation: "Senior Manager - Trust",
      //   image: "images/member/harish.jpg",
      //   facebook: "",
      //   instagram: "",
      // },
      // {
      //   name: "Govindarajulu S",
      //   designation: "Manager - Trust",
      //   image: "images/member/govind.jpg",
      //   facebook: "",
      //   instagram: "",
      // },
      // {
      //   name: "Manigandan S",
      //   designation: "Organizer - NH/EM/IS-TS",
      //   image: "images/member/manigandan.jpg",
      //   facebook: "",
      //   instagram: "",
      // },
      // {
      //   name: "Goutham S",
      //   designation: "Organizer - FR/ADMIN/DOCUMENTATION",
      //   image: "images/member/gowtham.jpg",
      //   facebook: "",
      //   instagram: "",
      // },
      // {
      //   name: "Chaitanya Karthik S",
      //   designation:"Organizer - FR/ADMIN/DOCUMENTATION",
      //   //  "Manager - Internal Strengthening : Career Emulators",
      //   image: "images/member/chathinya_karthi.jpg",
      //   facebook: "",
      //   instagram: "",
      // },
      // {
      //   name: "Sridhar K",
      //   designation: "Manager - Needy Hunters",
      //   image: "images/member/sridhar.jpg",
      //   facebook: "",
      //   instagram: "",
      // },
      // {
      //   name: "Nishanth M",
      //   designation: "Manager - Event Management",
      //   image: "images/member/nishanth.jpg",
      //   facebook: "",
      //   instagram: "",
      // },

      // {
      //   name: "Sivaprashanth P",
      //   designation: "Manager - Internal Strengthening : Tech Savvy",
      //   image: "images/member/siva_prashanth.jpg",
      //   facebook: "",
      //   instagram: "",
      // },
      // {
      //   name: "Venkataramanan R",
      //   designation: "Manager - Volunteer Coordinator",
      //   image: "images/member/venkataraman.jpg",
      //   facebook: "",
      //   instagram: "",
      // },
      // {
      //   name: "Rajesh R",
      //   designation: "Manager - Administration",
      //   image: "images/member/rajesh.jpg",
      //   facebook: "",
      //   instagram: "",
      // },
      // {
      //   name: "Vishali M",
      //   designation: "Manager - Internal Strengthening : Core",
      //   image: "images/member/vishali.jpg",
      //   facebook: "",
      //   instagram: "",
      // },
      // {
      //   name: "Mohana Ganesh K",
      //   designation: "Manager - Internal Strengthening : Career Emulators",
      //   image: "images/member/siva_prashanth.jpg",
      //   facebook: "",
      //   instagram: "",
      // },
      // {
      //   name: "Naveen V A",
      //   designation: "Manager - Documentation",
      //   image: "images/member/siva_prashanth.jpg",
      //   facebook: "",
      //   instagram: "",
      // }/
      {
        name: "Sathish Kumar S",
        designation: "Founder/President",
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Khuthbudin T",
        designation: "Vice President",
        image: "images/member/blank_profile.jpg",
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
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sandeep A",
        designation: "Associate Secretary",
        image: "images/member/Sandeep.jpeg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Harish K R",
        designation: "Senior Manager - Trust",
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Govindarajulu S",
        designation: "Manager - Trust",
        image: "images/member/Govindarajulu.jpeg",
        facebook: "",
        instagram: "",
      },
      /*{
        name: "Goutham S",
        designation: "Organizer - FR/ADMIN/DOCUMENTATION",
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
      },*/
      {
        name: "Chaitanya Karthik S",
        designation: "Advisor 1",
        image: "images/member/Chaitanya_karthik.jpeg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sundhareshwaran A",
        designation: "Advisor 2",
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
     },
      /*{
        name: "Manigandan S",
        designation: "Organizer - Needy Hunters/Event Management/IS TS ",
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
      },*/
      {
          name: "Sridhar K",
          designation: "INcharge - NH & EM",
          image: "images/member/blank_profile.jpg",
          facebook: "",
          instagram: "",
        },
        /*{
          name: "Nishanth M",
          designation: "Manager - Event Management",
          image: "images/member/Nishanth.jpeg",
          facebook: "",
          instagram: "",
        },*/
        /*{
          name: "Arun Kumar",
          designation: "Manager - Fund Raising",
          image: "images/member/blank_profile.jpg",
          facebook: "",
          instagram: "",
        },*/
        {
          name: "Sivaprashanth P",
          designation: "Incharge - IS TS",
          image: "images/member/siva_prashanth.jpeg",
          facebook: "",
          instagram: "",
        },
        {
          name: "Venkataramanan R",
          designation: "Incharge - Admin VC",
          image: "images/member/blank_profile.jpg",
          facebook: "",
          instagram: "",
        },
        {
          name: "Rajesh R",
          designation: "Incharge - Admin",
          image: "images/member/rajesh.jpg",
          facebook: "",
          instagram: "",
        },
        /*{
          name: "Mohana Ganesh K",
          designation: "Manager - Internal Strengthening : Career Emulators",
          image: "images/member/mohanaganesh.jpeg",
          facebook: "",
          instagram: "",
        },*/
        {
          name: "Naveen V A",
          designation: "Incharge - NH & EM",
          image: "images/member/blank_profile.jpg",
          facebook: "",
          instagram: "",
        },
        {
          name: "Vishali M",
          designation: "Incharge - NH & EM",
          image: "images/member/Vishali.jpeg",
          facebook: "",
          instagram: "",
        },
      {
        name: "Mythili P",
        designation: "Incharge - IS TS",
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sizana M",
        designation: "Incharge - Documentation",
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
      },
      /*{
        name: "Jency J",
        designation: "Sr Leader - Event Management",
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
      },*/
      {
        name: "Nachammai RM",
        designation: "Incharge - IS CE & IS Core",
        image: "images/member/Nachammai.jpeg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sai Charu D",
        designation: "Incharge - IS CE & IS Core",
        image: "images/member/Sai_charu.jpeg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Gayathri S",
        designation: "Incharge - IS CE & IS core",
        image: "images/member/Gayathri.jpeg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Vishnupriya M K",
        designation: "Incharge - Documentation",
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Aarani P",
        designation: "Incharge - IS CE & IS Core",
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sukesh Sai Ram C",
        designation: "Incharge - Admin",
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
      },
      /*{
        name: "Aravindan N",
        designation: "Leader - Administration",
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
      },*/
     
      /*{
        name: "Bharath Kumar S",
        designation: "Leader - Fund Raising",
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
      },*/
      {
        name: "Thiyagarajan K",
        designation: "Incharge - FR",
        image: "images/member/Thiyagarajan.jpeg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Santhosh K",
        designation: "Leader - Needy Hunters",
        image: "images/member/Santhosh.jpeg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Navaneet Shiva A",
        designation: "Incharge - IS CE & IS core",
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Anas Mohamed A",
        designation: "Incharge - Documentation",
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Gowrisankar A",
        designation: "Incharge - FR",
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Hemesh waran V",
        designation: "Incharge - IS CE & IS Core",
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sunder M",
        designation: "Incharge - Admin",
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sangeeth Kumar D",
        designation: "Incharge - Documentation",
        image: "images/member/blank_profile.jpg",
        facebook: "",
        instagram: "",
      },
      /*{
        name: "Dhanush B",
        designation: "Volunteer",
        image: "images/member/dhanush.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Deepak G",
        designation: "Volunteer",
        image: "images/member/Deepak.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sowmiya M",
        designation: "Volunteer",
        image: "images/member/Sowmiya.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Kaviyadharshini M K",
        designation: "Volunteer",
        image: "images/member/kaviyadharshini.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Devadharshini J",
        designation: "Volunteer",
        image: "images/member/devadhaeshini.jpeg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Nandha Surya D",
        designation: "Volunteer",
        image: "images/member/nandha_surya.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Mohana Krishna G",
        designation: "Volunteer",
        image: "images/member/mohana_krishna.jpeg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Kirubananthan A",
        designation: "Volunteer",
        image: "images/member/kirubananthan.jpeg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Bavya N",
        designation: "Volunteer",
        image: "images/member/Bavya.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Gayathri Devi",
        designation: "Volunteer",
        image: "images/member/Gayathri_Devi.png",
        facebook: "",
        instagram: "",
      },
      {
        name: "Michael Barath N",
        designation: "Volunteer",
        image: "images/member/Michael_barath.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sudharsan V",
        designation: "Volunteer",
        image: "images/member/Sudharsan.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sushil Kumar R",
        designation: "Volunteer",
        image: "images/member/Sushil_Kumar.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Nisha A",
        designation: "Volunteer",
        image: "images/member/Nisha.jpg",
        facebook: "",
        instagram: "",
      }*/
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
