export interface MenuItem {
  display: string;
  href: string;
  children?: MenuItem[];
}

export const MENU_ITEMS: MenuItem[] = [
  { display: "Home", href: "/" },
  { display: "About Us", href: "/about" },
  { display: "Projects", href: "/projects" },
  { display: "Contact", href: "/contact" },
];

// TODO: replace with the client's real phone number/hours
export const CONTACT_PHONE = "+032 468 7890";
export const OPEN_HOURS = "Mon - Fri, 7am - 6pm";
