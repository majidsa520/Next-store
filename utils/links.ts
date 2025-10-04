type NavLink = {
  href: string;
  label: string;
  protected: boolean;
};

export const links: NavLink[] = [
  { href: "/", label: "home", protected: false },
  { href: "/about", label: "about", protected: false },
  { href: "/products", label: "products", protected: false },
  { href: "/cart", label: "cart", protected: true },
  { href: "/favorites", label: "favorites", protected: true },
  { href: "/orders", label: "orders", protected: true },
];
export const adminLinks: NavLink[] = [
  { href: "/admin/sales", label: "Sales", protected: true },
  { href: "/admin/products", label: "Products", protected: true },
  { href: "/admin/products/create", label: "Create Product", protected: true },
];
