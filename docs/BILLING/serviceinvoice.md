---
sidebar_position: 1
id: serviceinvoice
title: Service Invoice
sidebar_label: Service Invoice
toc_max_heading_level: 4
hide_title: false
---

untuk membuat invoice masuk ke menu billing - invoicing lalu klik action button pada data yang akan di proses dan akan muncul seperti pada gambar di bawah ini. 
:::tip Note
Terdapat 4 Invoice yang akan dicetak

:::

![Docusaurus Plushie](/img/BILLING/1.png)

Akan muncul tampilan seperti di bawah ini, klik tombol Service Invoice untuk mencetak invoice resmi.
1. Apabila terjadi kesalahan dalam “Lupa” menginputkan diskon, SA dapat menginformasikan ke user Billing untuk menambahkan diskon di Invoice Info.
2. Pencetakan Invoice:
Apabila Job dan part dikerjakan oleh dua tempat yang berbeda maka invoice terdapat dua invoice yang perlu dicetak, baik dari tempat customer melakukan service atau pihak asuransi kendaraan. sehingga keduanya memiliki invoice yang berbeda yang diberikan kepada user.

![Docusaurus Plushie](/img/BILLING/2.png)
:::tip Note
Informasi Tombol:
1. To Doc Check untuk mengembalikan datanya ke sesi pengecekan dokumen apabila terdapat dokumen yang kosong
2. kalkusi untuk menghitung ulang
3. User Billing juga memiliki otoritas untuk memberikan diskon
4. Performa untuk mencetak bukti nota tapi bukan tanda terima bukti sah transaksi.
5. Service Invoice untuk mencetak bukti transaksi resmi. Centang “Duty Stamp” jika ingin menggunakan Materai
:::

Selanjutnya kembali ke halaman utama billing - invoicing, dan akan muncul tampilan seperti di bawah ini
1. Print Invoice, dokumen yang di hasilkan dari print invoice akan di berikan kepada customer
2. credit note, pembatalan invoice. Membutuhkan 4 layer approval, dan kembali menjadi dokumen checking. No invoice sudah tidak berlaku
3. SPK Reference, berkaitan dengan DMS Sales seperti jenis jenis barang untuk membutuhkan nomor SPK dan memasukkannya sebagai pencatatan.
4. Check SOA, disinilah proses pembayaran dilakukan.

![Docusaurus Plushie](/img/BILLING/3.png)

setelah memberikan invoice kepada customer, proses pembayaran akan dilakukan di oracle. Sehingga disini Billing hanya perlu mengirimkan data invoice ke oracle untuk divalidasi.

![Docusaurus Plushie](/img/BILLING/4.png)
