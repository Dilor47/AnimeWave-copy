
const top_anime_data = [
  {
    img_anime: "images/ranking_anime_img/anime_images/more_then_married.png",
    title: 'More Than a Married Couple, But Not Lovers',
    sub: 12,
    dub: 11,
    total_episodes: 12,
    anime_type: 'TV',
    age_limit: 't',
    hd: true,
    short_desc: 'Follow the journey of two individuals whose bond transcends the conventional bounds of marriage but navigates a path distinct from conventional romance.',
    other_names: ['Fūfu Ijō', 'Koibito Miman', 'Fuukoi'],
    score: '9.1',
    reviewed: 6005,
    data_completed: 'Dec 25, 2022',
    data_aired: 'Oct 9, 2022',
    duration: '23',
    status: 'Completed',
    genre: ['Romance', 'Comedy', 'Ecchi', 'Drama'],
    link_to_anime: ''
  },
  {
    img_anime: "images/ranking_anime_img/anime_images/cyberpunk.png",
    title: 'Cyberpunk: Edgerunners',
    sub: 10,
    dub: null,
    total_episodes: 10,
    anime_type: 'TV',
    age_limit: 'a',
    hd: 'three',
    short_desc: 'A futuristic anime set in the sprawling metropolis of Night City, exploring themes of technology, society, and identity.',
    other_names: ['Edgerunners', 'Cyberpunk anime'],
    score: '7.5',
    reviewed: 5568,
    data_completed: 'Sep 13, 2022',
    data_aired: 'Sep 13, 2022',
    duration: '30 minutes per episode',
    status: 'Ongoing',
    genre: ['Sci-Fi', 'Action'],
    link_to_anime: 'https://example.com/cyberpunk-edgerunners'
  },
  {
    img_anime: "images/ranking_anime_img/anime_images/avatar.png",
    title: 'Avatar the Last Airbender',
    sub: 22,
    dub: 19,
    total_episodes: 24,
    anime_type: 'TV',
    age_limit: 'c',
    hd: true,
    short_desc: 'Embark on an epic journey with Aang, the last Airbender, as he masters the elements and battles the oppressive Fire Nation in a war-torn world.',
    other_names: ['Avatar', 'The Last Airbender'],
    score: '9.2',
    reviewed: 23455,
    data_completed: 'Jul 19, 2008',
    data_aired: 'Feb 21, 2005',
    duration: '24 minutes per episode',
    status: 'Completed',
    genre: ['Action', 'Adventure', 'Fantasy'],
    link_to_anime: 'https://example.com/avatar-the-last-airbender'
  },
  {
    img_anime: "images/ranking_anime_img/anime_images/black_lagoon.png",
    title: 'Black Lagoon',
    sub: 42,
    dub: null,
    total_episodes: 50,
    anime_type: 'TV',
    age_limit: 'a',
    hd: 'fourth',
    short_desc: 'Join the crew of the Black Lagoon as they navigate the dangerous underworld of Southeast Asia, filled with action, intrigue, and betrayal.',
    other_names: ['Burakku Ragūn', 'Lagoon'],
    score: '8.6',
    reviewed: 1543,
    data_completed: 'Apr 9, 2005',
    data_aired: 'Apr 19, 2002',
    duration: '24 minutes per episode',
    status: 'Completed',
    genre: ['Action', 'Adventure', 'Drama'],
    link_to_anime: 'https://example.com/black-lagoon'
  },
  {
    img_anime: "images/ranking_anime_img/anime_images/sword_art.png",
    title: 'Sword Art Online',
    sub: 103,
    dub: 90,
    total_episodes: 124,
    anime_type: 'TV',
    age_limit: 't',
    hd: true,
    short_desc: 'Immerse yourself in the virtual reality world of Sword Art Online where players must fight for survival and freedom.',
    other_names: ["SAO"],
    score: '8.5',
    reviewed: 30553,
    data_completed: 'Sep 20, 2020',
    data_aired: 'Oct 7, 2018',
    duration: '23 minutes per episode',
    status: 'Completed',
    genre: ['Action', 'Adventure', 'Romance'],
    link_to_anime: 'https://example.com/sao'
  },
  {
    img_anime: "images/ranking_anime_img/anime_images/solo_leveling.png",
    title: 'Solo Leveling',
    sub: 21,
    dub: null,
    total_episodes: 24,
    anime_type: 'TV',
    age_limit: 't',
    hd: true,
    short_desc: 'Witness the epic journey of a low-ranked hunter rising to become one of the most powerful beings in a world threatened by monsters.',
    other_names: ['Solo', 'SL'],
    score: '9.2',
    reviewed: 2542,
    data_completed: '?',
    data_aired: 'Jan 7, 2024',
    duration: '25 minutes per episode',
    status: 'Ongoing',
    genre: ['Action', 'Fantasy'],
    link_to_anime: 'https://example.com/solo-leveling'
  },
  {
    img_anime: "images/ranking_anime_img/anime_images/shaga.png",
    title: 'Shangri-La Frontier',
    sub: 13,
    dub: null,
    total_episodes: 50,
    anime_type: 'TV',
    age_limit: 't',
    hd: true,
    short_desc: 'Embark on an adventure in a world of endless possibilities where players create their own destinies in a virtual realm.',
    other_names: ['None another name'],
    score: '7.9',
    reviewed: 1043,
    data_completed: '?',
    data_aired: 'Oct 1, 2023',
    duration: '20 minutes per episode',
    status: 'Ongoing',
    genre: ['Fantasy', 'Adventure'],
    link_to_anime: 'https://example.com/shangri-la'
  },
  {
    img_anime: "images/ranking_anime_img/anime_images/tokyo_ghoul.png",
    title: 'Tokyo Ghoul',
    sub: 85,
    dub: 78,
    total_episodes: 87,
    anime_type: 'TV',
    age_limit: 't',
    hd: true,
    short_desc: 'In a world where humans coexist with ghouls, Kaneki Ken undergoes a harrowing transformation, blurring the lines between humanity and monstrosity.',
    other_names: ['Ghoul', 'TG'],
    score: '8.4',
    reviewed: 10505,
    data_completed: 'Sep 19, 2014',
    data_aired: 'Jul 4, 2014',
    duration: '24 minutes per episode',
    status: 'Completed',
    genre: ['Action', 'Horror', 'Supernatural'],
    link_to_anime: 'https://example.com/tokyo-ghoul'
  },
  {
    img_anime: "images/ranking_anime_img/anime_images/elite_class.png",
    title: 'Classroom of the Elite',
    sub: 45,
    dub: 45,
    total_episodes: 50,
    anime_type: 'TV',
    age_limit: 't',
    hd: true,
    short_desc: 'Enter the cutthroat world of the Tokyo Metropolitan Advanced Nurturing School, where students compete for prestige, power, and survival.',
    other_names: ['Youkoso', 'Jitsuryoku', 'Shijou', 'Shugi no Kyoushitsu'],
    score: '8.1',
    reviewed: 1242,
    data_completed: '?',
    data_aired: 'Jul 12, 2017 ',
    duration: '24 minutes per episode',
    status: 'Completed',
    genre: ['Drama', 'Psychological', 'School'],
    link_to_anime: 'https://example.com/classroom-of-the-elite'
  }
];

