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
        title: "Product - 1",
        imageUrl:
          "https://images.unsplash.com/photo-1638469834848-e4b859f23918?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        price: 100,
      },
      {
        id: 2,
        title: "Product - 2",
        imageUrl:
          "https://images.unsplash.com/photo-1638469834848-e4b859f23918?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        price: 100,
      },
      {
        id: 3,
        title: "Product - 3",
        imageUrl:
          "https://images.unsplash.com/photo-1638469834848-e4b859f23918?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        price: 100,
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