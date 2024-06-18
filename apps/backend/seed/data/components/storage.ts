import { StorageCreate } from "../../../src/components/storage/validation/storage.types"
import StorageRepo from "../../../src/components/storage/repository/storage.repository"

const storageData: StorageCreate[] = [
    {
        storageType: "SSD",
        capacity: 500,
        busType: "sata",
        component: {
            name: "Samsung 860 Evo 500GB",
            componentType: "STORAGE",
            price: 79.99,
            manufacturer: "Samsung",
            imageUrl:
                "https://imgs.search.brave.com/2FWhLD8JHOVYHSzS1r-IV4Nvav-hOL8SLjr5slnJ3s0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zbnBp/LmRlbGwuY29tL3Nu/cC9pbWFnZXMyLzMw/MC9lbi11c35BQTA4/OTUyOC9BQTA4OTUy/OC5qcGc", // "https://example.com/samsung860evo500gb.jpg",
        },
    },
    {
        storageType: "SSD",
        capacity: 1000,
        busType: "nvme",
        component: {
            name: "WD Black SN750 1TB",
            componentType: "STORAGE",
            price: 129.99,
            manufacturer: "Western Digital",
            imageUrl:
                "https://imgs.search.brave.com/rhx8cANdv_N2sIx0QBdNTqJuVgon0dhtJG-j0c5NOnc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzUxVEIwZXQ2eDJM/LmpwZw", // "https://example.com/wdblacksn7501tb.jpg",
        },
    },
    {
        storageType: "HDD",
        capacity: 2000,
        busType: "sata",
        component: {
            name: "Seagate Barracuda 2TB",
            componentType: "STORAGE",
            price: 54.99,
            manufacturer: "Seagate",
            imageUrl:
                "https://imgs.search.brave.com/63sMlvSy7VlufXhffiLOAmeMXR96I-r7gIHvjo2vSC8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxdFN2TVVqUjZM/LmpwZw", // "https://example.com/seagatebarracuda2tb.jpg",
        },
    },
    {
        storageType: "SSD",
        capacity: 256,
        busType: "nvme",
        component: {
            name: "Kingston A2000 256GB",
            componentType: "STORAGE",
            price: 44.99,
            manufacturer: "Kingston",
            imageUrl:
                "https://imgs.search.brave.com/d-8f9WgEf9w09eMPZXOMQWb2GfsPxM-5BdQp2NIjEqs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/eC1rb20ucGwvaS9z/ZXR1cC9pbWFnZXMv/cHJvZC9iaWcvcHJv/ZHVjdC1uZXctYmln/LCwyMDE5LzgvcHJf/MjAxOV84XzlfMTNf/MzlfMzRfNTY5XzAy/LmpwZw", // "https://example.com/kingstona2000256gb.jpg",
        },
    },
    {
        storageType: "HDD",
        capacity: 4000,
        busType: "sata",
        component: {
            name: "Western Digital Blue 4TB",
            componentType: "STORAGE",
            price: 99.99,
            manufacturer: "Western Digital",
            imageUrl:
                "https://imgs.search.brave.com/yoPcH1rgKYXis2SnMlDIpTyxHzaZ7g8hKR-kpzzhNHI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvd2Rf/d2RibmNlMDA0MHBu/Y193cnNuXzR0Yl93/ZF9ibHVlXzNkXzE1/ODYyNjkzMTVfMTU0/MjgxMS5qcGc", // "https://example.com/wdblue4tb.jpg",
        },
    },
    {
        storageType: "SSD",
        capacity: 2000,
        busType: "nvme",
        component: {
            name: "Samsung 970 Evo 2TB",
            componentType: "STORAGE",
            price: 349.99,
            manufacturer: "Samsung",
            imageUrl:
                "https://imgs.search.brave.com/IjyFyc4AGzeoFQV6yWcNdrmHENZ8pD6SvN_y-p94Qy8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL1Byb2R1Y3RJ/bWFnZS8yMC0xNDct/NzQ0LVYwMS5qcGc", // "https://example.com/samsung970evo2tb.jpg",
        },
    },
    {
        storageType: "HDD",
        capacity: 1000,
        busType: "sata",
        component: {
            name: "Toshiba P300 1TB",
            componentType: "STORAGE",
            price: 39.99,
            manufacturer: "Toshiba",
            imageUrl:
                "https://imgs.search.brave.com/TS2QdeUxLLOpe5qS2FlZGzQECQUJmL-1vzXtskCa1tM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDF2U2lIVzFiZUwu/anBn", // "https://example.com/toshibap3001tb.jpg",
        },
    },
    {
        storageType: "SSD",
        capacity: 512,
        busType: "sata",
        component: {
            name: "Crucial MX500 512GB",
            componentType: "STORAGE",
            price: 64.99,
            manufacturer: "Crucial",
            imageUrl:
                "https://imgs.search.brave.com/lC8_fwpnaZ6gw0KvB3q5u9ZrN_NuT1UeBvFhXOZZInY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBj/bWFnLmNvbS9pbWFn/ZXJ5L3Jldmlld3Mv/MDB4UFhFcU82NWxE/Mk5TS1dZaGFoSTAt/MTAuZml0X3NjYWxl/LnNpemVfNzYweDQy/Ny52MTU2OTQ3OTk0/My5qcGc", // "https://example.com/crucialmx500512gb.jpg",
        },
    },
    {
        storageType: "SSD",
        capacity: 1024,
        busType: "nvme",
        component: {
            name: "ADATA XPG SX8200 Pro 1TB",
            componentType: "STORAGE",
            price: 124.99,
            manufacturer: "ADATA",
            imageUrl:
                "https://imgs.search.brave.com/khTO2mhXNg7UhTBmWeWh1E7xccR4Omeh6zUDy0YBLpQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxS1JqYnhob1pM/LmpwZw", // "https://example.com/xpgsx8200pro1tb.jpg",
        },
    },
    {
        storageType: "HDD",
        capacity: 8000,
        busType: "sata",
        component: {
            name: "Seagate IronWolf 8TB",
            componentType: "STORAGE",
            price: 229.99,
            manufacturer: "Seagate",
            imageUrl:
                "https://imgs.search.brave.com/h80cBty5rDfaQbKK35B7GoALc-H5ibM0GA9TG5hD--M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tdWx0/aW1lZGlhLmJieWNh/c3RhdGljLmNhL211/bHRpbWVkaWEvcHJv/ZHVjdHMvNTAweDUw/MC8xNDQvMTQ0ODEv/MTQ0ODEzNTguanBn", // "https://example.com/seagateironwolf8tb.jpg",
        },
    },
    {
        storageType: "SSD",
        capacity: 2048,
        busType: "nvme",
        component: {
            name: "Sabrent Rocket 2TB",
            componentType: "STORAGE",
            price: 299.99,
            manufacturer: "Sabrent",
            imageUrl:
                "https://imgs.search.brave.com/PkAer4LRTWY7R3ELN-aMjsWg7qEEZnHewGsOQoDeK3g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFzazFVTTE5aEwu/anBn", // "https://example.com/sabrentrocket2tb.jpg",
        },
    },
    {
        storageType: "HDD",
        capacity: 3000,
        busType: "sata",
        component: {
            name: "Toshiba X300 3TB",
            componentType: "STORAGE",
            price: 89.99,
            manufacturer: "Toshiba",
            imageUrl:
                "https://imgs.search.brave.com/vLmP5eTldk4dcoQgcw13XWAX23b0ulS8pjvcs8r-qfw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFIMUM2dkJXaEwu/anBn", // "https://example.com/toshibax3003tb.jpg",
        },
    },
    {
        storageType: "SSD",
        capacity: 250,
        busType: "sata",
        component: {
            name: "WD Blue 250GB",
            componentType: "STORAGE",
            price: 49.99,
            manufacturer: "Western Digital",
            imageUrl:
                "https://imgs.search.brave.com/nshdDzC8X7c1JIFW4emi2qQyJSHoR4p913eN-FxTSp0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvd2Rf/d2RzMjUwZzFiMGFf/MDBoOWgwXzI1MGdi/X2JsdWVfc2F0YV9p/aWlfMTQ3NzkxMTA3/NF8xMjg3MTE2Lmpw/Zw", // "https://example.com/wdblue250gb.jpg",
        },
    },
    {
        storageType: "HDD",
        capacity: 5000,
        busType: "sata",
        component: {
            name: "Seagate Barracuda 5TB",
            componentType: "STORAGE",
            price: 139.99,
            manufacturer: "Seagate",
            imageUrl:
                "https://imgs.search.brave.com/dc5q-LCbyfczrlDTr4IKQOy3dIiwtC3RppZfKNlNzIk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/b3ZlcmNsb2NrZXJz/LmNvLnVrL21lZGlh/L2ltYWdlL0hEM0JN/U0VfMjA0MDU0Lmpw/Zw", // "https://example.com/seagatebarracuda5tb.jpg",
        },
    },
    {
        storageType: "SSD",
        capacity: 1000,
        busType: "nvme",
        component: {
            name: "Crucial P1 1TB",
            componentType: "STORAGE",
            price: 99.99,
            manufacturer: "Crucial",
            imageUrl:
                "https://imgs.search.brave.com/egHQ1qQFCSRxALPu9hLuzs0y3HbfUxXYhwD7kT-Kn7I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/Z2xvYmFsZGF0YS5w/dC9wcm9kdWN0cy9D/VDEwMDBQMVNTRDgu/anBn", // "https://example.com/crucialp11tb.jpg",
        },
    },
    {
        storageType: "HDD",
        capacity: 6000,
        busType: "sata",
        component: {
            name: "WD Black 6TB",
            componentType: "STORAGE",
            price: 249.99,
            manufacturer: "Western Digital",
            imageUrl:
                "https://imgs.search.brave.com/lpBoRYGHG37v-_CzTFFAfRHK6miNQlYitvSqXT7544E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvd2Rf/d2Ric2xhMDA2MGhu/Y193cnNuX3dkX2Js/YWNrXzZ0Yl8zXzVf/MTYxMzQ3ODExM18x/NDYzMDYxLmpwZw", // "https://example.com/wdblack6tb.jpg",
        },
    },
    {
        storageType: "SSD",
        capacity: 512,
        busType: "nvme",
        component: {
            name: "Intel 660p 512GB",
            componentType: "STORAGE",
            price: 59.99,
            manufacturer: "Intel",
            imageUrl:
                "https://imgs.search.brave.com/nnWKTDn3pYX9ZHuHcXhooVkja8Gpa_-SwkUgCVPkd1s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/b3ZlcmNsb2NrZXJz/LmNvLnVrL2ltYWdl/cy9IRC0wOFUtSU4v/ZTExMGVkNjI5MDE5/ZGZhMjI5YWExNTBm/ZTYxNTljNTYuanBn", // "https://example.com/intel660p512gb.jpg",
        },
    },
    {
        storageType: "HDD",
        capacity: 10000,
        busType: "sata",
        component: {
            name: "Seagate Exos 10TB",
            componentType: "STORAGE",
            price: 339.99,
            manufacturer: "Seagate",
            imageUrl:
                "https://imgs.search.brave.com/5wlQqsh-aQctpRneC9a8SpcFLgkzeRcUPzLWRXrFkgI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL1Byb2R1Y3RJ/bWFnZS9BOTk0UzIw/MDUxMkFQcWZCLmpw/Zw", // "https://example.com/seagateexos10tb.jpg",
        },
    },
    {
        storageType: "SSD",
        capacity: 2048,
        busType: "nvme",
        component: {
            name: "Corsair MP600 2TB",
            componentType: "STORAGE",
            price: 299.99,
            manufacturer: "Corsair",
            imageUrl:
                "https://imgs.search.brave.com/kQoRct3aveGCRfsgXXYkMh6XfWX1GwqMEmYkmg83yp8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL1Byb2R1Y3RJ/bWFnZS8yMC0yMzYt/ODI0LVYwMy5qcGc", // "https://example.com/mp6002tb.jpg",
        },
    },
    {
        storageType: "HDD",
        capacity: 16000,
        busType: "sata",
        component: {
            name: "Seagate IronWolf Pro 16TB",
            componentType: "STORAGE",
            price: 549.99,
            manufacturer: "Seagate",
            imageUrl:
                "https://imgs.search.brave.com/-sf7b8f966tEnCs1lCO7qa9EeX4WO3mOURkFiZnhlyo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kaDlj/dWFoczZlenB6LmNs/b3VkZnJvbnQubmV0/L2ltYWdlcy9wcm9k/dWN0cy81NTB4NTUw/L2ltYWdlXzQxNDQw/NTYuanBn", // "https://example.com/ironwolfpro16tb.jpg",
        },
    },
]

const seedStorages = async () => {
  for (const storage of storageData) {
    const result = await StorageRepo.create(storage)
    if (result.isErr) {
      console.error("Failed to create pc case:", result.error)
    }
  }
}

export default seedStorages
