'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileText, Shield, AlertTriangle, Users, Gavel, CheckCircle, XCircle } from 'lucide-react';

export default function TermsAndConditions() {
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
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat & Ketentuan
            </h1>
            <p className="text-lg text-gray-600">
              Syarat dan ketentuan penggunaan layanan PT CHARTENS AGAMUA MENTE
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Pengantar */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-green-600" />
                  1. Pengantar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Selamat datang di PT CHARTENS AGAMUA MENTE. Syarat dan Ketentuan ini 
                  mengatur penggunaan website, produk, dan layanan yang kami sediakan. 
                  Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat 
                  oleh syarat dan ketentuan ini.
                </p>
                <p className="text-gray-700">
                  Website kami menyediakan layanan perdagangan eceran tanaman dan bibit tanaman 
                  berkualitas tinggi untuk pelanggan di seluruh Indonesia.
                </p>
              </CardContent>
            </Card>

            {/* Definisi */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-green-600" />
                  2. Definisi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>"Perusahaan":</strong> PT CHARTENS AGAMUA MENTE</li>
                    <li><strong>"Website":</strong> Platform online milik Perusahaan</li>
                    <li><strong>"Pelanggan":</strong> Pengguna yang membeli produk atau layanan kami</li>
                    <li><strong>"Produk":</strong> Tanaman, bibit, dan barang dagangan lainnya yang kami jual</li>
                    <li><strong>"Layanan":</strong> Semua layanan yang disediakan oleh Perusahaan</li>
                    <li><strong>"Transaksi":</strong> Proses pembelian dan pembayaran produk</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Pendaftaran Akun */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-600" />
                  3. Pendaftaran Akun
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">3.1 Persyaratan Pendaftaran</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Usia minimal 18 tahun atau memiliki persetujuan orang tua</li>
                    <li>Memberikan informasi yang akurat dan lengkap</li>
                    <li>Memiliki alamat email dan nomor telepon yang valid</li>
                    <li>Menyetujui syarat dan ketentuan ini</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3.2 Tanggung Jawab Akun</h4>
                  <p className="text-gray-700">
                    Anda bertanggung jawab atas keamanan akun dan semua aktivitas yang terjadi 
                    di akun Anda. Segera beri tahu kami jika Anda mencurigai penggunaan yang tidak sah.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Produk dan Layanan */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                  4. Produk dan Layanan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">4.1 Keterangan Produk</h4>
                  <p className="text-gray-700">
                    Kami berusaha menyajikan informasi produk yang akurat. Namun, karena sifat 
                    tanaman sebagai organisme hidup, ada kemungkinan variasi dalam warna, ukuran, 
                    dan bentuk dari yang ditampilkan di website.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4.2 Ketersediaan Produk</h4>
                  <p className="text-gray-700">
                    Ketersediaan produk dapat berubah sewaktu-waktu. Kami berhak membatasi 
                    jumlah pembelian dan menolak pesanan jika diperlukan.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4.3 Harga</h4>
                  <p className="text-gray-700">
                    Harga yang tercantum adalah harga yang berlaku saat pemesanan. Kami berhak 
                    mengubah harga tanpa pemberitahuan sebelumnya.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Proses Pemesanan */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-green-600" />
                  5. Proses Pemesanan dan Pembayaran
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">5.1 Pemesanan</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Pilih produk yang diinginkan dan tambahkan ke keranjang</li>
                    <li>Isi informasi pengiriman dengan lengkap</li>
                    <li>Konfirmasi pesanan dan lanjutkan ke pembayaran</li>
                    <li>Anda akan menerima konfirmasi pesanan melalui email</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">5.2 Pembayaran</h4>
                  <p className="text-gray-700">
                    Kami menerima berbagai metode pembayaran yang tersedia. Pembayaran harus 
                    diselesaikan dalam waktu yang ditentukan untuk mengkonfirmasi pesanan.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">5.3 Konfirmasi Pesanan</h4>
                  <p className="text-gray-700">
                    Pesanan dianggap dikonfirmasi setelah pembayaran berhasil diterima. 
                    Kami akan mengirimkan bukti pembayaran dan detail pengiriman.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Pengiriman */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                  6. Pengiriman dan Pengembalian
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">6.1 Pengiriman</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Pengiriman dilakukan ke seluruh Indonesia</li>
                    <li>Waktu pengiriman tergantung lokasi dan ketersediaan kurir</li>
                    <li>Biaya pengiriman ditanggung oleh pembeli</li>
                    <li>Kami akan memberikan nomor resi untuk tracking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">6.2 Kebijakan Pengembalian</h4>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Syarat Pengembalian:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Produk rusak saat diterima</li>
                      <li>Produk tidak sesuai dengan pesanan</li>
                      <li>Laporan dalam maksimal 24 jam setelah penerimaan</li>
                      <li>Disertai dengan foto/video bukti kerusakan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Garansi */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-600" />
                  7. Garansi Produk
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  PT CHARTENS AGAMUA MENTE memberikan garansi untuk produk yang kami jual:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Garansi Kualitas:</strong> Produk yang dikirim dalam kondisi sehat dan layak jual</li>
                  <li><strong>Garansi Kehidupan:</strong> Tanaman hidup saat diterima (untuk produk tanaman hidup)</li>
                  <li><strong>Garansi Kecambah:</strong> Bibit memiliki daya kecambah sesuai standar</li>
                  <li><strong>Masa Garansi:</strong> 7 hari sejak tanggal penerimaan</li>
                </ul>
                <p className="text-gray-700">
                  Klaim garansi harus disertai dengan bukti pembelian dan dokumentasi yang valid.
                </p>
              </CardContent>
            </Card>

            {/* Larangan */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <XCircle className="w-5 h-5 mr-2 text-green-600" />
                  8. Larangan Penggunaan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Dilarang keras untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Menggunakan website untuk kegiatan ilegal atau tidak sah</li>
                  <li>Memalsukan identitas atau informasi pribadi</li>
                  <li>Mengganggu atau merusak sistem website</li>
                  <li>Menyebarluaskan virus atau malware</li>
                  <li>Melakukan spam atau penipuan</li>
                  <li>Menyalin konten tanpa izin</li>
                  <li>Menggunakan data pelanggan untuk tujuan komersial</li>
                </ul>
              </CardContent>
            </Card>

            {/* Hak Kekayaan Intelektual */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gavel className="w-5 h-5 mr-2 text-green-600" />
                  9. Hak Kekayaan Intelektual
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Semua konten di website ini termasuk namun tidak terbatas pada teks, gambar, 
                  logo, desain, dan software dilindungi oleh hak kekayaan intelektual PT CHARTENS AGAMUA MENTE.
                </p>
                <p className="text-gray-700">
                  Dilarang keras menyalin, mendistribusikan, atau menggunakan konten kami tanpa 
                  izin tertulis dari Perusahaan.
                </p>
              </CardContent>
            </Card>

            {/* Pembatasan Tanggung Jawab */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-green-600" />
                  10. Pembatasan Tanggung Jawab
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  PT CHARTENS AGAMUA MENTE tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                  <li>Keterlambatan pengiriman yang disebabkan oleh pihak ketiga</li>
                  <li>Kerusakan akibat penanganan yang salah oleh pembeli</li>
                  <li>Kegagalan pertumbuhan akibat faktor lingkungan</li>
                  <li>Gangguan sistem atau website di luar kendali kami</li>
                </ul>
              </CardContent>
            </Card>

            {/* Penyelesaian Sengketa */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gavel className="w-5 h-5 mr-2 text-green-600" />
                  11. Penyelesaian Sengketa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Setiap sengketa yang timbul dari penggunaan layanan kami akan diselesaikan 
                  melalui musyawarah untuk mufakat terlebih dahulu.
                </p>
                <p className="text-gray-700">
                  Jika tidak tercapai kesepakatan, sengketa akan diselesaikan melalui 
                  pengadilan di wilayah hukum Manokwari, Papua Barat.
                </p>
              </CardContent>
            </Card>

            {/* Perubahan Syarat */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-green-600" />
                  12. Perubahan Syarat dan Ketentuan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan 
                  akan diberitahukan melalui website atau email Anda.
                </p>
                <p className="text-gray-700">
                  Penggunaan layanan setelah perubahan berarti Anda menyetujui syarat dan ketentuan yang diperbarui.
                </p>
              </CardContent>
            </Card>

            {/* Kontak */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-600" />
                  13. Hubungi Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Untuk pertanyaan atau klarifikasi mengenai syarat dan ketentuan ini, 
                  silakan hubungi kami:
                </p>
                <div className="bg-green-50 p-4 rounded-lg space-y-2">
                  <p className="font-semibold">PT CHARTENS AGAMUA MENTE</p>
                  <p className="text-gray-700">
                    <strong>Alamat:</strong><br />
                    Jalan Lewi Mandacan Amban Pantai, Desa/Kelurahan Amban, 
                    Kec. Manokwari Barat, Kab. Manokwari, Provinsi Papua Barat 98312
                  </p>
                  <p className="text-gray-700">
                    <strong>Telepon:</strong> 0823-8246-6248<br />
                    <strong>Email:</strong> legal@chartensagamuamente.co.id
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <Link href="/">
              <Button className="bg-green-600 hover:bg-green-700">
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}