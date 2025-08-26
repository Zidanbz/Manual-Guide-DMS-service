---
sidebar_position: 3
id: reception
title: Reception
toc_max_heading_level: 4
hide_title: true
tags: [reception, service advisor, SA, panggil antrian, reception queue, dashboard]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Image from '@theme/IdealImage';

## **Find Vehicle/Customer**

Untuk mencari unit klik menu **Reception - Vehicle Unit**. 

<Image img={require('/img/general-repair/reception/10.png')} />

Pencarian unit dilakukan menggunakan beberapa metode antara lain:
1. Plat Number
2. Frame Number
3. Engine Number
4. Customer Name
5. Mobile No

![Docusaurus Plushie](/img/general-repair/reception/11.png)

---

### Customer registered

Masukkan nomor plat secara lengkap atau bisa juga dengan memasukkan nomor rangka atau nomor mesin, namun kali ini contoh nya memasukkan nomor plat kendaraan.

![Docusaurus Plushie](/img/general-repair/reception/4.png)

Setelah identitas customer muncul klik tombol ![Docusaurus Plushie](/img/general-repair/reception/choose.png), maka akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/reception/12.png)

untuk melanjutkan ke proses pembuatan **[Create Work Order](#create-work-order)**.


### Customer non listed
Dengan cara masukkan angka atau huruf secara acak, misalnya xyz,123 atau xy34, minimal 3 karakter.

![Docusaurus Plushie](/img/general-repair/reception/5.png)

Setelah hasil pencarian muncul klik tombol ![Docusaurus Plushie](/img/general-repair/reception/newdata.png) klik tombol tersebut, maka kita akan di arahkan untuk melanjutkan ke proses pembuatan data customer baru, seperti dibawah ini.

<Image img={require('/img/mra-og/create-booking/3.1.png')} />

Pada gambar di atas Service Advisor akan di arahkan untuk mengisi data unit kendaraan, setelah semua nya terisi dilanjutkan mengisi data customer seperti di bawah ini.

<Image img={require('/img/general-repair/reception/7.png')} />

:::tip Note

Pada bagian Field **Customer Name**, nama nama kustomer sebelumnya sudah terinput di database, jika Service Advisor mau menambahkan data customer yang belum ada, silahkan klik menu **General** -> lalu pilih dan klik **Customer** -> klik tombol ![Docusaurus Plushie](/img/mra-og/create-booking/newrecord.png) akan muncul tampilan form dan buat data kustomer baru, lihat di bagian **[Create New Customer](https://dms-service.netlify.app/docs/general#customer)**

:::

Setelah tab **Vehicle Details** dan **Customer Details** terisi lengkap, klik tombol ![Docusaurus Plushie](/img/general-repair/reception/saveform.png) lalu akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/reception/8.png)

Pada halaman ini klik tab **Contact Person** maka Service Advisor di wajibkan untuk mengisi data singkat customer yang membawa kendaraan, lihat gambar di bawah ini.

![Docusaurus Plushie](/img/general-repair/reception/9.png)

Keterangan :
1. Klik tombol ![Docusaurus Plushie](/img/general-repair/reception/newcontact.png).
2. Lengkapi inputan yang mandatori*
3. Klik tombol ![Docusaurus Plushie](/img/general-repair/reception/save.png)
4. Klik tombol ![Docusaurus Plushie](/img/general-repair/reception/workorder.png)

Setelah data **Contact Person** terisi, pada bagian kanan atas tampilan klik tombol ![Docusaurus Plushie](/img/general-repair/reception/workorder.png) maka Service Advisor dilanjutkan untuk membuat Work Order

### Customer by legacy

Masukkan nomor rangka secara lengkap atau bisa juga dengan memasukkan nomor plat atau nomor mesin, namun kali ini contoh nya memasukkan nomor rangka kendaraan, 

lalu klik button ![Docusaurus Plushie](/img/general-repair/reception/getcustomer.png)

![Docusaurus Plushie](/img/general-repair/reception/21.png)

maka akan muncul tampilan seperti dibawah ini, klik button ![Docusaurus Plushie](/img/general-repair/reception/go.png)

![Docusaurus Plushie](/img/general-repair/reception/22.png)

setelah data kustomer muncul maka di lanjutkan untuk klik button ![Docusaurus Plushie](/img/general-repair/reception/choose.png)

![Docusaurus Plushie](/img/general-repair/reception/23.png)

---

## **Form WAC**

> Form WAC (Walk Arround Check) adalah prosedur di bengkel mobil yang melibatkan pemeriksaan fisik kendaraan sebelum memulai pekerjaan perbaikan atau pemeliharaan dengan kata lain digunakan untuk mencetak lembaran pengecekan terhadap unit kendaraan yang akan diservis. Berikut adalah beberapa fungsi dari walkaround check pada bengkel mobil:

1. **Identifikasi Kerusakan atau Masalah Awal**:
Pemeriksaan sekeliling kendaraan membantu teknisi atau petugas bengkel mengidentifikasi kerusakan atau masalah awal pada kendaraan sebelum memulai pekerjaan resmi. Ini memungkinkan mereka untuk segera menangani masalah yang terdeteksi.

2. **Pengecekan Visual Komponen Penting**:
Melibatkan pemeriksaan visual pada komponen penting seperti lampu, kaca, wiper, dan sistem pengereman. Pemeriksaan ini dapat membantu mencegah kecelakaan atau masalah keselamatan yang mungkin muncul karena komponen yang rusak atau tidak berfungsi.

3. **Pengelolaan Harapan Pelanggan**:
Jika kendaraan ditinggalkan oleh pelanggan untuk perbaikan atau pemeliharaan, walkaround check dapat digunakan untuk mengelola harapan pelanggan. Pemeriksaan ini dapat mengidentifikasi masalah yang mungkin ditemukan dan memberikan estimasi awal mengenai pekerjaan yang perlu dilakukan.

4. **Pemantauan Kilometer atau Jam Mesin**:
Walkaround check dapat mencakup pemantauan kilometer atau jam mesin kendaraan. Informasi ini dapat membantu bengkel dalam menentukan pemeliharaan berkala atau perbaikan yang mungkin diperlukan berdasarkan pemakaian kendaraan.

5. **Pemantauan Tingkat Bahan Bakar dan Cairan**:
Pemeriksaan tingkat bahan bakar dan cairan seperti minyak mesin, pendingin, dan cairan lainnya. Hal ini penting untuk memastikan kendaraan beroperasi pada tingkat optimal dan mencegah potensi kerusakan akibat kekurangan cairan.

6. **Penandaan Kerusakan atau Masalah**:
Walkaround check sering melibatkan penandaan atau dokumentasi kerusakan atau masalah yang ditemukan. Ini dapat mencakup penggunaan foto atau catatan tertulis untuk memberikan bukti dan dokumentasi yang akurat.

7. **Pencegahan Kesalahan Pekerjaan**:
Dengan mengidentifikasi masalah awal, walkaround check dapat membantu mencegah kesalahan pekerjaan yang dapat terjadi jika masalah tidak terdeteksi dengan cepat.

8. **Peningkatan Keamanan**:
Pemeriksaan sekeliling kendaraan juga dapat meningkatkan keamanan, khususnya dengan memastikan bahwa semua lampu dan sistem keselamatan lainnya berfungsi dengan baik.

![Docusaurus Plushie](/img/general-repair/reception/41.png)

![Docusaurus Plushie](/img/general-repair/reception/44.png)

---

## **Create Work Order**

> Pembuatan Work Order merupakan kelanjutan dari proses-proses sebelumnya. Work Order merupakan Detail View yang berbentuk Master-Detail Form yang terdiri atas Work Order data dan beberapa detail seperti pada gambar di atas, Berikut adalah elemen-elemen UI yang penting dalam Work Order Detail View baik itu General Repair maupun Body Painting:

![Docusaurus Plushie](/img/general-repair/reception/43.png)

<Tabs>
  <TabItem value="gr" label="General Repair" default>

![Docusaurus Plushie](/img/general-repair/create-wo/1.png)

![Docusaurus Plushie](/img/general-repair/create-wo/1x.png)

| Nama Kolom | Deskripsi |
|--------|--------|
| Work Order No |Nomor yang ter generate otomatis oleh sistem. |
| Work Order Date |Tanggal dibuat nya work order |
| Work Order Status | **None** : Status awal WO, **Booking** :WO Booking, **Waiting for reception** : Menunggu penerimaan SA, **Reception**	: Proses Penerimaan, **Waiting for job distribution** : Menunggu distribusi Job, **Waiting for technician**	: Menunggu teknisi, **Production** : Pengerjaan Job oleh teknisi, **Waiting for inspection** : Menunggu Inspeksi, **Inspection** : Inspeksi Job, **Waiting for document checking** : Menunggu pengecekan dokumen, **Document checking**	: Pengecekan dokumen, **Waiting for invoice** : Menunggu pembuatan invoice, **Invoice**	: Pembuatan invoice selesai, **Waiting for payment** : Menunggu pembayaran, **Delivered** : Kendaraan telah diserahkan, **Cancel** : dibatalkan, **Waiting Approval** : menunggu persetujuan atasan |
| Repair Type | **GR (General Repair)** = Jenis perbaikan |
| Mobile Service Type | Diisi khusus jika pelayanan servis mobile seperti TMC dan DMC |
| Express Maintenance | Pilih **Yes** jika Express maintenance, jika tidak pilih **No** |
| Last Mileage Record | Angka kilometer terisi jika unit pernah datang servis sebelumnya |
| Current Mileage record | Angka kilometer saat datang servis.  |
| Plan Service Date | Tanggal dan jam rencana servis selanjutnya |
| Customer Delivery Date Request | Tanggal dan jam penyerahan ke kustomer. |
| Customer Waiting | Pilih **Yes** jika customer menunggu, jika tidak pilih **No** |
| Washing	| Pilih **Yes** jika unit kendaraan ingin di cuci, jika tidak pilih **No** |
| SPK Reference | Masukkan **nomor SPK** Pembelian jika diperlukan (tidak Wajib) |
| Stall | Nama stall tempat unit di kerjakan |
| Remark | Catatan jika diperlukan (tidak wajib) |

  </TabItem>
  <TabItem value="bp" label="Body Painting">

![Docusaurus Plushie](/img/body-painting/create-wo/1.png)

![Docusaurus Plushie](/img/body-painting/create-wo/1.1.png)

| Nama Kolom | Deskripsi |
|--------|--------|
| Work Order No |Nomor yang ter generate otomatis oleh sistem. |
| Work Order Date |Tanggal dibuat nya work order |
| Work Order Status | **Waiting for reception** : Menunggu penerimaan SA, **Reception**	: Proses Penerimaan, **Waiting for job distribution** : Menunggu distribusi Job, **Waiting for technician**	: Menunggu teknisi, **Production** : Pengerjaan Job oleh teknisi, **Waiting for inspection** : Menunggu Inspeksi, **Inspection** : Inspeksi Job, **Waiting for document checking** : Menunggu pengecekan dokumen, **Document checking**	: Pengecekan dokumen, **Waiting for invoice** : Menunggu pembuatan invoice, **Invoice**	: Pembuatan invoice selesai, **Waiting for payment** : Menunggu pembayaran, **Delivered** : Kendaraan telah diserahkan, **Cancel** : dibatalkan, **Waiting Approval** : menunggu persetujuan atasan |
| Repair Type | **BP (Body Paint)** = Jenis perbaikan |
| Mobile Service Type | Diisi khusus jika pelayanan servis mobile seperti TMC dan DMC |
| Express Maintenance | Pilih **Yes** jika Express maintenance, jika tidak pilih **No** |
| Last Mileage Record | Angka kilometer terisi jika unit pernah datang servis sebelumnya |
| Current Mileage record | Angka kilometer saat datang servis.  |
| Plan Service Date | Tanggal dan jam rencana servis selanjutnya |
| Customer Delivery Date Request | Tanggal dan jam penyerahan ke kustomer. |
| Customer Waiting | Pilih **Yes** jika customer menunggu, jika tidak pilih **No** |
| Washing	| Pilih **Yes** jika unit kendaraan ingin di cuci, jika tidak pilih **No** |
| SPK Reference | Masukkan **nomor SPK** Pembelian jika diperlukan (tidak Wajib) |
| Stall | Nama stall tempat unit di kerjakan |
| Remark | Catatan jika diperlukan (tidak wajib) |
  
  </TabItem>
</Tabs>

Service Advisor dapat meng-input jenis pekerjaan/Job yang akan dilakukan pada tab **Job Order**, bergantung kepada tujuan kedatangan Customer. Selain itu, Service Advisor juga dapat memasukkan keluhan-keluhan yang dialami oleh Customer melalui tab **Customer Request**. Part-part yang dibutuhkan dalam proses service dapat di-input pada tab **Part Order** dan juga **WAC** proses pengecekan kondisi kustomer sebelum di lakukan perbaikan.
  
---

## **Create Estimation**

> Form Estimation yang digunakan untuk memberikan perkiraan biaya kepada pelanggan untuk layanan perbaikan atau pemeliharaan mobil. Fungsi dari form estimasi ini adalah memberikan informasi kepada pelanggan tentang perkiraan biaya dan jenis pekerjaan yang akan dilakukan pada kendaraan mereka dengan kata lain halaman ini digunakan untuk membuat form biaya estimasi servis, sebelum nomor Work Order terbit

![Docusaurus Plushie](/img/general-repair/reception/15.png)

<Tabs>
  <TabItem value="gr" label="General Repair" default>

![Docusaurus Plushie](/img/general-repair/reception/13.png)

| Nama Kolom | Deskripsi |
|--------|--------|
| Work Order Estimation No | Nomor yang ter generate otomatis oleh sistem. |
| Work Order Estimation Date | Tanggal dibuat nya work order |
| Repair Type | Jenis perbaikan |
| Mobile Service Type | Diisi khusus jika pelayanan servis mobile seperti TMC dan DMC |
| Last Mileage Record | Angka kilometer terisi jika unit pernah datang servis sebelumnya |
| Current Mileage record | Angka kilometer saat datang servis.  |
| Remark | Catatan jika diperlukan (tidak wajib) |

setelah itu klik button ![Docusaurus Plushie](/img/general-repair/reception/saveform.png)

maka akan muncul tampilan seperti di bawah ini.

![Docusaurus Plushie](/img/general-repair/reception/19.png)

pada inputan **Plan Service Date** masukkan tanggal rencana datang servis

setelah itu silahkan isi pada bagian tab **[Customer Request](#customer-request)**, **[Job Order](#job-order)**, **[Part Order](#part-order)** seperti biasa, dilanjutkan klik button ![Docusaurus Plushie](/img/general-repair/reception/calculation.png) untuk menghitung ulang estimasi secara sistem lalu pada bagian bawah tampilan klik button ![Docusaurus Plushie](/img/general-repair/reception/printestimation.png) maka akan muncul hasil cetak estimasi.

![Docusaurus Plushie](/img/general-repair/reception/20.png)
  
  </TabItem>
  <TabItem value="bp" label="Body Painting">

![Docusaurus Plushie](/img/general-repair/reception/24.png)

| Nama Kolom | Deskripsi |
|--------|--------|
| Work Order Estimation No | Nomor yang ter generate otomatis oleh sistem. |
| Work Order Estimation Date | Tanggal dibuat nya work order |
| Repair Type | Jenis perbaikan |
| Mobile Service Type | Diisi khusus jika pelayanan servis mobile seperti TMC dan DMC |
| Own Risk | Jumlah biaya yang di tanggung oleh kustomer |
| Last Mileage Record | Angka kilometer terisi jika unit pernah datang servis sebelumnya |
| Current Mileage record | Angka kilometer saat datang servis.  |
| Remark | Catatan jika diperlukan (tidak wajib) |

setelah itu klik button ![Docusaurus Plushie](/img/general-repair/reception/saveform.png)

maka akan muncul tampilan seperti di bawah ini.

![Docusaurus Plushie](/img/general-repair/reception/25.png)

pada inputan **Plan Service Date** masukkan tanggal rencana datang servis

setelah itu silahkan isi pada bagian tab **[Customer Request](#customer-request)**, **[Job Order](#job-order)**, **[Part Order](#part-order)** seperti biasa, dilanjutkan klik button ![Docusaurus Plushie](/img/general-repair/reception/calculation.png) untuk menghitung ulang estimasi secara sistem lalu pada bagian bawah tampilan klik button ![Docusaurus Plushie](/img/general-repair/reception/printestimation.png) maka akan muncul hasil cetak estimasi.

![Docusaurus Plushie](/img/general-repair/reception/26.png)
  
  </TabItem>
</Tabs>

---
## **Create Diagnostic**

> Form Diagnostic digunakan untuk mengumpulkan informasi dan hasil dari proses diagnosis kendaraan. Fungsi formulir ini sangat penting dalam membantu foreman dan teknisi bengkel mengidentifikasi masalah dan merencanakan tindakan perbaikan yang diperlukan, dengan kata lain halaman ini digunakan untuk membuat form analisa kerusakan, sebelum nomor Work Order terbit

![Docusaurus Plushie](/img/general-repair/reception/16.png)

<Tabs>
  <TabItem value="gr" label="General Repair" default>

![Docusaurus Plushie](/img/general-repair/reception/14.png)

| Nama Kolom | Deskripsi |
|--------|--------|
| Work Order Diagnostic No |Nomor yang ter generate otomatis oleh sistem. |
| Work Order Diagnostic Date |Tanggal dibuat nya work order |
| Work Order Diagnostic Status | **Diagnostic** : Status awal WO |
| Foreman | Pilih Nama PTM |
| Remark | Catatan jika diperlukan (tidak wajib) |

setelah itu klik button ![Docusaurus Plushie](/img/general-repair/reception/saveform.png)

lalu pada bagian bawah tampilan klik button ![Docusaurus Plushie](/img/general-repair/reception/printdiagnostic.png)

![Docusaurus Plushie](/img/general-repair/reception/17.png)

maka akan muncul form seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/reception/18.png)
  
  </TabItem>
  <TabItem value="bp" label="Body Painting">

![Docusaurus Plushie](/img/general-repair/reception/27.png)

| Nama Kolom | Deskripsi |
|--------|--------|
| Work Order Diagnostic No |Nomor yang ter generate otomatis oleh sistem. |
| Work Order Diagnostic Date |Tanggal dibuat nya work order |
| Work Order Diagnostic Status | **Diagnostic** : Status awal WO |
| Foreman | Pilih Nama PTM |
| Remark | Catatan jika diperlukan (tidak wajib) |

setelah itu klik button ![Docusaurus Plushie](/img/general-repair/reception/saveform.png)

lalu pada bagian bawah tampilan klik button ![Docusaurus Plushie](/img/general-repair/reception/printdiagnostic.png)

![Docusaurus Plushie](/img/general-repair/reception/17.png)

maka akan muncul form seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/reception/28.png)
  
  </TabItem>
</Tabs>

---

## **Create Purchase Part**

> Jika ada Customer yang datang kepada Service Advisor hanya untuk membeli part saja tanpa melakukan servis pada unit kendaraanya, petugas Service Advisor dapat membuat Work Order Purchase Part yang difungsikan untuk pembelian part tanpa adanya Job pada Work Order tersebut.

![Docusaurus Plushie](/img/general-repair/reception/42.png)

<Tabs>
  <TabItem value="gr" label="General Repair" default>

![Docusaurus Plushie](/img/purchase-part/create-wo/1.png)

| Nama Kolom | Deskripsi |
|--------|--------|
| Work Order No |Nomor yang ter generate otomatis oleh sistem. |
| Work Order Date |Tanggal dibuat nya work order |
| Work Order Status | **None** : Status awal WO, **Waiting for reception** : Menunggu penerimaan SA, **Reception**	: Proses Penerimaan, **Waiting for document checking** : Menunggu pengecekan dokumen, **Document checking**	: Pengecekan dokumen, **Waiting for invoice** : Menunggu pembuatan invoice, **Invoice**	: Pembuatan invoice selesai, **Waiting for payment** : Menunggu pembayaran, **Cancel** : dibatalkan, **Waiting Approval** : menunggu persetujuan atasan |
| Repair Type | Jenis perbaikan *(terisi otomatis)* |
| Remark | Catatan jika diperlukan (tidak wajib) |
  
  </TabItem>
  <TabItem value="bp" label="Body Painting">

![Docusaurus Plushie](/img/general-repair/reception/29.png)

| Nama Kolom | Deskripsi |
|--------|--------|
| Work Order No |Nomor yang ter generate otomatis oleh sistem. |
| Work Order Date |Tanggal dibuat nya work order |
| Work Order Status | **None** : Status awal WO, **Waiting for reception** : Menunggu penerimaan SA, **Reception**	: Proses Penerimaan, **Waiting for document checking** : Menunggu pengecekan dokumen, **Document checking**	: Pengecekan dokumen, **Waiting for invoice** : Menunggu pembuatan invoice, **Invoice**	: Pembuatan invoice selesai, **Waiting for payment** : Menunggu pembayaran, **Cancel** : dibatalkan, **Waiting Approval** : menunggu persetujuan atasan |
| Repair Type | Jenis perbaikan *(terisi otomatis)* |
| Remark | Catatan jika diperlukan (tidak wajib) |

  
  </TabItem>
</Tabs>

maka dilanjutkan untuk melakukan input part **[Part Order](#part-order)**

---

## **Walk Arround Check (WAC)**

> Proses Walk Around Check (WAC) merupakan proses pengecekan kondisi kendaraan kustomer sebelum perbaikan dilakukan. Untuk memulai proses WAC, Service Advisor dapat memilih tab WAC lalu klik tombol ![Docusaurus Plushie](/img/general-repair/wac/settingwac.png) seperti pada gambar di bawah ini:

![Docusaurus Plushie](/img/general-repair/wac/1.png)

Lalu Service Advisor akan di arahkan untuk melakukan checklist pada form WAC mengambil gambar unit kendaraan sebelum dilakukan perbaikan dan juga memberikan catatan jika dibutuhkan.

![Docusaurus Plushie](/img/general-repair/wac/2.png)

Setelah semua selesai klik tombol ![Docusaurus Plushie](/img/general-repair/wac/save.png), maka proses pengisian form WAC selesai.

![Docusaurus Plushie](/img/general-repair/wac/3.png)

---
## **Customer Request**

![Docusaurus Plushie](/img/general-repair/create-wo/2.png)

![Docusaurus Plushie](/img/general-repair/create-wo/3.png)

Keterangan :
1. Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/addcustomerreq.png).
2. Deskripsikan keluhan atau permintaan kustomer
3. Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/save.png)

