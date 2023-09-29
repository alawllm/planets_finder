import { rest } from "msw";

const planetNames = [
  "sun",
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];

export const handlers = [
  rest.get(
    `https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/${planetNames.indexOf(
      "saturn"
    )}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            planetOrder: 6,
            name: "saturn",
            description:
              "Saturn is a planet",
            basicDetails: {
              volume: `1.41 x 10^18 km^3`,
              mass: "1.989 x 10^30 kg",
            },
            source: "Wikipedia",
            wikiLink: "https://en.wikipedia.org/wiki/saturn",
          },
        ])
      );
    }
  ),
];
