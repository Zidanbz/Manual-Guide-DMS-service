---
sidebar_position: 7
id: partmanog
title: PART Operational Guide
sidebar_label: PART Operational Guide
toc_max_heading_level: 4
hide_title: true
tags: [partman, part, part supply, return part, picking part, part transaction history, part transfer, part stock, part purchase order, request part supply, service part supply, process part supply]
---

Bagian ini akan menjelaskan secara terperinci proses-proses pada aplikasi DMS Service yang dapat diakses oleh bagian part bengkel. Modul ini berfungsi sebagai wadah bagi Partman atau Partlady untuk mengelolah data part, baik part yang keluar dari warehouse maupun part yang masuk ke warehouse. Terdapat macam-macam aktivitas yang akan dijelaskan pada bagian ini.

---
### **Part Purchase Order**

:::warning INFO

proses ini membutuhkan approval

:::

> Merupakan menu yang digunakan untuk pengajuan pembelian part ke vendor pada bahasan ini akan di jelaskan secara terperinci, untuk memulai klik menu **Partman - Part Order** maka akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/1.png)

pada bagian kanan atas klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/neworder.png) lalu akan muncul tampilan seperti di bawah ini.

#### Depo

![Docusaurus Plushie](/img/partman-og/part-purchase-order/2.png)

pilih nama supplier nya pastikan terpilih **DEPO** dan pada inputan **B/O type** pilih angka nya lalu klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/saveform.png) maka akan muncul tampilan seperti di bawah ini.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/3.png)

pada bagian kiri bawah klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/addnew.png), lalu akan muncul form seperti dibawah ini.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/4.png)

sebagai contoh, untuk gambar diatas penulis melakukan order part dengan nama **GROMMET, SCREW** dengan quantity yang di order 2 (dua), caranya pada inputan **Part No** pilih nomor partnya secara otomatis **Part Name** terisi setelah itu input quantity lalu klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/save.png)

![Docusaurus Plushie](/img/partman-og/part-purchase-order/5.png)

maka list part yang akan di order akan muncul pada bagian bawah, selanjut nya klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/generateorderdetail.png) setelah itu pada bagian kanan bawah klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/save.png)

lalu dilanjutkan klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/generatepo.png) dan klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/save.png) seperti gambar dibawah ini

![Docusaurus Plushie](/img/partman-og/part-purchase-order/6.png)

maka Purchase Order akan muncul di list view dengan status **Waiting Approval by Service Manager** artinya membutuhkan approval kepala bengkel.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/6x.png)

setelah Purchase Order di setujui maka status nya berubah menjadi **Approve** seperti gambar di bawah ini.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/6xx.png)

pada bagian kiri list view klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/tigatitik.png) maka akan muncul seperti dibawah ini

pada gambar di bawah klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/exportpo.png) untuk mendownload list PO dalam bentuk format TXT.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/7.png)


#### Non Depo

![Docusaurus Plushie](/img/partman-og/part-purchase-order/18.png)

pilih nama supplier nya sebagai contoh nama supplier yang dimasukkan disini ialah **AHS Makassar** dan pada inputan **B/O type** pilih angka nya lalu klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/saveform.png) maka akan muncul tampilan seperti di bawah ini.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/19.png)

pada bagian kiri bawah klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/addnew.png), lalu akan muncul form seperti dibawah ini.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/20.png)

sebagai contoh, untuk gambar diatas penulis melakukan order part dengan nama **PANEL FR DR X** dengan quantity yang di order 2 (dua), caranya pada inputan **Part No** pilih nomor partnya secara otomatis **Part Name** terisi setelah itu input quantity lalu klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/save.png)

![Docusaurus Plushie](/img/partman-og/part-purchase-order/21.png)

maka list part yang akan di order akan muncul pada bagian bawah, selanjut nya klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/generateorderdetail.png) setelah itu pada bagian kanan bawah klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/save.png)

lalu dilanjutkan klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/generatepo.png) dan klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/save.png) seperti gambar dibawah ini

![Docusaurus Plushie](/img/partman-og/part-purchase-order/22.png)

maka Purchase Order akan muncul di list view dengan status **Waiting Approval by Service Manager** artinya membutuhkan approval kepala bengkel.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/23.png)

setelah Purchase Order di setujui maka status nya berubah menjadi **Approve** seperti gambar di bawah ini.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/24.png)

