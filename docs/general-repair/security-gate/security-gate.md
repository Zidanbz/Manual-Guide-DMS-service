---
sidebar_position: 2
id: security-gate
title: Security Gate
tags: [security, nomor antrian, antrian customer]
---

import Image from '@theme/IdealImage';

### **Security Gate**

> Customer yang telah booking atau pun walk-in ke cabang untuk service akan di input nomor plat kendaraannya di bagian security. lalu data nomor kendaraan yang telah dimasukkan akan secara otomatis masuk ke dalam monitor sistem antrian di ruangan penerimaan service.

![Docusaurus Plushie](/img/general-repair/security-gate/1.png)

| Elemen UI | Deskripsi |
|--------|--------|
| Operator | Nama user yang digunakan untuk login ke aplikasi (terisi otomatis) |
| Date, Time | Tanggal waktu saat ini (terisi otomatis) |
| License Plate No | Diisi Nomor Plat Kendaraan customer, pastikan pengisian dengan format “DD2021YY” tanpa menggunakan garis(-) dan juga spasi. Setelah pengisian nomor plat selesai lalu tekan tombol Enter. |
| Ticket No | No Tiket yang muncul pada print out tiket masuk. (terisi otomatis) |
| Customer | Nama Customer, terisi otomatis jika Customer sudah ter registrasi dalam sistem |
| Booking No | No Booking terakhir, terisi otomatis jika Customer sudah melakukan Booking sebelumnya |
| Model | Model kendaraan customer, terisi otomatis jika kendaraan customer telah ter registrasi sebelumnya |
| Note | Diisi dengan catatan customer jika diperlukan |
| Purpose | Berisi pilihan tujuan kedatangan customer ke bengkel. Jika customer sudah booking service sebelumnya, pilihan Booking akan terisi otomatis. |
| Print Off | Aktifkan opsi ini jika printer sedang mengalami masalah, tiket dapat dicetak kembali di bagian SA. |
| ![Docusaurus Plushie](/img/general-repair/security-gate/ok.png) | Tekan tombol ini jika tiket telah dicetak dan customer siap masuk ke area service |

untuk memulai input data unit kendaraan yang datang pada inputan **License Plate No** masukkan nomor plat kendaraan lalu tekan *Enter*, lihat gambar di bawah ini.

![Docusaurus Plushie](/img/general-repair/security-gate/3.png)

jika unit kendaraan yang datang sebelumnya belum pernah servis maka inputan **Customer** dan **Model** tidak terisi, sedangkan jika sudah pernah datang servis maka otomatis inputan tersebut akan terisi dan jangan lupa pilihan purpose nya, perhatikan gambar di bawah ini.

![Docusaurus Plushie](/img/general-repair/security-gate/4.png)

| Nama Purpose | Deskripsi |
|--------|--------|
| Service GR | Tujuan servis untuk General Repair |
| Service BP | Tujuan servis untuk Body Painting |
| Booking GR | Kustomer telah booking melalui MRA untuk General Repair |
| Booking BP | Kustomer telah booking melalui MRA untuk Body Painting |
| Priority GR | Khusus kustomer prioritas atau tamu penting tujuan General Repair	|
| Priority BP | Khusus kustomer prioritas atau tamu penting tujuan Body Painting|
| Part GR | Kustomer hanya datang beli spareparts untuk General Repair	|
| Part BP |	Kustomer hanya datang beli spareparts untuk Body Painting |

Setelah security selesai menginput data plat nomor kendaraan, klik button ![Docusaurus Plushie](/img/general-repair/security-gate/ok.png) pada bagian kanan bawah, maka otomatis diarahkan untuk mencetat tiket antrian :

![Docusaurus Plushie](/img/general-repair/security-gate/2.png)

### **Reception & Dashboard Queue**.

