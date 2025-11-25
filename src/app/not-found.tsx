// app/not-found.tsx
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative mt-0 min-h-screen bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-fixed bg-cover px-5 py-24">
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-8">Página no encontrada</h2>
        <p className="text-gray-400 mb-8">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link 
          href="/" 
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
        >
          Volver al inicio
        </Link>
        
      </div>
      <div className=' fixed bottom-0 left-0 w-full'>
      <Footer/>
      </div>
   </div>
  );
}