pada bagian kiri list view klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/tigatitik.png) maka akan muncul seperti dibawah ini

pada gambar di bawah klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/exportpo.png) untuk mendownload list PO dalam bentuk format TXT.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/25.png)

#### Reject Quantity (Qty)

> jika **quantity** part yang di order pada PO lebih atau kurang dan telah di setujui oleh kepala bengkel, maka masih bisa di revisi dengan cara klik button ![Docusaurus Plushie](/img/partman-og/quantity-reject/tigatitik.png) lalu klik ![Docusaurus Plushie](/img/partman-og/quantity-reject/edit.png)

![Docusaurus Plushie](/img/partman-og/quantity-reject/1.png)

maka akan muncul tampilan seperti dibawah ini, pada bagian bawah list view order details klik button ![Docusaurus Plushie](/img/partman-og/quantity-reject/tigatitik.png) lalu klik button ![Docusaurus Plushie](/img/partman-og/quantity-reject/rejectqty.png)

![Docusaurus Plushie](/img/partman-og/quantity-reject/2.png)

akan muncul form seperti dibawah ini.

sebagai contoh pada **Qty Order** di input sebelumnya yaitu 2 (dua) sedangkan **Qty Reject** yang akan direvisi adalah 1 (satu), lalu pada **Reason Object** deskripsikan alasan perubahan quantity nya, lalu klik button ![Docusaurus Plushie](/img/partman-og/quantity-reject/save.png)

![Docusaurus Plushie](/img/partman-og/quantity-reject/3.png)

maka secara otomatis **Qty Order** berubah menjadi 1 (satu) sesuai yang di ubah sebelumnya.

![Docusaurus Plushie](/img/partman-og/quantity-reject/4.png)

#### Cancel PO Detail

---
### **Part Receive**

> menu ini digunakan pada saat part yang telah di order dari depo telah diterima untuk melakukan konfirmasi penerimaan part, pada tampilan sidebar aplikasi sebelah kanan, klik menu **Part Receive** 

![Docusaurus Plushie](/img/partman-og/part-purchase-order/8.png)

#### Depo

Klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/newdepo.png) pada bagian kanan list tampilan

![Docusaurus Plushie](/img/partman-og/part-purchase-order/9.png)

lalu akan muncul form seperti dibawah ini, klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/saveform.png)

![Docusaurus Plushie](/img/partman-og/part-purchase-order/10.png)

perhatikan pada gambar di bawah ada inputan untuk melakukan upload file, perlu di perhatikan file yang di upload ialah **Packaging List** dan **Invoice** dengan format TXT

![Docusaurus Plushie](/img/partman-og/part-purchase-order/11.png)

dimulai upload file **Packing List** seperti gambar di bawah ini lalu klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/save.png)

![Docusaurus Plushie](/img/partman-og/part-purchase-order/12.png)

maka file yang telah di upload telah otomatis muncul pada list.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/13.png)

lalu di lanjutkan mengupload file **Invoice** dan klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/save.png)

![Docusaurus Plushie](/img/partman-og/part-purchase-order/14.png)

setelah kedua file di upload, silahkan klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/save2.png) dan di lanjutkan klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/receiving.png)

![Docusaurus Plushie](/img/partman-og/part-purchase-order/15.png)

<!--
setelah di generate maka muncul tampilan seperti dibawah ini, perhatikan pada inputan pada **Confirm Receive** masukkan jumlah part yang di terima dari supplier, sebagai contoh pada quantity order 2 (dua)maka harus nya confirm receive nya di isi 2 (dua), setelah itu klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/save.png)

![Docusaurus Plushie](/img/partman-og/part-purchase-order/16.png)
-->


maka part yang di order telah di terima dan terecord oleh sistem, seperti gambar di bawah ini.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/17.png)

#### Non Depo

Klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/newnondepo.png) pada bagian kanan list tampilan

![Docusaurus Plushie](/img/partman-og/part-purchase-order/26.png)

lalu akan muncul form seperti dibawah ini, ***Pastikan memilih nama supplier dengan benar sesuai dengan Purchase Order yang dibuat*** klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/saveform.png)

![Docusaurus Plushie](/img/partman-og/part-purchase-order/27.png)

pada bagian bawah tampilan , klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/addnew.png)