Aplikasi Dashboard Antrian sebaiknya dipasang dalam sebuah PC dengan layar monitor berukuran minimum 32” dan disarankan untuk menggunakan pengeras suara jika ruang tunggu service berukuran luas atau dengan tingkat kebisingan sedang. Aplikasi ini menampilkan daftar antrian aktif yang dapat dilihat langsung oleh Customer dan menghasilkan suara panggilan ketika Service Advisor melakukan klik pada button ![Docusaurus Plushie](/img/general-repair/reception/next.png). 

Berikut adalah tampilan Dashboard Antrian:

<Image img={require('/img/general-repair/reception/1.1.png')} />

Aplikasi web DMS Service yang digunakan Service Advisor untuk memanggil antrian yang sudah teregistrasi dalam sistem, berikut adalah tampilan aplikasi web DMS Service untuk Service Advisor :

![Docusaurus Plushie](/img/general-repair/reception/2.png)

Berikut adalah penjelasan kolom – kolom pada list reception queue :


| Nama Kolom | Deskripsi |
|--------|--------|
| Queue No | No Tiket/Antrian yang muncul pada print out tiket masuk |
| Arrival Time | Tanggal dan Jam Customer masuk ke bengkel |
| Vehicle Unit | Kendaraan Customer yang terdaftar dalam sistem. |
| New Customer | Nomor Plat kendaraan untuk Customer yang belum ter-register dalam sistem, atau Customer yang nomor kendaraannya berubah dari data yang terakhir kali tercatat dalam sistem |
| In Call | Tercentang jika customer yang sementara di panggil. |
| Status | Status antrian kendaraan. |
| Service Advisor | SA yang memanggil antrian/Customer. |
| Branch | Cabang bengkel aktif. |
| Visit Reason | Tujuan kedatangan Customer |

Berikut adalah fungsi button action yang ada pada bagian atas tampilan :

| Nama Action | Deskripsi |
|--------|--------|
| ![Docusaurus Plushie](/img/general-repair/reception/next.png) | Panggil antrian berikutnya. Sistem akan mencari Customer dalam antrian berdasarkan jam kedatangan. | 
| ![Docusaurus Plushie](/img/general-repair/reception/booking.png) | Panggil antrian berikutnya khusus untuk Customer yang melakukan Booking | 
| ![Docusaurus Plushie](/img/general-repair/reception/priority.png) | Panggil antrian berikutnya khusus untuk Customer prioritas atau tamu penting. | 
| ![Docusaurus Plushie](/img/general-repair/reception/selected.png) | Menu ini digunakan untuk memanggil kembali data antrian yang sudah di skip sebelumnya dan hanya akan aktif jika user memilih data dengan status Skip. | 
| ![Docusaurus Plushie](/img/general-repair/reception/recall.png) | Memanggil ulang antrian yang telah di panggil melalui tombol Call Next, Call Booking atau pun Call Priority. | 
| ![Docusaurus Plushie](/img/general-repair/reception/skip.png) | Skip antrian aktif, digunakan jika customer tidak ada ditempat saat dipanggil. | 
| ![Docusaurus Plushie](/img/general-repair/reception/finish.png) | Klik action ini jika Customer yang dipanggil datang ke meja SA | 

<!--

![Docusaurus Plushie](/img/general-repair/reception/3.png)

Pada gambar di atas terdapat 3 cara untuk mencari identitas unit kendaraan, yaitu berdasarkan nomor plat, nomor rangka, dan nomor mesin, lalu klik enter atau klik button ![Docusaurus Plushie](/img/general-repair/reception/go.png).

Untuk tahap di reception ada tiga (3) proses untuk memulai, yaitu:

---



### **Melalui Sistem Antrian** 
Untuk tahap ini dengan menggunakan sistem antrian jika data unit kendaraan di input di bagian **Security Gate** dan **Service Advisor** tinggal memanggil antrian bisa di lihat pada bagian **[Reception](http://localhost:3000/docs/general-repair/reception/)**.

-->