---
## **Job Order**

![Docusaurus Plushie](/img/general-repair/create-wo/4.png)

| Nama Kolom | Deskripsi |
|--------|--------|
|Job | Pilihan job yang di kerjakan oleh teknisi|
|Service Unit Price	| Harga per unit dari job|
|Job Service Rate | Rate job yang dijual ke kustomer|
|Technician	| Nama teknisi yang akan handling job tersebut|
|Technician Job Rate | lama pengerjaan yang di berikan ke teknisi|
|Discount	| Diskon yang diberikan kepada kustomer|
|Program	| Program untuk job|
|Insurance	| Nama asuransi yang menanggung tagihan job|
|Stall	| Tempat pengerjaan job|
|Job Status | **None** : Status awal Job, **On progress** : Job dalam pengerjaan, **Paused** : Job dihentikan sementara, **Completed** : Job telah selesai|
|Sub Total | Nilai dari Job sebelum pajak, diskon, tanggungan asuransi dan program|
|Discount Percentage | Persentase diskon|
|Discount Amount | Nilai diskon yang diberikan|
|Program Percentage	| Persentase program|
|Program Amount	| Nilai Program yang di berikan|
|Job Insurance Amount | Nilai Job yang ditanggung asuransi|
|Subtotal On Customer | Nilai tagihan yang ditanggung langsung oleh kustomer|
|Sublet	| **YES** : Jika pengerjaan luar bengkel, **NO** : bukan pengerjaan luar bengkel|

