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
      /*{
        eventDate: "26 March 2017",
        place: "Placepalayam & Gudiyam Tribal Villages,Thiruvallur District",
        // Time: "6.00AM - 6.00PM",
        Members: "12 Volunteers",
        Description:
          "We provided solar lamps to each family, as there is no electricity available. We entertained people by singing songs, providing small gifts and chocolates and provided special lunch. We also gave a brief talk on cleanliness & health, child marriage and child labour.",
        image: "images/Eventpics/e1.jpg",
      },*/
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
      /*{
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
      },*/
      /*{
            'eventDate': '26 November 2017',
            'place': 'SRMC Porur, Chennai',
            'Time': '10.00AM - 3.00PM',
            'Members': '11 Volunteers',
            'Description': 'An Workshop on "Students role in the Development of NGO" along with appreciating the young achievers who are all from poor background.',
            'image': 'images/Eventpics/e7.jpg'
        },*/
      /*{
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
        place: "Irukkam Island,Andhra Pradhesh",
        Time: "01.00pm - 06.30pm",
        Members: "62 Volunteers",
        Description: `This year we celebrated our Trust Achievement day along with the students and people of Irukkam Island, located along the border of Andhra Pradesh. The reason for going here is that when the Hope Trust started, we came here about 5 years ago and provided necessary help to the students. Based on that, we arranged to go back and meet them.Since it is an island, preparations were made earlier. In the morning, we started from Central Station with a group of 65 people. Friends of Hope trust members also participated this time. Non-Hope Trust volunteers are also given an opportunity. Once there, we reached Irukkam Island by boat ride. A calm, beautiful, undisturbed island. We were given a warm welcome when we arrived.It was great to meet people again. Then we divided the students into groups and conducted various sports competitions for them. At the end, all the winners and participants were given prizes. Then lunch was cooked and served to all who came on behalf of the hope trust. After that, the Culturals Program, organised by our volunteers, started. To promote gender equality, dance, song, and drama were also performed. People and children participated enthusiastically and expressed their happiness.The aim of the event is to create awareness of the sport. The day ended well, with the satisfaction of having done it well. Best wishes and appreciation to all Hope Trust and non-Hope Trust members who have travelled on our behalf, regardless of age, men, women, and adults.`,
        image: "images/Eventpics/e44.jpg",
      },
      {
        eventDate: "05 & 06 November 2022",
        place: `Government Tribal Residential Higher Secondary School, Kariyakoilvalavu Salem District & Maniyarpalayam Kallakurichi District.
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
      },*/
      /*{
        eventDate: "07 January 2023",
        place:
          "Government Tribal  Residential Higher Secondary School, Komugi Dam,Kallakurichi District",
        Members: "09 Volunteers",
        Description: `We provided a UPS inverter to support student's needs. During the awareness event, our trust volunteers conducted various counseling, psychological and motivational sessions to empower and uplift the students. As always all the school students received essential writing materials from the trust to aid for their education and creativity.`,
        image: "images/Eventpics/e50.jpg",
      },
      {
        eventDate: "27 & 28 January 2023",
        place: `Republic day commutation,Puravelai Tribal Village &
          Government Tribal Residential High School,Manalodai, Kanniyakumari district.`,
        Members: "08 Volunteers",
        Description:'We began the Republic Day celebrations with great joy and enthusiasm from the local community. Students participated in sports competitions and dance performances, with prior training. Volunteers presented vibrant performances through dance, drama, and speech, offering both entertainment and reflection',
        image: "images/Eventpics/e51_52.jpg",
      },
      {
        eventDate: "18 & 19 February 2023",
        place: `Government Tribal Residential High School,Thalamalai, Erode district & 
          Government Tribal Residential Higher secondary school, Nammiyampattu, Thiruvanamalai District.`,
        Members: "08 Volunteers",
        Description:'At this school, we conducted training courses on "Fun with Numbers" and "English as a Second Language," which made a great impression and sparked interest among the students. We also engaged them in discussions on career guidance, personal development, and fun events.',
        image: "images/Eventpics/e53_54.jpg",
      },
      {
        eventDate: "17 June 2023",
        place: "Ekalavya Model Residential Higher Secondary School, Kumizhi",
        Members: "13 Volunteers",
        Description: `We visited the Ekalavya Model Boarding School in Kumizhi, Chengalpattu district, at the invitation of the headmaster. Our trust volunteers conducted life guidance sessions for students from grades 6 to 12, along with various career development, psychological and motivational classes. The day was dedicated in empowering students and offering insights to enhance their learning journey.`,
        image: "images/Eventpics/e55.jpg",
      },
      {
        eventDate: "14 & 17 July 2023",
        place: `Government Tribal Residential Higher Secondary School, Kargudi & Kunjapanai, The Nilgiris District`,
        Members: "11 Volunteers",
        Description: "At school, We were welcomed with open arms by the teachers and students. We hope that the laptop, CPU, and UPS we gave them will be useful to them. In this event, Hope Trust's sessions were conducted by trust members for the students from classes 6 to +2. The school principal and teachers worked really well together to make sure the event was successful and beneficial for the pupils.",
        image: "images/Eventpics/e56_57.jpg",
      },
      {
        eventDate: "15 August 2023",
        place: `Chennai`,
        Members: "12 Volunteers",
        Description: `On the occasion of Independence Day, eight of our dedicated trust volunteers came together to distribute 100 food packages to those in need. It was heartwarming to witness the smiles and gratitude on their faces, a reminder of how small acts of kindness can make a big difference. The joy we saw that day reinforced our commitment to serving the community and spreading compassion wherever we can.`,
        image: "images/Eventpics/e58.jpg",
      },
      {
        eventDate: "19 August 2023 & 21 August 2023",
        place: `Government Tribal Residential Higher Secondary School, Hasanur & Bargur, Erode District`,
        Members: "08 Volunteers",
        Description: `On our trip to the Government Tribal Residential Higher Secondary School in Hasanur Hill Village under the Sathyamangalam Hills of Erode District and the Government Tribal Residential Higher Secondary School located in Bargur in the same Erode District, we had an amazing experience meeting future minds. Our Trust volunteers guided the students with both academic and life skills sessions.`,
        image: "images/Eventpics/e59_60.jpg",
      },
      {
        eventDate: "29 August 2023 ",
        place: `Government Tribal Residential Higher Secondary School, Perumparai`,
        Members: "06 Volunteers",
        Description: `We visited the Government Tribal Residential Higher Secondary School in Perumparai, a serene hill village nestled in the Kodaikanal hills of Dindigul district. Our committed volunteers conducted training sessions for students of grades 6 to 12, aiming to support and enhance their learning experience. The sessions were engaging and educational, helping to broaden the students’ perspectives and motivate them in their academic journey.`,
        image: "images/Eventpics/e61.jpg",
      },
      {
        eventDate: "02 September 2023",
        place: `Government Tribal Residential Higher Secondary School, Namiyampattu`,
        Members: "14 Volunteers",
        Description: `We visited the Government Tribal Residential Higher Secondary School in the hill village of Nammaiyampattu, nestled in the scenic Jawadhu Hills of Thiruvannamalai district. During our visit, dedicated volunteers from our trust conducted training sessions for students from grades 6 to 12. These sessions were designed to support their academic growth and inspire curiosity, providing the students with valuable learning experiences beyond the classroom.`,
        image: "images/Eventpics/e62.jpg",
      },
      {
        eventDate: "08 September 2023",
        place: `Government Tribal Residential Higher Secondary School, Chinnaillupur`,
        Members: "08 Volunteers",
        Description: `We visited the Government Tribal Residential Higher Secondary School in Chinnaillupur, located in the Pachimalai Hills, Trichy District. After an overnight journey from Chennai to Thuraiyur and a morning bus ride through the hills, we reached the school at 10 am. The teachers and students warmly welcomed us. As usual, writing materials were distributed to all the students.`,
        image: "images/Eventpics/e63.jpg",
      },
      {
        eventDate: "02 October 2023",
        place: `Kuppathupalayam village in Thiruvallur district`,
        Members: "08 Volunteers",
        Description: `We distributed 40 tarpaulin sheets to families in Kuppathupalayam village, located in Thiruvallur district. This initiative aimed to help them reinforce their shelters and stay protected from heavy rains and frequent cyclones, offering some relief and security during harsh weather conditions.`,
        image: "images/Eventpics/e64.jpg",
      },*/
      {
        eventDate: "27 October 2023",
        place: `Government Tribal Residential Higher Secondary School, Mullukuruchi, Namakkal distric`,
        Members: "10 Volunteers",
        Description: `We visited Government Tribal Residential Higher Secondary School, Mullukuruchi, Namakkal district, where our volunteers conducted training classes for students of grades 6-12. Additionally, we engaged in a conversation on mental health, which made the students feel supported and cared for.`,
        image: "images/Eventpics/e65.jpg",
      },
      /*{
        eventDate: "28 October 2023",
        place: `Government Tribal Residential Higher Secondary School, Arunuthumalai`,
        Members: "11 Volunteers",
        Description: `We were invited back to Government Tribal Residential Higher Secondary School, Arunuthumalai, which we had already visited. The students recognized us and welcomed us warmly, while the teachers were also very supportive. A concentration and mental stability test was conducted for the students, followed by personalized guidance based on their scores, all facilitated by our trained Trust members.`,
        image: "images/Eventpics/e66.jpg",
      },
      {
        eventDate: "29 October 2023",
        place: `Eklavya Model Residential Higher Secondary School, Sengarai`,
        Members: "11 Volunteers",
        Description: `We revisited Eklavya Model Residential Higher Secondary School, Sengarai, where the students warmly recognized and welcomed us. The teachers were also supportive. A counseling test focused on concentration and mental stability was conducted, followed by personalized guidance for the students based on their scores, all provided by our trained Trust members.`,
        image: "images/Eventpics/e67.jpg",
      },
      {
        eventDate: "30 October 2023",
        place: `Government Tribal Residential Higher Secondary School, Vallavanthinadu`,
        Members: "11 Volunteers",
        Description: `This time, we visited the Government Tribal Residential Higher Secondary School in Vallavanthinadu, where our volunteers conducted training sessions for students from grades 6 to 12. In addition to academic support, we also held a meaningful discussion on mental health, creating a safe space for students to share, reflect, and feel supported. The session aimed to promote emotional well-being and let the students know they are not alone in their journey`,
        image: "images/Eventpics/e68.jpg",
      },*/
      {
        eventDate: "04 November 2023",
        place: `Eklavya Model Residential Higher Secondary School, Yercaud, Salem District`,
        Members: "10 Volunteers",
        Description: `We had the opportunity to meet the students of Eklavya Model Residential Higher Secondary School in Yercaud, located in Salem district. Our team conducted career guidance sessions along with psychological and motivational classes for students from grades 6 to 12, aiming to inspire them, boost their confidence, and help them explore future possibilities with clarity and purpose.`,
        image: "images/Eventpics/e69.jpg",
      },
      /*{
        eventDate: "05 November 2023",
        place: `Eklavya Model Residential Higher Secondary School, located in the Vellimalai, Kallakurichi District`,
        Members: "10 Volunteers",
        Description: `We met the students of Eklavya Model Residential Higher Secondary School, located in Vellimalai, Kallakurichi district, where we conducted career guidance, psychological, and motivational sessions for students from grades 6 to 12. In addition to these sessions, we also held an open conversation on life, encouraging students to share their thoughts and reflect on their aspirations, challenges, and personal growth.`,
        image: "images/Eventpics/e70.jpg",
      },
      {
        eventDate: "01 December 2023",
        place: `Government Model Higher Secondary School, Thuneri`,
        Members: "06 Volunteers",
        Description: `We visited the Government Model Higher Secondary School in Thuneri, where our volunteers conducted career guidance, psychological, and motivational sessions for students from grades 6 to 12. These efforts were complemented by educational sessions from Hope Trust, creating a well-rounded and impactful experience for the students.`,
        image: "images/Eventpics/e71.jpg",
      },
      {
        eventDate: "02 December 2023",
        place: `Government Tribal Residential High Secondary School, Bokkapuram`,
        Members: "06 Volunteers",
        Description: `We had the opportunity to interact with the students of Government Tribal Residential Higher Secondary School in Bokkapuram. Our dedicated volunteers conducted career guidance, psychological, and motivational sessions for students from grades 6 to 12. These sessions were further enriched by educational programs from Hope Trust, making it a holistic and engaging experience for the students.`,
        image: "images/Eventpics/e72.jpg",
      },*/
      {
        eventDate: "03 December 2023",
        place: `Eklavya Model Residential Higher Secondary School, Mpalada, Niligiris District`,
        Members: "06 Volunteers",
        Description: `We visited Eklavya Model Residential Higher Secondary School in Mpalada, located in the Nilgiris district. Our dedicated Hope Trust volunteers conducted a series of career guidance, psychological, and motivational sessions for students from grades 6 to 12. These were complemented by educational classes from Hope Trust, aiming to support the students' academic and personal growth in a meaningful way.`,
        image: "images/Eventpics/e73.jpg",
      },
      {
        eventDate: "06 January 2024",
        place: `Government Tribal Residential Higher Secondary  School, Kottaputhur, Kallakurichi `,
        Members: "13 Volunteers",
        Description: `We interacted with the students of Government Tribal Residential Higher Secondary School, Kottaputhur, located in the Kalvarayan Hills of Kallakurichi District. We donated an RO purifier to the school, ensuring clean drinking water for the students. Additionally, our volunteers conducted training classes for students of grades 6 to 12.`,
        image: "images/Eventpics/e74.jpg",
      },
      /*{
        eventDate: "07 January 2024",
        place: `Seva High School, Thalvenniyur,Kallakurichi`,
        Members: "13 Volunteers",
        Description: `We met the students of Seva High School in Thalvenniyur, nestled in the Kalvarayan Hills of Kallakurichi district. To uplift the spirits of these young learners who live away from their families, we conducted engaging interactive and gaming sessions designed to boost their morale and create a joyful, supportive environment.`,
        image: "images/Eventpics/e75.jpg",
      },
      {
        eventDate: "06 January 2024",
        place: `Eklavya Model Residential Higher Secondary School, Kumizhi, Chengalpattu`,
        Members: "04 Volunteers",
        Description: `In this event, we interacted with students of the Eklavya Model Residential Highe Secondary School,Kumizhi Chengalpattu District, for the second time. This time, we conducted some more advanced life guidance classes for students in grades 6 to 12. Our trust volunteers also provided career development, psychological and motivational sessions.`,
        image: "images/Eventpics/e76.jpg",
      },
      {
        eventDate: "20 January 2024",
        place: `Government Tribal Residential Higher Secondary School, Aatiyanur, Javadhu Hills, Thiruvanamalai`,
        Members: "06 Volunteers",
        Description: `We visited Government Tribal Residential Higher Secondary School, Aatiyanur, Javadhu Hills, Thiruvanamalai District. In this school, multiple career guidance, psychological and motivational classes were conducted by our trust volunteers for students of grades 6-8, 9, 10, +1 and +2. A conversation on life was also held, fostering a positive environment for the students.`,
        image: "images/Eventpics/e77.jpg",
      },
      {
        eventDate: "21 January 2024",
        place: `Eklavya Model Residential Girls Higher Secondary School, Abhinavam, Salem`,
        Members: "12 Volunteers",
        Description: `In this event, we went to visit the Eklavya Model Residential Girls Higher Secondary School, Abhinavam, Salem District, after the kind request from the school. In this school, career guidance, psychological and motivational classes were conducted by our trust volunteers for students of grades 6-8, 9, 10, +1 and +2. Additionally, we distributed stationery items to the students, contributing to their academic needs and development.`,
        image: "images/Eventpics/e78.jpg",
      },
      {
        eventDate: "28 January 2024",
        place: `Eklavya Model Residential Higher Secondary School, Puliampatti, Thiruvanamalai District.`,
        Members: "09 Volunteers",
        Description: `In this event, we interacted with the students of Eklavya Model Residential Higher Secondary School, Puliampatti, Thiruvanamalai District. In this school, some career guidance, psychological and motivational classes were conducted by our trust volunteers for students of grades 6-8, 9, 10, +1 and +2. Additionally, stationery items were distributed to the students, supporting their educational journey.`,
        image: "images/Eventpics/e79.jpg",
      },
      {
        eventDate: "28 January 2024",
        place: `Eklavya Model Residential Higher Secondary School, Keelur, Tirupathur District`,
        Members: "08 Volunteers",
        Description: `In this event, we met students of Eklavya Model Residential Higher Secondary School, Keelur, Tirupathur District. In this school, career guidance, psychological and motivational classes were conducted by our trust volunteers for the students of grades 6-8, 9, 10, +1 and +2. Additionally, some stationery items were distributed to the school children to support their education.`,
        image: "images/Eventpics/e80.jpg",
      },*/
      {
        eventDate: "21 June 2024",
        place: `Government Tribal Residential Higher Secondary School, Pattarikadu.`,
        Members: "05 Volunteers",
        Description: `In this event, we went to meet students of Government Tribal Residential Higher Secondary School, Pattarikadu. Our trust volunteers held some career guidance, psychological support and motivational classes to students in grades 6 to 12. Additionally, multiple stationery items were distributed to the students for their educational needs.`,
        image: "images/Eventpics/e81.JPG",
      },
      /*{
        eventDate: "22 June 2024",
        place: `Eklavya Model Residential Higher Secondary School, Kumizhi, Chengalpattu district`,
        Members: "04 Volunteers",
        Description: `In this event, we had a session with the students of Eklavya Model Residential Higher Secondary School in Kumizhi of Chengalpattu district. Our trust members dedicated their time in delivering career guidance, counselling, psychological and motivational programs for students in grades 6-12 and further supported them by distributing stationery items to aid their academic journey.`,
        image: "images/Eventpics/e82.JPG",
      },
      {
        eventDate: "29 June 2024",
        place: `Government Tribal Residential Higher Secondary School, Hasanur`,
        Members: "08 Volunteers",
        Description: `We interacted with the students of Government Tribal Residential Higher Secondary School, Hasanur. We provided educational and material support to students in grades 6-12 through career guidance, psychological, counselling and motivational classes and with stationery distribution to encourage and support their academic progress.`,
        image: "images/Eventpics/e83.JPG",
      },*/
      {
        eventDate: "01 July 2024",
        place: ` Government Tribal Residential Higher Secondary School, Bargur.`,
        Members: "08 Volunteers",
        Description: `We had a session with the students of Government Tribal Residential Higher Secondary School, Bargur. We invested in the future of students in grades 6-12 by providing them with career guidance, psychological and motivational training and with multiple necessary stationery to help them achieve their academic goals and personal growth.`,
        image: "images/Eventpics/e84.JPG",
      },
      /*{
        eventDate: "20 July 2024",
        place: `Government Tribal Residential Higher Secondary School, Maniyarpaliyam`,
        Members: "07 Volunteers",
        Description: `We went to visit the amazing students of Government Tribal Residential Higher Secondary School Maniyarpaliyam, where we offered a range of sessions like career guidance, psychological counselling and motivational workshop, to the students in grades 6-12. Additionally, we distributed essential stationery items to support their academic needs.`,
        image: "images/Eventpics/e85.JPG",
      },
      {
        eventDate: "21 July 2024",
        place: `Government Tribal Residential Higher Secondary School, Komugi Dam`,
        Members: "07 Volunteers",
        Description: `We had a session with the students of the Government Tribal Residential Higher Secondary School, Komugi Dam, where our trust volunteers provided with career guidance, psychological support and motivational classes to students in grades 6-12. We also distributed stationery to support the student's academic efforts.`,
        image: "images/Eventpics/e86.JPG",
      },*/
      {
        eventDate: "10 August 2024",
        place: `Government Tribal Residential Higher Secondary School, Nampiyampattu`,
        Members: "09 Volunteers",
        Description: `In this event, we had a session with the lovely students of the Government Tribal Residential Higher Secondary School Nampiyampattu, where students from grades 6 to 12 benefited from career Guidance, counselling, psychological and motivational sessions led by our trust volunteers. To enhance our support for the children’s education, we distributed stationery supplies.`,
        image: "images/Eventpics/e87.JPG",
      },
      /*{
        eventDate: "15 August 2024",
        place: `Chennai`,
        Members: "04 Volunteers",
        Description: `On the occasion of Independence Day, four of our dedicated volunteers came together to distribute 100 food packages to people in need. It was a small gesture of solidarity and compassion, aiming to bring comfort to those facing difficult times. Seeing the smiles on their faces was truly heartwarming and reminded us of the impact kindness can have. Moments like these reinforce our commitment to serving communities with empathy and care.`,
        image: "images/Eventpics/e88.JPG",
      },
      {
        eventDate: "16 August 2024",
        place: `Government Tribal Residential Higher Secondary School, Pechiparai`,
        Members: "11 Volunteers",
        Description: `We interacted with the amazing students of Government Tribal Residential Higher Secondary School located in Pechiparai. We provided them with multiple classes including career guidance, psychological counselling and motivational Workshops, to students in grades 6 to 12. Additionally, we also distributed essential stationery supplies to support the school student’s educational needs.`,
        image: "images/Eventpics/e89.JPG",
      },
      {
        eventDate: "16 August 2024",
        place: `Government Tribal Residential High School, Manalodai`,
        Members: "03 Volunteers",
        Description: `We met the students of Government Tribal Residential High School in Manalodai, where our dedicated trust volunteers conducted career guidance, counselling, psychological, and motivational sessions for students from grades 6 to 12. To further support their learning journey, we also distributed essential stationery supplies, helping to equip them for their academic pursuits.`,
        image: "images/Eventpics/e90.JPG",
      },
      {
        eventDate: "17 August 2024",
        place: `Government Tribal Residential Higher Secondary School, Pathukani`,
        Members: "11 Volunteers",
        Description: `We had a session with the students of the Government Tribal Residential Higher Secondary School in Pathukani. Our hope trust volunteers empowered students in grades 6 to 12 with career guidance, psychological concepts and motivational inspiration and provided them essential stationery supplies.`,
        image: "images/Eventpics/e91.jpg",
      },
      {
        eventDate: "30 August 2024",
        place: `Government Tribal Residential Higher Secondary School, Karumandurai`,
        Members: "15 Volunteers",
        Description: `We met and interacted with the students of Government Tribal Residential Higher Secondary School in Karumandurai. We invested in the future of students in grades 6 to 12 by providing them with career guidance, psychological support, motivational training and some essential stationery supplies.`,
        image: "images/Eventpics/e92.JPG",
      },
      {
        eventDate: "31 August 2024",
        place: `Government Tribal Residential Higher Secondary School, Kariyakoilvalavu`,
        Members: "14 Volunteers",
        Description: `We had a valuable day with the students of Government Tribal Residential Higher Secondary School Kariyakoilvalavu. Our trust volunteers inspired the students in grades 6-12 through career guidance, psychological support and motivational sessions. We also provided them with essential stationery, leaving a long lasting impact on their journey.`,
        image: "images/Eventpics/e93.JPG",
      },
      {
        eventDate: "24 October 2024",
        place: `Government Tribal Residential Girls Higher Secondary School, Mullukuruchi`,
        Members: "7 Volunteers",
        Description: `We had a valuable day with the students of Government Tribal Residential Girls Higher Secondary School in Mullukuruchi. Our trust volunteers empowered the girls from grades 6 to 12 with some career guidance, psychological support and motivational classes. And then, we also provided them with essential stationery to support their dreams.`,
        image: "images/Eventpics/e94.jpg",
      },
      {
        eventDate: "25 October 2024",
        place: `Government Tribal Residential Boys Higher Secondary School, Mullukuruchi`,
        Members: "7 Volunteers",
        Description: `We connected with the young minds at the Government Tribal Residential Boys Higher Secondary School, Mullukuruchi, where our volunteers provided career guidance, psychological support and motivational sessions. Then, we also distributed essential stationery, lighting a path of encouragement and hope for students in grades 6-12.`,
        image: "images/Eventpics/e95.jpg",
      },
      {
        eventDate: "26 OCtober 2024",
        place: `Government Tribal Residential Higher Secondary School, Sengarai`,
        Members: "12 Volunteers",
        Description: `We engaged with the students of the Government Tribal Residential Higher Secondary School, Sengarai, where our dedicated volunteers provided career guidance, psychological support and motivational sessions for grades 6-12. To further uplift the students, we distributed essential stationery, empowering them to pursue into their dreams with renewed confidence.`,
        image: "images/Eventpics/e96.JPG",
      },
      {
        eventDate: "28 October 2024",
        place: `Government Tribal Residential Higher Secondary School, Vallavanthinadu`,
        Members: "11 Volunteers",
        Description: `We interacted with the students of Government Tribal Residential Higher Secondary School, Vallavanthinadu. Our trust volunteers provided various career guidance, psychological support and motivational sessions for grades 6-12, uplifting the student's spirits. To help them stay on track with their education, we also distributed essential stationery supplies.`,
        image: "images/Eventpics/e97.JPG",
      },
      {
        eventDate: "08 November 2024",
        place: `Government Tribal Residential Higher Secondary School, Anaikatti`,
        Members: "08 Volunteers",
        Description: `We engaged with the students of Government Tribal Residential Higher Secondary School, Anaikatti, where our dedicated volunteers conducted multiple career guidance, psychological support and motivational programs for grades 6- 12. To further support their education, we provided essential stationery supplies.`,
        image: "images/Eventpics/e98.jpg",
      },
      {
        eventDate: "09 November 2024",
        place: `Government Tribal Residential Higher Secondary School, Aroonuthumalai`,
        Members: "06 Volunteers",
        Description: `We visited Government Tribal Residential Higher Secondary School located in the hill Aroonuthumalai, where our dedicated trust volunteers inspired and empowered students in grades 6-12 through various career guidance, psychological support and motivational workshops. To support their quest for learning, we then provided essential stationery supplies.`,
        image: "images/Eventpics/e99.jpg",
      },
      {
        eventDate: "15 November 2024",
        place: `Government Tribal Residential Higher Secondary School, Velligoundanur`,
        Members: "12 Volunteers",
        Description: `We went and met the children of the Government Tribal Residential Higher Secondary School, Velligoundanur, where our trust volunteers empowered the school students from grades 6 to 12 with multiple career guidance, psychological support and motivational training classes. We also provided essential stationery to help nurture their dreams and learning.`,
        image: "images/Eventpics/e100.jpg",
      },
      {
        eventDate: "16 November 2024",
        place: `Eklavya Model Residential Higher Secondary School, Yercaud`,
        Members: "11 Volunteers",
        Description: `We met the students of Eklavya Model Residential Higher Secondary School in Yercaud, where our dedicated hope trust volunteers offered the school students various career guidance, psychological support and motivational sessions to the students from grades 6 to 12. Multiple essential stationeries was also distributed to encourage their educational journey.`,
        image: "images/Eventpics/e101.JPG",
      },
      {
        eventDate: "23 November 2024",
        place: `Eklavya Model Residential Higher Secondary School, Puliyampatti`,
        Members: "11 Volunteers",
        Description: `We visited the Eklavya Model Residential Higher Secondary School in Puliyampatti, where our volunteers offered students in grades 6 - 12 with vital career guidance, psychological support and motivational training. We provided essential stationery to support their learning journey.`,
        image: "images/Eventpics/e102.JPG",
      },
      {
        eventDate: "29 November 2024",
        place: `Government Tribal Residential High School, Kargudi`,
        Members: "08 Volunteers",
        Description: `We met the students of Government Tribal Residential Higher Secondary School in Kargudi. Our dedicated trust volunteers inspired and empowered students in grades 6-12 through career guidance, psychological support and motivational sessions, and also providing them with some essential stationery to aid their learning.`,
        image: "images/Eventpics/e103.JPG",
      },
      {
        eventDate: "29 November 2024",
        place: `Government Tribal Residential Higher Secondary School, Bokkapuram`,
        Members: "03 Volunteers",
        Description: `We connected with the students of Government Tribal Residential Higher Secondary School, Bokkapuram, where our dedicated trust volunteers delivered career guidance, psychological support and motivational workshops. After that, we provided them essential stationery to students in grades 6-12, leaving a lasting impact on their educational journey.`,
        image: "images/Eventpics/e104.jpg",
      },
      {
        eventDate: "30 November 2024",
        place: `Eklavya Model Residential Higher Secondary School, Mpalada`,
        Members: "11 Volunteers",
        Description: `We engaged with the amazing students of the Eklavya Model Residential Higher Secondary School in Mpalada, where our dedicated trust volunteers provided with career guidance, psychological support and motivational classes. We distributed some essential stationery, bringing smiles to the faces of students in grades 6-12.`,
        image: "images/Eventpics/e105.JPG",
      },
      {
        eventDate: "02 December 2024",
        place: `Government Tribal Residential Higher Secondary School, Top Sengattupatti.`,
        Members: "07 Volunteers",
        Description: `We connected with the students of Government Tribal Residential Higher Secondary School in Top Sengattupatti, where our dedicated volunteers delivered career guidance, psychological support and motivational programs. After that, we distributed various essential stationery to students of grades 6 to 12, delivering with smiles and inspiration.`,
        image: "images/Eventpics/e106.jpg",
      },*/
      {
        eventDate: "02 December 2024",
        place: `Government Tribal Residential Higher Secondary School, Chinnailupur`,
        Members: "07 Volunteers",
        Description: `We met the talented students of the Government Tribal Residential Higher Secondary School in Chinnailupur, where our dedicated volunteers provided with various career guidance, psychological counseling and motivational workshops for students in grades 6-12. We also distributed essential stationery to the school children to further motivate their learning journey`,
        image: "images/Eventpics/e107.jpg",
      },
      {
        eventDate: "21 June 2025",
        place: `EMRS - Kumizhi, Chengalpattu.`,
        Members: "06 Volunteers",
        Description: `The Trust proudly resumed its Career Guidance Program for tribal students after a long gap.The program inspired students to participate actively and engage with confidence.It highlighted the positive transformation in the learning environment and student mindset.Teachers’ dedication and students’ discipline stood out as clear signs of progress.Through interactive sessions and motivational talks, the initiative reaffirmed our mission to empower tribal youth.`,
        image: "images/Eventpics/e108.png",
      },
      {
        eventDate: "28 June 2025",
        place: `Government Tribal Residential Higher Secondary School, Kottaputhur, Kallakurichi District.`,
        Members: "08 Volunteers",
        Description: `Our initiative once again reached tribal students, igniting enthusiasm and guiding them toward brighter futures.Students welcomed the sessions with bright smiles and eager minds, showing enthusiasm and determination.Volunteers delivered engaging guidance on careers, life skills, and motivation with passion and dedication.Active participation reflected the students’ growing confidence, discipline, and curiosity.Together, we continue to build pathways of opportunity and nurture dreams for brighter futures.`,
        image: "images/Eventpics/e109.png",
      },
      {
        eventDate: "28 June 2025",
        place: `EMRS - Vellimalai, Kallakurichi.`,
        Members: "08 Volunteers",
        Description: `The Trust’s second visit brought a renewed spark, with students showing greater confidence and growth since our last program.Sessions introduced practical insights on life skills, career options after 10th and 12th, and preparation for government and entrance exams.Interactive discussions kept students engaged, while fun activities added joy and strengthened teamwork.The improved participation highlighted their evolving discipline, curiosity, and determination to succeed.This visit reinforced our vision of guiding tribal youth toward opportunities that shape brighter futures..`,
        image: "images/Eventpics/e110.png",
      },
      {
        eventDate: "11 July 2025",
        place: `Government Tribal Residential Higher Secondary School, Innadu, Kallakurichi District.`,
        Members: "11 Volunteers",
        Description: `The program delivered impactful sessions on career guidance, psychological resilience, and motivational growth.Volunteers inspired students with practical insights into academic pathways, examinations, and future opportunities.Engaging activities fostered participation, confidence, and a spirit of collaboration among the learners.The initiative left the hills resonating with knowledge, enthusiasm, and renewed aspirations for brighter futures.`,
        image: "images/Eventpics/e111.png",
      },
      {
        eventDate: "12 July 2025",
        place: `Government Tribal Residential Higher Secondary School, Maniyarpalayam, Kallakurichi District.`,
        Members: "10 Volunteers",
        Description: `At Higher Secondary School, Maniyarpalayam, our program created a meaningful platform for student engagement.Sessions on life skills, career awareness, and motivational guidance empowered learners to envision brighter futures.Volunteers inspired confidence and resilience, encouraging students to pursue academic and personal excellence.Interactive activities created enthusiasm, collaboration, and a spirit of continuous growth.Our journey across the hills moves forward — nurturing every child, shaping every dream, building every tomorrow.`,
        image: "images/Eventpics/e112.png",
      },
      {
        eventDate: "25 July 2025",
        place: `Government Tribal Residential Higher Secondary School, Naripalli, Dharmapuri District.`,
        Members: "06 Volunteers",
        Description: `We engaged with students in the Dharmapuri District, offering career guidance, psychological support, and motivational sessions for grades 6–12.Our volunteers worked to uplift their spirits and inspire confidence in their future.To help them stay focused on their education, we also distributed essential stationery supplies, reinforcing hope and purpose in young hearts.`,
        image: "images/Eventpics/e113.png",
      },
      {
        eventDate: "26 July 2025",
        place: `Government Tribal Residential Higher Secondary School, Nammiyampattu, Thiruvanamalai District.`,
        Members: "08 Volunteers",
        Description: `It was a day filled with powerful student interactions, life skills guidance, and heartfelt motivation, leaving a lasting impact on young minds.This marked the first implementation of Ennai Arindhal 1.0, a program designed specifically for 11th and 12th grade students.The initiative helps them explore their fields of interest and provides guidance to choose the right path for their future, empowering them to stay focused on achieving their dreams.`,
        image: "images/Eventpics/e114.png",
      },
      {
        eventDate: "02 Augst 2025",
        place: `EMRS - Keelur , Thirupathur.`,
        Members: "08 Volunteers",
        Description: `Through inspiring sessions on career guidance, psychological strength, and motivation, our volunteers sparked hope and purpose in young hearts.The events were designed to upskill students with discipline, helping them overcome exam fear, evolve in academics, and develop essential skills such as time management and pre‑planning.Students actively engaged with the volunteers, asking thoughtful questions that made the sessions even more meaningful and impactful.`,
        image: "images/Eventpics/e115.png",
      },
      {
        eventDate: "09 Augst 2025",
        place: `EMRS - Abinavam,Salem.`,
        Members: "10 Volunteers",
        Description: `Our volunteers entered the school wholeheartedly, determined to uplift the spirits of young learners living away from their families.We conducted interactive and engaging sessions, including games, to boost their morale and create a joyful, supportive environment.At the end of the program, we distributed stationery items as a token of love.We returned with hearts full of happiness, knowing we had become a small but meaningful step toward the students’ bright future.`,
        image: "images/Eventpics/e116.png",
      },
      {
        eventDate: "15 Augst 2025",
        place: `Sai Baba Gurukalam.`,
        Members: "03 Volunteers",
        Description: `In the spirit of our 79th Independence Day, we came together to spread love and hope by providing essential provisions to the children at the Gurukulam.This act of service, carried out with heartfelt voluntary support, stands as a tribute to the values of freedom, unity, and compassion. Let us continue to make a difference — one small step at a time, towards a brighter future.`,
        image: "images/Eventpics/e117.png",
      },
      {
        eventDate: "22 Augst 2025",
        place: `Government Tribal Residential Higher Secondary School, Barugur , Erode District.`,
        Members: "08 Volunteers",
        Description: `A day filled with meaningful student interactions, life skills guidance, and heartfelt motivation left a lasting impact. The sessions inspired confidence, encouraged discipline, and helped students overcome exam fear while learning essential skills such as time management and pre‑planning. Their active participation, thoughtful questions, and eagerness to grow made the experience even more impactful, marking a step forward in shaping their bright future.`,
        image: "images/Eventpics/e118.png",
      },
      {
        eventDate: "23 Augst 2025",
        place: `Government Tribal Residential Higher Secondary School, Hasanur, Erode District.`,
        Members: "09 Volunteers",
        Description: `It was a day packed with energizing student interactions, practical life hacks, and motivational vibes that truly left a mark. The sessions focused on building confidence, smart study habits, and time management skills, while also showing students how to stay calm under exam pressure and plan ahead effectively. Their active participation and curious questions turned the experience into a collaborative journey, making it not just about guidance but about growth, self‑discovery, and future readiness.`,
        image: "images/Eventpics/e119.png",
      },
      {
        eventDate: "30 Augst 2025",
        place: `Government Tribal Residential Higher Secondary School, Chitheri, Dharmapuri District.`,
        Members: "08 Volunteers",
        Description: `Each school visit is unique, with programs tailored to the needs of the students. From career guidance and motivational sessions to life skills training on discipline, exam readiness, and time management, our initiatives are designed to inspire confidence and growth. Interactive activities and games create a joyful environment, while we also provide essential stationery and provisions, ensuring students stay supported in their educational journey.`,
        image: "images/Eventpics/e120.png",
      },
      {
        eventDate: "06 September 2025",
        place: `EMRS -  Yercaud , Salem`,
        Members: "11 Volunteers",
        Description: `Yercaud school will always remain close to our hearts as we conducted the Ennai Arindhal program and discovered the true capabilities of the students’ mindset. We focused on shaping their potential as much as possible, while our volunteers wholeheartedly enjoyed guiding them. Together, we worked to brighten their future, leaving behind memories of growth, hope, and inspiration.`,
        image: "images/Eventpics/e121.png",
      },
      {
        eventDate: "02 October 2025",
        place: `Irukkam Island.`,
        Members: "47 Volunteers",
        Description: `In remembrance of Gandhi Jayanthi (October 2), we spent a joyful day with the children of Irukkam Island, creating moments of happiness and motivation. These young learners, who travel daily from the island for their studies, were treated to a one‑day event designed to make their day truly special. The celebration was filled with fun games, lively puppetry, dance, drama, and group singing, leaving behind cherished memories of laughter, learning, and togetherness.`,
        image: "images/Eventpics/e122.jpg",
      },
      {
        eventDate: "10 October 2025",
        place: `Government Tribal Residential Boys Higher Secondary School, Mullukurichi,Nammakkal District.`,
        Members: "08 Volunteers",
        Description: `The boys from the school were full of energy and brought great enthusiasm to every activity.They remained well‑behaved and disciplined, showing respect throughout the sessions.Their cooperative nature made it easy to engage them in meaningful discussions.They actively participated, sharing ideas and asking thoughtful questions.Overall, their spirit and involvement added immense value to the program.`,
        image: "images/Eventpics/e123.jpg",
      },
      {
        eventDate: "10 October 2025",
        place: `Government Tribal Residential Higher Secondary School, Sengarai ,Nammakkal District.`,
        Members: "08 Volunteers",
        Description: `Our volunteers led sessions that encouraged students to dream bigger and aim higher.They focused on building resilience and mental strength to face challenges with confidence.Through interactive guidance, students discovered new ways to plan their future paths.The atmosphere was filled with positivity, encouragement, and meaningful connections.By the end, young hearts carried a renewed sense of hope and determination.`,
        image: "images/Eventpics/e124.jpg",
      },
      {
        eventDate: "11 October 2025",
        place: `Government Tribal Residential Girls Higher Secondary School, Mullukurichi,Nammakkal District.`,
        Members: "08 Volunteers",
        Description: `The girls brought a spark of energy and positivity that lit up the entire program.Their grace and discipline created an atmosphere of respect and encouragement.With a team‑oriented mindset, they engaged wholeheartedly in every activity.They voiced their thoughts with confidence, asking curious and meaningful questions.Their presence turned the day into a truly uplifting and memorable experience.`,
        image: "images/Eventpics/e125.jpg",
      },
      {
        eventDate: "11 October 2025",
        place: `EMRS - Sengarai , Namakkal.`,
        Members: "08 Volunteers",
        Description: `At the scenic Kolli Hills in Namakkal District, we marked our 126th milestone event.The day was filled with meaningful interactions and inspiring activities for the students.Volunteers shared insights on future planning and building inner resilience.Students engaged with enthusiasm, discovering new ways to stay motivated and focused.The experience left behind a spirit of hope, growth, and determination.`,
        image: "images/Eventpics/e126.jpg",
      },
      {
        eventDate: "13 October 2025",
        place: `Government Tribal Residential Higher Secondary School, Valavanthinadu, Nammakal District.`,
        Members: "08 Volunteers",
        Description: `The program was designed to provide students with structured guidance and meaningful engagement.Sessions focused on career pathways, strengthening psychological resilience, and fostering personal development.Volunteers facilitated interactive discussions that encouraged confidence, curiosity, and active participation among learners.The event concluded with a positive impact, reinforcing the importance of motivation and future readiness`,
        image: "images/Eventpics/e127.jpg",
      },
      {
        eventDate: "17 October 2025",
        place: `Government Tribal Residential Higher Secondary School, Vachathi,Dharmapuri District.`,
        Members: "05 Volunteers",
        Description: `The program emphasized guidance on future opportunities and helped students understand the value of planning ahead.Discussions on emotional strength encouraged them to face challenges with confidence and clarity.Activities promoting self‑drive and determination inspired learners to take ownership of their goals.Students responded with enthusiasm, showing eagerness to apply these lessons in their daily lives.Overall, the sessions created a strong foundation for growth, resilience, and purposeful ambition`,
        image: "images/Eventpics/e128.jpg",
      },{
        eventDate: "24 October 2025",
        place: `Government Tribal Residential Higher Secondary School, Velligoundanur, Salem District.`,
        Members: "09 Volunteers",
        Description: `The program was conducted in a calm and inspiring environment, fostering meaningful engagement with the students.Sessions emphasized career awareness, emotional resilience, and personal development, encouraging learners to think beyond academics.Volunteers guided discussions that promoted confidence, curiosity, and self‑motivation among participants.Students responded with enthusiasm, actively sharing ideas and embracing new perspectives.The overall experience left a lasting impact, reinforcing values of growth, determination, and future readiness.`,
        image: "images/Eventpics/e129.jpg",
      },{
        eventDate: "25 October 2025",
        place: `Government Tribal Residential Higher Secondary School, Arunoothumalai, Salem District.`,
        Members: "12 Volunteers",
        Description: `We were invited back, warmly welcomed by both students and teachers with wholehearted support.Our trained Trust members conducted a concentration and mental stability test, followed by personalized guidance.The visit also marked the implementation of Yennai Arindhal 1.0, designed to help students explore their interests.Through this, they gained clarity in choosing the right path for their future.Every interaction is filled with love, encouragement, and the joy of seeing students eager to learn.`,
        image: "images/Eventpics/e130.jpg",
      },{
        eventDate: "31 October 2025",
        place: `Government Tribal Residential Higher Secondary School, Top Sengattupatti, Trichy District.`,
        Members: "08 Volunteers",
        Description: `Our passionate mentors hosted engaging talks on career growth, mental wellness, and self‑drive.They sparked curiosity and boosted confidence among young dreamers navigating modern challenges.With relatable stories and practical insights, they connected deeply with the audience.The sessions fueled ambition, resilience, and a sense of belonging in every participant.Together, they ignited a vision of possibility, purpose, and progress for the future.`,
        image: "images/Eventpics/e131.jpg",
      },{
        eventDate: "31 October 2025",
        place: `Government Tribal Residential Higher Secondary School, Chinnailupur, Trichy District.`,
        Members: "07 Volunteers",
        Description: `Dedicated Volenteers hosted interactive workshops for students from grades 6 to 12.These sessions focused on boosting skills, confidence, and real‑world learning.Students explored fresh ideas that expanded their outlook beyond textbooks.\The vibe was energetic, inspiring curiosity and self‑motivation.Together, it sparked a journey of growth, ambition, and future‑ready mindset.`,
        image: "images/Eventpics/e132.jpg",
      },
      {
        eventDate: "01 November 2025",
        place: `Government Tribal Residential Higher Secondary School, Kunjapanai, Nilgiris District`,
        Members: "08 Volunteers",
        Description: `Energetic volunteers hosted interactive sessions on future careers, mental health, and self‑development.The workshops blended real talk with practical guidance that felt relevant to student life today.Learners gained new perspectives that opened doors beyond academics and traditional paths.The atmosphere encouraged confidence, resilience, and a growth mindset.Together, it sparked clarity, motivation, and a vision for what’s next.`,
        image: "images/Eventpics/e133.jpg",
      },
      {
        eventDate: "01 November 2025",
        place: `Government Tribal Residential Higher Secondary School, Anaikatty, Coimbatore District`,
        Members: "09 Volunteers",
        Description: `The day buzzed with energy, curiosity, and bold aspirations.Students engaged in interactive workshops, skill‑building tasks, and inspiring conversations that felt real and impactful.Every laugh carried joy, every idea sparked creativity, and every moment built confidence.The vibe nurtured resilience, ambition, and a future‑ready mindset.We wrapped up by presenting meaningful mementos, leaving students with memories to treasure and motivation to carry forward.`,
        image: "images/Eventpics/e134.jpg",
      },
      {
        eventDate: "07 November 2025",
        place: `Government Tribal Residential Higher Secondary School, Pathukanni, Kanyakumari District`,
        Members: "05 Volunteers",
        Description: `The journey back to GTRHSS Pathukani was filled with nostalgia and new excitement.Stepping in felt like reuniting with old friends, welcomed by bright smiles and curious minds.Students brought unmatched energy, making every interaction meaningful and inspiring.Our volunteers led powerful sessions on motivation, career choices, and essential life skills.Together, we planted seeds of hope, confidence, and future‑ready dreams once again.`,
        image: "images/Eventpics/e135.png",
      },
      {
        eventDate: "07 November 2025",
        place: `Government Tribal Residential Higher Secondary School,Manalodai`,
        Members: "03 Volunteers",
        Description: `The career event at GTRHS – Manalodai, Kanyakumari district was a day of inspiration and learning.Kind volunteers guided students with sessions on career pathways, motivation, and essential life skills.Their interactive approach made the discussions engaging and relatable for young minds.Students gained clarity, confidence, and a broader vision for their future goals.The event left a lasting impact, planting seeds of hope and ambition for tomorrow.`,
        image: "images/Eventpics/e136.jpg",
      },
      {
        eventDate: "07 November 2025",
        place: `Government Tribal Residential Higher Secondary School, Pechiparai, Kanyakumari District`,
        Members: "08 Volunteers",
        Description: `We proudly marked our 137th event at Government Tribal Residential Higher Secondary School, Pechiparai.Students engaged in impactful sessions on career growth, emotional strength, and self‑motivation.Each interaction inspired clarity, confidence, and a vision for brighter futures.The calm hills set the backdrop for a day of learning and empowerment.It was a memorable experience, echoing with hope, purpose, and renewed determination.`,
        image: "images/Eventpics/e137.png",
      },
      {
        eventDate: "16 November 2025",
        place: `EMRS - Puilampatti, Thiruvanamalai `,
        Members: "11 Volunteers",
        Description: `EMRS Puliampatti, Tiruvannamalai, proudly stood out as one of the best schools this academic year.Our fourth visit felt like reuniting with old friends, welcomed by bright smiles and fresh energy.Students engaged wholeheartedly, making every interaction meaningful and inspiring.Volunteers led impactful sessions on motivation, career guidance, and essential life skills.Together, we planted seeds of hope, confidence, and future‑ready dreams once again.`,
        image: "images/Eventpics/e138.png",
      },
      {
        eventDate: "21 November 2025",
        place: `Government Tribal Residential Higher Secondary School,Aatiyanur, Tiruvanamalai District `,
        Members: "03 Volunteers",
        Description: `Our dedicated volunteers created an atmosphere of curiosity and growth for the students.Interactive discussions opened doors to new perspectives and practical knowledge.Young learners embraced the experience with enthusiasm and a spirit of discovery.The day was filled with meaningful connections and a drive to achieve more.It ended with a sense of empowerment, leaving students motivated for the journey ahead.`,
        image: "images/Eventpics/E139.png",
      },
      {
        eventDate: "21 November 2025",
        place: `Government Tribal Residential Higher Secondary School, Pattraikadu, Tiruvanamalai District`,
        Members: "05 Volunteers",
        Description: `The visit brought together curious minds eager to learn and grow.Engaging sessions opened doors to new perspectives and practical knowledge.Students embraced the experience with enthusiasm, making each moment meaningful.Volunteers shared insights that encouraged confidence and future‑ready thinking.The day concluded with inspiration that will guide students on their path ahead.`,
        image: "images/Eventpics/E140.png",
      },
      {
        eventDate: "22 November 2025",
        place: `Government Tribal Residential Higher Secondary School, Gomugidam, Kallakurichi District`,
        Members: "08 Volunteers",
        Description: `Our 141st event was a celebration of learning, connection, and growth.Students engaged in meaningful interactions that built confidence and broadened perspectives.Sessions on life skills and motivation inspired clarity and resilience for the future.The atmosphere was filled with energy, hope, and a spirit of possibility.We closed the day by gifting small stationery items — a simple token of love and encouragement.`,
        image: "images/Eventpics/E141.png",
      },
      {
        eventDate: "28 November 2025",
        place: `Government Model Higher Secondary School, Thuneri,Nilgiris District`,
        Members: "08 Volunteers",
        Description: `We created an engaging space where students explored new skills and perspectives.Interactive activities encouraged curiosity, teamwork, and a spirit of discovery.Young learners embraced challenges with enthusiasm, turning each moment into an opportunity to grow.The day was filled with meaningful connections that inspired confidence and creativity.It concluded with a renewed sense of ambition, guiding students toward brighter possibilities.`,
        image: "images/Eventpics/E142.png",
      },
      {
        eventDate: "28 November 2025 & 29 November 2025",
        place: `Government Tribal Residential Higher Secondary School, Karakudi, Nilgiris District`,
        Members: "07 Volunteers",
        Description: `The day unfolded with vibrant energy and meaningful connections among eager learners.Students explored new perspectives through engaging activities that blended knowledge with creativity.Each moment encouraged confidence, resilience, and a spirit of discovery.Volunteers shared insights that opened doors to future possibilities and personal growth.The experience left behind a wave of inspiration, guiding young minds toward brighter horizons.`,
        image: "images/Eventpics/E143.png",
      },
      {
        eventDate: "29 November 2025",
        place: `Government Tribal Residential Higher Secondary School, Bokkapuram`,
        Members: "03 Volunteers",
        Description: `Event filled with vibrant energy.Students engaged in interactive activities that encouraged curiosity, creativity, and practical learning.Each moment fostered teamwork, confidence, and a spirit of discovery among young learners.Volunteers shared insights that inspired ambition and broadened perspectives beyond the classroom.The day concluded with renewed enthusiasm, leaving students motivated to embrace future opportunities.`,
        image: "images/Eventpics/E144.png",
      },
      {
        eventDate: "30 November 2025",
        place: `EMRS - Mpalada,Nilgiris`,
        Members: "09 Volunteers",
        Description: `The event unfolded with vibrant energy and meaningful engagement from the students.Interactive sessions encouraged curiosity, creativity, and a spirit of exploration beyond academics.Volunteers shared insights that opened doors to new perspectives and practical skills.\Each moment fostered confidence, resilience, and a drive to achieve greater goals.The day concluded with inspiration that will continue to guide young minds forward.`,
        image: "images/Eventpics/E145.png",
      },
      {
        eventDate: "05 December 2025",
        place: `Government Tribal Residential Higher Secondary School, Perumparai, DindigulDistrict`,
        Members: "05 Volunteers",
        Description: `The event was filled with curiosity, creativity, and meaningful engagement from young learners.Students explored new ideas through interactive activities that encouraged growth beyond academics.Each session inspired confidence, teamwork, and a spirit of discovery.Volunteers shared valuable insights that broadened perspectives and nurtured ambition.The day concluded with renewed enthusiasm, leaving students motivated to chase future opportunities.`,
        image: "images/Eventpics/E146.png",
      },
      {
        eventDate: "06 December 2025",
        place: `Government Tribal Residential Higher Secondary School, Kariyakoilvalavu, Salem District`,
        Members: "13 Volunteers",
        Description: `The day filled with enthusiasm and meaningful engagement.Students participated actively in sessions that encouraged curiosity, creativity, and practical learning.Each moment fostered confidence, resilience, and a spirit of discovery among young learners.Volunteers shared valuable insights that broadened perspectives and nurtured ambition for the future.The day concluded with renewed inspiration, leaving students motivated to embrace new opportunities ahead.`,
        image: "images/Eventpics/E147.png",
      },
      {
        eventDate: "06 December 2025",
        place: `Government Tribal Residential High School,Pagudupattu, Salem District`,
        Members: "04 Volunteers",
        Description: `Our 1st visit to the school was more curiosity Students actively engaged in interactive discussions that encouraged curiosity and creative thinking.Each activity fostered confidence, resilience, and a spirit of exploration beyond academics.Volunteers shared insights that broadened horizons and nurtured ambition for the future.The day concluded with inspiration that will continue to guide young minds toward new opportunities.`,
        image: "images/Eventpics/E148.png",
      },
      {
        eventDate: "06 December 2025",
        place: `Government Tribal Residential High School, Kunnur, Salem District`,
        Members: "04 Volunteers",
        Description: `The inaugural program at Government Tribal Residential High School, Kunnur, was filled with enthusiasm and learning.Students participated actively in interactive discussions that sparked curiosity and broadened perspectives.Each activity nurtured resilience, creativity, and a spirit of exploration beyond academics.Volunteers shared valuable insights that inspired ambition and future‑ready thinking.The day concluded with renewed motivation, leaving young minds eager to embrace new opportunities.`,
        image: "images/Eventpics/E149.png",
      },
      {
        eventDate: "06 December 2025",
        place: `Government Tribal Residential High School, Thekampattu, Salem District`,
        Members: "04 Volunteers",
        Description: `Trust’s first program at this School, Thekkampattu, was truly memorable.The day unfolded with vibrant energy as students embraced new ideas with open minds.Engaging activities encouraged creativity, collaboration, and a spirit of exploration beyond the classroom.Volunteers connected deeply, sparking curiosity and inspiring students to think bigger about their future.The experience left behind a wave of positivity, marking a meaningful step in their journey ahead.`,
        image: "images/Eventpics/E150.png",
      },
      {
        eventDate: "07 December 2025",
        place: `Seva High School, Thalvenniyur, Salem District`,
        Members: "19 Volunteers",
        Description: `For the 5th time, Hope Trust had the privilege of conducting our program at Seva High School, Thalvenniyur.The day was filled with enthusiasm and meaningful participation from the students.Interactive activities encouraged curiosity, creativity, and a spirit of exploration beyond academics.Volunteers shared valuable perspectives that inspired ambition and broadened horizons for the future.The atmosphere reflected positivity, connection, and a sense of shared growth.The program concluded with renewed energy, leaving young learners motivated to embrace new opportunities.`,
        image: "images/Eventpics/E151.png",
      },
      {
        eventDate: "08 December 2025",
        place: `Government Tribal Residential Higher Secondary School, Karumandurai ,Salem District`,
        Members: "19 Volunteers",
        Description: `The final program of the year was a celebration of growth, learning, and shared purpose.Students embraced the sessions with enthusiasm, making each moment meaningful and memorable.Volunteers connected deeply, inspiring confidence and nurturing a vision for brighter futures.The atmosphere reflected gratitude, positivity, and the joy of collective achievement.As this phase ends, the journey continues with renewed determination for the year ahead.`,
        image: "images/Eventpics/E152.jpg",
      }
      
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
                        <a href="javascript:;"> Learn More </a>
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
