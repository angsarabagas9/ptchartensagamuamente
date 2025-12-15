import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const products = [
      {
        id: 1,
        name: 'Tanaman Hias Monstera Deliciosa',
        category: 'tanaman',
        price: 150000,
        description: 'Tanaman hias populer dengan daun unik berbentuk hati yang berlobang',
        stock: 25,
        image: '/api/placeholder/300/200',
        care_level: 'Mudah',
        light_requirement: 'Sedang',
        water_frequency: '2-3 kali seminggu'
      },
      {
        id: 2,
        name: 'Bibit Sayuran Organik Mix',
        category: 'bibit',
        price: 25000,
        description: 'Paket bibit sayuran organik (tomat, cabai, terong, mentimun)',
        stock: 100,
        image: '/api/placeholder/300/200',
        care_level: 'Mudah',
        light_requirement: 'Penuh',
        water_frequency: 'Setiap hari'
      },
      {
        id: 3,
        name: 'Bunga Mawar Merah Import',
        category: 'bunga',
        price: 75000,
        description: 'Bunga mawar merah segar berkualitas import',
        stock: 50,
        image: '/api/placeholder/300/200',
        care_level: 'Sedang',
        light_requirement: 'Penuh',
        water_frequency: '2 kali seminggu'
      },
      {
        id: 4,
        name: 'Tanaman Succulent Assorted',
        category: 'tanaman',
        price: 45000,
        description: 'Koleksi succulent berbagai jenis, mudah perawatan',
        stock: 75,
        image: '/api/placeholder/300/200',
        care_level: 'Mudah',
        light_requirement: 'Cukup',
        water_frequency: '1-2 kali seminggu'
      },
      {
        id: 5,
        name: 'Bibit Buah Jeruk Nipis',
        category: 'bibit',
        price: 35000,
        description: 'Bibit jeruk nipis unggul, cepat berbuah',
        stock: 60,
        image: '/api/placeholder/300/200',
        care_level: 'Mudah',
        light_requirement: 'Penuh',
        water_frequency: '2-3 kali seminggu'
      },
      {
        id: 6,
        name: 'Anggrek Phalaenopsis Putih',
        category: 'bunga',
        price: 125000,
        description: 'Anggrek hias cantik dengan bunga putih tahan lama',
        stock: 30,
        image: '/api/placeholder/300/200',
        care_level: 'Sedang',
        light_requirement: 'Sedang',
        water_frequency: '2 kali seminggu'
      },
      {
        id: 7,
        name: 'Tanaman Pohon Gading',
        category: 'tanaman',
        price: 85000,
        description: 'Tanaman hias indoor yang elegan, membersihkan udara',
        stock: 40,
        image: '/api/placeholder/300/200',
        care_level: 'Mudah',
        light_requirement: 'Rendah',
        water_frequency: '1 kali seminggu'
      },
      {
        id: 8,
        name: 'Bibit Cabai Merah Besar',
        category: 'bibit',
        price: 15000,
        description: 'Bibit cabai merah produktif, hasil melimpah',
        stock: 200,
        image: '/api/placeholder/300/200',
        care_level: 'Mudah',
        light_requirement: 'Penuh',
        water_frequency: 'Setiap hari'
      }
    ];

    return NextResponse.json({
      success: true,
      data: products,
      total: products.length
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Simulasi proses pemesanan
    const order = {
      id: Date.now(),
      customer_name: body.customer_name,
      customer_email: body.customer_email,
      customer_phone: body.customer_phone,
      address: body.address,
      items: body.items,
      total_amount: body.total_amount,
      status: 'pending',
      created_at: new Date().toISOString()
    };

    // Simulasi notifikasi WhatsApp
    console.log(`Order notification sent to ${body.customer_phone}:`);
    console.log(`Halo ${body.customer_name}, pesanan Anda dengan ID #${order.id} telah diterima. Total: Rp ${body.total_amount}`);

    return NextResponse.json({
      success: true,
      data: order,
      message: 'Pesanan berhasil dibuat'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
}