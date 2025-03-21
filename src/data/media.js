const media = [
    {
        title: "Attack on Titan",
        poster: "https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_.jpg",
        landscapeBanner: "https://paradoxy11.wordpress.com/wp-content/uploads/2019/01/sasageyo.jpg?w=1200",
        ratings: 9.0,
        releaseDate: "April 7, 2013",
        description: "In a world where humanity resides within enormous walled cities to protect themselves from titans - giant humanoid creatures who devour humans, Eren Jaeger vows to eradicate the titans after they destroy his hometown and kill his mother.",
        category: "Japanese Anime",
        type: "TV Show",
        runtime: "24 minutes per episode",
        seasons: 4,
        episodes: 87,
        studio: "Wit Studio, MAPPA",
        genres: ["Action", "Drama", "Fantasy"],
        id: 1
    },
    {
        title: "Game of Thrones",
        poster: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
        landscapeBanner: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinz6h24IDPINBSDrjy-hhXx7G-xWQtfg_1BJMhUBL_pQvc41iBjxvT28khPyPp-PCpUjMaQEpAUkzJ4Ic9Y51KXgTFxruM3bOWNPcH9orUlkQrFz5Sqp7y0hnEPg9pp1sGVJSbrzOc5AI/s640/game-of-thrones-banner.jpg",
        ratings: 9.3,
        releaseDate: "April 17, 2011",
        description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for a millennia.",
        category: "Live Action",
        type: "TV Show",
        runtime: "57 minutes per episode",
        seasons: 8,
        episodes: 73,
        network: "HBO",
        genres: ["Drama", "Fantasy", "Adventure"],
        id: 2
    },
    {
        title: "Avatar: The Last Airbender",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZB76af_zZ0PUR5Va_1YBA6zF_05cWDrlMQycy8_bHbzDCZNbLTe9FS6xHz1L_l9FxOG9YA",
        landscapeBanner: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgxiHlSdoCcUgCeOxHIeCCa-AiljYjmiHcfdCpLmJp1BIUqkYwYNZkMgBHj-wRH-wbGiG9wqSEENbMWwZDCq6ZQet3U_40Y2RgCJJffhmw94ZiQOSNAhmuCemZ-_FblQf8iDo5dFb7Hrvet365aSgv_GbxUCXO0SrH7fvPAUnVVhjLQY-fLMfS/s2048/avatar-the-last-airbender-cast_2.jpg",
        ratings: 9.3,
        releaseDate: "February 21, 2005",
        description: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar and bring peace to the world.",
        category: "Western Animation",
        type: "TV Show",
        runtime: "23 minutes per episode",
        seasons: 3,
        episodes: 61,
        network: "Nickelodeon",
        genres: ["Adventure", "Fantasy", "Action"],
        id: 3
    },
    {
        title: "Arcane",
        poster: "https://static.displate.com/857x1200/displate/2024-11-06/27c494dc5fee5ab78ab2b302c608db40_695143690b63d64ae618103abae0dc2f.jpg",
        landscapeBanner: "https://knightedgemedia.com/wp-content/uploads/2024/06/arcane-season-2-full-trailer-banner.jpg",
        ratings: 9.1,
        releaseDate: "November 6, 2021",
        description: "Set in the utopian region of Piltover and the oppressed underground of Zaun, the story follows the origins of two sisters and the power that will tear them apart.",
        category: "Western Animation",
        type: "TV Show",
        runtime: "40 minutes per episode",
        seasons: 1,
        episodes: 9,
        network: "Netflix",
        genres: ["Action", "Drama", "Fantasy"],
        id: 4
    },
    {
        title: "Breaking Bad",
        poster: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
        landscapeBanner: "https://www.natasjaonline.nl/wp-content/uploads/Breaking-Bad-Banner.jpg",
        ratings: 9.5,
        releaseDate: "January 20, 2008",
        description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        category: "Live Action",
        type: "TV Show",
        runtime: "47 minutes per episode",
        seasons: 5,
        episodes: 62,
        network: "AMC",
        genres: ["Crime", "Drama", "Thriller"],
        id: 5
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        landscapeBanner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ED2OdhflGH38W3sPFV5KDRLCRYUZ_stA9Q&s",
        ratings: 8.8,
        releaseDate: "December 19, 2001",
        description: "A young hobbit, Frodo Baggins, inherits a powerful ring that must be destroyed in the fires of Mount Doom to prevent the dark lord Sauron from conquering Middle-earth.",
        category: "Live Action",
        type: "Movie",
        runtime: "178 minutes",
        director: "Peter Jackson",
        genres: ["Adventure", "Fantasy", "Action"],
        id: 6
    },
    {
        "id": 7,
        "title": "Jujutsu Kaisen",
        "poster": "https://m.media-amazon.com/images/M/MV5BNmI1MmYxNWQtY2E5NC00ZTlmLWIzZGEtNzM1YmE3NDA5NzhjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "landscapeBanner": "https://pbs.twimg.com/media/E2peKYAXwAAW1ys.jpg",
        "ratings": 8.6,
        "releaseDate": "October 3, 2020",
        "description": "A young boy swallows a cursed object - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
        "category": "Japanese Anime",
        "type": "TV Show",
        "runtime": "24 minutes per episode",
        "seasons": 2,
        "episodes": 47,
        "studio": "MAPPA",
        "genres": ["Action", "Supernatural", "Dark Fantasy"]
    },
    {
        title: "The Dark Knight",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        landscapeBanner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQclG7PRF65ZatqhIvn2h4wOkBrJiQipCiZaw&s",
        ratings: 9.0,
        releaseDate: "July 18, 2008",
        description: "Batman faces his greatest challenge yet when the Joker emerges, plunging Gotham City into chaos and forcing the Dark Knight to confront everything he believes in.",
        category: "Live Action",
        type: "Movie",
        runtime: "152 minutes",
        director: "Christopher Nolan",
        genres: ["Action", "Crime", "Drama"],
        id: 8
    },
    {
        title: "Stranger Things",
        poster: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        landscapeBanner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6E_mUMBGgibc8yxJVoBCFrOXiGhcMi5T2w&s",
        ratings: 8.7,
        releaseDate: "July 15, 2016",
        description: "In a small town in the 1980s, a group of kids uncovers dark secrets and supernatural forces while searching for their missing friend.",
        category: "Live Action",
        type: "TV Show",
        runtime: "51 minutes per episode",
        seasons: 4,
        episodes: 34,
        network: "Netflix",
        genres: ["Drama", "Fantasy", "Horror"],
        id: 9
    },
    {
        title: "The Matrix",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        landscapeBanner: "https://cdn.europosters.eu/image/hp/69061.jpg",
        ratings: 8.7,
        releaseDate: "March 31, 1999",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        category: "Live Action",
        type: "Movie",
        runtime: "136 minutes",
        director: "The Wachowskis",
        genres: ["Action", "Sci-Fi"],
        id: 10
    },
    {
        title: "Naruto",
        poster: "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        landscapeBanner: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfOiyNKFPeW6z4Z0c9caakTCqoT2r28-By2AG5kZt9zCElxG6fNy6ONXgMfUVYQPktIgy2xEDc-tCpKPBWXZc_-b64t59cLbGObA1zLhHtKva2B6FmF_UUQu8cydt97YxIeur8z?key=mNENg-5hBwW8AOYWU_nP5eo3",
        ratings: 8.4,
        releaseDate: "October 3, 2002",
        description: "Naruto Uzumaki, a young ninja, seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
        category: "Japanese Anime",
        type: "TV Show",
        runtime: "23 minutes per episode",
        seasons: 9,
        episodes: 220,
        network: "TV Tokyo",
        genres: ["Action", "Adventure", "Fantasy"],
        id: 11
    },
    {
        title: "The Witcher",
        poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        landscapeBanner: "https://www.dsogaming.com/wp-content/uploads/2019/07/image-The-Witcher-social-media-banner-Netflix.jpg",
        ratings: 8.2,
        releaseDate: "December 20, 2019",
        description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
        category: "Live Action",
        type: "TV Show",
        runtime: "60 minutes per episode",
        seasons: 2,
        episodes: 16,
        network: "Netflix",
        genres: ["Action", "Adventure", "Fantasy"],
        id: 12
    },
    {
        title: "Inception",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        landscapeBanner: "https://i0.wp.com/4.bp.blogspot.com/_o31CLSHm6KA/TA8B1mNMn7I/AAAAAAAAAFE/Se2ZAnqpdEo/s1600/Inception%2Bbanner%2B2.jpg",
        ratings: 8.8,
        releaseDate: "July 16, 2010",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        category: "Live Action",
        type: "Movie",
        runtime: "148 minutes",
        director: "Christopher Nolan",
        genres: ["Action", "Adventure", "Sci-Fi"],
        id: 13
    },
    {
        title: "The Mandalorian",
        poster: "https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg",
        landscapeBanner: "https://pbs.twimg.com/media/EHRv5d_UUAEMUEk.jpg:large",
        ratings: 8.7,
        releaseDate: "November 12, 2019",
        description: "A lone bounty hunter navigates the outer reaches of the galaxy, far from the authority of the New Republic.",
        category: "Live Action",
        type: "TV Show",
        runtime: "40 minutes per episode",
        seasons: 2,
        episodes: 16,
        network: "Disney+",
        genres: ["Action", "Adventure", "Sci-Fi"],
        id: 14
    },
    {
        title: "Interstellar",
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        landscapeBanner: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/4/z/x/small-spos8585-poster-movie-interstellar-wall-poster-sl-8585-original-imaghzwa4c7zahsz.jpeg?q=90&crop=false",
        ratings: 8.6,
        releaseDate: "November 7, 2014",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        category: "Live Action",
        type: "Movie",
        runtime: "169 minutes",
        director: "Christopher Nolan",
        genres: ["Adventure", "Drama", "Sci-Fi"],
        id: 15
    },
    {
        title: "The Office (US)",
        poster: "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
        landscapeBanner: "https://media.licdn.com/dms/image/v2/C4E12AQHY4VM_6L8dcQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1598426280186?e=2147483647&v=beta&t=NkHAG19r_HV-7z-9pHCrMW5N4BQmMjtnLDw7x88NFXA",
        ratings: 8.9,
        releaseDate: "March 24, 2005",
        description: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
        category: "Live Action",
        type: "TV Show",
        runtime: "22 minutes per episode",
        seasons: 9,
        episodes: 201,
        network: "NBC",
        genres: ["Comedy"],
        id: 16
    },
    {
        title: "The Lion King",
        poster: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg",
        landscapeBanner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5_1Xfvn1hFFNVeODVeblH6P0NFcIVUum8Q&s",
        ratings: 8.5,
        releaseDate: "June 24, 1994",
        description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        category: "Western Animation",
        type: "Movie",
        runtime: "88 minutes",
        director: "Roger Allers, Rob Minkoff",
        genres: ["Adventure", "Drama", "Family"],
        id: 17
    },
    {
        title: "Friends",
        poster: "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        landscapeBanner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-L8OR3omOcUvKNWRGoPwWgA5VV3q00HR3Nw&s",
        ratings: 8.9,
        releaseDate: "September 22, 1994",
        description: "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
        category: "Live Action",
        type: "TV Show",
        runtime: "22 minutes per episode",
        seasons: 10,
        episodes: 236,
        network: "NBC",
        genres: ["Comedy", "Romance"],
        id: 18
    },
    {
        title: "The Avengers",
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        landscapeBanner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7VYfjDgQ_gqBJGMgWHmfd6l6erYLyj2K0Q&s",
        ratings: 8.0,
        releaseDate: "May 4, 2012",
        description: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
        category: "Live Action",
        type: "Movie",
        runtime: "143 minutes",
        director: "Joss Whedon",
        genres: ["Action", "Adventure"],
        id: 19
    },
    {
        id: 20,
        title: "The Shawshank Redemption",
        poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        landscapeBanner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_9V5JxPAJVKv0YWLOrNbwqB2GLz1GDptqQ&s",
        ratings: 9.3,
        releaseDate: "September 23, 1994",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        category: "Live Action",
        type: "Movie",
        runtime: "142 minutes",
        director: "Frank Darabont",
        genres: ["Drama"],
    },
    {
        id: 21,
        title: "Pulp Fiction",
        poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        landscapeBanner: "https://c4.wallpaperflare.com/wallpaper/999/700/891/pulp-fiction-bananas-movies-typography-wallpaper-preview.jpg",
        ratings: 8.9,
        releaseDate: "October 14, 1994",
        description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        category: "Live Action",
        type: "Movie",
        runtime: "154 minutes",
        director: "Quentin Tarantino",
        genres: ["Crime", "Drama"],
    },
    {
        id: 22,
        title: "The Godfather",
        poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        landscapeBanner: "https://i.ebayimg.com/images/g/x54AAOSwCzdklKmz/s-l1200.jpg",
        ratings: 9.2,
        releaseDate: "March 24, 1972",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        category: "Live Action",
        type: "Movie",
        runtime: "175 minutes",
        director: "Francis Ford Coppola",
        genres: ["Crime", "Drama"],
    },
    {
        id: 23,
        title: "Fight Club",
        poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        landscapeBanner: "https://i.etsystatic.com/8405162/r/il/b3dadd/1623664530/il_fullxfull.1623664530_kgde.jpg",
        ratings: 8.8,
        releaseDate: "October 15, 1999",
        description: "The story of an insomniac office worker and a devil-may-care soapmaker that form an underground fight club that evolves into something much, much more.",
        category: "Live Action",
        type: "Movie",
        runtime: "139 minutes",
        director: "David Fincher",
        genres: ["Drama"],
    },
    {
        id: 24,
        title: "Forrest Gump",
        poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        landscapeBanner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2PvDX_v4iGJ83u5cHx6W4Sc8tZ7CEAd8ZQ&s",
        ratings: 8.8,
        releaseDate: "July 6, 1994",
        description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
        category: "Live Action",
        type: "Movie",
        runtime: "142 minutes",
        director: "Robert Zemeckis",
        genres: ["Drama", "Romance"],
    },
    {
        id: 25,
        title: "The Silence of the Lambs",
        poster: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        landscapeBanner: "https://washburnreview.org/wp-content/uploads/2022/10/98db6119-0854-46cc-a338-b8d9f8a48a48-475x267.jpg",
        ratings: 8.6,
        releaseDate: "February 14, 1991",
        description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
        category: "Live Action",
        type: "Movie",
        runtime: "118 minutes",
        director: "Jonathan Demme",
        genres: ["Crime", "Drama", "Thriller"],
    },
    {
        id: 26,
        title: "The Social Network",
        poster: "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        landscapeBanner: "https://image.tmdb.org/t/p/original/1SUw9dXCHYmlWKYHcvwlyynJhid.jpg",
        ratings: 7.7,
        releaseDate: "October 1, 2010",
        description: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea.",
        category: "Live Action",
        type: "Movie",
        runtime: "120 minutes",
        director: "David Fincher",
        genres: ["Biography", "Drama"],
    },
    {
        id: 27,
        title: "The Grand Budapest Hotel",
        poster: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg",
        landscapeBanner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_Q9EUnzRw9GyPd59EVlQY-mO_4MzMoUDPA&s",
        ratings: 8.1,
        releaseDate: "March 28, 2014",
        description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
        category: "Live Action",
        type: "Movie",
        runtime: "99 minutes",
        director: "Wes Anderson",
        genres: ["Adventure", "Comedy", "Drama"],
    },
    {
        id: 28,
        title: "The Revenant",
        poster: "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        landscapeBanner: "https://paulist.org/app/uploads/2016/02/Revenant.jpg",
        ratings: 8.0,
        releaseDate: "January 8, 2016",
        description: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
        category: "Live Action",
        type: "Movie",
        runtime: "156 minutes",
        director: "Alejandro González Iñárritu",
        genres: ["Action", "Adventure", "Drama"],
    },
    {
        id: 29,
        title: "The Big Lebowski",
        poster: "https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_.jpg",
        landscapeBanner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16DITlkXBLgovOquKGXPEN2D5KseXzvRb-w&s",
        ratings: 8.1,
        releaseDate: "March 6, 1998",
        description: "Jeff 'The Dude' Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.",
        category: "Live Action",
        type: "Movie",
        runtime: "117 minutes",
        director: "Joel Coen, Ethan Coen",
        genres: ["Comedy", "Crime"],
    },
    {
        id: 30,
        title: "The Departed",
        poster: "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg",
        landscapeBanner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPp6qSfUIwMvTy0G5usDY0hIyd3cGaVYJytQ&s",
        ratings: 8.5,
        releaseDate: "October 6, 2006",
        description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
        category: "Live Action",
        type: "Movie",
        runtime: "151 minutes",
        director: "Martin Scorsese",
        genres: ["Crime", "Drama", "Thriller"],
    },
    {
        id: 31,
        title: "The Prestige",
        poster: "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg",
        landscapeBanner: "https://anikatalks.com/wp-content/uploads/2021/01/22d70192b6810d0342b6e501ec51e9410cda819d-1.jpg?w=1200",
        ratings: 8.5,
        releaseDate: "October 20, 2006",
        description: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
        category: "Live Action",
        type: "Movie",
        runtime: "130 minutes",
        director: "Christopher Nolan",
        genres: ["Drama", "Mystery", "Sci-Fi"],
    },
    {
        id: 32,
        title: "The Shining",
        poster: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        landscapeBanner: "https://www.belarte.co.uk/cdn/shop/products/The-shining_4a4a97a3-f502-4a10-8903-1c99be754259.jpg?v=1627639818",
        ratings: 8.4,
        releaseDate: "June 13, 1980",
        description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        category: "Live Action",
        type: "Movie",
        runtime: "146 minutes",
        director: "Stanley Kubrick",
        genres: ["Drama", "Horror"],
    },
    {
        id: 33,
        title: "The Truman Show",
        poster: "https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
        landscapeBanner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1QfE0kqnqZYixgcrm7gWw7jBLz1y8gLiurg&s",
        ratings: 8.1,
        releaseDate: "June 5, 1998",
        description: "An insurance salesman discovers his whole life is actually a reality TV show.",
        category: "Live Action",
        type: "Movie",
        runtime: "103 minutes",
        director: "Peter Weir",
        genres: ["Comedy", "Drama", "Sci-Fi"],
    },
    {
        id: 34,
        title: "The Wolf of Wall Street",
        poster: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg",
        landscapeBanner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCJVUoPEHA34XWBUqNRlsfQKzsreniCI2joQ&s",
        ratings: 8.2,
        releaseDate: "December 25, 2013",
        description: "Based on the true story of Jordan Belfort, from his rise to a wealthy stockbroker living the high life to his fall involving crime, corruption, and the federal government.",
        category: "Live Action",
        type: "Movie",
        runtime: "180 minutes",
        director: "Martin Scorsese",
        genres: ["Biography", "Comedy", "Crime"],
    },
    {
        id: 35,
        title: "The Sixth Sense",
        poster: "https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_.jpg",
        landscapeBanner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCxyfH5A5eg0DBw9GLaKGlJjHlRwxE99R8A&s",
        ratings: 8.1,
        releaseDate: "August 6, 1999",
        description: "A boy who communicates with spirits seeks the help of a disheartened child psychologist.",
        category: "Live Action",
        type: "Movie",
        runtime: "107 minutes",
        director: "M. Night Shyamalan",
        genres: ["Drama", "Mystery", "Thriller"],
    },
    {
        id: 36,
        title: "The Green Mile",
        poster: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg",
        landscapeBanner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEgw8GNJAD58tn8UxR1OWBEmcjnNpXTopXA&s",
        ratings: 8.6,
        releaseDate: "December 10, 1999",
        description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
        category: "Live Action",
        type: "Movie",
        runtime: "189 minutes",
        director: "Frank Darabont",
        genres: ["Crime", "Drama", "Fantasy"],
    },
    {
        id: 37,
        title: "The Pianist",
        poster: "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        landscapeBanner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-xd8x3loXBs5b51GrCZWNKVVy_ZZssOoPQ&s",
        ratings: 8.5,
        releaseDate: "September 25, 2002",
        description: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
        category: "Live Action",
        type: "Movie",
        runtime: "150 minutes",
        director: "Roman Polanski",
        genres: ["Biography", "Drama", "Music"],
    },
    {
        id: 38,
        title: "The Exorcist",
        poster: "https://m.media-amazon.com/images/M/MV5BYjhmMGMxZDYtMTkyNy00YWVmLTgyYmUtYTU3ZjcwNTBjN2I1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        landscapeBanner: "https://riotheatre.ca/wp-content/uploads/2016/09/exorcist-banner-1024x768.jpg",
        ratings: 8.0,
        releaseDate: "December 26, 1973",
        description: "When a teenage girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her daughter.",
        category: "Live Action",
        type: "Movie",
        runtime: "122 minutes",
        director: "William Friedkin",
        genres: ["Horror"],
    },
    {
        id: 39,
        title: "The Good, the Bad and the Ugly",
        poster: "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_.jpg",
        landscapeBanner: "https://i.redd.it/x0n0fce87t8y.jpg",
        ratings: 8.8,
        releaseDate: "December 29, 1967",
        description: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
        category: "Live Action",
        type: "Movie",
        runtime: "161 minutes",
        director: "Sergio Leone",
        genres: ["Horror"],
    },
    {
        "id": 40,
        "title": "One Piece",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "landscapeBanner": "https://i.redd.it/iodwygpkys9b1.jpg",
        "ratings": 8.8,
        "releaseDate": "October 20, 1999",
        "description": "Monkey D. Luffy and his pirate crew embark on a quest to find the legendary treasure, One Piece, to become the Pirate King.",
        "category": "Japanese Anime",
        "type": "TV Show",
        "runtime": "24 minutes per episode",
        "seasons": 20,
        "episodes": 1000,
        "studio": "Toei Animation",
        "genres": ["Action", "Adventure", "Fantasy"]
    },
    {
        "id": 41,
        "title": "My Hero Academia",
        "poster": "https://m.media-amazon.com/images/M/MV5BNzgxMzI3NzgtYzE2Zi00MzlmLThlNWEtNWVmZWEyZjNkZWYyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "landscapeBanner": "https://a.storyblok.com/f/178900/1920x1080/b736a20882/my-hero-academia-season-7-key-art-wide.png",
        "ratings": 8.5,
        "releaseDate": "April 3, 2016",
        "description": "In a world where superpowers are the norm, Izuku Midoriya, a Quirkless boy, enrolls in a prestigious hero academy to become the greatest hero.",
        "category": "Japanese Anime",
        "type": "TV Show",
        "runtime": "24 minutes per episode",
        "seasons": 6,
        "episodes": 113,
        "studio": "Bones",
        "genres": ["Action", "Comedy", "Superhero"]
    },
    {
        "id": 42,
        "title": "Demon Slayer",
        "poster": "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "landscapeBanner": "https://cinedore.com.uy/wp-content/uploads/2024/02/desktop-wallpaper-demon-slayer-kimetsu-no-yaiba-series-demon-slayer-banner.jpg",
        "ratings": 8.7,
        "releaseDate": "April 6, 2019",
        "description": "Tanjiro Kamado becomes a demon slayer after his family is slaughtered and his sister Nezuko is turned into a demon.",
        "category": "Japanese Anime",
        "type": "TV Show",
        "runtime": "23 minutes per episode",
        "seasons": 2,
        "episodes": 44,
        "studio": "Ufotable",
        "genres": ["Action", "Adventure", "Dark Fantasy"]
    },
    {
        "id": 44,
        "title": "Death Note",
        "poster": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p225665_b_v8_ab.jpg",
        "landscapeBanner": "https://static.posters.cz/image/hp/60720.jpg",
        "ratings": 9.0,
        "releaseDate": "October 3, 2006",
        "description": "Light Yagami, a high school student, discovers a supernatural notebook that allows him to kill anyone by writing their name, leading him down a path of moral ambiguity.",
        "category": "Japanese Anime",
        "type": "TV Show",
        "runtime": "23 minutes per episode",
        "seasons": 1,
        "episodes": 37,
        "studio": "Madhouse",
        "genres": ["Crime", "Drama", "Mystery"]
    },
    {
        title: "Spirited Away",
        poster: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        landscapeBanner: "https://i.ytimg.com/vi/EfYkRhWqX3s/maxresdefault.jpg",
        ratings: 8.6,
        releaseDate: "July 20, 2001",
        description: "A young girl, Chihiro, becomes trapped in a mysterious world of spirits and must work in a bathhouse to free herself and her parents, who have been turned into pigs.",
        category: "Japanese Anime",
        type: "Movie",
        runtime: "125 minutes",
        director: "Hayao Miyazaki",
        genres: ["Adventure", "Fantasy", "Family"],
        id: 45
    },
    {
        "id": 46,
        "title": "All of Us Are Dead",
        "poster": "https://upload.wikimedia.org/wikipedia/en/2/24/All_of_Us_Are_Dead.jpeg",
        "landscapeBanner": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9hFtd3Pj2kzmmx73N5fUjnkdg8YR7tTyxw&s",
        "ratings": 7.5,
        "releaseDate": "January 28, 2022",
        "description": "A high school becomes ground zero for a zombie virus outbreak. As students struggle to survive, they must rely on their wits, friendships, and limited resources to escape their infected school before the military intervenes.",
        "category": "Live Action",
        "type": "TV Show",
        "runtime": "60 minutes per episode",
        "seasons": 1,
        "episodes": 12,
        "studio": "Netflix, JTBC Studios",
        "genres": ["Horror", "Thriller", "Drama"]
    },
    {
        "id": 47,
        "title": "Alchemy of Souls",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Alchemy_of_Souls.jpg/250px-Alchemy_of_Souls.jpg",
        "landscapeBanner": "https://resizing.flixster.com/dH0uaAtX3MBSSKcqO2Cr0diYYps=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22267435_b_h9_ah.jpg",
        "ratings": 8.7,
        "releaseDate": "June 18, 2022",
        "description": "In a fantasy kingdom where soul-shifting magic exists, an elite warrior trapped in a blind woman's body meets a young nobleman who wants to change his fate. Their journey leads them through a web of ancient secrets, powerful magic, and political struggles.",
        "category": "Live Action",
        "type": "TV Show",
        "runtime": "75 minutes per episode",
        "seasons": 2,
        "episodes": 30,
        "studio": "tvN, Studio Dragon",
        "genres": ["Fantasy", "Romance", "Action"]
    },
    {
        "id": 48,
        "title": "Parasyte: The Grey",
        "poster": "https://images.ctfassets.net/4cd45et68cgf/4hzkalnus8SDcpVcSagplf/2e72a9f632015f7f8377f1b30c1b1d5f/EN_Parasyte-TheGrey_Teaser_Vertical_27x40_RGB_PRE.jpg?w=1200",
        "landscapeBanner": "https://resizing.flixster.com/Gh01bUZLihnjILOZWzP7rVOJsAo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p26926807_b_h10_ab.jpg",
        "ratings": "TBA",
        "releaseDate": "2024 (Upcoming)",
        "description": "In this live-action adaptation of the famous anime and manga 'Parasyte,' humanity faces an invasion of alien parasites that take over human bodies. As the infected wage a silent war, a young woman fights to survive in a city overrun by these mysterious beings.",
        "category": "Live Action",
        "type": "TV Show",
        "runtime": "TBA",
        "seasons": 1,
        "episodes": "TBA",
        "studio": "Netflix, Climax Studio",
        "genres": ["Sci-Fi", "Horror", "Thriller"]
    }
]

export default media;