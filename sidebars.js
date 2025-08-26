/**
 * Membuat sidebar memungkinkan Anda untuk:
 - membuat grup dokumen yang berurutan
 - merender sidebar untuk setiap dokumen dalam grup tersebut
 - menyediakan navigasi berikutnya/sebelumnya

 Sidebar dapat dibuat dari struktur folder sistem file, atau didefinisikan secara eksplisit di sini.

 Buatlah sidebar sebanyak yang Anda inginkan.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  documentation: [
    // --- Bagian Awal / Pengantar ---
    {
      type: "doc",
      id: "faq",
      label: "FAQ",
    },
    {
      type: "doc",
      id: "systemoverview",
      label: "System Overview",
    },
    {
      type: "doc",
      id: "basicoperation",
      label: "Basic Operation",
    },
    {
      type: "doc",
      id: "general",
      label: "General",
    },
    {
      type: "doc",
      id: "mraog", // Ditambahkan kembali dari sidebar lama
      label: "MRA Operational Guide",
    },

    // --- Kategori General Repair ---
    {
      type: "category",
      label: "General Repair",
      link: {
        type: 'generated-index',
        title: 'Alur Proses General Repair',
        description: 'Dokumentasi lengkap untuk alur proses General Repair, mulai dari Security Gate hingga Follow Up.',
      },
      items: [
        {
          type: "doc",
          id: "general-repair/security-gate/security-gate",
          label: "Security Gate",
        },
        {
          type: "doc",
          id: "general-repair/reception/reception",
          label: "Reception",
        },
        {
          type: "doc",
          id: "general-repair/job-distribution/job-distribution",
          label: "Job Distribution",
        },
        {
          type: "doc",
          id: "general-repair/production/production",
          label: "Production",
        },
        {
          type: "doc",
          id: "general-repair/inspection/inspection",
          label: "Inspection",
        },
        {
          type: "doc",
          id: "general-repair/doc-checking/doc-checking",
          label: "Document Checking",
        },
        {
          type: "doc",
          id: "general-repair/invoicing/invoicing",
          label: "Invoice",
        },
        {
          type: "doc",
          id: "general-repair/exit-permit/exit-permit",
          label: "Exit Permit",
        },
        {
          type: "doc",
          id: "general-repair/cash-receipt/cash-receipt",
          label: "Payment",
        },
        {
          type: "doc",
          id: "general-repair/follow-up/follow-up",
          label: "Follow Up",
        },
        {
          type: "doc",
          id: "general-repair/approval/approval", // Ditambahkan kembali dari sidebar lama
          label: "Approval",
        },
        {
          type: "doc",
          id: "general-repair/change-sa/change-sa", // Ditambahkan kembali dari sidebar lama
          label: "Change Service Advisor",
        },
      ],
    },

    // --- Kategori MRA ---
    {
      type: "category",
      label: "MRA",
      link: {
        type: 'generated-index',
        title: 'Alur Proses General Repair', // Judul/deskripsi ini sepertinya kesalahan salin-tempel dari General Repair, Anda mungkin ingin menyesuaikannya.
        description: 'Dokumentasi lengkap untuk alur proses General Repair, mulai dari Security Gate hingga Follow Up.', // Sama seperti di atas.
      },
      items: [
        {
          type: "doc",
          id: "MRA/Starrocks",
          label: "Starrocks",
        },
        {
          type: "doc",
          id: "MRA/reports",
          label: "Reports",
        },
        {
          type: "doc",
          id: "MRA/appointments",
          label: "Appointments",
        },
      ],
    },

    // --- Kategori SA ---
    {
      type: "category",
      label: "SA",
      link: {
        type: 'generated-index',
        title: 'Dokumentasi SA',
        description: 'Dokumentasi untuk modul atau proses yang berkaitan dengan SA.',
      },
      items: [
        {
          type: "doc",
          id: "SA/Work Order",
          label: "Work Order",
        },
        {
          type: "doc",
          id: "SA/controller",
          label: "controller",
        },
        {
          type: "doc",
          id: "SA/followup",
          label: "followup",
        },
      ],
    },

    {
      type: "category",
      label: "FOREMAN",
      link: {
        type: 'generated-index',
        title: 'Dokumentasi Foreman',
        description: 'Dokumentasi untuk tugas dan proses yang berkaitan dengan Foreman.',
      },
      items: [
        {
          type: "doc",
          id: "FOREMAN/controller",
          label: "Job Distribution",
        },
      ],
    },

    {
      type: "category",
      label: "TECHNICIAN",
      link: {
        type: 'generated-index',
        title: 'Dokumentasi Technician',
        description: 'Dokumentasi untuk tugas, proses kerja, dan tools yang digunakan oleh Technician.',
      },
      items: [
        {
          type: "doc",
          id: "TECHNICIAN/overview",
          label: "overview",
        },
      ],
    },

    {
      type: "category",
      label: "PARTSMAN",
      link: {
        type: 'generated-index',
        title: 'Dokumentasi Partsman',
        description: 'Dokumentasi untuk tugas, proses kerja, dan tools yang digunakan oleh Partsman.',
      },
      items: [
        {
          type: "doc",
          id: "PARTSMAN/Partman",
          label: "Partman",
        },
      ],
    },

    {
      type: "category",
      label: "BILLING",
      link: {
        type: 'generated-index',
        title: 'Dokumentasi Billing',
        description: 'Dokumentasi untuk tugas, proses kerja, dan tools yang digunakan oleh Billing.',
      },
      items: [
        {
          type: "doc",
          id: "BILLING/serviceinvoice",
          label: "serviceinvoice",
        },
      ],
    },
    {
      type: "category",
      label: "CASHIER",
      link: {
        type: 'generated-index',
        title: 'Dokumentasi Cashier',
        description: 'Dokumentasi untuk tugas, proses kerja, dan tools yang digunakan oleh Cashier.',
      },
      items: [
        {
          type: "doc",
          id: "CASHIER/payment",
          label: "payment",
        },
      ],
    },

    // --- Dokumen Lainnya ---
    {
      type: "doc",
      id: "partmanog",
      label: "PART Operational Guide",
    },
    {
      type: "doc",
      id: "reports",
      label: "Reports",
    },
  ],
};

module.exports = sidebars;