![Docusaurus Plushie](/img/partman-og/part-purchase-order/28.png)

setelah itu akan muncul form seperti dibawah ini, pada inputan **Purchase Order No** masukkan nomor PO yang telah dibuat tadi, **invoice No** masukkan nomor invoice dari supplier, lalu pada **Invoice Date** masukkan tanggal invoice supplier nya, dan klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/save.png)

![Docusaurus Plushie](/img/partman-og/part-purchase-order/29.png)

setelah form selesai di input, silahkan klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/save2.png) dan di lanjutkan klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/receiving.png)

![Docusaurus Plushie](/img/partman-og/part-purchase-order/15.png)


---
<!--
### **Part Transfer Request**

:::info

proses ini membutuhkan approval **Kepala Bengkel**, **Kepala Administrasi**, **Kepala Cabang**

:::

> Part Transfer merupakan menu yang digunakan untuk transfer part antar cabang, pada tampilan sidebar sebelah kanan, klik menu **Part Transfer Order List**

![Docusaurus Plushie](/img/partman-og/part-transfer/1x.png)

setelah tampilan list view muncul, pada bagian sebelah kanan tampilan tabel klik button ![Docusaurus Plushie](/img/partman-og/part-transfer/newrequest.png)

![Docusaurus Plushie](/img/partman-og/part-transfer/1.png)

maka akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/partman-og/part-transfer/2.png)

perhatikan gambar dibawah ini bagian inputan **My Branch** 
dan **Request to Branch**,setelah di tentukan di cabang dikirim part nya, klik button ![Docusaurus Plushie](/img/partman-og/part-transfer/saveform.png)
![Docusaurus Plushie](/img/partman-og/part-transfer/3.png)

pada bagian klik button ![Docusaurus Plushie](/img/partman-og/part-transfer/addnew.png), lalu akan muncul gambar seperti di bawah ini.

![Docusaurus Plushie](/img/partman-og/part-transfer/4.png)

sebagai contoh, untuk gambar diatas penulis melakukan order part dengan nama **PIECE, RR BUMPER** dengan quantity yang di transfer 1 (satu), caranya pada inputan **Part No** pilih nomor partnya secara otomatis **Part Name** terisi setelah itu input quantity lalu klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/save.png)

![Docusaurus Plushie](/img/partman-og/part-transfer/5.png)

maka pada bagian bawah tampilan di list view, akan muncul nama part yang akan di kirim, setelah itu klik button ![Docusaurus Plushie](/img/partman-og/part-transfer/generateparttransfer.png), lihat gambar di bawah ini.

![Docusaurus Plushie](/img/partman-og/part-transfer/6.png)

setelah itu klik button ![Docusaurus Plushie](/img/partman-og/part-transfer/transferdoc.png) pada bagian kanan bawah tampilan.

![Docusaurus Plushie](/img/partman-og/part-transfer/7.png)

lalu akan muncul halaman untuk cetak **Part Transfer Delivery Note**, sebagai bukti bahwa cabang pengirim telah melakukan transfer ke cabang yang dituju.

![Docusaurus Plushie](/img/partman-og/part-transfer/8.png)

> Setelah cabang pengirim telah melakukan proses transfer part, maka giliran cabang yang menerima part tersebut untuk menerima part yang telah di transfer, pada bagian kanan tampilan sidebar klik button **Part Supply Transfer List**, maka akan muncul tampilan seperti di bawah ini.

![Docusaurus Plushie](/img/partman-og/part-transfer/9.png)

pada bagian kiri tampilan list view tabel, klik button ![Docusaurus Plushie](/img/partman-og/part-transfer/tigatitik.png) lalu klik button ![Docusaurus Plushie](/img/partman-og/part-transfer/edit.png), dan akan muncul tampilan seperti dibawah ini.

perhatikan gambar di bawah ini, jika button ![Docusaurus Plushie](/img/partman-og/part-transfer/reject.png) yang klik maka part tersebut otomatis akan kembali ke cabang pengirim, sedangkan jika button ![Docusaurus Plushie](/img/partman-og/part-transfer/approve.png) di klik maka proses penerimaan part dari cabang akan di proses.

![Docusaurus Plushie](/img/partman-og/part-transfer/10.png)

setelah button ![Docusaurus Plushie](/img/partman-og/part-transfer/approve.png) di klik maka akan muncul tampilan seperti dibawah ini.

