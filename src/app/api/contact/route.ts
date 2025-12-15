import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, email, phone, subject, message } = body;

    // Validasi input
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Nama, email, dan pesan wajib diisi' },
        { status: 400 }
      );
    }

    // Simulasi pengiriman notifikasi ke WhatsApp
    const whatsappMessage = `
🌱 Pesan Baru dari Website PT CHARTENS AGAMUA MENTE 🌱

Nama: ${name}
Email: ${email}
Telepon: ${phone || 'Tidak diisi'}
Subjek: ${subject || 'Tidak ada subjek'}

Pesan:
${message}

---
Waktu: ${new Date().toLocaleString('id-ID')}
    `.trim();

    console.log('WhatsApp notification:', whatsappMessage);
    console.log(`Notification would be sent to: 082382466248`);

    // Simulasi email auto-reply
    const emailReply = {
      to: email,
      subject: 'Terima Kasih - Pesan Anda Telah Diterima',
      message: `
Halo ${name},

Terima kasih telah menghubungi PT CHARTENS AGAMUA MENTE.

Pesan Anda telah kami terima dan akan segera kami proses. 
Tim kami akan menghubungi Anda kembali dalam waktu 1x24 jam.

Best regards,
Tim PT CHARTENS AGAMUA MENTE
📞 0823-8246-6248
📍 Manokwari, Papua Barat
      `.trim()
    };

    console.log('Auto-reply email:', emailReply);

    return NextResponse.json({
      success: true,
      message: 'Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.',
      data: {
        id: Date.now(),
        received_at: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Terjadi kesalahan saat mengirim pesan' },
      { status: 500 }
    );
  }
}