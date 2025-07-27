// Données des véhicules
const vehicles = [
  // Citroen C3 - Vente
    {
        id: 1,
    brand: "Citroen",
    model: "C3",
    year: "",
    mileage: "",
    price: "",
    type: "vente", // vente ou location
        images: [
      "img/citroen c3/im1.jpg",
      "img/citroen c3/852f897a-063b-4ce2-ae5f-ca3ae6b5501a.jpg",
      "img/citroen c3/4f077fa0-9a3a-40aa-b130-7ee82c6ace32.jpg",
      "img/citroen c3/e373a36e-e150-465e-9b18-6e1d33bad6a5.jpg",
      "img/citroen c3/d3288720-0541-4b4b-8a82-24ebdeb2dad3.jpg",
      "img/citroen c3/730ad9e1-8a31-4b66-9eb2-a0abc6e5cf18.jpg",
      "img/citroen c3/c58d584b-a2ae-4288-aacf-1d9ee77b7a57.jpg"
    ],
    description: "Citroen C3, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Citroen Grise - Location
    {
        id: 2,
    brand: "Citroen",
    model: "Grise",
    year: "",
    mileage: "",
    price: "",
    type: "location",
        images: [
      "img/citroen grise/im1.jpg",
      "img/citroen grise/1c982f72-177e-45f3-8b5d-7bc0a54efb38.jpg",
      "img/citroen grise/7b94b013-c917-4262-8a41-738c90215ad0.jpg",
      "img/citroen grise/152b5f6e-ddee-4e52-b49a-466b01e0d698.jpg",
      "img/citroen grise/f07e032f-e6c5-4467-b56d-69ef678e47e7.jpg",
      "img/citroen grise/e9da7fe2-c0c0-42ba-bb04-0336584d876a.jpg",
      "img/citroen grise/c0f15c90-43c4-4d6c-a19b-0f56ae546ad1.jpg"
    ],
    description: "Citroen grise, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Citroen Jaune - Vente
    {
        id: 3,
    brand: "Citroen",
    model: "Jaune",
    year: "",
    mileage: "",
    price: "",
    type: "vente",
        images: [
      "img/citroen jaune/im1.jpg",
      "img/citroen jaune/c14b912a-3db8-4bbd-8e9a-bc8c215f7892.jpg",
      "img/citroen jaune/de44b689-5383-405e-8992-007ed22fe636.jpg",
      "img/citroen jaune/15fb2005-7537-4574-b0f5-4fd338cd502b.jpg",
      "img/citroen jaune/948709f5-94be-4d32-9ea5-8f53460accdf.jpg",
      "img/citroen jaune/b5e83397-a0e2-45d3-aea7-9def63f47b13.jpg",
      "img/citroen jaune/541d8a61-dc1e-4c33-97b2-073ff36a5395.jpg"
    ],
    description: "Citroen jaune, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Citroen Noir - Location
    {
        id: 4,
    brand: "Citroen",
    model: "Noir",
    year: "",
    mileage: "",
    price: "",
    type: "location",
        images: [
      "img/citroen noir/im1.jpg",
      "img/citroen noir/826a402f-6f9c-4c7a-98d5-3eb0e746be90.jpg",
      "img/citroen noir/049f36c0-84f5-4189-a384-2e540d963b19.jpg",
      "img/citroen noir/6b17bff5-6e40-4d4f-912a-d36737ceeb66.jpg",
      "img/citroen noir/cb9749af-4f8b-4f1b-8212-10d0feb6c065.jpg",
      "img/citroen noir/f8a93560-7266-4951-84c6-a562a9806411.jpg",
      "img/citroen noir/d44d0682-5d65-488d-8dc3-7f8f7486b2d0.jpg",
      "img/citroen noir/f797c8dc-2b63-4baf-9764-9b4df1ef8ae7.jpg"
    ],
    description: "Citroen noir, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Ford Camion - Vente
    {
        id: 5,
    brand: "Ford",
    model: "Camion",
    year: "",
    mileage: "",
    price: "",
    type: "vente",
        images: [
      "img/ford camion/im1.jpg",
      "img/ford camion/f76bffc8-c649-434a-b7d9-0b5ae2ae5137.jpg",
      "img/ford camion/680406eb-fa36-4095-a4f7-dde2b323f729.jpg",
      "img/ford camion/adaeb3c8-2dfa-4d3a-ac15-912b4cf136b0.jpg",
      "img/ford camion/397bd7e6-ecae-4e49-b565-1bc5d8d3c498.jpg",
      "img/ford camion/226e595d-f30d-4ff2-bb07-196a11295222.jpg",
      "img/ford camion/f3c5ac74-7d6d-4a4f-ba5a-2afb0d4c450a.jpg",
      "img/ford camion/5dd32a90-dda3-4734-a629-d94dce0ccc1b.jpg"
    ],
    description: "Ford camion, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Opel - Location
    {
        id: 6,
    brand: "Opel",
    model: "",
    year: "",
    mileage: "",
    price: "",
    type: "location",
    images: [
      "img/opel/im1.jpg",
      "img/opel/3c048917-0cd9-4e94-b83d-86b419bc3472.jpg",
      "img/opel/82059f69-cfb1-4e89-a957-59fc174c56f6.jpg",
      "img/opel/854a7a65-e998-41ba-be2f-2418b635ea78.jpg",
      "img/opel/4670ea36-e4a0-4028-b10d-2573c05e2a66.jpg",
      "img/opel/a33807be-7512-43d3-acc1-4a1e885297bb.jpg",
      "img/opel/5520abe6-5206-41d1-ab42-62bc2a0e700b.jpg",
      "img/opel/e0acaaf4-ca58-42af-b8aa-db643700dd13.jpg"
    ],
    description: "Opel, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Opel Noir - Vente
  {
    id: 7,
    brand: "Opel",
    model: "Noir",
    year: "",
    mileage: "",
    price: "",
    type: "vente",
    images: [
      "img/opel noir/im1.jpg",
      "img/opel noir/5b1adf32-b929-4a19-9208-876e6fa509e0.jpg",
      "img/opel noir/ae35a08a-bdd6-4f47-867f-d6c7d9ee1ce9.jpg",
      "img/opel noir/2c48813c-f0de-4b3b-844b-987a55d87377.jpg",
      "img/opel noir/d511ab2e-407e-4d2f-8946-19edd0f0fdf8.jpg"
    ],
    description: "Opel noir, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Peugeot 308 - Vente
  {
    id: 8,
    brand: "Peugeot",
    model: "308",
    year: "",
    mileage: "",
    price: "",
    type: "vente",
    images: [
      "img/peugot 308/im1.jpg",
      "img/peugot 308/799ead31-7db6-4d87-9a25-978df21bbd00.jpg",
      "img/peugot 308/c3eb6966-6973-4492-838c-fd2ac5418bb8.jpg",
      "img/peugot 308/4f78a3e4-a9ad-4d72-962a-ce36fae16029.jpg",
      "img/peugot 308/c2fc66e3-7899-4084-8175-12b97aa94316.jpg",
      "img/peugot 308/8dac19b4-39c3-4f7b-a676-0c92327be87f.jpg",
      "img/peugot 308/e89eec56-6366-4193-8034-93c0d98b2160.jpg"
    ],
    description: "Peugeot 308, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Peugeot 308 EJ - Location
  {
    id: 9,
    brand: "Peugeot",
    model: "308 EJ",
    year: "",
    mileage: "",
    price: "",
    type: "location",
    images: [
      "img/peugot 308 EJ/im1.jpg",
      "img/peugot 308 EJ/c47d8ad3-de65-4455-b146-124634a2fbb0.jpg",
      "img/peugot 308 EJ/5212b602-20cb-48b1-a9be-4109806cfb46.jpg",
      "img/peugot 308 EJ/9a5647b0-8a54-4d26-9e80-29aa69b76428.jpg",
      "img/peugot 308 EJ/ff16b369-ad3a-44ca-8f39-7ecebfc5b3ec.jpg",
      "img/peugot 308 EJ/f2e9e62e-6948-4295-abda-f1cd20828d5c.jpg",
      "img/peugot 308 EJ/9fc57b68-397f-4680-bf5f-f0d86d1cdcd2.jpg",
      "img/peugot 308 EJ/cc925dfa-675e-410e-b9f9-d007b35585d0.jpg"
    ],
    description: "Peugeot 308 EJ, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Peugeot 4007 - Vente
  {
    id: 10,
    brand: "Peugeot",
    model: "4007",
    year: "",
    mileage: "",
    price: "",
    type: "vente",
    images: [
      "img/peugot 4007/im1.jpg",
      "img/peugot 4007/900be663-f25e-45f1-8199-6487798025ba.jpg",
      "img/peugot 4007/b44f9314-a682-44cd-9b10-7fe25b12c22b.jpg",
      "img/peugot 4007/337c831f-bca0-4457-8e56-6d476ab9a900.jpg",
      "img/peugot 4007/977aa122-a245-407d-9764-c53339df6fef.jpg",
      "img/peugot 4007/ba2cdc1e-95e7-4496-b0bb-c3781aa7df16.jpg",
      "img/peugot 4007/92b8985e-2a36-4154-8247-9d505ed33046.jpg"
    ],
    description: "Peugeot 4007, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Peugeot DW - Location
  {
    id: 11,
    brand: "Peugeot",
    model: "DW",
    year: "",
    mileage: "",
    price: "",
    type: "location",
    images: [
      "img/peugot DW/im1.jpg",
      "img/peugot DW/0ef9e233-7288-42f9-9f19-978cd2a2849f.jpg",
      "img/peugot DW/50f3910e-5b45-49cd-be7a-d9df29a98b9e.jpg",
      "img/peugot DW/8353dee4-7075-49aa-89f1-48adfeafd563.jpg",
      "img/peugot DW/dc4815dc-a5ed-463c-93d9-55cab0b1a7cf.jpg",
      "img/peugot DW/1aa87ddd-e19e-4bae-8788-7be98c0a4d56.jpg",
      "img/peugot DW/9951dcf2-9039-4ca1-bd08-141343110ef1.jpg",
      "img/peugot DW/238d2fcd-2712-4cbf-ae4d-ad86b08235e5.jpg"
    ],
    description: "Peugeot DW, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Peugeot FD - Vente
  {
    id: 12,
    brand: "Peugeot",
    model: "FD",
    year: "",
    mileage: "",
    price: "",
    type: "vente",
    images: [
      "img/peugot FD/im1.jpg",
      "img/peugot FD/a1bfc08a-c27e-4a64-b4a7-fabe042867f4.jpg"
    ],
    description: "Peugeot FD, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Peugeot Grise - Location
  {
    id: 13,
    brand: "Peugeot",
    model: "Grise",
    year: "",
    mileage: "",
    price: "",
    type: "location",
    images: [
      "img/peugot grise/im1.jpg",
      "img/peugot grise/a62f5e6e-592c-47fd-8018-64455d34c7af.jpg",
      "img/peugot grise/65f43d52-bc26-4790-b2f4-26d08d588e13.jpg",
      "img/peugot grise/cc1d0c5a-4404-4458-af47-dca5d20126e2.jpg",
      "img/peugot grise/9fd81a79-e65b-480d-8d30-3ac163f45791.jpg",
      "img/peugot grise/7f3f83a4-61c9-4b4b-8e39-ca27f3f165f7.jpg",
      "img/peugot grise/703a3ca9-1710-4f9f-ac75-b344021d7e75.jpg",
      "img/peugot grise/34e8a962-6a02-481c-8818-364cb0388fb1.jpg"
    ],
    description: "Peugeot grise, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Peugeot Noir - Vente
  {
    id: 14,
    brand: "Peugeot",
    model: "Noir",
    year: "",
    mileage: "",
    price: "",
    type: "vente",
    images: [
      "img/peugot noir/im1.jpg",
      "img/peugot noir/b95c9cfe-976f-4e5c-89ab-d9d008189229.jpg",
      "img/peugot noir/c2c38cfa-61c4-4af7-8556-94fc8430a999.jpg",
      "img/peugot noir/2390bcda-f171-4e29-838b-d4985cc8d649.jpg",
      "img/peugot noir/e92cbdba-a446-490f-bf27-648ccb6f8f6e.jpg",
      "img/peugot noir/34b2b766-dc9d-4a84-b081-0e3ee5109675.jpg",
      "img/peugot noir/9c5a47e1-8fc7-4b78-a4de-054487a0a4f0.jpg",
      "img/peugot noir/c764a245-586c-4aff-834d-bd3fc00e995b.jpg"
    ],
    description: "Peugeot noir, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Peugeot Rouge - Location
  {
    id: 15,
    brand: "Peugeot",
    model: "Rouge",
    year: "",
    mileage: "",
    price: "",
    type: "location",
    images: [
      "img/peugot rouge/im1.jpg",
      "img/peugot rouge/20181df5-25df-4783-8edf-2fae30c92677.jpg",
      "img/peugot rouge/d128c8fa-d1ad-4953-a2d0-bfafc85d0fda.jpg",
      "img/peugot rouge/7807dfa2-bc69-47ac-aff2-71df48de4c6f.jpg",
      "img/peugot rouge/a664bc61-d5a6-4c4c-a4d7-1d31aef662af.jpg",
      "img/peugot rouge/c74d4fba-5d6e-43a9-b029-9ce6a27a4076.jpg",
      "img/peugot rouge/dbb27b00-74e8-4962-a147-ebb4882b20ad.jpg"
    ],
    description: "Peugeot rouge, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Peugeot Trafic - Vente
  {
    id: 16,
    brand: "Peugeot",
    model: "Trafic",
    year: "",
    mileage: "",
    price: "",
    type: "vente",
    images: [
      "img/pepugot trafic/im1.jpg",
      "img/pepugot trafic/1317e285-e38b-49af-af44-7468eacf7e1c.jpg",
      "img/pepugot trafic/3fa890e5-4369-41e0-9b3c-809e6f2433a3.jpg",
      "img/pepugot trafic/9254920a-258d-4eed-b5aa-017df17e516f.jpg",
      "img/pepugot trafic/cdf114bf-127b-42a1-acb7-93a373860d70.jpg",
      "img/pepugot trafic/6e766c4e-fd37-4fde-899d-b32290c1c573.jpg",
      "img/pepugot trafic/b429257b-2717-4a2d-9d01-b37619d431e8.jpg",
      "img/pepugot trafic/8f460af3-cc62-42d2-b1df-8df90b27aac2.jpg",
      "img/pepugot trafic/8c15f741-e40a-438d-bdd1-6024ce69b12e.jpg"
    ],
    description: "Peugeot trafic, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Picasso - Location
  {
    id: 17,
    brand: "Picasso",
    model: "",
    year: "",
    mileage: "",
    price: "",
    type: "location",
    images: [
      "img/picasso/im1.jpg",
      "img/picasso/d4eb5bc0-9357-4f84-a14c-159339e33d26.jpg",
      "img/picasso/c7f065ec-7eba-4557-b014-b4cb54df1167.jpg",
      "img/picasso/567150f2-f7b3-4d39-bd36-db9a6f314153.jpg",
      "img/picasso/916a3310-efa4-4755-aaec-721ae84c9680.jpg",
      "img/picasso/1b41c4cf-2533-40ad-a940-41bdbe0d94e7.jpg",
      "img/picasso/cb4d675f-98a6-4eba-ad05-af065107b693.jpg",
      "img/picasso/0d40549d-aba0-48a5-9775-e255b16af369.jpg"
    ],
    description: "Picasso, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Renault Blanche - Vente
  {
    id: 18,
    brand: "Renault",
    model: "Blanche",
    year: "",
    mileage: "",
    price: "",
    type: "vente",
    images: [
      "img/renaut blanche/im1.jpg",
      "img/renaut blanche/54f311ec-898a-4233-a1de-65b7d0036b4d.jpg",
      "img/renaut blanche/bbb18c09-1c54-44bf-9e2a-9d3ce5db21af.jpg",
      "img/renaut blanche/21f64645-dcaa-49fc-9359-ce6bae44e52a.jpg",
      "img/renaut blanche/08c97783-ffc7-4cbf-94bb-524a9db93ffa.jpg",
      "img/renaut blanche/c43159fe-2cca-499c-86fc-0969830403db.jpg",
      "img/renaut blanche/287a81bd-860f-4079-aa9e-d8004644d2c7.jpg"
    ],
    description: "Renault blanche, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Renault Camion - Location
  {
    id: 19,
    brand: "Renault",
    model: "Camion",
    year: "",
    mileage: "",
    price: "",
    type: "location",
    images: [
      "img/renaut camion/im1.jpg",
      "img/renaut camion/358f5401-6f03-4c56-91fa-5d53a2af23d0.jpg",
      "img/renaut camion/a0ac52dd-fc69-4a75-9980-b198bd8ea5ae.jpg",
      "img/renaut camion/655df76a-dbff-427b-9ac1-932cce6e8955.jpg",
      "img/renaut camion/77e28f5b-10d6-481b-b6d7-307a3a5247a4.jpg",
      "img/renaut camion/31f03c51-99fb-4a07-9e4c-1a72f44ccd14.jpg",
      "img/renaut camion/65bb90b3-c26d-4978-a1ca-e3dab962c0b1.jpg",
      "img/renaut camion/f8c7737e-9ad0-4624-95e3-010baa7e5878.jpg"
    ],
    description: "Renault camion, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Renault Camion FQ - Vente
  {
    id: 20,
    brand: "Renault",
    model: "Camion FQ",
    year: "",
    mileage: "",
    price: "",
    type: "vente",
    images: [
      "img/renaut camion FQ/im1.jpg",
      "img/renaut camion FQ/89074649-a477-4ed8-aca9-2630af9af850.jpg",
      "img/renaut camion FQ/fcc222a5-5644-455f-ad25-1796f2ffbf0c.jpg",
      "img/renaut camion FQ/b2ea5cf5-aa4a-4faf-aeee-80eb7f260a5f.jpg",
      "img/renaut camion FQ/8830b1ed-42c1-4b9e-8570-34d6019875e6.jpg",
      "img/renaut camion FQ/6de7cf04-eaba-4b67-ba5e-0141a35f52b2.jpg",
      "img/renaut camion FQ/d8b5ff51-ee58-4d73-a9c9-7a1c82decff9.jpg",
      "img/renaut camion FQ/07e97c97-ef4b-49c1-96ef-154101be8ec7.jpg"
    ],
    description: "Renault camion FQ, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Senic - Location
  {
    id: 21,
    brand: "Senic",
    model: "",
    year: "",
    mileage: "",
    price: "",
    type: "location",
    images: [
      "img/senic/im1.jpg",
      "img/senic/3b0e9dba-a3b4-4975-a287-8bd5855d64a2.jpg",
      "img/senic/6395136b-d61d-46e2-a75d-2bb4fe6276ab.jpg",
      "img/senic/6fc96dd3-5930-4c9e-b445-4aa3c0b07436.jpg",
      "img/senic/28780ca9-f2ec-49c1-9a1b-b038070bf6ca.jpg",
      "img/senic/3cbd905b-96aa-4e7f-885a-fcd3d239978a.jpg",
      "img/senic/9af24cb1-1f0c-4f0f-be70-1b6ef544d40b.jpg",
      "img/senic/6387b1c8-542c-4148-b205-fb4399999a0f.jpg"
    ],
    description: "Senic, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
  },
  // Telsa - Vente
  {
    id: 22,
    brand: "Telsa",
    model: "",
    year: "",
    mileage: "",
    price: "",
    type: "vente",
        images: [
      "img/telsa/im1.jpg",
      "img/telsa/cfc45132-a11c-444d-a3e5-fc9624a384b5.jpg",
      "img/telsa/71a4555d-509f-4630-ab33-337fd03fbfb3.jpg",
      "img/telsa/d6cb5f36-f56a-40cc-b4f6-5420b667cad4.jpg",
      "img/telsa/83b8ae3b-3b32-4440-8053-b5664809362e.jpg",
      "img/telsa/add727d5-7fea-419d-aaac-47214a5910d3.jpg",
      "img/telsa/88f47fa3-fa47-4332-be11-6e250f253c2c.jpg",
      "img/telsa/ca44d042-2700-4141-8585-24c14558d457.jpg"
    ],
    description: "Telsa, voir toutes les photos pour plus de détails.",
    features: [],
    fuel: "",
    transmission: "",
    doors: "",
    power: ""
    }
];

// Variables globales
let currentImageIndex = 0;
let currentVehicle = null;
let currentFilter = 'all'; // Filtre par type (vente/location)
let currentBrandFilter = 'all-brands'; // Filtre par marque

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    
    // Charger les véhicules sur la page d'accueil
    if (document.getElementById('vehicles-grid')) {
        loadVehicles();
        initializeFilterButtons();
    }
    
    // Charger les détails du véhicule si nous sommes sur la page de détails
    if (document.getElementById('car-details-content')) {
        loadCarDetails();
    }
    
    // Initialiser le formulaire de contact
    if (document.getElementById('contact-form')) {
        initializeContactForm();
    }
    
    // Smooth scrolling pour les ancres
    initializeSmoothScrolling();
});

// Navigation mobile
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Changer l'icône
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Fermer le menu lors du clic sur un lien
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Permettre la navigation normale
                const href = this.getAttribute('href');
                
                // Fermer le menu pour tous les liens
                navMenu.classList.remove('active');
                navToggle.querySelector('i').className = 'fas fa-bars';
                
                // Si c'est un lien vers la même page (ancre), faire défiler en douceur
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
                // Si c'est un lien vers une autre page, la navigation se fera normalement
            });
        });
        
        // Fermer le menu avec la touche Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.querySelector('i').className = 'fas fa-bars';
            }
        });
    }
}

// Initialiser les boutons de filtre
function initializeFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterType = this.getAttribute('data-filter');
            
            // Déterminer le type de filtre (type de transaction ou marque)
            if (filterType === 'all' || filterType === 'vente' || filterType === 'location') {
                // Filtre par type de transaction
                document.querySelectorAll('.filter-buttons:first-child .filter-btn').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                currentFilter = filterType;
            } else {
                // Filtre par marque
                document.querySelectorAll('.filter-buttons:last-child .filter-btn').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                currentBrandFilter = filterType;
            }
            
            // Recharger les véhicules avec les filtres
            loadVehicles();
        });
    });
}

// Charger les véhicules
function loadVehicles() {
    const vehiclesGrid = document.getElementById('vehicles-grid');
    if (!vehiclesGrid) return;
    
    vehiclesGrid.innerHTML = '';
    
    // Filtrer les véhicules selon les filtres actuels
    let filteredVehicles = vehicles;
    
    // Filtre par type de transaction
    if (currentFilter !== 'all') {
        filteredVehicles = filteredVehicles.filter(vehicle => vehicle.type === currentFilter);
    }
    
    // Filtre par marque
    if (currentBrandFilter !== 'all-brands') {
        filteredVehicles = filteredVehicles.filter(vehicle => 
            vehicle.brand.toLowerCase() === currentBrandFilter.toLowerCase()
        );
    }
    
    filteredVehicles.forEach(vehicle => {
        const vehicleCard = createVehicleCard(vehicle);
        vehiclesGrid.appendChild(vehicleCard);
    });
}

// Créer une carte de véhicule
function createVehicleCard(vehicle) {
    const card = document.createElement('div');
    card.className = 'vehicle-card fade-in';
    card.onclick = () => viewVehicleDetails(vehicle.id);
    
    const typeLabel = vehicle.type === 'vente' ? 'Vente' : 'Location';
    const typeClass = vehicle.type === 'vente' ? 'vente' : 'location';
    // Faux prix si vide
    let fakePrice = vehicle.price;
    if (!fakePrice) {
        fakePrice = vehicle.type === 'vente' ? `${getRandomInt(8900, 29900).toLocaleString('fr-FR')} €` : `${getRandomInt(290, 990).toLocaleString('fr-FR')} €/mois`;
    }
    // Bouton action
    const actionBtn = vehicle.type === 'vente'
        ? '<button class="btn-primary">Acheter</button>'
        : '<button class="btn-primary">Louer</button>';
    
    // Utiliser l'image im1.jpg comme image principale (première image du tableau)
    const mainImage = vehicle.images[0];
    
    card.innerHTML = `
        <div class="vehicle-image">
            <img src="${mainImage}" alt="${vehicle.brand} ${vehicle.model}" />
            <div class="vehicle-type ${typeClass}">${typeLabel}</div>
            <div class="vehicle-price">${fakePrice}</div>
        </div>
        <div class="vehicle-info">
            <h3 class="vehicle-title">${vehicle.brand} ${vehicle.model}</h3>
            <div class="vehicle-specs">
                <span><i class="fas fa-calendar"></i> ${vehicle.year || 'N/A'}</span>
                <span><i class="fas fa-road"></i> ${vehicle.mileage || 'N/A'} km</span>
                <span><i class="fas fa-gas-pump"></i> ${vehicle.fuel || 'N/A'}</span>
            </div>
            <p class="vehicle-description">${vehicle.description}</p>
            ${actionBtn}
        </div>
    `;
    
    return card;
}

// Générer un prix aléatoire réaliste
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Voir les détails d'un véhicule
function viewVehicleDetails(vehicleId) {
    // Stocker l'ID du véhicule dans le localStorage pour la page de détails
    localStorage.setItem('selectedVehicleId', vehicleId);
    window.location.href = 'car-details.html';
}

// Charger les détails du véhicule
function loadCarDetails() {
    const vehicleId = localStorage.getItem('selectedVehicleId');
    if (!vehicleId) {
        // Rediriger vers l'accueil si aucun véhicule sélectionné
        window.location.href = 'index.html';
        return;
    }
    
    currentVehicle = vehicles.find(v => v.id == vehicleId);
    if (!currentVehicle) {
        window.location.href = 'index.html';
        return;
    }
    
    renderCarDetails();
}

// Afficher les détails du véhicule
function renderCarDetails() {
    const container = document.getElementById('car-details-content');
    if (!container || !currentVehicle) return;
    
    container.innerHTML = `
        <div class="car-details-grid">
            <div class="car-gallery">
                <div class="gallery-main">
                    <img id="main-image" src="${currentVehicle.images[0]}" alt="${currentVehicle.brand} ${currentVehicle.model}" />
                    <button class="gallery-nav gallery-prev" onclick="previousImage()">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="gallery-nav gallery-next" onclick="nextImage()">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                <div class="gallery-thumbnails">
                    ${currentVehicle.images.map((img, index) => 
                        `<img src="${img}" alt="Photo ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}" onclick="selectImage(${index})" />`
                    ).join('')}
                </div>
            </div>
            
            <div class="car-info">
                <h1>${currentVehicle.brand} ${currentVehicle.model}</h1>
                <div class="car-price">${formatPrice(currentVehicle.price)} €</div>
                
                <div class="car-specs-grid">
                    <div class="spec-item">
                        <span class="spec-label">Année</span>
                        <span class="spec-value">${currentVehicle.year}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Kilométrage</span>
                        <span class="spec-value">${currentVehicle.mileage} km</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Carburant</span>
                        <span class="spec-value">${currentVehicle.fuel}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Transmission</span>
                        <span class="spec-value">${currentVehicle.transmission}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Portes</span>
                        <span class="spec-value">${currentVehicle.doors}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Puissance</span>
                        <span class="spec-value">${currentVehicle.power}</span>
                    </div>
                </div>
                
                <div class="car-description">
                    <h3>Description</h3>
                    <p>${currentVehicle.description}</p>
                    
                    <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem;">Équipements</h4>
                    <ul style="list-style: none; padding: 0;">
                        ${currentVehicle.features.map(feature => 
                            `<li style="padding: 0.25rem 0; color: var(--text-light);"><i class="fas fa-check" style="color: var(--gold-accent); margin-right: 0.5rem;"></i>${feature}</li>`
                        ).join('')}
                    </ul>
                </div>
                
                <div class="car-actions">
                    <a href="tel:+33123456789" class="btn-call">
                        <i class="fas fa-phone"></i> Appeler
                    </a>
                    <a href="contact.html" class="btn-primary">Demander des infos</a>
                </div>
            </div>
        </div>
    `;
    
    currentImageIndex = 0; // Commencer par la première image (index 0)
}

// Navigation de la galerie
function previousImage() {
    if (!currentVehicle) return;
    currentImageIndex = (currentImageIndex - 1 + currentVehicle.images.length) % currentVehicle.images.length;
    updateMainImage();
}

function nextImage() {
    if (!currentVehicle) return;
    currentImageIndex = (currentImageIndex + 1) % currentVehicle.images.length;
    updateMainImage();
}

function selectImage(index) {
    currentImageIndex = index;
    updateMainImage();
}

function updateMainImage() {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (mainImage && currentVehicle) {
        mainImage.src = currentVehicle.images[currentImageIndex];
        
        // Mettre à jour les vignettes actives
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === currentImageIndex);
        });
    }
}

// Formulaire de contact
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les données du formulaire
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validation simple
        if (!data.name || !data.email || !data.subject || !data.message) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        
        // Simuler l'envoi du formulaire
        showSuccessMessage();
        form.reset();
    });
}

function showSuccessMessage() {
    // Créer et afficher un message de succès
    const message = document.createElement('div');
    message.className = 'success-message';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--gold-accent);
        color: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: var(--shadow-medium);
        z-index: 10000;
        text-align: center;
        max-width: 400px;
    `;
    message.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
        <h3>Message envoyé avec succès !</h3>
        <p>Nous vous recontacterons dans les plus brefs délais.</p>
    `;
    
    document.body.appendChild(message);
    
    // Supprimer le message après 3 secondes
    setTimeout(() => {
        document.body.removeChild(message);
    }, 3000);
}

// Smooth scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utilitaires
function formatPrice(price) {
    return parseInt(price).toLocaleString('fr-FR');
}

// Animation au scroll
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.vehicle-card, .feature, .contact-item').forEach(el => {
        observer.observe(el);
    });
}

// Initialiser l'observation au chargement
document.addEventListener('DOMContentLoaded', observeElements);