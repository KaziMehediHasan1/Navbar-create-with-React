import Link from '../Link/Link'
const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/'},
        { id: 2, name: 'About', path: '/about'},
        { id: 3, name: 'Services', path: '/services'},
        { id: 4, name: 'Products', path: '/products'},
        { id: 5, name: 'Contact', path: '/contact'}
      ];

  return (
    <nab>
      <ul className="md:flex justify-center mt-4">
      {
        routes.map(route => <Link key={route.id} route={route}></Link>)
      }
      </ul>
    </nab>
  );
};

Link.propTypes = {
    Link: PropTypes.object
}

export default Navbar;
