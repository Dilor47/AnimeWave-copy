const animeData = [
  {
    img_anime: 'https://static.aniwave.to/i/2018/04/ac77f938d4f19a7e54db1427b3841fb2.jpg',
    title: 'Death Parade',
    sub: 12,
    dub: 12,
    total_episodes: 12,
    anime_type: 'TV',
    age_limit: 'R',
    hd: true,
    short_desc: 'In a mysterious bar, souls are judged through games to determine their afterlife destination.',
    other_names: ['Death Parade'],
    score: '8.2',
    reviewed: 80000,
    data_completed: 'Mar 28, 2015',
    data_aired: 'Jan 10, 2015',
    duration: '23',
    status: 'Completed',
    genre: ['Game', 'Mystery', 'Psychological', 'Drama', 'Thriller'],
    link_to_anime: 'https://myanimelist.net/anime/28223/Death_Parade'
  },
  {
    img_anime: 'https://static.aniwave.to/i/2018/04/5e38b6fa4249c0d7db7ceefa9d09cab2.jpg',
    title: 'Akira',
    sub: 1,
    dub: 1,
    total_episodes: 1,
    anime_type: 'Movie',
    age_limit: 'R+',
    hd: true,
    short_desc: 'In a cyberpunk future, a biker gang member is transformed into a psychic warrior.',
    other_names: ['Akira'],
    score: '8.1',
    reviewed: 100000,
    data_completed: 'Jul 16, 1988',
    data_aired: 'Jul 16, 1988',
    duration: '2 hr 4 min',
    status: 'Completed',
    genre: ['Action', 'Military', 'Sci-Fi', 'Adventure', 'Horror', 'Supernatural'],
    link_to_anime: 'https://myanimelist.net/anime/47/Akira'
  },
  {
    img_anime: 'https://static.aniwave.to/i/2018/04/eace73efc9679ac848958af4ab87ab98.jpg',
    title: 'Ghost in the Shell',
    sub: 1,
    dub: 1,
    total_episodes: 1,
    anime_type: 'Movie',
    age_limit: 'R',
    hd: true,
    short_desc: 'In a future where cybernetic enhancements are common, a special ops agent hunts a hacker known as the Puppet Master.',
    other_names: ['Ghost in the Shell'],
    score: '8.3',
    reviewed: 90000,
    data_completed: 'Nov 18, 1995',
    data_aired: 'Nov 18, 1995',
    duration: '1 hr 23 min',
    status: 'Completed',
    genre: ['Action', 'Mecha', 'Police', 'Psychological', 'Sci-Fi', 'Seinen'],
    link_to_anime: 'https://myanimelist.net/anime/43/Koukaku_Kidoutai'
  },
  {
    img_anime: 'https://static.aniwave.to/i/2018/04/69b33c53233de358ad77192ad45de59c.jpg',
    title: 'Grave of the Fireflies',
    sub: 1,
    dub: 1,
    total_episodes: 1,
    anime_type: 'Movie',
    age_limit: 'PG-13',
    hd: true,
    short_desc: 'Two siblings struggle to survive in Japan during World War II.',
    other_names: ['Hotaru no Haka'],
    score: '8.5',
    reviewed: 100000,
    data_completed: 'Apr 16, 1988',
    data_aired: 'Apr 16, 1988',
    duration: '1 hr 28 min',
    status: 'Completed',
    genre: ['Drama', 'Historical'],
    link_to_anime: 'https://myanimelist.net/anime/578/Hotaru_no_Haka'
  },
  {
    img_anime: 'https://static.aniwave.to/i/2018/04/a027cea51dd4df76c70ebf8ea93a8d75.jpg',
    title: 'Hunter x Hunter (2011)',
    sub: 148,
    dub: 148,
    total_episodes: 148,
    anime_type: 'TV',
    age_limit: 'PG-13',
    hd: true,
    short_desc: 'A young boy aspires to become a Hunter, an elite member of society capable of tracking down secret treasures, rare beasts, and even other individuals.',
    other_names: ['HxH'],
    score: '9.1',
    reviewed: 140000,
    data_completed: 'Sep 24, 2014',
    data_aired: 'Oct 2, 2011',
    duration: '23',
    status: 'Completed',
    genre: ['Action', 'Adventure', 'Fantasy'],
    link_to_anime: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011'
  },
  {
    img_anime: 'https://static.aniwave.to/i/2019/06/a7c6d36a6dd798a38ae9a2fcad0c852a.jpg',
    title: 'Neon Genesis Evangelion',
    sub: 26,
    dub: 26,
    total_episodes: 26,
    anime_type: 'TV',
    age_limit: 'R+',
    hd: true,
    short_desc: 'A teenage boy pilots a giant robot to protect Earth from mysterious beings known as Angels.',
    other_names: ['Evangelion'],
    score: '8.3',
    reviewed: 120000,
    data_completed: 'Mar 27, 1996',
    data_aired: 'Oct 4, 1995',
    duration: '24',
    status: 'Completed',
    genre: ['Action', 'Drama', 'Mecha', 'Psychological', 'Sci-Fi'],
    link_to_anime: 'https://myanimelist.net/anime/30/Neon_Genesis_Evangelion'
  },
  {
    img_anime: 'https://static.aniwave.to/i/b/b6/b650de88fed262ccef31e9a966c26977.jpg',
    title: 'Cowboy Bebop',
    sub: 26,
    dub: 26,
    total_episodes: 26,
    anime_type: 'TV',
    age_limit: 'R',
    hd: true,
    short_desc: 'Bounty hunters travel through space in pursuit of criminals and their bounties.',
    other_names: ['Cowboy Bebop'],
    score: '8.8',
    reviewed: 110000,
    data_completed: 'Apr 24, 1999',
    data_aired: 'Apr 3, 1998',
    duration: '24',
    status: 'Completed',
    genre: ['Action', 'Adventure', 'Comedy', 'Drama', 'Sci-Fi', 'Space'],
    link_to_anime: 'https://myanimelist.net/anime/1/Cowboy_Bebop'
  },
  {
    img_anime: 'https://static.aniwave.to/i/2018/04/9259cdfc960f11edd8fde20ab469e548.jpg',
    title: 'Dragon Ball Z',
    sub: 291,
    dub: 291,
    total_episodes: 291,
    anime_type: 'TV',
    age_limit: 'PG-13',
    hd: true,
    short_desc: 'Goku and his friends defend Earth from powerful foes through martial arts and superhuman abilities.',
    other_names: ['Dragon Ball Z'],
    score: '8.3',
    reviewed: 130000,
    data_completed: 'Jan 31, 1996',
    data_aired: 'Apr 26, 1989',
    duration: '24',
    status: 'Completed',
    genre: ['Action', 'Adventure', 'Comedy', 'Fantasy', 'Martial Arts', 'Shounen'],
    link_to_anime: 'https://myanimelist.net/anime/813/Dragon_Ball_Z'
  },
  {
    img_anime: 'https://static.aniwave.to/i/2018/04/1812b4672e6880f092294f755b5f3253.jpg',
    title: 'My Hero Academia',
    sub: 113,
    dub: 92,
    total_episodes: 113,
    anime_type: 'TV',
    age_limit: 'PG-13',
    hd: true,
    short_desc: 'A boy born without superpowers in a world where they are the norm dreams of becoming a hero.',
    other_names: ['Boku no Hero Academia'],
    score: '8.4',
    reviewed: 140000,
    data_completed: 'Ongoing',
    data_aired: 'Apr 3, 2016',
    duration: '24',
    status: 'Ongoing',
    genre: ['Action', 'Comedy', 'Super Power', 'School', 'Shounen'],
    link_to_anime: 'https://myanimelist.net/anime/31964/Boku_no_Hero_Academia'
  },
  {
    img_anime: 'https://static.aniwave.to/i/2018/04/d6ddccf3f69fae0493e8cf51130c31b1.jpg',
    title: 'Tokyo Ghoul',
    sub: 12,
    dub: 12,
    total_episodes: 12,
    anime_type: 'TV',
    age_limit: 'R',
    hd: true,
    short_desc: 'A college student gets transformed into a half-ghoul and must navigate the world of ghouls and humans.',
    other_names: ['Tokyo Ghoul'],
    score: '7.9',
    reviewed: 90000,
    data_completed: 'Sep 19, 2014',
    data_aired: 'Jul 4, 2014',
    duration: '24',
    status: 'Completed',
    genre: ['Action', 'Mystery', 'Horror', 'Psychological', 'Supernatural', 'Drama'],
    link_to_anime: 'https://myanimelist.net/anime/22319/Tokyo_Ghoul'
  },
  {
    img_anime: "https://static.aniwave.to/i/2018/04/8496fcc79062a38febfeec4940487bea.jpg",
    title: 'Sword Art Online',
    sub: 25,
    dub: 25,
    total_episodes: 25,
    anime_type: 'TV',
    age_limit: 'PG-13',
    hd: true,
    short_desc: 'Players get trapped in a virtual reality MMORPG and must clear the game to escape.',
    other_names: ['SAO'],
    score: '7.6',
    reviewed: 110000,
    data_completed: 'Dec 24, 2012',
    data_aired: 'Jul 8, 2012',
    duration: '24',
    status: 'Completed',
    genre: ['Action', 'Adventure', 'Fantasy', 'Game', 'Romance'],
    link_to_anime: 'https://myanimelist.net/anime/11757/Sword_Art_Online'
  },
  {
    img_anime: 'https://static.aniwave.to/i/2018/04/b91575df1255368819c7815beab0ecd9.jpg',
    title: 'Steins;Gate',
    sub: 24,
    dub: 24,
    total_episodes: 24,
    anime_type: 'TV',
    age_limit: 'PG-13',
    hd: true,
    short_desc: 'A mad scientist discovers time travel and must prevent disastrous consequences.',
    other_names: ['Steins;Gate'],
    score: '9.1',
    reviewed: 80000,
    data_completed: 'Sep 14, 2011',
    data_aired: 'Apr 6, 2011',
    duration: '24',
    status: 'Completed',
    genre: ['Thriller', 'Sci-Fi'],
    link_to_anime: 'https://myanimelist.net/anime/9253/Steins_Gate'
  },
  {
    img_anime: 'https://static.aniwave.to/i/2018/04/5a2a03c631d274622451643db250cf07.jpg',
    title: 'Naruto',
    sub: 220,
    dub: 220,
    total_episodes: 220,
    anime_type: 'TV',
    age_limit: 'PG-13',
    hd: true,
    short_desc: 'A young ninja seeks recognition from his peers and dreams of becoming the Hokage, the village leader.',
    other_names: ['Naruto: Shippuden'],
    score: '8.2',
    reviewed: 130000,
    data_completed: 'Mar 23, 2017',
    data_aired: 'Oct 3, 2002',
    duration: '24',
    status: 'Completed',
    genre: ['Action', 'Adventure', 'Super Power'],
    link_to_anime: 'https://myanimelist.net/anime/20/Naruto'
  },
  {
    img_anime: 'https://static.aniwave.to/i/1/1b/1bb2150e9529b52995336d38e74e94b6.jpg',
    title: 'One Piece',
    sub: 1000,
    dub: 587,
    total_episodes: 1000,
    anime_type: 'TV',
    age_limit: 'PG-13',
    hd: true,
    short_desc: 'A pirate dreams of finding the legendary One Piece treasure and becoming the Pirate King.',
    other_names: ['OP'],
    score: '8.5',
    reviewed: 150000,
    data_completed: 'Ongoing',
    data_aired: 'Oct 20, 1999',
    duration: '24',
    status: 'Ongoing',
    genre: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'],
    link_to_anime: 'https://myanimelist.net/anime/21/One_Piece'
  },
  {
    img_anime: 'https://static.aniwave.to/i/2018/04/a55c09c47ea411f18bd35d1f3f0ec35e.jpg',
    title: 'Death Note',
    sub: 37,
    dub: 37,
    total_episodes: 37,
    anime_type: 'TV',
    age_limit: 'R',
    hd: true,
    short_desc: 'A high school student discovers a supernatural notebook that allows him to kill anyone by writing their name.',
    other_names: ['Death Note'],
    score: '8.6',
    reviewed: 100000,
    data_completed: 'Jun 27, 2007',
    data_aired: 'Oct 4, 2006',
    duration: '23',
    status: 'Completed',
    genre: ['Mystery', 'Psychological', 'Supernatural', 'Thriller'],
    link_to_anime: 'https://myanimelist.net/anime/1535/Death_Note'
  },
  {
    img_anime: 'https://static.aniwave.to/i/e/e1/e1b8380f6759f73ea3124e45582d32e8.jpg',
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
    img_anime: "https://static.aniwave.to/i/5/59/5985eb9f3b64109c155714b911e2a673.jpg",
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
    img_anime: "https://static.aniwave.to/i/2020/04/2c98f5e005589cd7db93965093f5d9fa.jpg",
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
    img_anime: "https://static.aniwave.to/i/2018/04/c3a59661d4a6beef405711f6c2129448.jpg",
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
    img_anime: "https://static.aniwave.to/i/b/b1/359624ee690b1744a5a978cd251f5401.jpg",
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
    img_anime: "https://static.aniwave.to/i/6/65/65da57f59e5c3a3b48cde3bc82170388.jpg",
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
    img_anime: "https://static.aniwave.to/i/2/22/22af22941391198c20bee7bc0f444194.jpg",
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


export default animeData;

