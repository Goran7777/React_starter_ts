import { rest } from 'msw';
// temporary any
export const handlers: any = [
  // Handles a GET /user request for scoops
  //   rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
  //     return res(
  //       ctx.json([
  //         { name: 'Chocolate', imagePath: './images/chocolate.png' },
  //         { name: 'Vanilla', imagePath: './images/vanilla.png' },
  //       ])
  //     );
  //   }),
  // Handles a GET /user request for toppings
  //   rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
  //     return res(
  //       ctx.json([
  //         {
  //           name: 'Cherries',
  //           imagePath: '/images/cherries.png',
  //         },
  //         {
  //           name: 'M&Ms',
  //           imagePath: '/images/m-and-ms.png',
  //         },
  //         {
  //           name: 'Hot fudge',
  //           imagePath: '/images/hot-fudge.png',
  //         },
  //       ])
  //     );
  //   }),
  // handle post request for ordering on endpoint "order"
  //   rest.post('http://localhost:3030/order', (req, res, ctx) => {
  //     return res(ctx.json({ orderNumber: 123456789 }));
  //   }),
];