export default top_anime_data;



/*const top_anime_data = [
  {
    img_anime: "images/ranking_anime_img/anime_images/more_then_married.png",
    title: 'More Than a Married Couple, But Not Lovers',
    sub: 12,
    dub: 11,
    total_episodes: 12,
    anime_type: 'TV',

    age_limit: 't', // You can fill in the age limit here using 'c', 't', or 'a'
    hd: true,
    short_desc: 'Follow the journey of two individuals whose bond transcends the conventional bounds of marriage but navigates a path distinct from conventional romance.',
    other_names: ['Fūfu Ijō', 'Koibito Miman', 'Fuukoi'], // Alternative names, if any
    score: '9.1', // Score or rating of the anime
    reviewed: 6005, // Number of reviewers
    data_completed: 'December 25, 2022',
    data_aired: 'October 9, 2022', // Original airing date
    duration: '23', // Duration of each episode
    status: 'Completed', // Status of the anime (ongoing, completed, canceled, etc.)
    genre: ['romance', 'comedy', 'ecchi', 'drama'], // Genre of the anime
    link_to_anime: '', // URL where viewers can watch the anime

  },
  {
    img_anime: "images/ranking_anime_img/anime_images/cyberpunk.png",
    title: 'Cyberpunk: Edgerunners',
    sub: 10,
    total_episodes: 10,
    anime_type: 'TV'
  },
  {
    img_anime: "images/ranking_anime_img/anime_images/avatar.png",
    title: 'Avatar the Last Airbender',
    sub: 22,
    dub: 19,
    total_episodes: 24,
    anime_type: 'TV'
  },
  {
    img_anime: "images/ranking_anime_img/anime_images/black_lagoon.png",
    title: 'Black Lagoon',
    sub: 42,
    total_episodes: 50,
    anime_type: 'TV'
  },
  {
    img_anime: "images/ranking_anime_img/anime_images/sword_art.png",
    title: 'Sword Art Online',
    sub: 103,
    dub: 90,
    total_episodes: 124,
    anime_type: 'TV'
  },
  {
    img_anime: "images/ranking_anime_img/anime_images/solo_leveling.png",
    title: 'Solo Leveling',
    sub: 21,
    total_episodes: 24,
    anime_type: 'TV'
  },
  {
    img_anime: "images/ranking_anime_img/anime_images/shaga.png",
    title: 'Shangri-La Frontier',
    sub: 13,
    total_episodes: 50,
    anime_type: 'TV'
  },
  {
    img_anime: "images/ranking_anime_img/anime_images/tokyo_ghoul.png",
    title: 'Tokyo Ghoul',
    sub: 85,
    dub: 78,
    total_episodes: 87,
    anime_type: 'TV'
  },
  {
    img_anime: "images/ranking_anime_img/anime_images/elite_class.png",
    title: 'TClassroom of the Elite',
    sub: 45,
    dub: 45,
    total_episodes: 50,
    anime_type: 'TV'
  },
]

*/
