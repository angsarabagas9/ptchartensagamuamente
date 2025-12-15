'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Leaf, 
  Sprout, 
  TreePine, 
  Flower,
  ShoppingBag,
  ArrowRight,
  CheckCircle,
  Truck,
  Shield,
  Heart
} from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua Produk', icon: Leaf },
    { id: 'tanaman', name: 'Tanaman', icon: TreePine },
    { id: 'bibit', name: 'Bibit', icon: Sprout },
    { id: 'bunga', name: 'Bunga', icon: Flower },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Tanaman Hias Monstera',
      category: 'tanaman',
      price: 'Rp 150.000',
      image: '/api/placeholder/300/200',
      description: 'Tanaman hias populer dengan daun unik'
    },
    {
      id: 2,
      name: 'Bibit Sayuran Organik',
      category: 'bibit',
      price: 'Rp 25.000',
      image: '/api/placeholder/300/200',
      description: 'Bibit sayuran bebas pestisida'
    },
    {
      id: 3,
      name: 'Bunga Mawar Merah',
      category: 'bunga',
      price: 'Rp 75.000',
      image: '/api/placeholder/300/200',
      description: 'Bunga mawar segar dan berkualitas'
    },
    {
      id: 4,
      name: 'Tanaman Succulent',
      category: 'tanaman',
      price: 'Rp 45.000',
      image: '/api/placeholder/300/200',
      description: 'Succulent mudah perawatan'
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? featuredProducts 
    : featuredProducts.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="PT Chartens Agamua Mente"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-800">
                  PT CHARTENS AGAMUA MENTE
                </h1>
                <p className="text-xs text-gray-600">Perdagangan Tanaman & Bibit Terpercaya</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#beranda" className="text-gray-700 hover:text-green-600 transition">Beranda</Link>
              <Link href="#produk" className="text-gray-700 hover:text-green-600 transition">Produk</Link>
              <Link href="#tentang" className="text-gray-700 hover:text-green-600 transition">Tentang</Link>
              <Link href="/privacy" className="text-gray-700 hover:text-green-600 transition">Privacy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-green-600 transition">Terms</Link>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Hubungi Kami
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
                🌱 Tanaman & Bibit Berkualitas
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Solusi Lengkap Kebutuhan 
                <span className="text-green-600"> Tanaman & Bibit</span> Anda
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                PT CHARTENS AGAMUA MENTE menyediakan berbagai jenis tanaman hias, 
                bibit sayuran, dan tanaman buah berkualitas tinggi untuk memenuhi 
                kebutuhan pertanian dan perkebunan Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Lihat Katalog Produk
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="w-5 h-5 mr-2" />
                  0823-8246-6248
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-green-100 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4">
                    <TreePine className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Jenis Tanaman</div>
                  </div>
                  <div className="text-center p-4">
                    <Sprout className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">200+</div>
                    <div className="text-sm text-gray-600">Varietas Bibit</div>
                  </div>
                  <div className="text-center p-4">
                    <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Bergaransi</div>
                  </div>
                  <div className="text-center p-4">
                    <Truck className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Pengiriman</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produk Unggulan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan berbagai pilihan tanaman dan bibit berkualitas tinggi 
              yang telah terseleksi dengan teliti
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={activeCategory === category.id ? "bg-green-600 hover:bg-green-700" : ""}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              );
            })}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-green-600">{product.price}</span>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <ShoppingBag className="w-4 h-4 mr-1" />
                      Beli
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kualitas Terjamin</h3>
              <p className="text-gray-600">
                Semua produk kami melalui proses quality control ketat 
                untuk memastikan kualitas terbaik
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pengiriman Aman</h3>
              <p className="text-gray-600">
                Pengemasan profesional dan pengiriman cepat ke seluruh Indonesia
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Layanan Pelanggan</h3>
              <p className="text-gray-600">
                Tim ahli siap membantu Anda dalam memilih dan merawat tanaman
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tentang <span className="text-green-600">PT CHARTENS AGAMUA MENTE</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                PT CHARTENS AGAMUA MENTE adalah perusahaan perdagangan eceran 
                yang berfokus pada penyediaan tanaman dan bibit tanaman berkualitas tinggi. 
                Dengan pengalaman bertahun-tahun di bidang pertanian, kami berkomitmen 
                untuk menjadi mitra terpercaya dalam memenuhi kebutuhan tanaman Anda.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-gray-600">
                      Jalan Lewi Mandacan Amban Pantai, Desa/Kelurahan Amban, 
                      Kec. Manokwari Barat, Kab. Manokwari, Provinsi Papua Barat 98312
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-gray-600">0823-8246-6248</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Mengapa Memilih Kami?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Pengalaman lebih dari 10 tahun</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Produk bersertifikat dan berkualitas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Harga kompetitif dan transparan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Layanan konsultasi gratis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Garansi kepuasan pelanggan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo.png"
                    alt="PT Chartens Agamua Mente"
                    fill
                    className="object-contain rounded"
                  />
                </div>
                <h3 className="text-lg font-bold">PT CHARTENS AGAMUA MENTE</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Perdagangan eceran tanaman dan bibit tanaman berkualitas tinggi
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white transition">Tanaman Hias</Link></li>
                <li><Link href="#" className="hover:text-white transition">Bibit Sayuran</Link></li>
                <li><Link href="#" className="hover:text-white transition">Tanaman Buah</Link></li>
                <li><Link href="#" className="hover:text-white transition">Pupuk & Media Tanam</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#tentang" className="hover:text-white transition">Tentang Kami</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition">Kebijakan Privasi</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Syarat & Ketentuan</Link></li>
                <li><Link href="#" className="hover:text-white transition">Karir</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Manokwari, Papua Barat
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  0823-8246-6248
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@chartensagamuamente.co.id
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 PT CHARTENS AGAMUA MENTE. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}