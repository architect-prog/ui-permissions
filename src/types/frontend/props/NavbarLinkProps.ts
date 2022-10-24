export type NavbarLinkProps = {
  to: string;
  active: boolean;
  children: React.ReactNode;
  handleClick: () => void;
};
