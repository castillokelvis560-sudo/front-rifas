import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-8 mt-12">
      <p className="text-sm">© KJ Castillo</p>

      <div className="flex justify-center gap-4 my-3">
        <a
          href="https://www.facebook.com/share/16DAFGbY46/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white rounded-full p-3"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.instagram.com/kj_htx01/profilecard/?igsh=MWtucTJrOGdsb3I1dw=="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white rounded-full p-3"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.tiktok.com/@kj_htx?_t=ZT-8ypmJQhfp5a&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white rounded-full p-3"
        >
          <FaTiktok size={20} />
        </a>
      </div>

      <p className="text-sm">Gracias por Confiar en Nosotros.</p>
    </footer>
  );
};

export default Footer;