![Docusaurus Plushie](/img/general-repair/create-wo/5.png)

Keterangan :

1.Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/addjoborder.png).

2.Lengkapi inputan yang mandatori*

3.Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/save.png)

---
## **Part Order**

> Pada bagian ini ada tiga (3) metode untuk melakukan penginputan part, yaitu :

- **Add Part** : General Repair, Body Painting, Purchase Part.
- **Package Parts** : General Repair, Body Painting.
- **Import Parts** : Body Painting, Purchase Part.

<Tabs>
  <TabItem value="gr" label="General Repair" default>

![Docusaurus Plushie](/img/general-repair/create-wo/6.png)

| Nama Kolom | Deskripsi |
|--------|--------|
| Part No | Nomor part yang akan digunakan |
| Part Name | Nama part yang akan digunakan |
| Quantity | Jumlah part yang digunakan |
| Part Status | **None** : Status awal Part, **Reserved** : Part telah dipesan oleh SA kepada Part Man, **Picked** : Part sudah diserahkan Part Man kepada Teknisi, **Unavailable** : Part tidak tersedia, **Cancelled** : Pemesanan Part dibatalkan |
| Qty Supplied | Jumlah part yang di supply oleh Partman |
| Stock | Menampilkan jumlah stok part yang ada di gudang utama |
| Discount | Diskon yang diberikan kepada kustomer |
| Program | Program untuk part |
| Insurance | Nama asuransi yang menanggung tagihan part |
| Subtotal On Customer | Nilai tagihan yang ditanggung langsung oleh kustomer |
| Sub Total | Nilai dari Job sebelum pajak, diskon, tanggungan asuransi dan program |
| Discount Percentage | Persentase diskon |
| Discount Amount | Nilai diskon yang diberikan |