klik button ![Docusaurus Plushie](/img/partman-og/part-transfer/supplypart.png) maka proses transfer part telah selesai dan part yang di terima telah terecord secara sistem

![Docusaurus Plushie](/img/partman-og/part-transfer/11.png)

silahkan cek di menu **Part transfer list** status transfer berubah menjadi **Approved**, artinya part telah di terima oleh cabang yang dituju.

![Docusaurus Plushie](/img/partman-og/part-transfer/12.png)
--->
---
### **Part Stock**

> Menu Part Stock berisikan informasi stok card part dalam bentuk List View seperti pada gambar dibawah ini untuk mengetahui apakah stok tersebut ready di gudang part dan juga berapa quantity yang tersedia, caranya pilih menu **Partman - pilih stock card**

![Docusaurus Plushie](/img/partman-og/part-stock/1.png)

maka akan muncul tampilan seperti di bawah ini.

![Docusaurus Plushie](/img/partman-og/part-stock/2.png)

pada bagian atas list view, di kolom search masukkan no part yang akan di cek histori nya, sebagai contoh penulis memasukkan nomor part **RETAINER CUSHION** , lalu klik button ![Docusaurus Plushie](/img/partman-og/part-stock/search.png)

![Docusaurus Plushie](/img/partman-og/part-stock/3.png)

maka akan terlihat di tampilan seperti di bawah ini

![Docusaurus Plushie](/img/partman-og/part-stock/4.png)


---
### **Part Transaction History**

> Part Transaction History berfungsi untuk menampilkan riwayat transaksi part pada Cabang Part Man aktif, dalam bentuk List View seperti pada gambar dibawah ini, caranya pilih menu **Partman - pilih stock card log**

![Docusaurus Plushie](/img/partman-og/part-transaction-history/1.png)

maka akan muncul tampilan seperti di bawah ini.

![Docusaurus Plushie](/img/partman-og/part-transaction-history/2.png)

pada bagian atas list view, di kolom search masukkan no part yang akan di cek histori nya, sebagai contoh penulis memasukkan nomor part **RETAINER CUSHION** , lalu klik button ![Docusaurus Plushie](/img/partman-og/part-transaction-history/search.png)

![Docusaurus Plushie](/img/partman-og/part-transaction-history/3.png)

maka akan terlihat di tampilan seperti di bawah ini

![Docusaurus Plushie](/img/partman-og/part-transaction-history/4.png)


---
### **Move Warehouse**

:::info

proses ini membutuhkan approval **Kepala Bengkel**

:::

> Menu ini digunakan jika ada user atau karyawan yang meminjam part dari gudang baik itu untuk kebutuhan event maupun untuk kebutuhan display, cara nya ialah pilih menu **Partman - Move Warehouse**

lalu pada bagian kanan kiri atas klik button ![Docusaurus Plushie](/img/partman-og/move-warehouse/neworder.png)

![Docusaurus Plushie](/img/partman-og/move-warehouse/1.png)

lalu pada inputan **PIC** masukkan nama penanggung jawab yang meminjam dan inputan **Move To Warehouse** pilih opsi tujuan peminjaman lalu klik button ![Docusaurus Plushie](/img/partman-og/move-warehouse/saveform.png)

![Docusaurus Plushie](/img/partman-og/move-warehouse/2.png)

maka akan muncul tampilan seperti di bawah ini, klik button ![Docusaurus Plushie](/img/partman-og/move-warehouse/addnew.png)

![Docusaurus Plushie](/img/partman-og/move-warehouse/3.png)

pada form di bawah ini sebagai contoh, untuk gambar dibawah penulis mengeluarkan part dengan nama **TMO BRAKE CLEANER** dengan quantity yang di keluarkan 3 (tiga), caranya pada inputan **Part No** pilih nomor partnya secara otomatis **Part Name** terisi setelah itu input quantity lalu klik button ![Docusaurus Plushie](/img/partman-og/move-warehouse/save.png)

![Docusaurus Plushie](/img/partman-og/move-warehouse/4.png)

maka part yang telah dinput akan muncul di list view dibawah, setelah itu klik button ![Docusaurus Plushie](/img/partman-og/move-warehouse/movewarehouse.png)

![Docusaurus Plushie](/img/partman-og/move-warehouse/5.png)

