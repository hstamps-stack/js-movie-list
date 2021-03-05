    const movieFilms = [
    {
        id: 1,
        title: "Training Day",
        year: 2001,
        genre: "Crime, Drama,Thiller",
        description:
        "A rookie cop spends his first day as a Los Angeles narcotics officer with a rogue detective who isn't what he appears to be.",
        imdbRating: 7.7,
    },

    {
        id: 2,
        title: "Spider Man",
        year: 2002,
        genre: "Action, Adventure, Sci-Fi",
        description:
        "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.",
        imdbRating: 7.3,
    },

    {
        id: 3,
        title: " Inception",
        year: 2010,
        genre: "Action, Adventure, Sci-Fi  ", //3
        description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    },

    {
        id: 4,
        title: "Creed",
        year: 2015,
        genre: "Drama, Sport ", //5
        description:
        "The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.",
        imdbRating: 7.6,
    },
    ];
    
    // alert movie details if found
    const printMovieDetails = movieTitle => {
        let findFilm = movies.find(movie => {
          return movie.title === movieTitle;
        });
        if (moveTitle) {
          alert(`${findFilm.title}: ${findFilm.description}`);
        } else {
          alert('Movie was not found!');
        }
      };

    // Add new Movies to array
    const addNewMovies = (title, year, genre, description, imdbRating) => {
    movieFilms.push({ title, year, genre, description, imdbRating });
    };

    addNewMovies(
    "Home",
    1995,
    "Drama",
    "The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.",
    7.6
    );

    // Remove selected item from array
    const clearFilm = (deleteItem) => {
    movieFilms.filter((movieId, i) => {
        if (movieId.id === deleteItem.id) {
        movieFilms.splice(i, 1);
        }
    });
    };

    clearFilm(movieFilms[2]);

    console.log(movieFilms);
