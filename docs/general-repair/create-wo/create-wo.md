---
sidebar_position: 4
id: create-wo
title: Create Work Order
tags: [work order, service advisor, SA, estimation, diagnose, purchase part, customer request, job order, part order ]
---

### Create Work Order

![Docusaurus Plushie](/img/general-repair/create-wo/1.png)

> Pembuatan Work Order merupakan kelanjutan dari proses-proses sebelumnya. Work Order merupakan Detail View yang berbentuk Master-Detail Form yang terdiri atas Work Order data dan beberapa detail seperti pada gambar di atas. Berikut adalah elemen-elemen UI yang penting dalam Work Order Detail View:

| Nama Kolom | Deskripsi |
|--------|--------|
| Work Order No |Nomor yang ter generate otomatis oleh sistem. |
| Work Order Date |Tanggal dibuat nya work order |
| Work Order Status | **None** : Status awal WO, **Booking** :WO Booking, **Waiting for reception** : Menunggu penerimaan SA, **Reception**	: Proses Penerimaan, **Waiting for job distribution** : Menunggu distribusi Job, **Waiting for technician**	: Menunggu teknisi, **Production** : Pengerjaan Job oleh teknisi, **Waiting for inspection** : Menunggu Inspeksi, **Inspection** : Inspeksi Job, **Waiting for document checking** : Menunggu pengecekan dokumen, **Document checking**	: Pengecekan dokumen, **Waiting for invoice** : Menunggu pembuatan invoice, **Invoice**	: Pembuatan invoice selesai, **Waiting for payment** : Menunggu pembayaran, **Settlement** : Pembayaran selesai, **Waiting for delivery** : Menunggu penyerahan kendaraan, **Delivered** : Kendaraan telah diserahkan, **Cancel** : dibatalkan, **Waiting Approval** : menunggu persetujuan atasan |
| Repair Type | Jenis perbaikan |
| Mobile Service Type | Diisi khusus jika pelayanan servis mobile seperti TMC dan DMC |
| Express Maintenance | Pilih **Yes** jika Express maintenance, jika tidak pilih **No** |
| Last Mileage Record | Angka kilometer terisi jika unit pernah datang servis sebelumnya |
| Current Mileage record | Angka kilometer saat datang servis.  |
| Customer Delivery Date Request | Tanggal dan jam penyerahan ke kustomer. |
| Customer Waiting | Pilih **Yes** jika customer menunggu, jika tidak pilih **No** |
| Washing	| Pilih **Yes** jika unit kendaraan ingin di cuci, jika tidak pilih **No** |
| SPK Reference | Masukkan **nomor SPK** Pembelian jika diperlukan (tidak Wajib) |
| Remark | Catatan jika diperlukan (tidak wajib) |

Service Advisor dapat meng-input jenis pekerjaan/Job yang akan dilakukan pada tab **Job Order**, bergantung kepada tujuan kedatangan Customer. Selain itu, Service Advisor juga dapat memasukkan keluhan-keluhan yang dialami oleh Customer melalui tab **Customer Request**. Part-part yang dibutuhkan dalam proses service dapat di-input pada tab **Part Order**. Berikut penjelasan untuk kolom-kolom pada masing-masing tab :


---
### Customer Request

![Docusaurus Plushie](/img/general-repair/create-wo/2.png)

![Docusaurus Plushie](/img/general-repair/create-wo/3.png)

Keterangan :
1. Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/addcustomerreq.png).
2. Deskripsikan keluhan atau permintaan kustomer
3. Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/save.png)


---
### Job Order

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
1. Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/addjoborder.png).
2. Lengkapi inputan yang mandatori*
3. Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/save.png)


---
### Part Order

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

![Docusaurus Plushie](/img/general-repair/create-wo/7.png)

Keterangan :
1. Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/addpart.png).
2. Lengkapi inputan yang mandatori *
3. Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/save.png)
