import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary-800 text-white mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img src="/poud-logo.png" alt="POUD" className="h-10 mb-4" />
            <p className="text-gray-300 mb-4">
              POUD INFRASTRUCTURES PRIVATE LIMITED
            </p>
            <p className="text-sm text-gray-400">
              C/O NARAYAN SINGH, DERA MUNAK, KARNAL<br />
              Karnal, Haryana, India, 132040
            </p>
            <div className="mt-4 text-sm text-gray-400">
              <p>CIN: U45209HR2019PTC081289</p>
              <p>PAN: AAKCP6451F</p>
              <p>TAN: RTKP10324G</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-primary">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-primary">How It Works</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-primary">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-300 hover:text-primary">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} POUD INFRASTRUCTURES PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