#### Add Part

![Docusaurus Plushie](/img/general-repair/create-wo/7.png)

Keterangan :

1.Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/addpart.png).

2.Lengkapi inputan yang mandatori*

3.Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/save.png)

#### Package Part

:::info

Pastikan part terdaftar pada master job sebelum melakukan generate package part

:::

klik button ![Docusaurus Plushie](/img/general-repair/reception/packageparts.png)

![Docusaurus Plushie](/img/general-repair/reception/38.png)

lalu akan muncul pilihan seperti ini, klik button ![Docusaurus Plushie](/img/general-repair/reception/yesgenerate.png)

![Docusaurus Plushie](/img/general-repair/reception/39.png)

maka part tersebut akan muncul pada list view seperti pada gambar di bawah ini.

![Docusaurus Plushie](/img/general-repair/reception/40.png)
  
  </TabItem>
  <TabItem value="bp" label="Body Painting">

![Docusaurus Plushie](/img/general-repair/reception/37.png)

| Nama Kolom | Deskripsi |
|--------|--------|
| Part No | Nomor part yang akan digunakan |
| Part Name | Nama part yang akan digunakan |
| Quantity | Jumlah part yang digunakan |
| Part Status | **None** : Status awal Part, **Reserved** : Part telah dipesan oleh SA kepada Part Man, **Picked** : Part sudah diserahkan Part Man kepada Teknisi, **Unavailable** : Part tidak tersedia, **Cancelled** : Pemesanan Part dibatalkan |
| Qty Supplied | Jumlah part yang di supply oleh Partman |
| Stock | Menampilkan jumlah stok part yang ada di gudang utama |
| Discount | Diskon yang diberikan kepada kustomer |
| Program | Program untuk part |
| Insurance | Nama asuransi yang menanggung tagihan part |
| Subtotal On Customer | Nilai tagihan yang ditanggung langsung oleh kustomer |
| Sub Total | Nilai dari Job sebelum pajak, diskon, tanggungan asuransi dan program |
| Discount Percentage | Persentase diskon |
| Discount Amount | Nilai diskon yang diberikan |

