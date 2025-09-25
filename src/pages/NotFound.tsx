import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

return (
  <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 to-yellow-100">
    <div className="text-center p-8 bg-white rounded-2xl shadow-2xl max-w-md">
      <h1 className="mb-4 text-7xl font-extrabold text-green-600 animate-bounce">404</h1>

      {/* GIF engraçado sobre investimento */}
      <img
        src="https://media.giphy.com/media/l41YtZOb9EUABnuqA/giphy.gif"
        alt="Investimento gif"
        className="mx-auto rounded-xl shadow-md mb-6"
      />

      <p className="mb-6 text-lg text-gray-700">
        Essa rota não deu lucro 📉...  
        Mas investir no lugar certo pode mudar o jogo! 💰
      </p>

      <a
        href="/"
        className="inline-block px-6 py-3 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition"
      >
        🔙 Voltar para a Home
      </a>
    </div>
  </div>
);
};

export default NotFound;
