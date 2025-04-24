type FooterProps = {
  className?: string;
};

export const Footer = (props: FooterProps) => {
  const { className } = props;

  return <footer className={className}>{'Footer Content'}</footer>;
};

export default Footer;