#### Add Part

![Docusaurus Plushie](/img/general-repair/create-wo/7.png)

Keterangan :

1.Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/addpart.png).

2.Lengkapi inputan yang mandatori*

3.Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/save.png)

#### Package Part

:::info

Pastikan part terdaftar pada master job sebelum melakukan generate package part

:::

klik button ![Docusaurus Plushie](/img/general-repair/reception/packageparts.png)

![Docusaurus Plushie](/img/general-repair/reception/38.png)

lalu akan muncul pilihan seperti ini, klik button ![Docusaurus Plushie](/img/general-repair/reception/yesgenerate.png)

![Docusaurus Plushie](/img/general-repair/reception/39.png)

maka part tersebut akan muncul pada list view seperti pada gambar di bawah ini.

![Docusaurus Plushie](/img/general-repair/reception/40.png)

#### Import Parts

![Docusaurus Plushie](/img/general-repair/reception/30.png)

Keterangan :

1.Download template untuk penginputan part dalam bentuk **Xlxs**.

2.Upload file template **Xlxs** yang telah di masukkan list part.

3.Menampilkan informasi inputan part yang double dan juga part yang kosong pada gudang sparepart.

setelah file **Xlsx** diupload maka akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/reception/32.png)

pada gambar diatas terjadi double penginputan part di file **Xlsx** sehingga tidak bisa di lanjutkan ke proses selanjutnya, jadi solusi nya ialah dengan melakukan perbaikan pada file **Xlsx**

