import { NavLink, ShopMegaMenuCategory } from "../types/navigation";

const services: NavLink[] = [
  { href: "/services/brand-identity", label: "Brand Identity" },
  { href: "/services/brand-systems", label: "Brand Systems" },
  { href: "/services/digital-design", label: "Digital Design" },
  { href: "/services/marketing-assets", label: "Marketing Assets" },
  {
    href: "/services/print-and-environmental-design",
    label: "Print & Environmental Design",
  },
];

const solutions: NavLink[] = [
  { href: "/solutions/company-stores", label: "Company Stores" },
  { href: "/solutions/swag-storefronts", label: "Swag Storefronts" },
  {
    href: "/solutions/merchandise-and-promotional-products",
    label: "Merchandise & Promotional Products",
  },
  {
    href: "/solutions/print-and-environmental",
    label: "Print & Environmental",
  },
  {
    href: "/solutions/on-demand-kits",
    label: "On-Demand Kits",
  },
];

export const dropdownLinks: Record<string, NavLink[]> = {
  "Design Services": services,
  "Swag & Store Solutions": solutions,
};

/**
 * ✅ REAL URLs, pulled directly from shopblossomrocket.com's own nav
 * (fetched and parsed programmatically, not retyped by hand). Verified
 * 305/305 unique hrefs with no collisions, so the earlier console error
 * is resolved by the data itself now too — not just the key fix below.
 *
 * A few things carried over as-is from the live site, worth knowing about
 * rather than "fixing," since they reflect the real URLs:
 * - Awards → Golf → Wood ends in .html while its siblings end in .htm
 * - Drinkware → Restaurant/Bar → Beer Steins & Shot Glasses end in
 *   .hmt.html (looks like a site-side typo, but it's the real live URL)
 * - Tech → Accessories' own category page is .html, its children are .htm
 * - Writing → More → Highlighters ends in .html
 */
