import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.post("/login", (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        user: {
          username: "admin",
        },
      })
    );
  }),

  rest.get("/products", (req, res, ctx) => {
    const limit = req.url.searchParams.get("limit");

    let products = [
      {
        id: 1,
        title: "harry potter and the philosopher's stone",
        imageUrl:
          "https://images.justwatch.com/poster/87608067/s718/harry-potter-and-the-philosophers-stone.%7Bformat%7D",
      },
      {
        id: 2,
        title: "Harry Potter 2 And The Chamber of Secrets (Movie) – Ninenovel",
        imageUrl:
          "https://ninenovelhome.files.wordpress.com/2020/03/harry-potter-and-the-chamber-of-secrets.jpg",
      },
      {
        id: 3,
        title: "Harry Potter and the Prisoner of Azkaban",
        imageUrl:
          "https://hbomax-images.warnermediacdn.com/images/GXssObwqZrVVGwwEAAABI/tileburnedin?size=1280x720&partner=hbomaxcom&v=3bc48f5acb6ae22a36509f0ac92063d0&host=art-gallery.api.hbo.com&language=en-us&w=1280",
      
      },

      {
        id: 4,
        title: "Jhon Wick",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg ",
      
      },
      {
        id: 5,
        title: "Jhon Wick 2",
        imageUrl:
          "https://i2.sdacdn.com/haber/2016/12/21/john-wick-2-filmi-9086624_amp.jpg ",
      },
      {
        id: 6,
        title: "Jhon Wick 3",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5DkzUdDySGIe9eKkOfpgZGG09RhrszNz-g&usqp=CAU ",
      },
      {
        id: 7,
        title: "Jhon Wick 4",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffW1dAR6xAe_pW2W9pvEUbP1gZyzV31hiNw&usqp=CAU ",
      },
    ];

    if (limit) {
      products = products.slice(0, limit);
    }

    return res(
      ctx.status(200),
      ctx.json({
        data: products,
      })
    );
  }),

  // Handles a GET /user request
  rest.get("/user", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];