![Docusaurus Plushie](/img/general-repair/reception/35.png)

setelah file tersebut diperbaiki maka akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/reception/36.png)

maka proses bisa dilanjutkan, lalu klik button ![Docusaurus Plushie](/img/general-repair/reception/save.png) maka pada list view akan muncul.
  
  </TabItem>
  <TabItem value="prt" label="Purchase Part">

![Docusaurus Plushie](/img/general-repair/reception/31.png)

| Nama Kolom | Deskripsi |
|--------|--------|
| Part No | Nomor part yang akan digunakan |
| Part Name | Nama part yang akan digunakan |
| Quantity | Jumlah part yang digunakan |
| Part Status | **None** : Status awal Part, **Reserved** : Part telah dipesan oleh SA kepada Part Man, **Picked** : Part sudah diserahkan Part Man kepada Teknisi, **Unavailable** : Part tidak tersedia, **Cancelled** : Pemesanan Part dibatalkan |
| Qty Supplied | Jumlah part yang di supply oleh Partman |
| Stock | Menampilkan jumlah stok part yang ada di gudang utama |
| Discount | Diskon yang diberikan kepada kustomer |
| Program | Program untuk part |
| Insurance | Nama asuransi yang menanggung tagihan part |
| Subtotal On Customer | Nilai tagihan yang ditanggung langsung oleh kustomer |
| Sub Total | Nilai dari Job sebelum pajak, diskon, tanggungan asuransi dan program |
| Discount Percentage | Persentase diskon |
| Discount Amount | Nilai diskon yang diberikan |

