/**
  * eventsLoading
*/

; (function ($) {

    'use strict'

    var eventsLoading = function () {
        var eventsData = [{
            'eventDate': '26 March 2017',
            'place': 'Placepalayam & Gudiyam Tribal Villages,Thiruvallur District',
            'Time': '6.00AM - 6.00PM',
            'Members': '12 Volunteers',
            'Description': 'We provided solar lamp to each family, as there is no electricity available.\nWe entertained people by singing songs, providing small gifts and chocolates and provided special lunch.\nWe also gave a brief talk on cleanliness & health, child marriage and child labour.',
            'image': 'images/Eventpics/e1.jpg'
        },
        {
            'eventDate': '06 May 2017',
            'place': 'Bharath Matha Sevai Ilam,Nandhiyambakkam,Thiruvallur District',
            'Time': '1.00PM - 6.00PM',
            'Members': '9 Volunteers',
            'Description': 'We provided special and gave stationary items to the special people. We thank Mourya and Sumanth for doing this good cause.',
            'image': 'images/Eventpics/e2.jpg'
        },
        {
            'eventDate': '13 May 2017',
            'place': 'Zeal Trust,Thiruvallur',
            'Time': '10.00AM - 3.00PM',
            'Members': '6 Volunteers',
            'Description': '"Talentron" an cultural fest for college students to raise funds to help the needy.',
            'image': 'images/Eventpics/e3.jpg'
        },
        {
            'eventDate': '10 June 2017',
            'place': 'Asirvadhu Ashram,Siruvanur,Thiruvallur District',
            'Time': '6.00AM - 6.00PM',
            'Members': '12 Volunteers',
            'Description': 'According to our plan of appreciating and providing the study kit for the students of interiorvillages of Thiruvallur district namely Guidyum, Placepalayam, Manjakuppam,Narigonam,etc.\n The Event Held with Presence of Ms.Sudha(Trans-National Speaker) and some others..\n Started with prayer dances and Speeches from the guest later we provided the kit to all kids and some cultural we are planned accordingly we conducted those games and all kids had their lunch.\n And all the kids where returned to their villages and event is ended.',
            'image': 'images/Eventpics/e4.jpg'
        },
        {
            'eventDate': '28 July 2017 to 29 July 2017',
            'place': 'IIAP, Kavalur, Thiruvanamalai District',
            'Time': '2 Days',
            'Members': '19 Volunteers',
            'Description': 'We organized a special tour for orphan children. We had full of thoughts and experience sharing session about the observatory telescope view and geek science facts.',
            'image': 'images/Eventpics/e5.jpg'
        },
        {
            'eventDate': '02 October 2017',
            'place': 'Irrukam Island,Andhra Pradesh',
            'Time': '7.00AM - 8.00PM',
            'Members': '57 Volunteers',
            'Description': 'We had a conversation with the Children and gathered in a place and started our events.\nWe began with Games first and then few Cultural programs.\nour Trust ladies prepared a good lunch for everyone.',
            'image': 'images/Eventpics/e6.jpg'
        },
        {
            'eventDate': '26 November 2017',
            'place': 'SRMC Porur, Chennai',
            'Time': '10.00AM - 3.00PM',
            'Members': '11 Volunteers',
            'Description': 'An Workshop on "Students role in the Development of NGO" along with appreciating the young achievers who are all from poor background.',
            'image': 'images/Eventpics/e7.jpg'
        },
        {
            'eventDate': '23 December 2017',
            'place': 'Pathiri Village,Villupuram District',
            'Time': '6.30AM - 7.00PM',
            'Members': '24 Volunteers',
            'Description': 'we planned an awareness program on Usage of Plastics – Its Merits & De-merits. T-shirts were one of their need, hence’ we managed to get t-shirts based on the sizes of the children & packed it according to the size and gender along with a snack in each pack for the children to relish.',
            'image': 'images/Eventpics/e8.jpg'
        },
		{
            'eventDate': '09 June 2018',
            'place': 'Asirvadhu Ashram,Siruvanur,Thiruvallur District',
            'Time': '10.00AM - 4.00PM',
            'Members': '8 Volunteers',
            'Description': 'We organized this event at Aashirvadh Aashram, Siruvanur in association with three other Trusts namely Zeal Trust, MM foundation and Mithuran Foundation.\nThe event started off with a prayer.\n After the prayer the students we had invited were given a platform to showcase their talents. Many of themsang beautiful songs and some even danced to their favourite music.\n Later Chief guest’s Thiruvallur District Head,Chief Judge and Other Resource people, delivered an inspiring speech in front of the gathering on the topic- "How to reach your goals".\n After the speech students were given the study kits and following that we had lunch with them.',
            'image': 'images/Eventpics/e9.jpg'
        },
		{
            'eventDate': '21 June 2018 to 24 June 2018',
            'place': 'Community Seva School,Thalvenniyur, Kalvarayan Hills,Kallakurichi Taluk,Villupuram District',
            'Time': '2 Days',
            'Members': '24 Volunteers',
            'Description': 'This events aim was to interact with Tribal Village children studying in Community Seva Primary School located in Thalaveniyur Village, Kalvarayan Hills \n and to visit the surrounding villagesto get a sneak peak into their daily lives.\n This event involved a lot of travel.\n From bus journeys to longwalks it had it all.\n And since there were no proper road facilities available, we had to hike 7km to reach the school premises.\n The school students greeted us in an enthusiastic manner. After refreshing, we started off with pasting charts in the classrooms.\n The charts were focussed on creating awareness about cleanliness, education and other topics.\n Once that was done, we split ourselves into small teams and engaged the students by organizing fun activities and educational sessions.\n In the meantime, members from our team themselves prepared a special lunch( chicken Briyani) for the kids and once the fun activities session came to a close they were served lunch.\n After lunch, we distributed the goodies we had bought for them.\n The goodies included innerwear and chocolates for the kids.\n Also we presented a cheque to the school management that enabled them to buy a 1 year Subscription plan for the Sun Direct DTH services. They needed this for the hostel students.\n Though the school management had asked us for a lot of things, we managed to fulfill those that were within our reach. All in all we enjoyed our time at school and learnt a lot.',
            'image': 'images/Eventpics/e10.jpg'
        },
		{
            'eventDate': '15 September 2018',
            'place': 'Panchayat Union Primary School, Manalmedu village,Thiruveniyanallur Block,Arasur Taluk,Villupuram District',
            'Time': '11.00am to 4.00pm',
            'Members': '15 Volunteers',
            'Description': 'This event aim was to meet an inspiring soul- a teacher and her 25 students.\n Inspiring because despite her bad health condition she made sure she reached school everyday so that she could take classes for her students.\n The families of these students consider their schooling as a waste of time but it is she who makes sure the students didnt discontinue their education no matter what. We reached Manalmedu at around 9 am.\n We started off by decorating the school premises and then later organized a small meeting with the students to interact with them.\n After the interaction we presented to them the benches we had bought for them. The students were elated. After that we distributed the chocolates and water bottles we had bought for them.\n We even presented a memento to the HeadMistress of the school to honor her efforts that made sure these children didnt drop of out school.\n Once the distribution ceremony came to a close the students were given a platform to showcase their talents.\n Many of them sang songs and a couple of them put up dance performances.',
            'image': 'images/Eventpics/e11.jpg'
        },
		{
            'eventDate': '02 October 2018',
            'place': 'Bharath Matha Sevai Ilam,Nandhiyambakkam,Thiruvallur District',
            'Time': '10.00am to 02.00pm',
            'Members': '17 Volunteers',
            'Description': 'The agenda for this event was to meet the kids of Bharath Mala Sevai Illam and spend some quality time with them. \n Also this was a special event because it fell on the day of Gandhi Jayanthi which is also the called 8th Trust Achievement Day as we are doing some good cause on this date for Past years. \n We had made arrangements for providing them Provisions and Stationers on the day of the visit. \n The kids were elated to see us and interacted with us enthusiastically. From their favorite food to daily routines they shared with us their way of life. \n Also a lot students showcased their talents such as singing, dancing and so on., We gave an  awareness about the Good touch and bad touch.,\n We were astounded by their energy levels. After the discussions, we had lunch with them.\n We finally distributed the stationery items we had bought for them and end them goodbye.', 
            'image': 'images/Eventpics/e12.jpg'
        },
		{
            'eventDate': '06 December 2018 – 09 December 2018',
            'place': 'Government Tribal Higher Secondary School, Top Sengattupati,Thuriayur taluk,Tirchy District',
            'Time': '2 Days',
            'Members': '16 Volunteers',
            'Description': 'This event aim was to offer career guidance and the Schools Basic need to the senior secondary students of Govt.Tribal School, Top Sengattupatti located in Pachimalai hills.\n We consider this event asone of the milestone events of Hope Trust as this was one of the most dangerous and trickiest 2nd event after Kalvarayan Hills we have organized till date. \n The odds were stacked against us hostile village people, destitute road conditions and many more. But our good planning ensured that the event was a success.\n From Thuriayur we managed to catch one of the only 4 buses plying to Top Sengatupatti. From there we walked for half an hour and finally reached the Govt.Tribal School. We briefed the Principal about our plan for the day.\n As already planned we split ourselves into 3 teams of 5 members each and started engaging the students. Simultaneous sessions were conducted. While fun games and activities were being organized for students of class 10, career guidance were being organized for the students of class 11.\n A discussion on the latest technological innovations was being held with the students of class 12. In the meantime, another team handed over a projector the school management had asked us during the pre visit for teaching students practical concepts that involved more visualization. After each team completed their respective task, they moved on to the next class.\n Thus this way we ensured all 3 classes-10th, 11th, and 12th were part of all 3 sessions namely games and activities, career guidance and technological innovation discussion.\n The teammembers shared their experiences and gave valuableadvice to the students.\nOnce this session came to a close we disturbed a feedback form to the students.\n The results revealed they thoroughly enjoyed all 3 sessions and the career guidance session in particular was a standout. During the discussions \n we made sure students participated actively in various events and we awarded them gifts for the same in the form of Thirukurral books and dictionaries. Additionally, we fitted wall clocks we had bought for the classes during the course of the sessions.\n The school management were impressed by our effective time management skills and also thanked us for the valuable contributions we made towards the school.\n With this, event-13 came to an end.', 
            'image': 'images/Eventpics/e13.jpg'
        },
        {
            'eventDate': '15 August 2019 - 20 August 2019',
            'place': 'Government Tribal Residential Middle School , Manalodi & Government Tribal Residential Higher Secondary School , Pechiparai , Kaniyakumari District',
            'Time': '3 Days',
            'Members': '17 Volunteers',
            'Description': 'Hope Trust is always thriving towards achieving excellence in its journey. This time, its journey to the south of Tamil Nadu with bigger dreams. We planned to conduct our student development program in two tribal schools in the Nagerkoil district One at pechiparai and other at Manalodai. On the first day, We reached a Govt Tribal primary school at pechiparai which is in fact in a tiger reserve. We went there and spent a quality time within the kids from class 1 to class 8. We conducted few games to enhance their skills and made them come forward.In the afternoon, We arranged a "Puppet show" with the school children. They enjoyed their day a lot with all our volunteers. The school children showcased their talents after the puppet show. we gifted them a 50 litre RO purifier exclusively for the school benefit and distributed chocolates & kits to children.In addition to this, We conducted a survey in the village at the top of the hill in the evening. We came to know about their problems and our trust is taking necessary steps to help them . We performed a street play to create awareness about the education and the ill effects of alcohol consumption.On the second day, Our program was at the Govt Tribal Higher Secondary School, Manalodai. We met the school children from class 6 to class 12 and segregated them into three and conducted events according to each groups ability. Students hesitated to come forward initially but with the efforts of our volunteers & their activities, their energy level was boosted. Special focus was given to reduce the dropout rates in school.We gave school kits to all the children. Our president gave his career guidance speech to the 10th, 11th, 12th students. We gifted this school also with 50 litre RO purifier We received positive feedback from the children and the teachers. This event was really beneficial to the schools as well as our trust our volunteers learnt & enhanced their voluntary skills.', 
            'image': 'images/Eventpics/e15.jpg'
        },
        {
            'eventDate': '04 September 2019',
            'place': 'Panchayat Union Primary School, Manalmedu village & Panchayat Union Primary School, Pathiri Village , Vllupuram District',
            'Time': '04.00am - 10.00pm',
            'Members': '3 Volunteers',
            'Description': 'Event 16 is an Evalution Visit to two schools which we did service in the last years on 04th September 2019.We started by Morning 4am to Arasur Panchayat Union Primary School,Manalmedu where we donated sitting benches and desks and it was a very time to interact with the kids and the kids still remember our serivce and they enjoyed our presence.from there around 1.30Pm we started back in Bus to Pathiri village, Panchayat Union Primary School where we provided them uniforms in the year 2017 december.The School teachers and Students invited us with few gifts and we spent some time with the school children by giving some motivational and moral talks.We are well satisfied about there response back and with the same happiness we returned back to our home around 10pm', 
            'image': 'images/Eventpics/e16.jpg'
        },
        {
            'eventDate': '02 October 2019',
            'place': '7 Variour Orphanages & Old Age Homes',
            'Time': '09.00am - 02.00pm',
            'Members': '47 Volunteers',
            'Description': 'Event 17 "Trust Achievenment Day" and Gandhi Jayanthi was celebrated by a wide variety of people across the city.We made this day so special for us! On the day we continue to champion this community with our students for the 9th consecutive year of service on Oct 2nd !This year had become even more special. In the past, we went to the Home/Orphange as a group and assisted them with the few needs for children care and elderly homes.This Year we separated into 9 teams and did our heartfelt service to Team 1 - All the Children home - Vysarpadi, Team 2- Seva Chakkava Orphange - Choolai,Team 3- Hope public charitable trust for mentally challenged - Choolaimedu,Team 4- Sai baba gurukulam - Pozhichalur,Team 5- Vallalar Kapagam - Aadambakkam,Team 6- Nandhini Home for Senior citizen - Neelankarai,Team 7- Bharatha Matha Sevai illam - Nandhiyambakkam ,Chennai,Everything is for every kind of people, for children, for senior citizens! The moments of chatting and laughing with them on a day of their lives are priceless.This is a very special event. Happy moment !! The seed that was sown 9 years ago today is the best we have come to understand and support the various charities !!!', 
            'image': 'images/Eventpics/e17.jpg'
        },
        {
            'eventDate': '27 December 2019 - 30 December 2019',
            'place': 'Government Model Higher Secondary School , Thuneri Village , Agalar Post , The Nilgiris Distict',
            'Time': '2 Days',
            'Members': '17 Volunteers',
            'Description': 'This time, we the members of hope trust are journeying to the westernmost part of the state ,the Nilgiri district- the first UNESCO UNESCO biosphere reserve region in India India in India India region in India India in India India. A beautiful village and a beautiful School. beautiful School. School administration requested as to conduct events at the Government Model School which is at Thuneri village. We went to the school to the school school with energy and enthusiasm. To match our energy level the students were also highly energetic. The day started with an started with an inauguration function in which our President gave an opening note about the trust and small advice to the students about the "Greatness of the teachers". Then our volunteers took the leading role in All sessions sessions sessions sessions in the classes from 10th to 12th 12th 12th. We conducted both technical and non technical activities to activities to technical activities to activities to them. Everyone participated with their whole heart and mind. Career guidance program was done by our President President our President. Few of our volunteers volunteers our volunteers volunteers gave motivational talk to enhance the confidence of the students of the students. The day ended with the closing ceremony ended with the closing ceremony closing ceremony where students teachers and their headmaster teachers and their headmaster appreciate art service and requested us to to come and visit them again. We granted them rupees 25000 in check for the transportation need of school children school children. Based on the performance the performance of the classes they where awarded rotational Shields. We also felicitated their teachers teachers their teachers teachers for their love and dedication towards the love and dedication towards the and dedication towards the children.', 
            'image': 'images/Eventpics/e18.jpg'
        },
        {
            'eventDate': '02 February 2020',
            'place': 'Elliots Beach - Beasant Nagar , Chennai',
            'Time': '04.00am - 08.30am',
            'Members': '11 Volunteers',
            'Description': 'This time, we the members of hope trust are journeying to the westernmost part of the state ,the Nilgiri district- the first UNESCO UNESCO biosphere reserve region in India India in India India region in India India in India India. A beautiful village and a beautiful School. beautiful School. School administration requested as to conduct events at the Government Model School which is at Thuneri village. We went to the school to the school school with energy and enthusiasm. To match our energy level the students were also highly energetic. The day started with an started with an inauguration function in which our President gave an opening note about the trust and small advice to the students about the "Greatness of the teachers". Then our volunteers took the leading role in All sessions sessions sessions sessions in the classes from 10th to 12th 12th 12th. We conducted both technical and non technical activities to activities to technical activities to activities to them. Everyone participated with their whole heart and mind. Career guidance program was done by our President President our President. Few of our volunteers volunteers our volunteers volunteers gave motivational talk to enhance the confidence of the students of the students. The day ended with the closing ceremony ended with the closing ceremony closing ceremony where students teachers and their headmaster teachers and their headmaster appreciate art service and requested us to to come and visit them again. We granted them rupees 25000 in check for the transportation need of school children school children. Based on the performance the performance of the classes they where awarded rotational Shields. We also felicitated their teachers teachers their teachers teachers for their love and dedication towards the love and dedication towards the and dedication towards the children.', 
            'image': 'images/Eventpics/e19.jpg'
        }
    ]

        var events = document.getElementsByClassName("events-story")[0];

        var html = eventsData.map((event, index) => {
            let className = "";
            if (index % 2 !== 0) {
                className = "entry-style1";
            }

            return `<article class="entry clearfix ${className}">
            <div class="events-post">
                <a href="#">
                    <img src=${event.image} alt="image">
                </a>
            </div>
            <div class="content-post">
                <p class="date">${event.eventDate}</p>
                <h2 class="title-post">
                    <a href="#">${event.place}</a>
                </h2>
                <div class="meta-post clearfix">
                    <ul>
                        <li class="time">${event.Time}</li>
                        <li class="address">
                            <a href="#">${event.Members}</a>
                        </li>
                    </ul>
                </div>
                <div class="entry-post">
                    <p>${event.Description}</p>
                    <div class="more">
                        <a href="#">Learn More</a>
                    </div>
                </div>
            </div>
        </article>`
        }).join('');

        events.innerHTML = html;

    }

    // Dom Ready
    $(function () {
        eventsLoading();
    });

})(jQuery);