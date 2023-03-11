/**
 * isMobile
 * responsiveMenu
 * ajaxContactForm
 * alertBox
 * testimonialSlide
 * flatTestimonials
 * flatTestimonialsStyle1
 * progressBar
 * flatTeam
 * flatTeamNomargin
 * twitterFeed
 * portfolioIsotope
 * portfolioCarosuel
 * progressCircle
 * detectViewport
 * counter
 * tabs
 * flatTestimonials
 * flatClient
 * flatClientSt1
 * featuredPost
 * flatServices
 * blogMasory
 * googleMap
 * togglesAccordion
 * responsiveVideo
 * swClick
 * goTop
 * retinaLogos
 * parallax
 * removePreloader
 */

(function ($) {
  "use strict";

  var eventsLoading = function () {
    var eventsData = [
      {
        eventDate: "26 March 2017",
        place: "Placepalayam & Gudiyam Tribal Villages,Thiruvallur District",
        // Time: "6.00AM - 6.00PM",
        Members: "12 Volunteers",
        Description:
          "We provided solar lamps to each family, as there is no electricity available. We entertained people by singing songs, providing small gifts and chocolates and provided special lunch. We also gave a brief talk on cleanliness & health, child marriage and child labour.",
        image: "images/Eventpics/e1.jpg",
      },
      /*{
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
        },*/
      {
        eventDate: "10 June 2017",
        place: "Asirvadhu Ashram,Siruvanur,Thiruvallur District",
        // Time: "6.00AM - 6.00PM",
        Members: "12 Volunteers",
        Description:
          "According to our plan of appreciating and providing the study kit for the students of interior villages of Thiruvallur district namely Guidyum, Placepalayam, Manjakuppam,Narigonam,etc. The Event Held with Presence of Ms.Sudha(Trans-National Speaker) and some others.. Starting with prayer dances and Speeches from the guests later we provided the kit to all kids and some cultural activities we planned accordingly. We conducted those games and all kids had their lunch. And all the kids were returned to their villages and the event ended.",
        image: "images/Eventpics/e4.jpg",
      },
      {
        eventDate: "28 July 2017",
        place: "IIAP, Kavalur, Thiruvanamalai District",
        Time: "2 Days",
        Members: "19 Volunteers",
        Description:
          "We organized a special tour for orphan children. We had full thoughts and experience sharing sessions about the observatory telescope view and geek science facts.",
        image: "images/Eventpics/e5.jpg",
      },
      {
        eventDate: "02 October 2017",
        place: "Irrukam Island,Andhra Pradesh",
        Time: "7.00AM - 8.00PM",
        Members: "57 Volunteers",
        Description:
          "We had a conversation with the Children and gathered in a place and started our events. We began with Games first and then a few Cultural programs. Our Trust ladies prepared a good lunch for everyone.",
        image: "images/Eventpics/e6.jpg",
      },
      /*{
            'eventDate': '26 November 2017',
            'place': 'SRMC Porur, Chennai',
            'Time': '10.00AM - 3.00PM',
            'Members': '11 Volunteers',
            'Description': 'An Workshop on "Students role in the Development of NGO" along with appreciating the young achievers who are all from poor background.',
            'image': 'images/Eventpics/e7.jpg'
        },*/
      {
        eventDate: "23 December 2017",
        place:
          "Panchayat Union Primary School, Pathiri Village,Olakkur Block,Tindinvanam Taluk,Villupuram District",
        Time: "6.30AM - 7.00PM",
        Members: "24 Volunteers",
        Description:
          "We planned an awareness program on Usage of Plastics – Its Merits & Demerits. T-shirts were one of their needs, hence’ we managed to get t-shirts based on the sizes of the children & packed it according to the size and gender along with a snack in each pack for the children to relish.",
        image: "images/Eventpics/e8.jpg",
      },
      {
        eventDate: "09 June 2018",
        place: "Asirvadhu Ashram,Siruvanur,Thiruvallur District",
        Time: "10.00AM - 4.00PM",
        Members: "8 Volunteers",
        Description: `We organized the event at the Asirvadhu Ashram in Siruvanur in association with three other foundations, the Zeal Trust, the MM Foundation and the Mithuran Foundation. The event began with prayer. The students we invited after the prayer were given a platform to showcase their talents.As the Chief Guest, the Tiruvallur District Chairman delivered an inspiring speech on "How to Achieve Your Goal". Students were provided with study materials to aid their learning.`,
        image: "images/Eventpics/e9.jpg",
      },
      {
        eventDate: "22 June 2018",
        place:
          "Community Seva School, Thalvenniyur, Kalvarayan Hills, Kallakurichi District",
        Time: "2 Days",
        Members: "24 Volunteers",
        Description: `Reaching this school was an arduous journey as there were no proper transportation facilities available, we had to hike 7km to reach the school premises. We were warmly greeted by the students and teachers. Charts focused on creating awareness about cleanliness, education and other relevant topics were pasted in the classroom walls. Fun activities and events were conducted to educate the students. After lunch, we distributed the goodies we had bought for them.For boarding students, we presented a check to the school administration to purchase a 1-year subscription plan for Sun Direct DTH services.`,
        image: "images/Eventpics/e10.jpg",
      },
      {
        eventDate: "15 September 2018",
        place:
          "Panchayat Union Primary School, Manalmedu village,Thiruveniyanallur Block,Villupuram District",
        Time: "11.00am - 4.00pm",
        Members: "15 Volunteers",
        Description: `We provided Tables and Chairs  for the school. Students attended the events we held and enjoyed talking to us.Later,Chocolates and water bottles were distributed to the children.The headmistress of the school was presented with a memento for her dedication and hard work for the betterment of the school and the students.`,
        image: "images/Eventpics/e11.jpg",
      },
      {
        eventDate: "02 October 2018",
        place: "Bharath Matha Sevai Ilam,Nandhiyambakkam,Thiruvallur District",
        Time: "10.00am - 02.00pm",
        Members: "17 Volunteers",
        Description: `The agenda of the event is to meet the children of Bharata Mata Seva Illam and spend some quality time with them. This is a special event on Gandhi Jayanti and also our 8th Foundation Achievement Day.The kids enjoyed watching us and got excited with us. A session was held to emphasize the difference between good touch and bad touch. We ended the day by giving the children stationery items and gifts.`,
        image: "images/Eventpics/e12.jpg",
      },
      {
        eventDate: "07 December 2018",
        place:
          "Government Tribal Higher Secondary School, Top Sengattupati, Thuriayur taluk, Tiruchirappalli District",
        Time: "2 Days",
        Members: "16 Volunteers",
        Description: `This is one of the events that always lingers in our minds, the goal was hard to achieve, but the experience was rich. We conducted a series of activities to expand the horizons of knowledge and thinking of 10th  students.For standard 11 & 12 a career guidance session was planned and executed in an effective manner. A projector was donated to the school so that the classes were taken in a Visualised manner. Prizes were distributed to students for the activities conducted throughout the day. Overall it was a great learning experience for both the students and volunteers.`,
        image: "images/Eventpics/e13.jpg",
      },
      {
        eventDate: "10 February 2019",
        place: "Anna square Beach to Gandhi Beach,Merina,Chennai",
        Time: "11.00pm - 11.45pm",
        Members: "16 Volunteers",
        Description: `50 blankets were distributed to homeless people in the Anna Square beach locality. We were glad to see the smile on their faces.`,
        image: "images/Eventpics/e14.jpg",
      },
      {
        eventDate: "16 August 2019, 17 August 2019",
        place:
          "Government Tribal Residential Middle School , Manalodi & Government Tribal Residential Higher Secondary School , Pechiparai , Kaniyakumari District",
        Time: "3 Days",
        Members: "17 Volunteers",
        Description: `We visited two schools as part of the event. First we went to Government Tribal Residential Middle School,Manalodai. Some games, activities and puppet shows were held to educate the children. After the performances the students displayed their talents in music and dance. We provided a 50 liter water purifier to ensure a safe source of drinking water for children.Next, we went to another school in pechiparai, Government Tribal Residential High School. motivation and career guidance sessions for students were held.Here also we provide a 50 liter water purifier.`,
        image: "images/Eventpics/e15.jpg",
      },
      {
        eventDate: "04 September 2019",
        place:
          "Panchayat Union Primary School, Manalmedu village & Panchayat Union Primary School, Pathiri Village , Vllupuram District",
        Time: "04.00am - 10.00pm",
        Members: "3 Volunteers",
        Description: `We came to review two schools we have served in the past years.Desks and sitting benches were donated to Panchayat Union Primary School, Manalmedu.Next, we visited Panchayat Union Primary School in Pathiri village to which we had donated uniforms in the past. We were satisfied with the progress of both the schools.`,
        image: "images/Eventpics/e16.jpg",
      },
      {
        eventDate: "02 October 2019",
        place: "7 Variour Orphanages & Old Age Homes",
        Time: "09.00am - 02.00pm",
        Members: "47 Volunteers",
        Description: `We uniquely celebrated our ‘Hope Achievement Day’ to mark our 9th year and Gandhi Jayanti. Volunteers from our foundation split into 9 groups and visited 9 different orphanages and nursing homes to celebrate Day with them.The seed of our faith was sown 9 years ago, we have grown in leaps and bounds and continue to grow with the trust and support of our patrons and volunteers. Support us and together we will create a better future for our fellow citizens.`,
        image: "images/Eventpics/e17.jpg",
      },
      {
        eventDate: "28 December 2019",
        place:
          "Government Model Higher Secondary School , Thuneri , Agalar Post , The Nilgiris Distict",
        Time: "2 Days",
        Members: "17 Volunteers",
        Description: `Trustees visited the Government Model High School in the Nilgiris District.The day began with the opening ceremony and the inaugural note on the ‘Greatness of Teachers’ by our trust President. Various programs were conducted to broaden the minds of the students.A career guidance session was conducted by our trust president Mr. Sathish Kumar, followed by motivational sessions by our volunteers. Rs 25000/- was donated to the school for their infrastructural needs.`,
        image: "images/Eventpics/e18.jpg",
      },
      {
        eventDate: "02 February 2020",
        place: "Elliots Beach - Beasant Nagar , Chennai",
        Time: "04.00am - 08.30am",
        Members: "11 Volunteers",
        Description:
          "HDFC Bank Ploggathon – a run for a healthier cleaner and greener, We supported them with our Volunteering Service at the Registration desk and at the Start point,helping the Participants.",
        image: "images/Eventpics/e19.jpg",
      },
      {
        eventDate: "29 February 2020 ",
        place:
          "Panchayat Union Middle School, Bakkiya Nagar , Kattabettu ,Kotagiri, The Nilgiris District",
        Time: "2 Days",
        Members: "12 Volunteers",
        Description: `We were warmly greeted by the teachers and students upon our arrival at the Panchayat Union Primary School, Kotagiri. We began the day with a short knowledge development session and conducted a few sports competitions for the students. Later in the day we called upon students to showcase their talent in diverse fields such as music, dance and street play. A puppet show was conducted to create awareness about First Aid and Children Assistance Helpline (Helpline number : 1098). Rs 25000/- was donated to the school for building a toilet and the entrance gate.`,
        image: "images/Eventpics/e20.jpg",
      },
      {
        eventDate: "15 August 2020",
        place: "Perambur, Chennai",
        Time: "12.00pm - 1.30pm",
        Members: "08 Volunteers",
        Description: `We regularly visit remote tribal villages in various parts of Tamil Nadu, empower schools and educate students and villagers.The pandemic has put an obstacle in our regular proceedings, but we did not let the obstacle come in between our core values; helping people in need.So, we turned our attention to the people in need in our city and on this Independence Day, we distributed 100 food parcels and bottles of water to the people in need, while at the same time following proper safety guidelines.`,
        image: "images/Eventpics/e21.jpg",
      },
      {
        eventDate: "02 October 2020",
        place:
          "Panchayat Union Primary School,Jamboothu Hills,Vazhapadi Zone,Salem District",
        Time: "01.00pm - 06.30pm",
        Members: "09 Volunteers",
        Description: `Trustees visit Panchayat Union Primary School in Salem District on the occasion of 10 years of service (Hope Achievement Day). To increase the strength of the Tribal school they were provided with various items such as moon shaped desk, chairs, teacher desk, sanitary ware, stationery, torch lamps which would be very useful for the Tribal families.Special thanks to the Aram Sei Youth Foundation and the headmaster of the school. We will continue to serve the tribal community in the future.`,
        image: "images/Eventpics/e22.jpg",
      },
      {
        eventDate: "07 February 2021",
        place: "Gudiyam village - Thiruvallur",
        Time: "01.00pm - 06.30pm",
        Members: "15 Volunteers",
        Description: `We went to Gudiyam village where we first started the service. We have started our 5th year chapter! A beautiful village located on the Tamil Nadu-Andhra border. We traveled about 3 km on rough roads and reached Gudiyam village.The village, which is home to about 35-40 families, has been providing free road work and groceries on behalf of the charity.`,
        image: "images/Eventpics/e23.jpg",
      },
      {
        eventDate: "12 March 2021",
        place:
          "Panachayat Union Middle School,Bakkiya Nagar & Government Model Higher Secondary School,Thuneri",
        Time: "01.00pm - 06.30pm",
        Members: "10 Volunteers",
        Description: `As the first part of the event, we extended an invitation to attend the "Gateway Opening Ceremony" held at the Bakkiyanagar Panchayat School in the heart of the Kotagiri Province, Nilgiris District, surrounded by the rains of the Western Ghats.In the second part, we went to the Government Model High School in Thuneri.`,
        image: "images/Eventpics/e24.jpg",
      },
      {
        eventDate: "14 August 2021",
        place: "Puravelai and Kothaiyar Tribal Villages , Kanyakumari District",
        Time: "01.00pm - 06.30pm",
        Members: "08 Volunteers",
        Description: `We have been providing all possible assistance and guidance to rural and hill students and people from the Hope Trust. In particular our projects “reached the unattainable tribal community”. Following this, it is necessary to reach 110 families from Kanyakumari district, outlying hill village, Kodaiyar village in such dire situation.Following this (14/08/2021) we went to Puravilai village and met the people. We gave each family a 'kit' containing various groceries worth Rs. 300 / - to give them comfort and confidence.`,
        image: "images/Eventpics/e25.jpg",
      },
      {
        eventDate: "18 September 2021",
        place:
          "Government Tribal Residential Higher Secondary School, Perumparai , Dindigul District",
        Time: "01.00pm - 06.30pm",
        Members: "07 Volunteers",
        Description: `It was decided to provide the school with 6 pairs of bench desks and speakers and a microphone (Bluetooth speaker with wireless mic) for comfortable sitting while students are at school.Accordingly, the event-26 was well-planned and well-organized event to provide bench, desk, loudspeaker and writing equipment to the students.`,
        image: "images/Eventpics/e26.jpg",
      },
      {
        eventDate: "02 October 2021",
        place: "All Over Tamilnadu",
        Time: "01.00pm - 06.30pm",
        Members: "45 Volunteers",
        Description: `As the Foundation members study and work in various cities and towns, they take this as a challenge and stay where they are, that is, more than 40 members split into small groups and move to more than 20 orphanages near their location. They provided all possible assistance and food to the roadside people.At a total cost of 14 thousand rupees, they covered a distance of about 150 km in 18 hours and completed the event.It is gratifying to once again express unity in isolation.`,
        image: "images/Eventpics/e27.jpg",
      },
      {
        eventDate: "09 October 2021",
        place:
          "Government Tribal Residential Higher Secondary School, Hasanur, Erode District",
        Time: "01.00pm - 06.30pm",
        Members: "09 Volunteers",
        Description: `So glad to meet the students after the Corona extraordinary situation !! It was brought to our attention by the school principal, assistant principal and fellow teachers that the drinking water previously used by school children is unsafe. For this we have provided a water purification machine for the use of the students of that school.We hope students will benefit from this extension. We also heard that the water storage tank was not clean. So on behalf of our Hope Trust, two Sintex tanks with a capacity of 1000 liters were donated.`,
        image: "images/Eventpics/e28.jpg",
      },
      {
        eventDate: "07 December 2021",
        place:
          "Government Tribal Residential Higher Secondary School, Manniyarapalayam, Kallakurchi District",
        Time: "01.00pm - 06.30pm",
        Members: "10 Volunteers",
        Description: `We started the event as planned. The school teachers and students gave an enthusiastic welcome. Earlier it was brought to the notice of the school headmaster that the drinking water used by the school students was unsafe.For this we have provided a water purification machine for the use of the students of that school. We hope that the students will benefit from this extension.Also, students staying in hostels are facing great inconvenience as electricity is provided only for 2 hours daily. We provided an electric generator to deal with it to some extent.Career guidance, psychology and motivational classes for 9th, 10th, 11th and 12th students were conducted by our Hope Trust volunteers at the event, which was held with Corona awareness in mind of the social distancing. Conversation about biology also took place.`,
        image: "images/Eventpics/e29.jpg",
      },
      {
        eventDate: "26 February 2022",
        place:
          "Government Tribal Residential Higher Secondary School, Nammiyampattu,Javadhu Hills, Tiruvannamalai District",
        Time: "01.00pm - 06.30pm",
        Members: "09 Volunteers",
        Description: `Previously, the basic needs of the school were brought to our attention by the headmaster and fellow teachers. For this purpose, we provide stationery, buckets/mugs, water, mats, plates/tumblers, bedsheets, berow, and many more items for the benefit of the students of that school. We hope you enjoy the extension.

        Our trust volunteers conducted career guidance, psychological, and motivational classes for 9, 10, +1, and +2 students at this event, which was conducted with Corona awareness in keeping with the social distancing. Thus, with the cooperation of the school principal, postgraduate English teacher, and fellow teachers, the event was staged as planned. On my behalf and on behalf of our trust, I would like to thank all the loving souls who have supported us and helped our trust cross such a huge milestone, as well as the Aram Sei Youth Foundation, which has made a significant contribution to the needs of this school.`,
        image: "images/Eventpics/e30.jpg",
      },
      {
        eventDate: "05 March 2022",
        place:
          "Government Model Higher Secondary School,Thuneri,The Nilgiris district",
        Time: "01.00pm - 06.30pm",
        Members: "06 Volunteers",
        Description: `Many government school teachers who know the workings of the HOPE Trust approach us with the good intention of setting up and benefiting from our training classes for their students as well. However, work is underway to move to various schools in the near future via video sessions. It is gratifying to see so many events that are currently stagnant and going on in succession. Following this, following the call of the headmaster and teachers' trust volunteers, they also conducted life guidance classes for students in grades 9, 10, 11, and 12 there.`,
        image: "images/Eventpics/e31.jpg",
      },
      {
        eventDate: "07 March 2022",
        place:
          "Government Tribal Residential Higher Secondary School, Kunjapanai, The Nilgiris District",
        Time: "01.00pm - 06.30pm",
        Members: "06 Volunteers",
        Description: `Earlier, it was brought to our notice by the headmaster of the school that there was no way to get to the toilet that was to be used by the students. It was in very bad condition. It was impassable. So our volunteers were involved in the fundraising process, with the promise of setting up a walkway to the closet through our trust. Following this, flooring works were carried out, a new toilet route was made available for the use of the students, and 25 new chairs were provided for the students.`,
        image: "images/Eventpics/e32.jpg",
      },
      {
        eventDate: "25 March 2022",
        place:
          "Government Tribal Residential Higher Secondary School, Velligoundanur,Salem District",
        Time: "01.00pm - 06.30pm",
        Members: "14 Volunteers",
        Description: `The students and teachers greeted us with their happy faces. After a short conversation there, the head teacher said they needed a berow for maintaining students' records, so we provided a berow. and also provided 20 plastic chairs along with an online class mic/stand for the needs of the students!! At this event, psychological, motivational, and personality development classes were conducted by the students of our trust for the students at this event, which was held with Corona awareness in observance of the social gap.`,
        image: "images/Eventpics/e33.jpg",
      },
      {
        eventDate: "26 March 2022",
        place:
          "Government Tribal Residential Higher Secondary School, Arunoothumalai,Salem District",
        Time: "01.00pm - 06.30pm",
        Members: "14 Volunteers",
        Description: `We got ready for the Arunoothumalai event without any rest. There we met and talked with the people of the village, who warmly welcomed us. The Street Play and Puppetry Show were specially staged on behalf of our Trust to make them realise the need for education for women in today's world. Following this The next day (26.03.22), we started our session in school. Like all schools, it was well received here. We have made various contributions in an effort to make the best possible environment for students to study, such as beautiful landscaping, a quiet environment, and adequate basic facilities. As for the needs of this school, A laptop and a projector were provided to enhance learning ability. Electrical work was carried out throughout the school; repairs were made and renovated. We also provided 20 plastic chairs for students to use.On my behalf and on behalf of our trust, I would like to thank Zhagaram for their great support.`,
        image: "images/Eventpics/e34.jpg",
      },
      {
        eventDate: "27 March 2022",
        place:
          "Government Ekalavya Model Residential Higher Secondary School, Sengarai,Namakkal District",
        Time: "01.00pm - 06.30pm",
        Members: "04 Volunteers",
        Description: `Despite the physical and mental exhaustion, all the tiredness disappeared in the enthusiastic welcome given by the teachers and students at the school. The teachers there also worked with us in companionship. The head teacher of the school was delighted with their care and love. Throughout the day, counseling, career guidance, psychological, and motivational classes were conducted by our trust volunteers to improve the teaching ability of the students. Thus, the event ended well.`,
        image: "images/Eventpics/e35.jpg",
      },
      {
        eventDate: "08 April 2022",
        place:
          "Government Tribal  Residential Girls Higher Secondary School, Mullukurchi,Namakkal District",
        Time: "01.00pm - 06.30pm",
        Members: "11 Volunteers",
        Description: `Earlier, we heard from the headmistress that the school was getting into a lot of trouble during power outages. As a solution to this, we bought a UPS inverter for the school through our trust. Another problem is drinking water. It causes a variety of diseases due to the use of unhygienic drinking water. Water purifiers are mandatory in all educational institutions to control this. But drinking water is in question in many schools here. We learned that there is such a problem in this school as well. We provided an RO water purifier for that. I hope students will benefit from this.`,
        image: "images/Eventpics/e36.jpg",
      },
      {
        eventDate: "09 April 2022",
        place:
          "Government Tribal  Residential Higher Secondary School, Valavanthinadu,Namakkal District",
        Time: "01.00pm - 06.30pm",
        Members: "12 Volunteers",
        Description: `Earlier, the school's headmistress had said that the school did not have computer facilities. So a computer for school use was donated to the school by our Hope Trust volunteers to raise funds. We also provided the Xerox machine with a printer for their use. The event went well as planned with the cooperation of the school principal and fellow teachers.On behalf of myself and our trust, I would like to thank all those who have been cooperating and encouraging our continuous flow of opportunities for Tribal students, awareness of the above, and for students living on the fringes of Tamil Nadu and in the hills.`,
        image: "images/Eventpics/e37.jpg",
      },
      {
        eventDate: "23 July 2022",
        place:
          "Government Tribal  Residential Higher Secondary School, Bargur,Erode District",
        Time: "01.00pm - 06.30pm",
        Members: "07 Volunteers",
        Description: `Last academic year, after a long gap, we went back to the schools where many changes were observed in the schools and among the students. We have passed the most difficult period and transitions after a long hiatus after school reopened. We have started our visit for the next academic year.

        During this school calendar year, we are eager to visit various schools and meet students to provide education beyond the classroom. According to the plan for this, we met the students of the government tribal residential school located in the beautiful town of Bargur in Anthiyur Taluk of Erode district!
        
        The students and the teachers stood facing the outside and gave a welcome. After a little conversation there.. the head master said last time that they needed a book rack to stack the books. So we provided 10 book racks for stacking a lot of books. We provided one projector for their digital learning.
        
        Subsequently, we visit many tribal schools and meet the students and discuss with them the guidance and plans for their future. These are carried out by our trained volunteers. In the current environment, our support and warmth for students is crucial. Mental health is very important. The solution is to have a conversation with them. Hope Trust has been doing this since ancient times.`,
        image: "images/Eventpics/e38.jpg",
      },
      {
        eventDate: "09 September 2022",
        place:
          "Government Tribal Residential Girls Higher Secondary School, Mullukurchi,Namakkal District",
        Time: "01.00pm - 06.30pm",
        Members: "07 Volunteers",
        Description: `We are constantly working to provide awareness opportunities for further studies of tribal students and the minimum understanding they need.The second time we visited, the tiredness of the journey disappeared in the enthusiastic welcome given by the teachers and students. The teachers also worked with us with camaraderie. The headmistress of the school was delighted with her care and love. Our Career Development, Psychological, and Motivational classes were conducted by our Trust volunteers, and all the students who participated in the sports competition were given medals and trophies on behalf of Hope Trust! Thus, the event was successfully completed.`,
        image: "images/Eventpics/e40.jpg",
      },
      {
        eventDate: "10 September 2022, 11 September 2022",
        place:
          "Government Tribal Residential Higher Secondary School, Arunoothumalai,Salem District & Government Ekalavya Model Residential Higher Secondary School, Sengarai,Namakkal District",
        Time: "01.00pm - 06.30pm",
        Members: "11 Volunteers",
        Description: `We continue to meet the tribal students who have returned to school after the summer holidays and provide them with the necessary assistance, guidance for life, and guidance for further studies. Following this, the previous schools were invited again. We accepted it and prepared to go back to those schools. According to this, we met the students of Government Tribal School, Arunoothumalai, and Ekalavya Model School, Sengarai. 
        The students recognised us and greeted us enthusiastically, as we had already visited. The teachers were also very welcoming and supportive. A test related to psychological addiction and emotions was conducted for the students, and counselling was given to them based on their score. All this was done by the trained members of our trust and thus the event of these two schools was completed.`,
        image: "images/Eventpics/e41.jpg",
      },
      {
        eventDate: "12 September 2022",
        place:
          "Government Tribal Residential Boys  Higher Secondary School, Mullukurchi,Namakkal District",
        Time: "01.00pm - 06.30pm",
        Members: "11 Volunteers",
        Description: `we met the students of GTR Boys School in Mullukurichi, Namakkal District.The students and teachers welcomed us very well.. After a short conversation there, the head master told us that they do not have a tank to store water and that there is a need for a water purifier. Following this, arrangements were made and we provided them. As usual, we executed our training and guidance programme for the students. 
        In the present environment, our support and warmth towards the students' mental health is also very important. The solution is to have a conversation with them. Hope Trust has been doing this for a long time, and we would like to express our heartfelt gratitude to everyone who has provided full cooperation, support, and encouragement!! `,
        image: "images/Eventpics/e43.jpg",
      },
      {
        eventDate: "02 October 2022",
        place:
          "Irukkam Island,Andhra Pradhesh",
        Time: "01.00pm - 06.30pm",
        Members: "62 Volunteers",
        Description: `This year we celebrated our Trust Achievement day along with the students and people of Irukkam Island, located along the border of Andhra Pradesh. The reason for going here is that when the Hope Trust started, we came here about 5 years ago and provided necessary help to the students. Based on that, we arranged to go back and meet them.Since it is an island, preparations were made earlier. In the morning, we started from Central Station with a group of 65 people. Friends of Hope trust members also participated this time. Non-Hope Trust volunteers are also given an opportunity. Once there, we reached Irukkam Island by boat ride. A calm, beautiful, undisturbed island. We were given a warm welcome when we arrived.It was great to meet people again. Then we divided the students into groups and conducted various sports competitions for them. At the end, all the winners and participants were given prizes. Then lunch was cooked and served to all who came on behalf of the hope trust. After that, the Culturals Program, organised by our volunteers, started. To promote gender equality, dance, song, and drama were also performed. People and children participated enthusiastically and expressed their happiness.The aim of the event is to create awareness of the sport. The day ended well, with the satisfaction of having done it well. Best wishes and appreciation to all Hope Trust and non-Hope Trust members who have travelled on our behalf, regardless of age, men, women, and adults.`,
        image: "images/Eventpics/e44.jpg",
      },
      {
        eventDate: "05 & 06 November 2022",
        place:
          `Government Tribal Residential Higher Secondary School, Kariyakoilvalavu Salem District & Maniyarpalayam Kallakurichi District.
          Community Seva High School, Thalvenniyur, Salem District.`,
        Members: "08 Volunteers",
        Description: `We are regularly meeting the tribal students from various districts and providing them with the necessary assistance, guidance for life and guidance for further studies. It is great to hear that many students and schools are benefiting from this. In the meantime, our next trip was to meet the students of Tribal School in Kariyakoilvalavu, Salem District ! On reaching the campus, the students gave it an enthusiastic welcome. The teachers also gave a warm welcome, and the physical education director and fellow teachers were supportive. After some conversation, the headmaster said that they don't have a Xerox machine and that there is a lot of need for one. Following this, arrangements were made, and we presented them. As a result, this school's event was completed.

        Next, we met the students of the government tribal camp located in the town of Maniyarpalayam! There too, the students gave an enthusiastic welcome. The fatigue of the journey disappeared in their welcome. The principal and fellow teachers brought to our attention what the basic needs of the school were For this, we provided stationery items such as pens, pencils, notebooks, and many other items for the benefit of the school students. We hope it will be of great use.
        
        The following day, I went to Seva Life School in Thalvenniyur. We went on a very difficult road trip where we met students and Asians and had discussions with them. After that, we divided the students into groups and conducted various sports competitions for them. At the end, all the winners and participants were given prizes.
        
        The aim of the event is to create awareness about the sport. The day ended well, with the satisfaction of having done it well.
        In the present environment, we offer our support and warmth to the students. Mental health is also very important. The solution is to have a conversation with them.`,
        image: "images/Eventpics/e45_46_47.jpg",
      },
      {
        eventDate: "19 November 2022",
        place:
          "Government Tribal Residential  Higher Secondary School,  Top Sengattupatti,Trichy District",
        Members: "08 Volunteers",
        Description: `The second time, we visited the Government Tribal School at Top Sengattupatti. Before this, we visited this school in 2017. The tiredness of the journey disappeared in the enthusiastic welcome given by the teachers and students. The care and love of the headmaster and fellow teachers of the school were a joy. Career development, psychological, and motivational classes were conducted by our Trust volunteers.
        Thus, the event was successfully completed.`,
        image: "images/Eventpics/e48.jpg",
      },
      {
        eventDate: "03 December 2022",
        place:
          "Government Model Higher Secondary School,Thuneri,The Nilgiris district.",
        Members: "08 Volunteers",
        Description: `Many government school teachers who know about the work of HOPE Trust approach me with the good intention of having their students benefit from our training courses as well. Following this, we went to a government model high school in Thuneri, Nilgiri district. For the last three years, we have been giving some help to that school and encouraging people through some classes on further studies and personality development. This year (and every year), we have been invited to attend by the headmaster and the teachers of the 9th, 10th, 11th, and 12th grades. Volunteers of the Trust conducted life guidance classes for students.`,
        image: "images/Eventpics/e49.jpg",
      },
      {
        eventDate: "07 January 2023",
        place:
          "Government Tribal  Residential Higher Secondary School, Komugi Dam,Kallakurichi District",
        Members: "08 Volunteers",
        Description: `Upon reaching the Komugi Dam School, the welcome and hospitality of the students and teachers made me very happy.Earlier, the headmaster mentioned that the school faced a lot of difficulties during power cuts. As a solution to this, we bought a UPS inverter for the school through our trust. I hope students will benefit from this. Our trust volunteers conducted counsellor guidance, psychological, and motivational classes for the students at this awareness event. Then, as usual, all the students who visited the school were given writing equipment by the trust.`,
        image: "images/Eventpics/e50.jpg",
      },
      {
        eventDate: "27 & 28 January 2023",
        place:
          `Republic day commutation,Puravelai Tribal Village &
          Government Tribal Residential High School,Manalodai, Kanniyakumari district.`,
        Members: "08 Volunteers",
        Description: `A team of our volunteers left Chennai to organize the 51st and 52nd events in Puravilai and Manalodai villages in Kanyakumari district. As planned, we reached Kulithurai from Chennai, and from there we reached Puravelai village by a good route. We started the Republic Day celebrations with joy and enthusiasm from the people there.
        Sports competitions were held for the students, dance training was given to them, and they were made to dance in the festival. Through various arts, including dance, drama, and speech, a group of volunteers performed the performance as a feast for the eyes and thought-provoking for the audience.
        The next day, we left Puravilai and reached the Government Palagudiyar High School in Manalodai village. In order to improve the academic performance of the students throughout the day, students from 1st to 9th grade were divided into 3 classes, i.e., students from 1st to 3rd grade were divided into the 1st class, and 4th to 6th grade was another class. "Moral value games" were conducted by our Trust volunteers, and prizes were given to all the students who participated in the game competition on behalf of Hope Trust!`,
        image: "images/Eventpics/e51_52.jpg",
      },
      {
        eventDate: "18 & 19 February 2023",
        place:
          `Government Tribal Residential High School,Thalamalai, Erode district & 
          Government Tribal Residential Higher secondary school, Nammiyampattu, Thiruvanamalai District.`,
        Members: "08 Volunteers",
        Description: `We went to the Government Tribal High School in Thalamalai, Erode District. We came to know about this school through the guidance and encouragement of the Director of Tribal Welfare. We heard a lot of good information about this school, so we were very interested in going there. On reaching the school, the teachers and students gave us a warm welcome.
        In this school, we went with the training courses "Fun with Numbers" and "English as a Second Language". It made a great impression and aroused interest among the students. Such a new initiative will bring English education to the students.
        After this, we went to the Nambiyampatu Government Tribal Welfare Higher Secondary School of Tiruvannamalai district, which we had already visited. There, we met the students and teachers and discussed career guidance, personal development, and many other topics.`,
        image: "images/Eventpics/e53_54.jpg",
      },
    ];

    var events = document.getElementsByClassName("events-story")[0];

    if (events) {
      var html = eventsData
        .reverse()
        .map((event, index) => {
          let className = "";
          if (index % 2 !== 0) {
            className = "entry-style1";
          }

          return `<article class="entry clearfix ${className}">
            <div class="events-post">
                <a href="javascript:;">
                    <img src=${event.image} alt="image">
                </a>
            </div>
            <div class="content-post">
                <p class="date">${event.eventDate}</p>
                <h2 class="title-post">
                    <a href="javascript:;">${event.place}</a>
                </h2>
                <div class="meta-post clearfix">
                    <ul>
                        <li class="address">
                            <a href="javascript:;">${event.Members}</a>
                        </li>
                    </ul>
                </div>
                <div class="entry-post">
                    <p>${event.Description}</p>
                    <div class="more">
                        <a href="javascript:;">Learn More</a>
                    </div>
                </div>
            </div>
        </article>`;
        })
        .join("");

      events.innerHTML = html;
    }
  };

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  var responsiveMenu = function () {
    var menuType = "desktop";

    $(window).on("load resize", function () {
      var currMenuType = "desktop";

      if (matchMedia("only screen and (max-width: 991px)").matches) {
        currMenuType = "mobile";
      }

      if (currMenuType !== menuType) {
        menuType = currMenuType;

        if (currMenuType === "mobile") {
          var $mobileMenu = $("#mainnav").attr("id", "mainnav-mobi").hide();
          var hasChildMenu = $("#mainnav-mobi").find("li:has(ul)");

          $("#header").after($mobileMenu);
          hasChildMenu.children("ul").hide();
          hasChildMenu.children("a").after('<span class="btn-submenu"></span>');
          $(".btn-menu").removeClass("active");
        } else {
          var $desktopMenu = $("#mainnav-mobi")
            .attr("id", "mainnav")
            .removeAttr("style");

          $desktopMenu.find(".submenu").removeAttr("style");
          $("#header").find(".nav-wrap").append($desktopMenu);
          $(".btn-submenu").remove();
        }
      }
      $("#mainnav-mobi ul li a").on("click", function () {
        $(this).parents("#mainnav-mobi").slideUp(300);
        $(".btn-menu").removeClass("active");
      });
    });

    $(".btn-menu").on("click", function () {
      $("#mainnav-mobi").slideToggle(300);
      $(this).toggleClass("active");
    });
    $(document).on("click", "#mainnav-mobi li .btn-submenu", function (e) {
      $(this).toggleClass("active").next("ul").slideToggle(300);
      e.stopImmediatePropagation();
    });
  };

  var headerFixed = function () {
    if ($("body").hasClass("header-sticky")) {
      $("#header").sticky();
    }

    if ($("body").hasClass("header-sticky-v2")) {
      $("#flat-site-navigator").sticky().css({ "z-index": 9999999 });
    }
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

  var ajaxContactForm = function () {
    $("#contactform").each(function () {
      $(this).validate({
        submitHandler: function (form) {
          var $form = $(form),
            str = $form.serialize(),
            loading = $("<div />", { class: "loading" });

          $.ajax({
            type: "POST",
            url: $form.attr("action"),
            data: str,
            beforeSend: function () {
              $form.find(".submit-wrap").append(loading);
            },
            success: function (msg) {
              var result, cls;
              if (msg == "Success") {
                result =
                  "Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )";
                cls = "msg-success";
              } else {
                result = "Error sending email.";
                cls = "msg-error";
              }

              $form.prepend(
                $("<div />", {
                  class: "flat-alert " + cls,
                  text: result,
                }).append(
                  $(
                    '<a class="close" href="javascript:;"><i class="fa fa-close"></i></a>'
                  )
                )
              );

              $form.find(":input").not(".submit").val("");
            },
            complete: function (xhr, status, error_thrown) {
              $form.find(".loading").remove();
            },
          });
        },
      });
    }); // each contactform
  };

  var counter = function () {
    $(".flat-counter").on("on-appear", function () {
      $(this)
        .find(".numb-count")
        .each(function () {
          var to = parseInt($(this).attr("data-to")),
            speed = parseInt($(this).attr("data-speed"));
          if ($().countTo) {
            $(this).countTo({
              to: to,
              speen: speed,
            });
          }
        });
    }); //counter
  };

  var detectViewport = function () {
    $('[data-waypoint-active="yes"]').waypoint(
      function () {
        $(this).trigger("on-appear");
      },
      { offset: "90%", triggerOnce: true }
    );
  };

  var flatmember = function () {
    $(".flat-row").each(function () {
      if ($().owlCarousel) {
        $(this)
          .find(".flat-member-carousel")
          .owlCarousel({
            loop: true,
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
      }
    });
  };

  var testimonialflexslider = function () {
    if ($().flexslider) {
      $(".flat-testimonial").flexslider({
        animation: "slide",
        direction: "history",

        controlNav: false,
        directionNav: true,
        slideshow: true,
        mousewheel: false,
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>',
      });
    }
  };

  var flatcauses = function () {
    $(".flat-row").each(function () {
      if ($().owlCarousel) {
        $(this)
          .find(".featured-causes")
          .owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            margin: 20,
            autoplay: true,
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
                items: 3,
              },
            },
          });
      }
    });
  };
  var flatEventstyle = function () {
    $(".flat-row").each(function () {
      if ($().owlCarousel) {
        $(this)
          .find(".flat-event-style1")
          .owlCarousel({
            loop: false,
            nav: false,
            dots: false,
            margin: 20,
            autoplay: false,
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
                items: 3,
              },
            },
          });
      }
    });
  };

  var flatrecentcauses = function () {
    $(".flat-row").each(function () {
      if ($().owlCarousel) {
        $(this)
          .find(".recent-causes.style-v1")
          .owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            margin: 0,
            autoplay: true,
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
                items: 3,
              },
            },
          });
      }
    });
  };

  var portfolioIsotope = function () {
    if ($().isotope) {
      var $container = $(".portfolio-wrap");
      $container.imagesLoaded(function () {
        $container.isotope({
          itemSelector: ".item",
          transitionDuration: "1s",
        });
      });

      $(".portfolio-filter li").on("click", function () {
        var selector = $(this).find("a").attr("data-filter");
        $(".portfolio-filter li").removeClass("active");
        $(this).addClass("active");
        $container.isotope({ filter: selector });
        return false;
      });
    }
  };

  var parallax = function () {
    if ($().parallax && isMobile.any() == null) {
      $(".parallax1").parallax("50%", 0.2);
      $(".parallax2").parallax("50%", 0.4);
      $(".parallax3").parallax("50%", 0.5);
      $(".parallax4").parallax("50%", 0.5);
      $(".parallax5").parallax("50%", 0.5);
      $(".parallax6").parallax("50%", 0.5);
      $(".parallax7").parallax("50%", 0.5);
      $(".parallax11").parallax("50%", -1.5);
    }
  };

  var flatCountdown = function () {
    var anycar_style = function (data) {
      $(this.el).html(
        "<div class='square days'>" +
          "<div class='numb'>" +
          this.leadingZeros(data.days, 2) +
          "</div>" +
          "<div class='text'>Days</div>" +
          "</div>" +
          "<div class='square hours'>" +
          "<div class='numb'>" +
          this.leadingZeros(data.hours, 2) +
          "</div>" +
          "<div class='text'>Hours</div>" +
          "</div>" +
          "<div class='square mins'>" +
          "<div class='numb'>" +
          this.leadingZeros(data.min, 2) +
          "</div>" +
          "<div class='text'>Minutes</div>" +
          "</div>" +
          "<div class='square secs'>" +
          "<div class='numb'>" +
          this.leadingZeros(data.sec, 2) +
          "</div>" +
          "<div class='text'>Seconds</div>" +
          "</div>"
      );
    };

    $(".countdown").each(function () {
      $(this).countdown({
        date: $(this).attr("data-date"),
        render: anycar_style,
      });
    });
  };

  var goTop = function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 800) {
        $(".go-top").addClass("show");
      } else {
        $(".go-top").removeClass("show");
      }
    });

    $(".go-top").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 1000, "easeInOutExpo");
      return false;
    });
  };

  var googleMap = function () {
    if ($().gmap3) {
      $("#flat-map").gmap3({
        map: {
          options: {
            zoom: 4,
            mapTypeId: "charry_style",
            mapTypeControlOptions: {
              mapTypeIds: [
                "charry_style",
                google.maps.MapTypeId.SATELLITE,
                google.maps.MapTypeId.HYBRID,
              ],
            },
            scrollwheel: false,
          },
        },
        getlatlng: {
          address: "22, Bardeshi Amin Bazar Dhaka, Bangladesh",
          callback: function (results) {
            if (!results) return;
            $(this)
              .gmap3("get")
              .setCenter(
                new google.maps.LatLng(
                  results[0].geometry.location.lat(),
                  results[0].geometry.location.lng()
                )
              );
            $(this).gmap3({
              marker: {
                latLng: results[0].geometry.location,
                options: {
                  icon: "http://themesflat.com/html/charry/images/icon/marker.png",
                },
              },
            });
          },
        },
        styledmaptype: {
          id: "charry_style",
          options: {
            name: "Charry Map",
          },
          styles: [
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [
                {
                  color: "#edf0f4",
                },
                {
                  lightness: 17,
                },
              ],
            },

            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [
                {
                  color: "#ffffff",
                },
                {
                  lightness: 20,
                },
              ],
            },

            {
              featureType: "road.highway",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#f7f7f7",
                },
                {
                  lightness: 17,
                },
              ],
            },

            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#f7f7f7",
                },
                {
                  lightness: 29,
                },
                {
                  weight: 0.2,
                },
              ],
            },

            {
              featureType: "road.arterial",
              elementType: "geometry",
              stylers: [
                {
                  color: "#f7f7f7",
                },
                {
                  lightness: 18,
                },
              ],
            },

            {
              featureType: "road.local",
              elementType: "geometry",
              stylers: [
                {
                  color: "#f7f7f7",
                },
                {
                  lightness: 16,
                },
              ],
            },

            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [
                {
                  color: "#ffffff",
                },
                {
                  lightness: 21,
                },
              ],
            },

            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [
                {
                  color: "#ffffff",
                },
                {
                  lightness: 21,
                },
              ],
            },

            {
              elementType: "labels.text.stroke",
              stylers: [
                {
                  visibility: "on",
                },
                {
                  color: "#ffffff",
                },
                {
                  lightness: 20,
                },
              ],
            },

            {
              elementType: "labels.text.fill",
              stylers: [
                {
                  saturation: 46,
                },
                {
                  color: "#000000",
                },
                {
                  lightness: 17,
                },
              ],
            },

            {
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },

            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [
                {
                  color: "#ffffff",
                },
                {
                  lightness: 45,
                },
              ],
            },

            {
              featureType: "administrative",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#ffffff",
                },
                {
                  lightness: 35,
                },
              ],
            },

            {
              featureType: "administrative",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#000000",
                },
                {
                  lightness: 65,
                },
                {
                  weight: 1.2,
                },
              ],
            },
          ],
        },
      });
    }
  };

  var swClick = function () {
    function activeLayout() {
      $(".switcher-container")
        .on("click", "a.sw-light", function () {
          $(this).toggleClass("active");
          $("body").addClass("home-boxed");
          $("body").css({ background: "#f6f6f6" });
          $(".sw-pattern.pattern").css({
            top: "100%",
            opacity: 1,
            "z-index": "10",
          });
        })
        .on("click", "a.sw-dark", function () {
          $(".sw-pattern.pattern").css({
            top: "98%",
            opacity: 0,
            "z-index": "-1",
          });
          $(this).removeClass("active").addClass("active");
          $("body").removeClass("home-boxed");
          $("body").css({ background: "#fff" });
          return false;
        });
    }

    function activePattern() {
      $(".sw-pattern").on("click", function () {
        $(".sw-pattern.pattern a").removeClass("current");
        $(this).addClass("current");
        $("body").css({
          background: 'url("' + $(this).data("image") + '")',
          "background-size": "30px 30px",
          "background-repeat": "repeat",
        });
        return false;
      });
    }

    activeLayout();
    activePattern();
  };

  var flatSearch = function () {
    $(document).on("click", function (e) {
      var clickID = e.target.id;
      if (clickID != "s") {
        $(".top-search").removeClass("show");
      }
    });

    $(".search-box").on("click", function (event) {
      event.stopPropagation();
    });

    $(".search-form").on("click", function (event) {
      event.stopPropagation();
    });

    $(".search-box").on("click", function () {
      if (!$(".top-search").hasClass("show")) $(".top-search").addClass("show");
      else $(".top-search").removeClass("show");
    });
  };

  var removePreloader = function () {
    $(".loader").fadeOut("slow", function () {
      $(this).remove();
    });
  };

  // Dom Ready
  $(function () {
    if (matchMedia("only screen and (min-width: 991px)").matches) {
      headerFixed();
    }
    responsiveMenu();
    progressBar();
    counter();
    swClick();
    goTop();
    ajaxContactForm();
    googleMap();
    flatSearch();
    flatCountdown();
    detectViewport();
    flatmember();
    flatEventstyle();
    testimonialflexslider();
    flatcauses();
    parallax();
    flatrecentcauses();
    portfolioIsotope();
    removePreloader();
    eventsLoading();
  });
})(jQuery);