export const shopMegaMenu: ShopMegaMenuCategory[] = [
  {
    label: "Apparel",
    groups: [
      {
        title: "T-Shirts",
        items: [
          {
            label: "Short Sleeve T-Shirts",
            href: "https://www.shopblossomrocket.com/apparel-short-sleeve-t-shirts.htm",
          },
          {
            label: "Long Sleeve T-Shirts",
            href: "https://www.shopblossomrocket.com/apparel-long-sleeve-t-shirts.htm",
          },
          {
            label: "Tank Tops",
            href: "https://www.shopblossomrocket.com/apparel-tank-tops.htm",
          },
          {
            label: "Fitted T-Shirts",
            href: "https://www.shopblossomrocket.com/apparel-fitted-t-shirts.htm",
          },
          {
            label: "Camo T-Shirts",
            href: "https://www.shopblossomrocket.com/apparel-camo-t-shirts.htm",
          },
          {
            label: "Youth T-Shirts",
            href: "https://www.shopblossomrocket.com/apparel-youth-t-shirts.htm",
          },
        ],
      },
      {
        title: "Officewear",
        items: [
          {
            label: "Short Sleeve Polos",
            href: "https://www.shopblossomrocket.com/apparel-officewear-short-sleeve-polos.htm",
          },
          {
            label: "Long Sleeve Polos",
            href: "https://www.shopblossomrocket.com/apparel-officewear-long-sleeve-polos.htm",
          },
          {
            label: "Youth Polos",
            href: "https://www.shopblossomrocket.com/apparel-officewear-youth-polos.htm",
          },
          {
            label: "Short Sleeve Dress Shirts",
            href: "https://www.shopblossomrocket.com/apparel-officewear-short-dress-shirts.htm",
          },
          {
            label: "Long Sleeve Dress Shirts",
            href: "https://www.shopblossomrocket.com/apparel-officewear-long-dress-shirts.htm",
          },
          {
            label: "Denim Shirts",
            href: "https://www.shopblossomrocket.com/apparel-officewear-denim-shirts.htm",
          },
          {
            label: "Twill Shirts",
            href: "https://www.shopblossomrocket.com/apparel-officewear-twill-shirts.htm",
          },
          {
            label: "Youth Dress Shirts",
            href: "https://www.shopblossomrocket.com/apparel-officewear-youth-dress-shirts.htm",
          },
        ],
      },
      {
        title: "Outerwear",
        items: [
          {
            label: "Jackets / Coats",
            href: "https://www.shopblossomrocket.com/apparel-outerwear-jackets-coats.htm",
          },
          {
            label: "Hoodies",
            href: "https://www.shopblossomrocket.com/apparel-outerwear-hoodies.htm",
          },
          {
            label: "Fleece",
            href: "https://www.shopblossomrocket.com/apparel-outerwear-fleece.htm",
          },
          {
            label: "Pullovers",
            href: "https://www.shopblossomrocket.com/apparel-outerwear-pullovers.htm",
          },
          {
            label: "Sweats",
            href: "https://www.shopblossomrocket.com/apparel-outerwear-sweats.htm",
          },
          {
            label: "Sweaters",
            href: "https://www.shopblossomrocket.com/apparel-outerwear-sweaters.htm",
          },
          {
            label: "Vests",
            href: "https://www.shopblossomrocket.com/apparel-outerwear-vests.htm",
          },
          {
            label: "Youth",
            href: "https://www.shopblossomrocket.com/apparel-outerwear-youth.htm",
          },
        ],
      },
      {
        title: "Bottoms",
        items: [
          {
            label: "Pants",
            href: "https://www.shopblossomrocket.com/apparel-bottoms-pants.htm",
          },
          {
            label: "Shorts",
            href: "https://www.shopblossomrocket.com/apparel-bottoms-shorts.htm",
          },
          {
            label: "Denim",
            href: "https://www.shopblossomrocket.com/apparel-bottoms-denim.htm",
          },
          {
            label: "Skirts",
            href: "https://www.shopblossomrocket.com/apparel-bottoms-skirts.htm",
          },
          {
            label: "Youth",
            href: "https://www.shopblossomrocket.com/apparel-bottoms-youth.htm",
          },
          {
            label: "Maternity",
            href: "https://www.shopblossomrocket.com/apparel-bottoms-maternity.htm",
          },
        ],
      },
      {
        title: "Headwear",
        items: [
          {
            label: "Caps",
            href: "https://www.shopblossomrocket.com/apparel-headwear-caps.htm",
          },
          {
            label: "Hats",
            href: "https://www.shopblossomrocket.com/apparel-headwear-hats.htm",
          },
          {
            label: "Beanies",
            href: "https://www.shopblossomrocket.com/apparel-headwear-beanies.htm",
          },
          {
            label: "Visors",
            href: "https://www.shopblossomrocket.com/apparel-headwear-visors.htm",
          },
          {
            label: "Bandanas",
            href: "https://www.shopblossomrocket.com/apparel-headwear-bandanas.htm",
          },
          {
            label: "Youth",
            href: "https://www.shopblossomrocket.com/apparel-headwear-youth.htm",
          },
        ],
      },
      {
        title: "More",
        items: [
          {
            label: "Sunglasses",
            href: "https://www.shopblossomrocket.com/apparel-sunglasses.htm",
          },
          {
            label: "Activewear",
            href: "https://www.shopblossomrocket.com/apparel-activewear.htm",
          },
          {
            label: "Aprons",
            href: "https://www.shopblossomrocket.com/apparel-aprons.htm",
          },
          {
            label: "Gloves",
            href: "https://www.shopblossomrocket.com/apparel-gloves.htm",
          },
          {
            label: "Infantwear",
            href: "https://www.shopblossomrocket.com/apparel-infantwear.htm",
          },
          {
            label: "Dresses",
            href: "https://www.shopblossomrocket.com/apparel-dresses.htm",
          },
          {
            label: "Watches",
            href: "https://www.shopblossomrocket.com/apparel-watches.htm",
          },
          {
            label: "Shoes",
            href: "https://www.shopblossomrocket.com/apparel-shoes.htm",
          },
        ],
      },
    ],
  },
  {
    label: "Awards",
    groups: [
      {
        title: "Trophies",
        items: [
          {
            label: "Acrylic Trophies",
            href: "https://www.shopblossomrocket.com/awards-recognition-trophies-acrylic.htm",
          },
          {
            label: "Crystal Trophies",
            href: "https://www.shopblossomrocket.com/awards-recognition-trophies-crystal.htm",
          },
          {
            label: "Glass Trophies",
            href: "https://www.shopblossomrocket.com/awards-recognition-trophies-glass.htm",
          },
          {
            label: "Marble Trophies",
            href: "https://www.shopblossomrocket.com/awards-recognition-trophies-marble.htm",
          },
          {
            label: "Metal Trophies",
            href: "https://www.shopblossomrocket.com/awards-recognition-trophies-metal.htm",
          },
          {
            label: "Wood Trophies",
            href: "https://www.shopblossomrocket.com/awards-recognition-trophies-wood.htm",
          },
        ],
      },
      {
        title: "Plaques",
        items: [
          {
            label: "Acrylic Plaques",
            href: "https://www.shopblossomrocket.com/awards-recognition-plaques-acrylic.htm",
          },
          {
            label: "Crystal Plaques",
            href: "https://www.shopblossomrocket.com/awards-recognition-plaques-crystal.htm",
          },
          {
            label: "Glass Plaques",
            href: "https://www.shopblossomrocket.com/awards-recognition-plaques-glass.htm",
          },
          {
            label: "Marble Plaques",
            href: "https://www.shopblossomrocket.com/awards-recognition-plaques-marble.htm",
          },
          {
            label: "Metal Plaques",
            href: "https://www.shopblossomrocket.com/awards-recognition-plaques-metal.htm",
          },
          {
            label: "Wood Plaques",
            href: "https://www.shopblossomrocket.com/awards-recognition-plaques-wood.htm",
          },
        ],
      },
      {
        title: "Emblems, Pins, & Medals",
        items: [
          {
            label: "Emblems",
            href: "https://www.shopblossomrocket.com/awards-recognition-emblems.htm",
          },
          {
            label: "Medals",
            href: "https://www.shopblossomrocket.com/awards-recognition-medals.htm",
          },
          {
            label: "Pins",
            href: "https://www.shopblossomrocket.com/awards-recognition-pins.htm",
          },
          {
            label: "Ribbons",
            href: "https://www.shopblossomrocket.com/awards-recognition-ribbons.htm",
          },
        ],
      },
      {
        title: "Paper Weights",
        items: [
          {
            label: "Acrylic Paper Weights",
            href: "https://www.shopblossomrocket.com/awards-recognition-paper-weights-acrylic.htm",
          },
          {
            label: "Crystal Paper Weights",
            href: "https://www.shopblossomrocket.com/awards-recognition-paper-weights-crystal.htm",
          },
          {
            label: "Glass Paper Weights",
            href: "https://www.shopblossomrocket.com/awards-recognition-paper-weights-glass.htm",
          },
          {
            label: "Marble Paper Weights",
            href: "https://www.shopblossomrocket.com/awards-recognition-paper-weights-marble.htm",
          },
          {
            label: "Metal Paper Weights",
            href: "https://www.shopblossomrocket.com/awards-recognition-paper-weights-metal.htm",
          },
          {
            label: "Wood Paper Weights",
            href: "https://www.shopblossomrocket.com/awards-recognition-paper-weights-wood.htm",
          },
        ],
      },
      {
        title: "Vases",
        items: [
          {
            label: "Crystal Vases",
            href: "https://www.shopblossomrocket.com/awards-recognition-vases-crystal.htm",
          },
          {
            label: "Glass Vases",
            href: "https://www.shopblossomrocket.com/awards-recognition-vases-glass.htm",
          },
          {
            label: "Marble Vases",
            href: "https://www.shopblossomrocket.com/awards-recognition-vases-marble.htm",
          },
          {
            label: "Metal Vases",
            href: "https://www.shopblossomrocket.com/awards-recognition-vases-metal.htm",
          },
        ],
      },
      {
        title: "Golf",
        items: [
          {
            label: "Acrylic",
            href: "https://www.shopblossomrocket.com/awards-recognition-golf-acrylic.htm",
          },
          {
            label: "Crystal",
            href: "https://www.shopblossomrocket.com/awards-recognition-golf-crystal.htm",
          },
          {
            label: "Glass",
            href: "https://www.shopblossomrocket.com/awards-recognition-golf-glass.htm",
          },
          {
            label: "Marble",
            href: "https://www.shopblossomrocket.com/awards-recognition-golf-marble.htm",
          },
          {
            label: "Metal",
            href: "https://www.shopblossomrocket.com/awards-recognition-golf-metal.htm",
          },
          {
            label: "Wood",
            href: "https://www.shopblossomrocket.com/awards-recognition-golf-wood.html",
          },
        ],
      },
    ],
  },
  {
    label: "Bags",
    groups: [
      {
        title: "Tote Bags",
        items: [
          {
            label: "Shopping",
            href: "https://www.shopblossomrocket.com/tote-bags-shopping.htm",
          },
          {
            label: "Trade Shows",
            href: "https://www.shopblossomrocket.com/tote-bags-trade-shows.htm",
          },
          {
            label: "Cotton",
            href: "https://www.shopblossomrocket.com/tote-bags-cotton.htm",
          },
          {
            label: "Fashion",
            href: "https://www.shopblossomrocket.com/tote-bags-fashion.htm",
          },
        ],
      },
      {
        title: "Backpacks",
        items: [
          {
            label: "Zipper Closure",
            href: "https://www.shopblossomrocket.com/backpacks-zipper-closure.htm",
          },
          {
            label: "Drawstring",
            href: "https://www.shopblossomrocket.com/backpacks-drawstring.htm",
          },
          {
            label: "Sling",
            href: "https://www.shopblossomrocket.com/backpacks-sling.htm",
          },
          {
            label: "Button Closure",
            href: "https://www.shopblossomrocket.com/backpacks-button-closure.htm",
          },
        ],
      },
      {
        title: "Office & School",
        items: [
          {
            label: "Backpacks",
            href: "https://www.shopblossomrocket.com/office-school-backpacks.htm",
          },
          {
            label: "Computer Bags",
            href: "https://www.shopblossomrocket.com/office-school-computer-bags.htm",
          },
          {
            label: "Lunch Bags",
            href: "https://www.shopblossomrocket.com/office-school-lunch-bags.htm",
          },
          {
            label: "Messenger Bags",
            href: "https://www.shopblossomrocket.com/office-school-messenger-bags.htm",
          },
          {
            label: "Briefcases & Attaches",
            href: "https://www.shopblossomrocket.com/office-school-briefcases-attaches.htm",
          },
        ],
      },
      {
        title: "Outdoor & Fitness",
        items: [
          {
            label: "Coolers",
            href: "https://www.shopblossomrocket.com/outdoor-fitness-coolers.htm",
          },
          {
            label: "Gym Bags",
            href: "https://www.shopblossomrocket.com/outdoor-fitness-gym-bags.htm",
          },
          {
            label: "Duffle Bags",
            href: "https://www.shopblossomrocket.com/outdoor-fitness-duffle-bags.htm",
          },
          {
            label: "Picnic Baskets",
            href: "https://www.shopblossomrocket.com/outdoor-fitness-picnic-baskets.htm",
          },
        ],
      },
      {
        title: "Travel",
        items: [
          {
            label: "Carryon Bags",
            href: "https://www.shopblossomrocket.com/travel-carryon-bags.htm",
          },
          {
            label: "TSA Approved",
            href: "https://www.shopblossomrocket.com/travel-outdoor-fitness-tsa-approved.htm",
          },
          {
            label: "Suitcases",
            href: "https://www.shopblossomrocket.com/travel-outdoor-fitness-suitcases.htm",
          },
          {
            label: "Toiletries",
            href: "https://www.shopblossomrocket.com/travel-outdoor-fitness-toiletries.htm",
          },
          {
            label: "Garment Bags",
            href: "https://www.shopblossomrocket.com/travel-garment-bags.htm",
          },
          {
            label: "Fanny Packs",
            href: "https://www.shopblossomrocket.com/travel-fanny-packs.htm",
          },
        ],
      },
      {
        title: "Shop by Material",
        items: [
          {
            label: "Paper Bags",
            href: "https://www.shopblossomrocket.com/paper-bags.htm",
          },
          {
            label: "Plastic Bags",
            href: "https://www.shopblossomrocket.com/plastic-bags.htm",
          },
          {
            label: "Recycled Material",
            href: "https://www.shopblossomrocket.com/bags-recycled-material.htm",
          },
        ],
      },
    ],
  },
  {
    label: "Drinkware",
    groups: [
      {
        title: "Travel",
        items: [
          {
            label: "Travel Mugs",
            href: "https://www.shopblossomrocket.com/drinkware-travel-mugs.htm",
          },
          {
            label: "Tumblers",
            href: "https://www.shopblossomrocket.com/drinkware-travel-tumblers.htm",
          },
          {
            label: "Thermos",
            href: "https://www.shopblossomrocket.com/drinkware-travel-thermos.htm",
          },
          {
            label: "Beverage Insulators",
            href: "https://www.shopblossomrocket.com/drinkware-travel-beverage-insulators.htm",
          },
          {
            label: "BPA Free Bottles",
            href: "https://www.shopblossomrocket.com/drinkware-travel-bpa-free-bottles.htm",
          },
          {
            label: "Water Bottles",
            href: "https://www.shopblossomrocket.com/drinkware-travel-water-bottles.htm",
          },
        ],
      },
      {
        title: "Home & Office",
        items: [
          {
            label: "Mugs",
            href: "https://www.shopblossomrocket.com/drinkware-home-office-mugs.htm",
          },
          {
            label: "Tumblers",
            href: "https://www.shopblossomrocket.com/drinkware-home-office-tumblers.htm",
          },
          {
            label: "Paper Cups",
            href: "https://www.shopblossomrocket.com/drinkware-home-office-paper-cups.htm",
          },
          {
            label: "Plastic Cups",
            href: "https://www.shopblossomrocket.com/drinkware-home-office-plastic-cups.htm",
          },
          {
            label: "Thermos",
            href: "https://www.shopblossomrocket.com/drinkware-home-office-thermos.htm",
          },
          {
            label: "Tea Cups",
            href: "https://www.shopblossomrocket.com/drinkware-home-office-tea-cups.htm",
          },
          {
            label: "Coasters",
            href: "https://www.shopblossomrocket.com/drinkware-home-office-coasters.htm",
          },
          {
            label: "Carafes",
            href: "https://www.shopblossomrocket.com/drinkware-home-office-carafes.htm",
          },
        ],
      },
      {
        title: "Beer & Wine",
        items: [
          {
            label: "Wine Glasses",
            href: "https://www.shopblossomrocket.com/drinkware-beer-wine-wine-glasses.htm",
          },
          {
            label: "Beer Steins",
            href: "https://www.shopblossomrocket.com/drinkware-beer-wine-beer-steins.htm",
          },
          {
            label: "Shot Glasses",
            href: "https://www.shopblossomrocket.com/drinkware-beer-wine-shot-glasses.htm",
          },
          {
            label: "Beverage Insulators",
            href: "https://www.shopblossomrocket.com/drinkware-beer-wine-beverage-insulators.htm",
          },
          {
            label: "Openers",
            href: "https://www.shopblossomrocket.com/drinkware-beer-wine-openers.htm",
          },
        ],
      },
      {
        title: "Restaurant / Bar",
        items: [
          {
            label: "Plastic Cups",
            href: "https://www.shopblossomrocket.com/drinkware-restaurant-bar-plastic-cups.htm",
          },
          {
            label: "Glasses",
            href: "https://www.shopblossomrocket.com/drinkware-restaurant-bar-glasses.htm",
          },
          {
            label: "Wine Glasses",
            href: "https://www.shopblossomrocket.com/drinkware-restaurant-bar-wine-glasses.htm",
          },
          {
            label: "Beer Steins",
            href: "https://www.shopblossomrocket.com/drinkware-restaurant-bar-beer-steins.hmt.html",
          },
          {
            label: "Shot Glasses",
            href: "https://www.shopblossomrocket.com/drinkware-restaurant-bar-shot-glasses.hmt.html",
          },
          {
            label: "Coasters",
            href: "https://www.shopblossomrocket.com/drinkware-restaurant-bar-coasters.htm",
          },
          {
            label: "Carafes",
            href: "https://www.shopblossomrocket.com/drinkware-restaurant-bar-carafes.htm",
          },
          {
            label: "Openers",
            href: "https://www.shopblossomrocket.com/drinkware-restaurant-bar-openers.htm",
          },
        ],
      },
      {
        title: "Sports & Outdoors",
        items: [
          {
            label: "Plastic Cups",
            href: "https://www.shopblossomrocket.com/drinkware-sports-outdoors-plastic-cups.htm",
          },
          {
            label: "Styrofoam Cups",
            href: "https://www.shopblossomrocket.com/drinkware-sports-outdoors-styrofoam-cups.htm",
          },
          {
            label: "Beverage Insulators",
            href: "https://www.shopblossomrocket.com/drinkware-sports-outdoors-beverage-insulators.htm",
          },
          {
            label: "BPA Free Bottles",
            href: "https://www.shopblossomrocket.com/drinkware-sports-outdoors-bpa-free-bottles.htm",
          },
          {
            label: "Thermos",
            href: "https://www.shopblossomrocket.com/drinkware-sports-outdoors-thermos.htm",
          },
          {
            label: "Tumblers",
            href: "https://www.shopblossomrocket.com/drinkware-sports-outdoors-tumblers.htm",
          },
          {
            label: "Water Bottles",
            href: "https://www.shopblossomrocket.com/drinkware-sports-outdoors-water-bottles.htm",
          },
        ],
      },
      {
        title: "Straws",
        items: [
          {
            label: "Plastic",
            href: "https://www.shopblossomrocket.com/drinkware-straws-plastic.htm",
          },
          {
            label: "Paper",
            href: "https://www.shopblossomrocket.com/drinkware-straws-paper.htm",
          },
          {
            label: "Reusable",
            href: "https://www.shopblossomrocket.com/drinkware-straws-reusable.htm",
          },
        ],
      },
    ],
  },
  {
    label: "Fun",
    groups: [
      {
        title: "Camping / Outdoors",
        items: [
          {
            label: "Coolers",
            href: "https://www.shopblossomrocket.com/fun-outdoors-camping-outdoors-coolers.htm",
          },
          {
            label: "Chairs",
            href: "https://www.shopblossomrocket.com/fun-outdoors-camping-outdoors-chairs.htm",
          },
          {
            label: "Blankets",
            href: "https://www.shopblossomrocket.com/fun-outdoors-camping-outdoors-blankets.htm",
          },
          {
            label: "Umbrellas",
            href: "https://www.shopblossomrocket.com/fun-outdoors-camping-outdoors-umbrellas.htm",
          },
          {
            label: "Towels",
            href: "https://www.shopblossomrocket.com/fun-outdoors-camping-outdoors-towels.htm",
          },
          {
            label: "Binoculars",
            href: "https://www.shopblossomrocket.com/fun-outdoors-camping-outdoors-binoculars.htm",
          },
          {
            label: "Compasses",
            href: "https://www.shopblossomrocket.com/fun-outdoors-camping-outdoors-compasses.htm",
          },
          {
            label: "Fishing Coolers",
            href: "https://www.shopblossomrocket.com/fun-outdoors-camping-outdoors-fishing-coolers.htm",
          },
        ],
      },
      {
        title: "Team Spirit",
        items: [
          {
            label: "Stadium Cushions",
            href: "https://www.shopblossomrocket.com/fun-outdoors-sports-team-spirit-stadium-cushions.htm",
          },
          {
            label: "Stadium Chairs",
            href: "https://www.shopblossomrocket.com/fun-outdoors-sports-team-spirit-stadium-chairs.htm",
          },
          {
            label: "Fans",
            href: "https://www.shopblossomrocket.com/fun-outdoors-sports-team-spirit-fans.htm",
          },
          {
            label: "Foam Hands",
            href: "https://www.shopblossomrocket.com/fun-outdoors-sports-team-spirit-foam-hands.htm",
          },
          {
            label: "Megaphones",
            href: "https://www.shopblossomrocket.com/fun-outdoors-sports-team-spirit-megaphones.htm",
          },
          {
            label: "Noise Makers",
            href: "https://www.shopblossomrocket.com/fun-outdoors-sports-team-spirit-noise-makers.htm",
          },
          {
            label: "Pom Poms",
            href: "https://www.shopblossomrocket.com/fun-outdoors-sports-team-spirit-pom-poms.htm",
          },
        ],
      },
      {
        title: "Balls",
        items: [
          {
            label: "Footballs",
            href: "https://www.shopblossomrocket.com/fun-outdoors-balls-footballs.htm",
          },
          {
            label: "Basketballs",
            href: "https://www.shopblossomrocket.com/fun-outdoors-balls-basketballs.htm",
          },
          {
            label: "Baseballs",
            href: "https://www.shopblossomrocket.com/fun-outdoors-balls-baseballs.htm",
          },
          {
            label: "Soccer Balls",
            href: "https://www.shopblossomrocket.com/fun-outdoors-balls-soccer-balls.htm",
          },
          {
            label: "Golf Balls",
            href: "https://www.shopblossomrocket.com/fun-outdoors-balls-golf-balls.htm",
          },
          {
            label: "Hockey Pucks",
            href: "https://www.shopblossomrocket.com/fun-outdoors-balls-hockey-pucks.htm",
          },
        ],
      },
      {
        title: "Toys & Games",
        items: [
          {
            label: "Flyers",
            href: "https://www.shopblossomrocket.com/fun-outdoors-toys-games-flyers.htm",
          },
          {
            label: "Puzzles",
            href: "https://www.shopblossomrocket.com/fun-outdoors-toys-games-puzzles.htm",
          },
          {
            label: "Stuffed Animals",
            href: "https://www.shopblossomrocket.com/fun-outdoors-toys-games-stuffed-animals.htm",
          },
          {
            label: "Kites",
            href: "https://www.shopblossomrocket.com/fun-outdoors-toys-games-kites.htm",
          },
          {
            label: "Tattoos",
            href: "https://www.shopblossomrocket.com/fun-outdoors-toys-games-tattoos.htm",
          },
          {
            label: "Yo-Yos",
            href: "https://www.shopblossomrocket.com/fun-outdoors-toys-games-yo-yos.htm",
          },
          {
            label: "Airplanes",
            href: "https://www.shopblossomrocket.com/fun-outdoors-toys-games-airplanes.htm",
          },
          {
            label: "Games",
            href: "https://www.shopblossomrocket.com/fun-outdoors-toys-games-board-games.htm",
          },
        ],
      },
      {
        title: "Golf Items",
        items: [
          {
            label: "Golf Balls",
            href: "https://www.shopblossomrocket.com/fun-outdoors-golf-items-golf-balls.htm",
          },
          {
            label: "Ball Markers",
            href: "https://www.shopblossomrocket.com/fun-outdoors-golf-items-ball-markers.htm",
          },
          {
            label: "Clips",
            href: "https://www.shopblossomrocket.com/fun-outdoors-golf-items-clips.htm",
          },
          {
            label: "Clubs & Putters",
            href: "https://www.shopblossomrocket.com/fun-outdoors-golf-items-clubs.htm",
          },
          {
            label: "Event Flags & Banners",
            href: "https://www.shopblossomrocket.com/fun-outdoors-golf-items-event-flags-banners.htm",
          },
          {
            label: "Golf Apparel",
            href: "https://www.shopblossomrocket.com/fun-outdoors-golf-items-golf-apparel.htm",
          },
          {
            label: "Golf Bags",
            href: "https://www.shopblossomrocket.com/fun-outdoors-golf-items-golf-bags.htm",
          },
          {
            label: "Shoe Bags",
            href: "https://www.shopblossomrocket.com/fun-outdoors-golf-items-shoe-bags.htm",
          },
        ],
      },
    ],
  },
  {
    label: "Headwear",
    groups: [
      {
        title: "Caps",
        items: [
          {
            label: "Fitted Caps",
            href: "https://www.shopblossomrocket.com/headwear-caps-fitted-caps.htm",
          },
          {
            label: "Adjustable Caps",
            href: "https://www.shopblossomrocket.com/headwear-caps-adjustable-caps.htm",
          },
          {
            label: "Camouflage Caps",
            href: "https://www.shopblossomrocket.com/headwear-caps-camouflage-caps.htm",
          },
          {
            label: "Cotton Twill / Canvas",
            href: "https://www.shopblossomrocket.com/headwear-caps-cotton-canvas.htm",
          },
        ],
      },
      {
        title: "Hats",
        items: [
          {
            label: "Hard Hats",
            href: "https://www.shopblossomrocket.com/headwear-hats-hard-hats.htm",
          },
          {
            label: "Sun Hats",
            href: "https://www.shopblossomrocket.com/headwear-hats-sun-hats.htm",
          },
          {
            label: "Fedora",
            href: "https://www.shopblossomrocket.com/headwear-hats-fedora-fedora.htm",
          },
          {
            label: "Golf",
            href: "https://www.shopblossomrocket.com/headwear-hats-golf.htm",
          },
          {
            label: "Cowboy Hats",
            href: "https://www.shopblossomrocket.com/headwear-hats-cowboy-hats.htm",
          },
        ],
      },
      {
        title: "Beanies",
        items: [
          {
            label: "Beanies with Poms",
            href: "https://www.shopblossomrocket.com/headwear-beanies-with-pom.htm",
          },
          {
            label: "Beanies with Cuffs",
            href: "https://www.shopblossomrocket.com/headwear-beanies-with-cuff.htm",
          },
          {
            label: "Beanies with Lights",
            href: "https://www.shopblossomrocket.com/headwear-beanies-with-light.htm",
          },
          {
            label: "Camouflage Beanies",
            href: "https://www.shopblossomrocket.com/headwear-beanies-camouflage.htm",
          },
        ],
      },
      {
        title: "More",
        items: [
          {
            label: "Visors",
            href: "https://www.shopblossomrocket.com/headwear-more-visors.htm",
          },
          {
            label: "Safety",
            href: "https://www.shopblossomrocket.com/headwear-more-safety.htm",
          },
          {
            label: "Bandanas",
            href: "https://www.shopblossomrocket.com/headwear-more-bandanas.htm",
          },
        ],
      },
    ],
  },
  {
    label: "Health",
    groups: [
      {
        title: "First Aid",
        items: [
          {
            label: "First Aid Kits",
            href: "https://www.shopblossomrocket.com/healthcare-first-aid-kits.htm",
          },
          {
            label: "Sunscreen",
            href: "https://www.shopblossomrocket.com/healthcare-first-aid-sunscreen.htm",
          },
          {
            label: "Heat/Cold Packs",
            href: "https://www.shopblossomrocket.com/healthcare-first-aid-heat-cold-packs.htm",
          },
          {
            label: "Pill Boxes",
            href: "https://www.shopblossomrocket.com/healthcare-first-aid-pill-boxes.htm",
          },
          {
            label: "Pill Cutters",
            href: "https://www.shopblossomrocket.com/healthcare-first-aid-pill-cutters.htm",
          },
          {
            label: "Thermometers",
            href: "https://www.shopblossomrocket.com/healthcare-first-aid-thermometers.htm",
          },
        ],
      },
      {
        title: "PPE",
        items: [
          {
            label: "Masks",
            href: "https://www.shopblossomrocket.com/healthcare-ppe-masks.htm",
          },
          {
            label: "Latex Gloves",
            href: "https://www.shopblossomrocket.com/healthcare-ppe-latex-gloves.htm",
          },
          {
            label: "Latex-Free Gloves",
            href: "https://www.shopblossomrocket.com/healthcare-ppe-latex-free-gloves.htm",
          },
          {
            label: "Hand Sanitizer",
            href: "https://www.shopblossomrocket.com/healthcare-ppe-hand-sanitizer.htm",
          },
          {
            label: "Face Shields",
            href: "https://www.shopblossomrocket.com/healthcare-ppe-face-shields.htm",
          },
          {
            label: "Gators",
            href: "https://www.shopblossomrocket.com/healthcare-ppe-gators.htm",
          },
          {
            label: "Floor Decals",
            href: "https://www.shopblossomrocket.com/healthcare-ppe-floor-decals.htm",
          },
          {
            label: "No Touch Tools",
            href: "https://www.shopblossomrocket.com/healthcare-ppe-no-touch-tools.htm",
          },
        ],
      },
      {
        title: "Selfcare",
        items: [
          {
            label: "Lip Balm",
            href: "https://www.shopblossomrocket.com/healthcare-selfcare-lip-balm.htm",
          },
          {
            label: "Sunglasses",
            href: "https://www.shopblossomrocket.com/healthcare-selfcare-sunglasses.htm",
          },
          {
            label: "Fitness",
            href: "https://www.shopblossomrocket.com/healthcare-selfcare-fitness.htm",
          },
          {
            label: "Pedometers",
            href: "https://www.shopblossomrocket.com/healthcare-selfcare-pedometers.htm",
          },
          {
            label: "Candles",
            href: "https://www.shopblossomrocket.com/healthcare-selfcare-candles.htm",
          },
          {
            label: "Spa Kits",
            href: "https://www.shopblossomrocket.com/healthcare-selfcare-spa-kits.htm",
          },
          {
            label: "Awareness",
            href: "https://www.shopblossomrocket.com/healthcare-selfcare-awareness.htm",
          },
        ],
      },
    ],
  },
  {
    label: "Office",
    groups: [
      {
        title: "Desk Items",
        items: [
          {
            label: "Note Pads",
            href: "https://www.shopblossomrocket.com/office-desk-items-note-pads.htm",
          },
          {
            label: "Sticky Notes",
            href: "https://www.shopblossomrocket.com/office-desk-items-sticky-notes.htm",
          },
          {
            label: "Business Card Holders",
            href: "https://www.shopblossomrocket.com/office-desk-items-business-card-holders.htm",
          },
          {
            label: "Journals",
            href: "https://www.shopblossomrocket.com/office-desk-items-journals.htm",
          },
          {
            label: "Caddies/Holders",
            href: "https://www.shopblossomrocket.com/office-desk-items-caddies-holders.htm",
          },
          {
            label: "Scissors",
            href: "https://www.shopblossomrocket.com/office-desk-items-scissors.htm",
          },
          {
            label: "Staplers / Staple Removers",
            href: "https://www.shopblossomrocket.com/office-desk-items-staples.htm",
          },
          {
            label: "Calculators",
            href: "https://www.shopblossomrocket.com/office-desk-items-calculators.htm",
          },
        ],
      },
      {
        title: "Organizational Tools",
        items: [
          {
            label: "Binders",
            href: "https://www.shopblossomrocket.com/office-organizational-tools-binders.htm",
          },
          {
            label: "Folders",
            href: "https://www.shopblossomrocket.com/office-organizational-tools-folders.htm",
          },
          {
            label: "Labels",
            href: "https://www.shopblossomrocket.com/office-organizational-tools-labels.htm",
          },
          {
            label: "Memo Boards",
            href: "https://www.shopblossomrocket.com/office-organizational-tools-memo-boards.htm",
          },
          {
            label: "Magnets",
            href: "https://www.shopblossomrocket.com/office-organizational-tools-magnets.htm",
          },
          {
            label: "Calendars",
            href: "https://www.shopblossomrocket.com/office-organizational-tools-calendars.htm",
          },
          {
            label: "Clipboards",
            href: "https://www.shopblossomrocket.com/office-organizational-tools-clipboards.htm",
          },
        ],
      },
      {
        title: "Tradeshows & Events",
        items: [
          {
            label: "Badge Holders",
            href: "https://www.shopblossomrocket.com/office-tradeshows-events-badge-holders.htm",
          },
          {
            label: "Lanyards",
            href: "https://www.shopblossomrocket.com/office-tradeshows-events-lanyards.htm",
          },
          {
            label: "Name Badges",
            href: "https://www.shopblossomrocket.com/office-tradeshows-events-name-badges.htm",
          },
          {
            label: "Reels",
            href: "https://www.shopblossomrocket.com/office-tradeshows-events-reels.htm",
          },
          {
            label: "Displays",
            href: "https://www.shopblossomrocket.com/office-tradeshows-events-displays.htm",
          },
          {
            label: "Table Coverings",
            href: "https://www.shopblossomrocket.com/office-tradeshows-events-table-coverings.htm",
          },
          {
            label: "Awards",
            href: "https://www.shopblossomrocket.com/office-tradeshows-events-awards.htm",
          },
          {
            label: "Buttons",
            href: "https://www.shopblossomrocket.com/office-tradeshows-events-buttons.htm",
          },
        ],
      },
      {
        title: "Writing",
        items: [
          {
            label: "Pens",
            href: "https://www.shopblossomrocket.com/office-writing-pens.htm",
          },
          {
            label: "Pencils",
            href: "https://www.shopblossomrocket.com/office-writing-pencils.htm",
          },
          {
            label: "Erasers",
            href: "https://www.shopblossomrocket.com/office-writing-erasers.htm",
          },
          {
            label: "Highlighters",
            href: "https://www.shopblossomrocket.com/office-writing-highlighters.htm",
          },
          {
            label: "Markers",
            href: "https://www.shopblossomrocket.com/office-writing-markers.htm",
          },
        ],
      },
      {
        title: "Stress Balls",
        items: [
          {
            label: "Shapes",
            href: "https://www.shopblossomrocket.com/office-stress-balls-shapes.htm",
          },
          {
            label: "Sports",
            href: "https://www.shopblossomrocket.com/office-stress-balls-sports.htm",
          },
          {
            label: "Seasonal",
            href: "https://www.shopblossomrocket.com/office-stress-balls-seasonal.htm",
          },
          {
            label: "Cars & Trucks",
            href: "https://www.shopblossomrocket.com/office-stress-balls-cars-trucks.htm",
          },
          {
            label: "People",
            href: "https://www.shopblossomrocket.com/office-stress-balls-people.htm",
          },
          {
            label: "Custom",
            href: "https://www.shopblossomrocket.com/office-stress-balls-custom.htm",
          },
        ],
      },
    ],
  },
  {
    label: "Tech",
    groups: [
      {
        title: "Equipment",
        items: [
          {
            label: "Flash Drives",
            href: "https://www.shopblossomrocket.com/technology-equipment-flash-drives.htm",
          },
          {
            label: "Cables",
            href: "https://www.shopblossomrocket.com/technology-equipment-cables.htm",
          },
          {
            label: "Cords",
            href: "https://www.shopblossomrocket.com/technology-equipment-cords.htm",
          },
          {
            label: "USB Hubs",
            href: "https://www.shopblossomrocket.com/technology-equipment-usb-hubs.htm",
          },
          {
            label: "Adapters",
            href: "https://www.shopblossomrocket.com/technology-equipment-adapters.htm",
          },
          {
            label: "Screen Cleaner",
            href: "https://www.shopblossomrocket.com/technology-screen-cleaner.htm",
          },
          {
            label: "Webcam Covers",
            href: "https://www.shopblossomrocket.com/technology-webcam-covers.htm",
          },
        ],
      },
      {
        title: "Chargers",
        items: [
          {
            label: "Power Banks",
            href: "https://www.shopblossomrocket.com/technology-chargers-power-banks.htm",
          },
          {
            label: "Car Chargers",
            href: "https://www.shopblossomrocket.com/technology-car-chargers.htm",
          },
          {
            label: "Wall Chargers",
            href: "https://www.shopblossomrocket.com/technology-wall-chargers.htm",
          },
          {
            label: "Wireless Chargers",
            href: "https://www.shopblossomrocket.com/technology-wireless-chargers.htm",
          },
        ],
      },
      {
        title: "Desktop",
        items: [
          {
            label: "Mouse",
            href: "https://www.shopblossomrocket.com/technology-desktop-mouse.htm",
          },
          {
            label: "Speakers",
            href: "https://www.shopblossomrocket.com/technology-desktop-speakers.htm",
          },
          {
            label: "Phone Stands",
            href: "https://www.shopblossomrocket.com/technology-desktop-phone-stands.htm",
          },
          {
            label: "Mouse Pads",
            href: "https://www.shopblossomrocket.com/technology-desktop-mouse-pads.htm",
          },
          {
            label: "Wrist Rests",
            href: "https://www.shopblossomrocket.com/technology-desktop-wrist-rests.htm",
          },
        ],
      },
      {
        title: "Accessories",
        items: [
          {
            label: "Cell Phone Accessories",
            href: "https://www.shopblossomrocket.com/technology-cell-phone-accessories.htm",
          },
          {
            label: "Phone Cases",
            href: "https://www.shopblossomrocket.com/technology-accessories-phone-cases.htm",
          },
          {
            label: "Tablet Cases",
            href: "https://www.shopblossomrocket.com/technology-accessories-tablet-cases.htm",
          },
          {
            label: "Laptop Sleeves",
            href: "https://www.shopblossomrocket.com/technology-accessories-laptop-sleeves.htm",
          },
          {
            label: "Computer Bags",
            href: "https://www.shopblossomrocket.com/technology-accessories-computer-bags.htm",
          },
          {
            label: "Headphones",
            href: "https://www.shopblossomrocket.com/technology-accessories-headphones.htm",
          },
          {
            label: "Blue Light Blocking Glasses",
            href: "https://www.shopblossomrocket.com/technology-accessories-blue-light-blocking-glasses.htm",
          },
        ],
      },
    ],
  },
  {
    label: "Writing",
    groups: [
      {
        title: "Pens",
        items: [
          {
            label: "Ballpoint Pens",
            href: "https://www.shopblossomrocket.com/writing-pens-ballpoint-pens.htm",
          },
          {
            label: "Click Pens",
            href: "https://www.shopblossomrocket.com/writing-pens-click-pens.htm",
          },
          {
            label: "Stick Pens",
            href: "https://www.shopblossomrocket.com/writing-pens-stick-pens.htm",
          },
          {
            label: "Twist Pens",
            href: "https://www.shopblossomrocket.com/writing-pens-twist-pens.htm",
          },
          {
            label: "Roller Ball Pens",
            href: "https://www.shopblossomrocket.com/writing-pens-ball-roller-pens.htm",
          },
          {
            label: "Gel Pens",
            href: "https://www.shopblossomrocket.com/writing-pens-gel-pens.htm",
          },
          {
            label: "Hi-Tech Pens",
            href: "https://www.shopblossomrocket.com/writing-pens-tech-hi-pens.htm",
          },
        ],
      },
      {
        title: "Pencils",
        items: [
          {
            label: "#2 Pencils",
            href: "https://www.shopblossomrocket.com/writing-pencils-number-2-pencils.htm",
          },
          {
            label: "Mechanical Pencils",
            href: "https://www.shopblossomrocket.com/writing-pencils-mechanical-pencils.htm",
          },
          {
            label: "Colored Pencils",
            href: "https://www.shopblossomrocket.com/writing-pencils-colored-pencils.htm",
          },
        ],
      },
      {
        title: "More",
        items: [
          {
            label: "Journals",
            href: "https://www.shopblossomrocket.com/writing-more-journals.htm",
          },
          {
            label: "Note Pads",
            href: "https://www.shopblossomrocket.com/writing-more-note-pads.htm",
          },
          {
            label: "Highlighters",
            href: "https://www.shopblossomrocket.com/writing-more-highlighters.html",
          },
          {
            label: "Erasers",
            href: "https://www.shopblossomrocket.com/writing-more-erasers.htm",
          },
          {
            label: "Markers",
            href: "https://www.shopblossomrocket.com/writing-more-markers.htm",
          },
          {
            label: "Chalk",
            href: "https://www.shopblossomrocket.com/writing-more-chalk.htm",
          },
          {
            label: "Crayons",
            href: "https://www.shopblossomrocket.com/writing-more-crayons.htm",
          },
          {
            label: "Gift Sets",
            href: "https://www.shopblossomrocket.com/writing-more-gift-sets.htm",
          },
          {
            label: "Sharpeners",
            href: "https://www.shopblossomrocket.com/writing-more-sharpeners.htm",
          },
        ],
      },
    ],
  },
  {
    label: "More",
    groups: [
      {
        title: "Eco Friendly",
        items: [
          {
            label: "Biodegradable",
            href: "https://www.shopblossomrocket.com/eco-friendly-biodegradable.htm",
          },
          {
            label: "Efficient",
            href: "https://www.shopblossomrocket.com/eco-friendly-efficient.htm",
          },
          {
            label: "Organic",
            href: "https://www.shopblossomrocket.com/eco-friendly-organic.htm",
          },
          {
            label: "Recycled",
            href: "https://www.shopblossomrocket.com/eco-friendly-recycled.htm",
          },
          {
            label: "Sustainable",
            href: "https://www.shopblossomrocket.com/eco-friendly-sustainable.htm",
          },
        ],
      },
      {
        title: "Workwear",
        items: [
          {
            label: "Scrubs",
            href: "https://www.shopblossomrocket.com/workwear-scrubs.htm",
          },
          {
            label: "Safety Hats",
            href: "https://www.shopblossomrocket.com/workwear-safety-hats.htm",
          },
          {
            label: "Safety Jackets",
            href: "https://www.shopblossomrocket.com/workwear-safety-jackets.htm",
          },
          {
            label: "Safety Vests",
            href: "https://www.shopblossomrocket.com/workwear-safety-vests.htm",
          },
          {
            label: "Coveralls",
            href: "https://www.shopblossomrocket.com/workwear-coveralls.htm",
          },
          {
            label: "Work Gloves",
            href: "https://www.shopblossomrocket.com/workwear-work-gloves.htm",
          },
          {
            label: "Nonslip Shoes",
            href: "https://www.shopblossomrocket.com/workwear-nonslip-shoes.htm",
          },
        ],
      },
      {
        title: "Executive Gifts",
        items: [
          {
            label: "Appliances & Electronics",
            href: "https://www.shopblossomrocket.com/executive-gifts-appliances-electronics.htm",
          },
          {
            label: "Cameras",
            href: "https://www.shopblossomrocket.com/executive-gifts-cameras.htm",
          },
          {
            label: "Fitness",
            href: "https://www.shopblossomrocket.com/executive-gifts-fitness.htm",
          },
          {
            label: "Gift Sets",
            href: "https://www.shopblossomrocket.com/executive-gifts-gift-sets.htm",
          },
        ],
      },
      {
        title: "Need More",
        items: [
          {
            label: "Advanced Search",
            href: "https://www.shopblossomrocket.com/need-more-advanced-search.htm",
          },
          {
            label: "Contact Us",
            href: "https://www.shopblossomrocket.com/need-more-contact-us.htm",
          },
        ],
      },
    ],
  },
];
export const links: NavLink[] = [
  { href: "/services", label: "Design Services", dropdown: true },
  { href: "/solutions", label: "Swag & Store Solutions", dropdown: true },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  {
    href: "https://www.shopblossomrocket.com/",
    label: "Shop",
    external: true,
    dropdown: true,
    megaMenu: true,
  },
];
