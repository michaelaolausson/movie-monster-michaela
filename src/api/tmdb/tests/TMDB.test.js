import axios from "axios";
import MOCK_SEARCH_SUCCESS from "./data/mock_search-success";
import MOCK_REQUEST_TOKEN_SUCCESS from "./data/mock_request-token-success";
import MOCK_FAVOURITES_SUCCESS from "./data/mock_favourites-success";
import MOCK_WATCHLIST_SUCCESS from "./data/mock_watchlist-success";
import TMDB from "../TMDB";
jest.mock("axios");

describe("TMDB", () => {
  const tmdb = new TMDB();
  
  it("fetches movies from api via search", async () => {
    const data = {
      data: {
        MOCK_SEARCH_SUCCESS
      }
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(tmdb.getMoviesBySearch("avengers")).resolves.toEqual(data);
  });
  it("fetches a request token", async () => {
    const data = {
      data: {
        MOCK_REQUEST_TOKEN_SUCCESS
      }
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(tmdb.getRequestToken()).resolves.toEqual(data);
  });
  it("creates a new session", async () => {
    const data = {
      data: {
        MOCK_REQUEST_TOKEN_SUCCESS
      }
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(tmdb.getRequestToken()).resolves.toEqual(data);
  });
  it("fetches favourite movies", async () => {
    const data = {
      data: {
        MOCK_FAVOURITES_SUCCESS
      }
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(tmdb.getFavourites()).resolves.toEqual(data);
  });
  it("fetches watchlist movies", async () => {
    const data = {
      data: {
        MOCK_WATCHLIST_SUCCESS
      }
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(tmdb.getWatchlist()).resolves.toEqual(data);
  });
});