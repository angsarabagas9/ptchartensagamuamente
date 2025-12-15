'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Lock, Cookie, Database, UserCheck } from 'lucide-react';

export default function PrivacyPolicy() {
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
              <Shield className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-lg text-gray-600">
              PT CHARTENS AGAMUA MENTE berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda
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
                  <Eye className="w-5 h-5 mr-2 text-green-600" />
                  1. Pengantar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Selamat datang di PT CHARTENS AGAMUA MENTE. Kami menghargai kepercayaan Anda 
                  dalam menggunakan layanan kami dan berkomitmen untuk melindungi privasi data pribadi Anda. 
                  Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                  menyimpan, dan melindungi informasi pribadi Anda saat Anda berinteraksi dengan 
                  website dan layanan kami.
                </p>
                <p className="text-gray-700">
                  Dengan menggunakan website kami, Anda menyetujui praktik-praktik yang dijelaskan 
                  dalam kebijakan privasi ini.
                </p>
              </CardContent>
            </Card>

            {/* Data yang Dikumpulkan */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2 text-green-600" />
                  2. Data Pribadi yang Kami Kumpulkan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">2.1 Informasi yang Anda Berikan Secara Langsung</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Alamat pengiriman</li>
                    <li>Informasi pembayaran</li>
                    <li>Pesan dan pertanyaan yang Anda kirimkan</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2.2 Informasi yang Dikumpulkan Secara Otomatis</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Alamat IP dan informasi perangkat</li>
                    <li>Jenis browser dan sistem operasi</li>
                    <li>Data penggunaan website (halaman yang dikunjungi, waktu kunjungan)</li>
                    <li>Informasi lokasi umum</li>
                    <li>Cookies dan data pelacakan lainnya</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Penggunaan Data */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="w-5 h-5 mr-2 text-green-600" />
                  3. Cara Kami Menggunakan Data Pribadi Anda
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Kami menggunakan data pribadi Anda untuk tujuan-tujuan berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Penyediaan Layanan:</strong> Memproses pesanan, pengiriman, dan layanan pelanggan</li>
                  <li><strong>Komunikasi:</strong> Mengirim konfirmasi pesanan, update pengiriman, dan informasi produk</li>
                  <li><strong>Personalisasi:</strong> Menyediakan pengalaman yang disesuaikan dengan preferensi Anda</li>
                  <li><strong>Peningkatan Layanan:</strong> Menganalisis data untuk meningkatkan kualitas produk dan layanan</li>
                  <li><strong>Keamanan:</strong> Melindungi website dan mencegah aktivitas penipuan</li>
                  <li><strong>Kepatuhan Hukum:</strong> Memenuhi kewajiban hukum dan regulasi yang berlaku</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cookie className="w-5 h-5 mr-2 text-green-600" />
                  4. Kebijakan Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Jenis Cookies yang Kami Gunakan:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><strong>Cookies Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                    <li><strong>Cookies Performa:</strong> Mengumpulkan data tentang penggunaan website</li>
                    <li><strong>Cookies Fungsional:</strong> Mengingat preferensi pengguna</li>
                    <li><strong>Cookies Pemasaran:</strong> Menampilkan iklan yang relevan</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  Anda dapat mengatur preferensi cookies melalui pengaturan browser Anda.
                </p>
              </CardContent>
            </Card>

            {/* Berbagi Data */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="w-5 h-5 mr-2 text-green-600" />
                  5. Pembagian Data Pribadi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga 
                  kecuali dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Penyedia Layanan:</strong> Jasa pengiriman, pembayaran, dan hosting yang membantu operasional kami</li>
                  <li><strong>Kepatuhan Hukum:</strong> Jika diwajibkan oleh hukum atau perintah resmi</li>
                  <li><strong>Keamanan:</strong> Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
                  <li><strong>Transfer Bisnis:</strong> Dalam kasus merger, akuisisi, atau penjualan aset perusahaan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Keamanan Data */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-600" />
                  6. Keamanan Data Pribadi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  PT CHARTENS AGAMUA MENTE menerapkan langkah-langkah keamanan yang komprehensif 
                  untuk melindungi data pribadi Anda:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Enkripsi data selama transmisi dan penyimpanan</li>
                  <li>Akses terbatas ke data pribadi hanya untuk staf yang berwenang</li>
                  <li>System monitoring dan deteksi ancaman berkelanjutan</li>
                  <li>Backup data teratur dan aman</li>
                  <li>Update keamanan sistem secara berkala</li>
                </ul>
              </CardContent>
            </Card>

            {/* Hak Pengguna */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="w-5 h-5 mr-2 text-green-600" />
                  7. Hak Anda atas Data Pribadi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Sebagai pemilik data, Anda memiliki hak-hak berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Hak Akses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                  <li><strong>Hak Koreksi:</strong> Memperbaiki data yang tidak akurat</li>
                  <li><strong>Hak Penghapusan:</strong> Meminta penghapusan data pribadi</li>
                  <li><strong>Hak Pembatasan:</strong> Membatasi pemrosesan data Anda</li>
                  <li><strong>Hak Portabilitas:</strong> Memindahkan data ke layanan lain</li>
                  <li><strong>Hak Penolakan:</strong> Menolak pemrosesan data untuk tujuan tertentu</li>
                </ul>
                <p className="text-gray-700">
                  Untuk menjalankan hak-hak ini, silakan hubungi kami melalui informasi kontak di bawah.
                </p>
              </CardContent>
            </Card>

            {/* Kontak */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="w-5 h-5 mr-2 text-green-600" />
                  8. Hubungi Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Jika Anda memiliki pertanyaan, keluhan, atau permintaan terkait kebijakan privasi kami, 
                  silakan hubungi:
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
                    <strong>Email:</strong> privacy@chartensagamuamente.co.id
                  </p>
                </div>
                <p className="text-gray-700">
                  Kami akan merespons permintaan Anda dalam waktu 14 hari kerja.
                </p>
              </CardContent>
            </Card>

            {/* Perubahan Kebijakan */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-green-600" />
                  9. Perubahan Kebijakan Privasi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk mencerminkan 
                  perubahan dalam praktik kami atau persyaratan hukum. Perubahan akan diberitahukan 
                  melalui website atau email Anda.
                </p>
                <p className="text-gray-700">
                  Versi terbaru kebijakan privasi ini selalu tersedia di website kami.
                </p>
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