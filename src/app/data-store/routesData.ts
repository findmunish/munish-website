
export const ROUTE_LINKS = {
  HOME: '',
  WINDOWS: '/windows',
  DOORS: '/doors',
  REQ_QUOTE: '/request-quote',
  REQ_COST_CALC: '/request-cost-calculation',
  ABOUT: '/about-us',
  CONTACT: '/contact-us'
};

export function GET_ROUTING_LINK(strRouteText) {
  switch(strRouteText.toUpperCase()) {
    case 'HOME':
      return ROUTE_LINKS.HOME;
    case 'WINDOWS':
      return ROUTE_LINKS.WINDOWS;
    case 'DOORS':
      return ROUTE_LINKS.DOORS;
    case 'REQ-QUOTE':
      return ROUTE_LINKS.REQ_QUOTE;
    case 'REQ_COST_CALC':
      return ROUTE_LINKS.REQ_COST_CALC;
    case 'ABOUT':
      return ROUTE_LINKS.ABOUT;
    case 'CONTACT':
      return ROUTE_LINKS.CONTACT;
    default:
      return ROUTE_LINKS.HOME;
  }
}