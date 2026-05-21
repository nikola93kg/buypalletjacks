import {
  getCityFromCityState,
  getStateName,
  locations,
  type Location,
} from "@/lib/locations";

type LocationPageContent = {
  marketFocus: string;
  serviceArea: string;
  pickupTip: string;
};

export type LocationPage = Location & {
  slug: string;
  city: string;
  stateCode: string;
  stateName: string;
  marketFocus: string;
  serviceArea: string;
  pickupTip: string;
};

const LOCATION_PAGE_CONTENT: Record<string, LocationPageContent> = {
  "atlanta-ga": {
    marketFocus:
      "Atlanta demand is driven by freight, food service, and warehouse traffic moving through Forest Park, College Park, and the southside logistics belt.",
    serviceArea:
      "This pickup point is a practical fit for buyers in Atlanta, Forest Park, Morrow, Jonesboro, and crews working around I-75, I-285, and the airport corridor.",
    pickupTip:
      "Text before you head over if you want photos or need us to confirm the best rebuilt Crown or Altra option for a same-day pickup window.",
  },
  "austin-tx": {
    marketFocus:
      "Austin buyers usually need dependable pallet jacks for light industrial work, contractor warehouses, and inventory handling north of the city.",
    serviceArea:
      "The Austin page serves teams in Wells Branch, Round Rock, Pflugerville, and nearby business parks that rely on quick access to dependable dock equipment.",
    pickupTip:
      "Because traffic can stretch across North Austin, call ahead so we can confirm availability and send the exact route before you leave.",
  },
  "berlin-ct": {
    marketFocus:
      "Connecticut demand around Berlin often comes from distributors, municipal facilities, and warehouse operators covering the Hartford–New Haven corridor.",
    serviceArea:
      "This location works well for buyers in Berlin, New Britain, Meriden, Hartford, and nearby central Connecticut operations that need a local pickup option.",
    pickupTip:
      "If you are coordinating around service calls or delivery appointments, text us first and we will help you line up the smoothest pickup timing.",
  },
  "canton-ma": {
    marketFocus:
      "Canton demand typically comes from warehouse teams supporting Greater Boston, south shore operations, and commercial buyers replacing worn floor equipment.",
    serviceArea:
      "Buyers in Canton, Norwood, Dedham, Brockton, and the I-95 belt use this page when they need a rebuilt pallet jack without waiting on a new order cycle.",
    pickupTip:
      "Reach out before pickup if you want to compare units or confirm the fastest route around Greater Boston traffic.",
  },
  "charlotte-nc": {
    marketFocus:
      "Charlotte buyers often need ready-to-work pallet jacks for regional distribution, light manufacturing, and warehouse activity around the north side of the market.",
    serviceArea:
      "This page is built for Charlotte, Huntersville, Concord, Kannapolis, and surrounding logistics users who want a nearby pickup instead of ordering blind.",
    pickupTip:
      "A quick text is the best way to confirm current stock and make sure you are driving to the right side of the Charlotte market.",
  },
  "chicago-il": {
    marketFocus:
      "Chicago demand is shaped by freight, warehousing, and dock work running through Elk Grove Village, O'Hare cargo routes, and the northwest suburban industrial belt.",
    serviceArea:
      "This location supports buyers across Chicago, Elk Grove Village, Des Plaines, Schaumburg, and nearby operations that need a dependable 5,500 lb pallet jack fast.",
    pickupTip:
      "If your crew is working around a tight dock schedule, text first so we can confirm inventory, send photos, and point you straight to the pickup address.",
  },
  "cleveland-oh": {
    marketFocus:
      "Cleveland buyers usually come from manufacturing, wholesale, and warehouse operations that need solid daily-use equipment without new-equipment pricing.",
    serviceArea:
      "The Cleveland page serves Parma, Brooklyn, Brook Park, and greater northeast Ohio teams looking for a pickup option close to their loading routes.",
    pickupTip:
      "Before you drive in, call or text if you want directions, local availability, or help choosing between rebuilt units for heavier daily use.",
  },
  "columbus-oh": {
    marketFocus:
      "Columbus demand is tied to fast-growing warehouse, e-commerce, and regional distribution activity on the west side and around the city's freight corridors.",
    serviceArea:
      "This local page is meant for Columbus, Georgesville, Grove City, Hilliard, and central Ohio buyers who need a pallet jack quickly for receiving and staging work.",
    pickupTip:
      "Texting ahead helps us confirm stock and save you a second stop if you are balancing pickup with a busy warehouse schedule.",
  },
  "grand-prairie-tx": {
    marketFocus:
      "Grand Prairie buyers often need equipment for cross-dock work, regional freight, and warehouse operations running between Dallas and Fort Worth.",
    serviceArea:
      "This page serves Grand Prairie, Arlington, Irving, west Dallas, and DFW operations that want a nearby pickup point close to major highway access.",
    pickupTip:
      "If you are covering both sides of the metroplex, reach out first so we can help you pick the most convenient DFW-area location.",
  },
  "detroit-mi": {
    marketFocus:
      "Detroit-area demand usually comes from automotive suppliers, warehouse teams, and industrial buyers who need reliable floor equipment without downtime.",
    serviceArea:
      "This page is geared toward Detroit, Dearborn, Livonia, Romulus, and southeast Michigan operations that need a straightforward pickup process.",
    pickupTip:
      "Call or text before pickup if your team wants current availability, photos, or help matching the right unit to daily warehouse use.",
  },
  "hillside-nj": {
    marketFocus:
      "Hillside demand comes from dense warehouse and trucking activity serving Newark, Elizabeth, and northern New Jersey commercial corridors.",
    serviceArea:
      "This pickup option makes sense for buyers in Hillside, Newark, Union, Elizabeth, and surrounding operations that need to keep freight moving without delay.",
    pickupTip:
      "Because North Jersey travel times can swing fast, text first for the cleanest route and to confirm the best pickup timing.",
  },
  "houston-tx": {
    marketFocus:
      "Houston buyers often need pallet jacks for petrochemical support yards, freight handling, wholesale warehouses, and heavy daily receiving work.",
    serviceArea:
      "This page serves Houston, Pasadena, Jacinto City, Channelview, and nearby industrial users who need a dependable local pickup option.",
    pickupTip:
      "If you are coordinating around port traffic or long cross-town drives, reach out first so we can verify stock and save you time.",
  },
  "indianapolis-in": {
    marketFocus:
      "Indianapolis demand is shaped by central distribution, transportation hubs, and warehouse teams replacing hard-used pallet jacks in active facilities.",
    serviceArea:
      "This pickup page is useful for Indianapolis, Greenwood, Beech Grove, Plainfield, and nearby Indiana operations that want quick turnaround on floor equipment.",
    pickupTip:
      "A quick call or text before pickup helps us confirm inventory and send the most direct route for your side of the Indy market.",
  },
  "irving-tx": {
    marketFocus:
      "Irving buyers typically come from airport-adjacent freight, hospitality suppliers, and warehouse operations that need sturdy equipment close to Dallas logistics routes.",
    serviceArea:
      "This page serves Irving, Las Colinas, Farmers Branch, Coppell, and west Dallas buyers who need local access to a rebuilt pallet jack.",
    pickupTip:
      "If your pickup depends on airport-area traffic or route timing, text us first and we will help you choose the smoothest plan.",
  },
  "kansas-city-mo": {
    marketFocus:
      "Kansas City demand often comes from regional distribution, food service warehouses, and industrial buyers covering both Missouri and Kansas accounts.",
    serviceArea:
      "This local page helps buyers in Kansas City, North Kansas City, Liberty, Independence, and nearby warehouse markets move quickly on pickup.",
    pickupTip:
      "Reach out before pickup if you want current availability, photos, or help coordinating a drive across the metro.",
  },
  "laurel-md": {
    marketFocus:
      "Laurel buyers usually support warehouse, contractor, and government-adjacent operations positioned between Baltimore and Washington.",
    serviceArea:
      "This page serves Laurel, Beltsville, College Park, Jessup, and nearby Maryland buyers who want a practical pickup option between the two major metros.",
    pickupTip:
      "Traffic around the corridor can change fast, so texting ahead is the easiest way to confirm the route and current stock.",
  },
  "louisville-ky": {
    marketFocus:
      "Louisville demand is tied to shipping, air cargo support, bourbon logistics, and warehouse work that depends on dependable dock equipment.",
    serviceArea:
      "This page is built for Louisville, Shively, Jeffersontown, Shepherdsville, and nearby Kentucky buyers who need a local pickup point with no guesswork.",
    pickupTip:
      "Call or text before pickup if you want to confirm inventory, ask about quantity, or avoid a wasted trip across town.",
  },
  "mesquite-tx": {
    marketFocus:
      "Mesquite buyers often come from east Dallas warehouses, contractor yards, and regional distributors that need working equipment fast.",
    serviceArea:
      "This page serves Mesquite, Garland, Sunnyvale, Balch Springs, and east-side DFW operations that want a nearby pallet jack pickup.",
    pickupTip:
      "If you are comparing multiple Dallas-area pickup points, text first and we will point you to the best fit for your route.",
  },
  "milwaukee-wi": {
    marketFocus:
      "Milwaukee demand usually comes from manufacturing, wholesale distribution, and warehouse teams that need dependable equipment for steady daily movement.",
    serviceArea:
      "This page works for Milwaukee, Oak Creek, West Allis, Wauwatosa, and surrounding southeast Wisconsin buyers looking for a fast pickup option.",
    pickupTip:
      "Reach out before you drive so we can confirm the right unit is ready and send the exact pickup details for your schedule.",
  },
  "minneapolis-mn": {
    marketFocus:
      "Minneapolis buyers often support warehouse, medical supply, and industrial distribution work across the north metro and Twin Cities region.",
    serviceArea:
      "This page serves Minneapolis, Brooklyn Park, Blaine, Fridley, and nearby Minnesota operations that want a local option for rebuilt pallet jacks.",
    pickupTip:
      "If weather or drive time matters for your pickup day, text ahead and we will help you plan the most efficient stop.",
  },
  "morrisville-nc": {
    marketFocus:
      "Morrisville demand is shaped by Triangle-area warehouse users, light industrial teams, and buyers supporting Raleigh–Durham business parks.",
    serviceArea:
      "This page helps buyers in Morrisville, Raleigh, Durham, Cary, and RTP-adjacent operations find a nearby pickup without hunting through listings.",
    pickupTip:
      "Before you head out, send a quick text so we can confirm stock and share the easiest route through the Triangle.",
  },
  "nashville-tn": {
    marketFocus:
      "Nashville buyers often need pallet jacks for music-tour logistics, warehouse distribution, contractor supply, and fast-moving commercial operations.",
    serviceArea:
      "This page serves Nashville, Antioch, La Vergne, Murfreesboro, and middle Tennessee warehouse teams looking for a dependable pickup option.",
    pickupTip:
      "Call or text first if you need to coordinate around traffic, compare units, or confirm quantity for an active job site or warehouse.",
  },
  "omaha-ne": {
    marketFocus:
      "Omaha demand often comes from agricultural distribution, wholesale supply, and warehouse buyers who need proven equipment on short notice.",
    serviceArea:
      "This page is built for Omaha, La Vista, Papillion, Bellevue, and nearby Nebraska operations that want local pickup instead of a long lead time.",
    pickupTip:
      "A quick message before pickup helps us confirm inventory and keep your stop efficient if you are driving in from outside the city.",
  },
  "pittsburgh-pa": {
    marketFocus:
      "Pittsburgh buyers usually support manufacturing, contractor supply, and warehouse operations spread across hills, bridges, and multi-stop delivery routes.",
    serviceArea:
      "This location serves Pittsburgh, Robinson, Carnegie, Moon Township, and surrounding western Pennsylvania buyers who need dependable floor equipment nearby.",
    pickupTip:
      "Because local routes can be slower than they look on a map, text first for directions and the cleanest pickup timing.",
  },
  "salt-lake-city-ut": {
    marketFocus:
      "Salt Lake City demand comes from freight, regional warehousing, and mountain-west distribution teams that need equipment ready to work right away.",
    serviceArea:
      "This page serves Salt Lake City, West Valley City, South Salt Lake, Magna, and nearby Utah operations looking for a local pickup point.",
    pickupTip:
      "If you are coordinating from outside the valley, reach out first so we can verify availability and share the clearest route.",
  },
  "sharonville-oh": {
    marketFocus:
      "Sharonville demand often comes from Cincinnati-area warehousing, food distribution, and commercial buyers supporting multi-stop regional deliveries.",
    serviceArea:
      "This page serves Sharonville, Cincinnati, Blue Ash, West Chester, and nearby southwest Ohio operations that need a nearby pickup market.",
    pickupTip:
      "Texting ahead is the best way to confirm stock and avoid extra driving if your crew is splitting time across the Cincinnati metro.",
  },
  "st-louis-mo": {
    marketFocus:
      "St. Louis buyers usually need pallet jacks for warehouse distribution, contractor supply, and freight movement on both sides of the river.",
    serviceArea:
      "This page helps buyers in St. Louis, Hazelwood, Maryland Heights, Bridgeton, and nearby Missouri and Illinois markets move quickly on pickup.",
    pickupTip:
      "Before pickup, send us a text if you want photos, directions, or help timing the stop around work on either side of the metro.",
  },
  "trenton-nj": {
    marketFocus:
      "Trenton demand comes from warehouse, contractor, and commercial buyers covering central New Jersey and parts of eastern Pennsylvania.",
    serviceArea:
      "This page is designed for Trenton, Hamilton, Ewing, Princeton-area, and nearby buyers who need a rebuilt pallet jack without waiting on new inventory.",
    pickupTip:
      "Reach out before pickup if you want the exact route, live availability, or help deciding whether this is the best nearby market for your trip.",
  },
};

