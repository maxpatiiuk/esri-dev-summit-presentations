import './Header.css';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header slot="header">
      <h1>{title}</h1>
    </header>
  );
};