#### Add Part

![Docusaurus Plushie](/img/general-repair/create-wo/7.png)

Keterangan :

1.Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/addpart.png).

2.Lengkapi inputan yang mandatori*

3.Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/save.png)

#### Import Parts

![Docusaurus Plushie](/img/general-repair/reception/30.png)

Keterangan :

1.Download template untuk penginputan part dalam bentuk **Xlxs**.

2.Upload file template **Xlxs** yang telah di masukkan list part.

3.Menampilkan informasi inputan part yang double dan juga part yang kosong pada gudang sparepart.

setelah file **Xlsx** diupload maka akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/reception/32.png)

pada gambar diatas terjadi double penginputan part di file **Xlsx** sehingga tidak bisa di lanjutkan ke proses selanjutnya, jadi solusi nya ialah dengan melakukan perbaikan pada file **Xlsx**

![Docusaurus Plushie](/img/general-repair/reception/35.png)

setelah file tersebut diperbaiki maka akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/reception/36.png)

maka proses bisa dilanjutkan, lalu klik button ![Docusaurus Plushie](/img/general-repair/reception/save.png) maka pada list view akan muncul.
  
  </TabItem>
</Tabs>

---

## **Add Program/Insurance**

> Berikut ini adalah cara menambahkan program atau insurance baik itu di job maupun part.