export function slugifyLocation(cityState: string) {
  return cityState
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getLocationPageContent(slug: string): LocationPageContent {
  const content = LOCATION_PAGE_CONTENT[slug];

  if (!content) {
    throw new Error(`Missing local landing page copy for slug: ${slug}`);
  }

  return content;
}

function hasUnitNumber(unitNumber?: string) {
  return Boolean(unitNumber && unitNumber !== "-");
}

function buildFacilityReference(page: LocationPage) {
  if (!page.facility) {
    return "";
  }

  const unitLabel = hasUnitNumber(page.unitNumber)
    ? `, unit ${page.unitNumber}`
    : "";

  return `${page.facility}${unitLabel}`;
}

export function getLocationPages(): LocationPage[] {
  return locations.map((location) => {
    const stateCode = location.state.toUpperCase();
    const slug = slugifyLocation(location.cityState);
    const content = getLocationPageContent(slug);

    return {
      ...location,
      slug,
      city: getCityFromCityState(location.cityState),
      stateCode,
      stateName: getStateName(stateCode),
      ...content,
    };
  });
}

export function getLocationStaticParams() {
  return getLocationPages().map(({ slug }) => ({ slug }));
}

export function getLocationPageBySlug(slug: string) {
  return getLocationPages().find((page) => page.slug === slug);
}

export function buildLocationTitle(page: LocationPage) {
  return `Refurbished pallet jacks in ${page.city}, ${page.stateCode}`;
}

export function buildLocationDescription(page: LocationPage) {
  const facilityReference = buildFacilityReference(page);
  const facilityDetail = facilityReference
    ? ` Pickup available at ${facilityReference}.`
    : "";

  return `Buy refurbished pallet jacks in ${page.city}, ${page.stateCode}.${facilityDetail} ${page.marketFocus} Call or text Buy Pallet Jacks for current availability and a 2-month warranty.`;
}

export function getLocationHref(location: Location) {
  return `/locations/${slugifyLocation(location.cityState)}`;
}