setelah form move warehouse selesai diisi, maka sisa menunggu approval dari **Kepala Bengkel**, sambil menunggu approval silahkan cetak terlebih dahulu bukti peminjaman dan di approve secara manual antara pihak partsman dan juga Penanggung jawab, dengan cara klik button ![Docusaurus Plushie](/img/partman-og/move-warehouse/titiktiga.png) lalu klik ![Docusaurus Plushie](/img/partman-og/move-warehouse/print.png)

![Docusaurus Plushie](/img/partman-og/move-warehouse/6.png)

![Docusaurus Plushie](/img/partman-og/move-warehouse/7.png)

setelah form di setujui maka status nya berubah menjadi **Moved** seperti pada gambar di bawah ini.

![Docusaurus Plushie](/img/partman-og/move-warehouse/8.png)

---
### **Service Part Supply**

> Untuk Service Part Supply menangani semua hal yang berkaitan dengan proses supply part dari Part Man ke Teknisi, termasuk Part Booking dan Part Return dari Teknisi ke Part Man yang dapat di akses melalui **partman->supply part**, maka akan muncul tampilan seperti dibawah ini.


Lalu partman akan melakukan pencarian part yang akan disupply berdasarkan nomor plat atau nomor Work Order, sebagai contoh pencarian berdasarkan nomor plat kendaraan kemudian klik ENTER atau tekan tombol ![Docusaurus Plushie](/img/partman-og/service-part-supply/search.png). Akan muncul data Work Order lalu klik tombol ![Docusaurus Plushie](/img/partman-og/service-part-supply/supplypart.png).

![Docusaurus Plushie](/img/partman-og/service-part-supply/2.png)

Setelah itu lanjut ke proses di bawah ini.


---
### **Proccess Part Supply**

> Partman dapat memonitor permintaan supply part untuk Work Order dari Service Advisor melalui menu Part Supply. dapat dilihat daftar permintaan Part dari Service Advisor berdasarkan nomor Work Order. Sebelum melakukan proses supply terlebih dahulu Partman harus merubah status part menjadi Reserved, pilih Part yang akan di supply, tekan tombol ![Docusaurus Plushie](/img/partman-og/service-part-supply/duagaris.png) klik tombol ![Docusaurus Plushie](/img/partman-og/service-part-supply/reserve.png) lalu pilih ![Docusaurus Plushie](/img/partman-og/service-part-supply/yes-reserve.png). 

![Docusaurus Plushie](/img/partman-og/service-part-supply/3.png)


---
### **Part Picking**

> Partman dapat langsung men-supply Part yang diminta dengan cara menekan tombol ![Docusaurus Plushie](/img/partman-og/service-part-supply/duagaris.png) klik tombol ![Docusaurus Plushie](/img/partman-og/service-part-supply/pick.png) lalu pilih ![Docusaurus Plushie](/img/partman-og/service-part-supply/yes-picked.png), jumlah yang di-supply berjumlah sama dengan jumlah permintaan Service Advisor. Partman tidak dapat merubah jumlah supply dengan meng-edit kolom Quantity, jika ingin melakukan perubahan quantity bisa di lakukan oleh Service Advisor.

![Docusaurus Plushie](/img/partman-og/service-part-supply/4.png)


---
### **Print Part Picking Slip**

> Sebagai bukti serah terima Part antara Partman dan Teknisi, Partman dapat mencetak Part Packing Slip, pada bagian bawah tampilan.

![Docusaurus Plushie](/img/partman-og/service-part-supply/5.png)

![Docusaurus Plushie](/img/partman-og/service-part-supply/6.png)


---
### **Return Part**

:::info

proses ini membutuhkan approval **Kepala Bengkel**

:::

> Jika ada pengembalian part yang sudah di-pick oleh Teknisi, Partman dapat meng-input pengembalian part tersebut ke Main Warehouse dengan cara tekan tombol ![Docusaurus Plushie](/img/partman-og/service-part-supply/duagaris.png), lalu klik ![Docusaurus Plushie](/img/partman-og/service-part-supply/return.png) dan klik ![Docusaurus Plushie](/img/partman-og/service-part-supply/yes-return.png),seperti pada gambar dibawah ini.

![Docusaurus Plushie](/img/partman-og/service-part-supply/7.png)

![Docusaurus Plushie](/img/partman-og/service-part-supply/8.png)

Setelah part dikembalikan, Part Status yang sebelumnya Part Status Picked berubah menjadi status None.