![Docusaurus Plushie](/img/general-repair/doc-checking/8.png)

*Keterangan :*

1. **Pilih Insurance** : Masukkan nama insurer nya.
2. **Pilih Program** : Masukkan nama pihak ke-3 penyedia program.

Pilih salah satu penyedia potongan harga, lalu klik button ![Docusaurus Plushie](/img/general-repair/doc-checking/save.png) pada bagian kanan bawah form.

---

## **Request Discount**

:::info

proses ini membutuhkan approval :

- Diskon 0 - 5 % : tidak membutuhkan approval.
- Diskon 5,1 - 20 % : Kepala Bengkel.
- Diskon 20,1 - 25 % : Kepala Bengkel -> Kepala Cabang.
- Diskon 25,1 - 30 % : Kepala Bengkel -> Kepala Cabang -> Aftersales Operation Manager (Head Office).
- Diskon 30,1 - 100 % : Kepala Bengkel -> Kepala Cabang -> Aftersales Operation Manager (Head Office) -> Aftersales General Manager (Head Office).


:::

> Berikut adalah cara memasukkan diskon baik itu di job maupun part

![Docusaurus Plushie](/img/general-repair/doc-checking/10.png)

setelah di pilih diskon nya, klik button ![Docusaurus Plushie](/img/general-repair/doc-checking/save.png)

lalu akan muncul alert **Success**

![Docusaurus Plushie](/img/general-repair/doc-checking/success.png)

pada bagian bawah kanan list view klik button ![Docusaurus Plushie](/img/general-repair/doc-checking/reqdiskon.png)

lalu akan muncul tampilan form kecil seperti di bawah ini.

![Docusaurus Plushie](/img/general-repair/doc-checking/11.png)

deskripsikan alasan nya permintaan diskon tersebut, setelah itu klik button ![Docusaurus Plushie](/img/general-repair/doc-checking/process.png)

maka proses pengajuan selesai tinggal menunggu approval dari atasan.

---

## **Print Work Order**

> Service Advisor dapat mencetak Work Order dengan cara menekan tombol ![Docusaurus Plushie](/img/body-painting/print-wo/printwo.png)pada bagian bawah tampilan seperti pada gambar dibawah ini.

<Tabs>
  <TabItem value="gr" label="General Repair" default>

![Docusaurus Plushie](/img/general-repair/print-wo/1.png)

![Docusaurus Plushie](/img/general-repair/print-wo/2.png)
  
  </TabItem>
  <TabItem value="bp" label="Body Painting">

![Docusaurus Plushie](/img/body-painting/print-wo/1.png)

![Docusaurus Plushie](/img/body-painting/print-wo/2.png)

Di halaman ini Service Advisor dapat mencetak Work Order yang hanya menampilkan lampiran part.

![Docusaurus Plushie](/img/body-painting/print-wo/3.png)

![Docusaurus Plushie](/img/body-painting/print-wo/4.png)
  
  </TabItem>
   <TabItem value="prt" label="Purchase Part">

![Docusaurus Plushie](/img/general-repair/print-wo/3.png)

![Docusaurus Plushie](/img/general-repair/print-wo/4.png)
  
  </TabItem>
</Tabs>

---

## **Cancel Work Order**

:::info

proses ini membutuhkan approval **Kepala bengkel**

:::

> Tahapan ini akan di jelaskan langkah - langkah cara melakukan cancel pada Work Order, pilih menu **reception - klik work order list**

![Docusaurus Plushie](/img/sa-og/cancel-wo/1.png)

lalu akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/sa-og/cancel-wo/2.png)

pada bagian kiri list view klik button ![Docusaurus Plushie](/img/sa-og/cancel-wo/tigatitik.png) lalu klik ![Docusaurus Plushie](/img/sa-og/cancel-wo/cancelwo.png)

![Docusaurus Plushie](/img/sa-og/cancel-wo/3.png)

setelah itu muncul form seperti dibawah ini, silahkan masukkan alasan nya mengapa **Work Order** ini harus dibatalkan dan klik ![Docusaurus Plushie](/img/sa-og/cancel-wo/save.png)

![Docusaurus Plushie](/img/sa-og/cancel-wo/4.png)

maka status work order berubah menjadi **Waiting Approval Cancel Work Order by Service Manager** artinya pembatalan work order membutuhkan persetujuan kepala bengkel

![Docusaurus Plushie](/img/sa-og/cancel-wo/5.png)
