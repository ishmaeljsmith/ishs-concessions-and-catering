export const SITE = {
  name: "Ish's",
  shortName: "Ish's Concessions",
  legalName: "Ish's Concessions and Catering LLC",
  llcNumber: "L26000201812",
  tagline: "Fresh · Local · Healthy Meals",
  description:
    "Affordable, delicious, healthy meals for Dixie County and surrounding North Florida communities. Local produce, non-GMO when we can, Florida Goldbacks welcome.",
  locationNow: "Taylor County, Florida",
  locationFuture: "Old Town, Dixie County",
  serviceArea: [
    "Dixie County",
    "Taylor County",
    "Lafayette County",
    "Gilchrist County",
    "Levy County",
  ],
  goldbacks: true,
  loanPaidCount: 15,
  loanPaidTotal: 48,
  loanPaidDate: "September 2026",
  gofundme: "https://gofund.me/9710471c5",
  facebook: "https://www.facebook.com/profile.php?id=61594149606490",
  email: "contact@ishs-concessions-and-catering.com",
  emailLabel: "Contact@Ishs-concessions-and-catering.com",
  phone: "+13527688768",
  phoneLabel: "(352) 768-8768",
  gofundmeTitle: "Help Launch Ish’s Concessions and Catering",
  gofundmeRaised: 0,
  gofundmeGoal: 8000,
  gofundmeFullGoal: 135000,
  gofundmeDonors: 0,
  gofundmeAsOf: "September 13, 2026",
} as const;

/** 15 of 48 payments = 31.25%, shown as a whole percent on the site. */
export function loanPaidPct() {
  return Math.round((SITE.loanPaidCount / SITE.loanPaidTotal) * 100);
}

export function loanPaidExact() {
  return (SITE.loanPaidCount / SITE.loanPaidTotal) * 100;
}

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/updates", label: "Updates" },
] as const;

export const SERVICES = [
  {
    slug: "delivery",
    title: "Breakfast & lunch delivery",
    image: "/images/delivery.jpg",
    phase: "Phase one",
    summary:
      "Reliable meals and coffee for offices, shops, and families in Dixie County and nearby towns.",
    body: "Fresh breakfast items, lunch boxes, donuts, and coffee brought to local workplaces. Built for small towns that do not have a dozen healthy options on every corner.",
  },
  {
    slug: "cloud-kitchen",
    title: "Cloud kitchen & bakery",
    image: "/images/donuts.jpg",
    phase: "Phase one",
    summary:
      "A health-department-approved kitchen for donuts, baked goods, breakfast, and lunch — made with Florida produce.",
    body: "The commissary kitchen on our Old Town property is the engine of everything else: trailers, catering, and delivery all start here.",
  },
  {
    slug: "catering",
    title: "Event catering & private dining",
    image: "/images/catering.jpg",
    phase: "Phase one",
    summary:
      "Full-service catering for weddings, reunions, and celebrations, plus private groups of up to 30.",
    body: "We cook with local ingredients and keep the menu honest. A planned tiki-hut dining room will host seated gatherings of up to thirty guests with a fully stocked bar for catered events.",
  },
  {
    slug: "concessions",
    title: "Concession trailers & food trucks",
    image: "/images/food-truck.jpg",
    phase: "Growing into",
    summary:
      "Mobile food for fairs, ball games, church gatherings, and community nights across the Big Bend.",
    body: "Once the commissary kitchen is approved, our trailers and trucks can legally serve the events that keep this region together.",
  },
] as const;

export const VALUES = [
  {
    title: "Local first",
    body: "We buy from Florida small farms and shops in the communities we serve whenever we can.",
  },
  {
    title: "Non-GMO when possible",
    body: "Priority on non-GMO and non-bioengineered ingredients, without pretending the supply chain is perfect.",
  },
  {
    title: "Jobs close to home",
    body: "The point is not just plates. It is work, training, and a kitchen that belongs to Dixie County.",
  },
  {
    title: "Sound local money",
    body: "We proudly accept Florida Goldbacks to keep value circulating in the towns we cook for.",
  },
] as const;

export const PROGRESS = [
  {
    date: "2026",
    title: "Articles of organization filed",
    detail: "Florida LLC L26000201812 is active with the Secretary of State.",
    done: true,
  },
  {
    date: "2026",
    title: "EIN and business banking",
    detail: "Federal EIN received. Business accounts opened.",
    done: true,
  },
  {
    date: "June 15, 2026",
    title: "Property loan 25% paid",
    detail:
      "A quarter of the loan on the Old Town property was paid. The land under the kitchen started to be ours.",
    done: true,
  },
  {
    date: "September 2026",
    title: "15 of 48 payments made",
    detail:
      "15 of 48 payments are in — 31% of the Old Town property loan (exactly 31.25%).",
    done: true,
    highlight: true,
  },
  {
    date: "In progress",
    title: "Kitchen plans for Dixie County Health Department",
    detail:
      "Drawings are underway for a health-department-approved commissary kitchen on the Old Town land.",
    done: false,
  },
  {
    date: "Next",
    title: "Phase one operations",
    detail:
      "Commissary kitchen, small-event catering, and breakfast / lunch / donut / coffee delivery to local offices.",
    done: false,
  },
  {
    date: "Ahead",
    title: "Trucks, trailers, and the tiki hut",
    detail:
      "Mobile concessions for community events, plus a private tiki-hut dining room for groups of up to 30.",
    done: false,
  },
] as const;

export const CONTACT_TOPICS = [
  "Breakfast & lunch delivery",
  "Event catering",
  "Private dining",
  "Concession trailer / food truck",
  "Cloud kitchen / bakery order",
  "Partnership or nonprofit",
  "Support the kitchen build",
  "Something else",
] as const;

