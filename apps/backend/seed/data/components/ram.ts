import { RamCreate } from "../../../src/components/rams/validation/ram.types"
import RAMRepo from "../../../src/components/rams/repository/rams.repository"

const ramData: RamCreate[] = [
    {
        component: {
            name: "Corsair Vengeance LPX 16GB",
            componentType: "RAM",
            price: 89.99,
            manufacturer: "Corsair",
            imageUrl:
                "https://imgs.search.brave.com/C29E6XpwfRsmtg2Wx82zgApvAKN2rCu01wyL_DpKQ0M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zbnBp/LmRlbGwuY29tL3Nu/cC9pbWFnZXMvcHJv/ZHVjdHMvbGFyZ2Uv/ZW4tdXN-M2U1MThj/MmEtZDhlMy00MjZk/LWFmNzMtNjlmZDNl/ZjEwOGExLzNlNTE4/YzJhLWQ4ZTMtNDI2/ZC1hZjczLTY5ZmQz/ZWYxMDhhMS5qcGc", // "https://example.com/vengeancelpx16gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 16,
        computerType: "DESKTOP",
    },
    {
        component: {
            name: "G.SKILL Ripjaws V Series 32GB",
            componentType: "RAM",
            price: 159.99,
            manufacturer: "G.SKILL",
            imageUrl:
                "https://imgs.search.brave.com/IzPPgUcTMmHZ0NJS1U22rpEfGSusCrrcyCjxBkE0F_A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFmQ2lBallNREwu/anBn", // "https://example.com/ripjawsv32gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 32,
        computerType: "DESKTOP",
    },
    {
        component: {
            name: "Crucial 8GB Single",
            componentType: "RAM",
            price: 39.99,
            manufacturer: "Crucial",
            imageUrl:
                "https://imgs.search.brave.com/fldcYzIL__0Ml90MrH-8-dltggzZ6IdAV8RCk0KD-E8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFnUEN3elpFUkwu/anBn", // "https://example.com/crucial8gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 8,
        computerType: "DESKTOP",
    },
    {
        component: {
            name: "Kingston HyperX Fury 16GB",
            componentType: "RAM",
            price: 79.99,
            manufacturer: "Kingston",
            imageUrl:
                "https://imgs.search.brave.com/Gp2NdE_pZG2Me267JDanBUa3h9327M6LljF0eeLiuwM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFwTUtwSGRiV0wu/anBn", // "https://example.com/hyperxfury16gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 16,
        computerType: "DESKTOP",
    },
    {
        component: {
            name: "Corsair Vengeance RGB Pro 32GB",
            componentType: "RAM",
            price: 199.99,
            manufacturer: "Corsair",
            imageUrl:
                "https://imgs.search.brave.com/I5kXEDW6PpPIQKFUrlkMx6Kv4wBKLIUiuhg4xmF7690/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL1Byb2R1Y3RJ/bWFnZS8yMC0yMzYt/NTcwLTAyLmpwZw", // "https://example.com/vengeancergbpro32gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 32,
        computerType: "DESKTOP",
    },
    {
        component: {
            name: "G.SKILL Trident Z Royal Series 64GB",
            componentType: "RAM",
            price: 399.99,
            manufacturer: "G.SKILL",
            imageUrl:
                "https://imgs.search.brave.com/OqZZLpKcnFsv9589yhgAEzVy3jBiltDg2wObrQgCTWU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL1Byb2R1Y3RJ/bWFnZS8yMC0yMzIt/OTk0LVYwMi5qcGc", // "https://example.com/tridentzroyal64gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 64,
        computerType: "DESKTOP",
    },
    {
        component: {
            name: "Patriot Viper Steel 16GB",
            componentType: "RAM",
            price: 89.99,
            manufacturer: "Patriot",
            imageUrl:
                "https://imgs.search.brave.com/62gfYYuCkkTI-btZYjKT7G9oEnIA6Io4JGtO4aIpI6U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29tcHNvbHVrLmNv/LnVrL3dwLWNvbnRl/bnQvdXBsb2Fkcy9z/ZHBhdC1wdnM0MTZn/MzYwLWxnLmpwZw", // "https://example.com/vipersteel16gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 16,
        computerType: "DESKTOP",
    },
    {
        component: {
            name: "Team T-Force Delta RGB 16GB",
            componentType: "RAM",
            price: 99.99,
            manufacturer: "TeamGroup",
            imageUrl:
                "https://imgs.search.brave.com/qzVNdEGRZ1mdx3UGNY6f77cTMfdVsmDHRwLbqfFArrk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxeXlZK1kyOVdM/LmpwZw", // "https://example.com/tforcedelta16gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 16,
        computerType: "DESKTOP",
    },
    {
        component: {
            name: "Samsung 16GB",
            componentType: "RAM",
            price: 149.99,
            manufacturer: "Samsung",
            imageUrl:
                "https://imgs.search.brave.com/hTu3zEMpdJJFrsDBiNwSScgwQKa8JjDsYxokLbFZ_lA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFuT2N3aUloTkwu/anBn", // "https://example.com/samsung16gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 16,
        computerType: "DESKTOP",
    },
    {
        component: {
            name: "Crucial Ballistix 32GB",
            componentType: "RAM",
            price: 179.99,
            manufacturer: "Crucial",
            imageUrl:
                "https://imgs.search.brave.com/tesYtGKepGjG7OIsbfXbJWD-xOIhp25swgAVY5HME9A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvY3J1/Y2lhbF9ibDJrMTZn/MzJjMTZ1NGJfYmFs/bGlzdGl4XzMyZ2Jf/MTZ4Ml8zMjAwX21o/el8xNTgyODA0MjQy/XzE1NDg4NDMuanBn", // "https://example.com/ballistix32gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 32,
        computerType: "DESKTOP",
    },
    {
        component: {
            name: "ADATA XPG Z1 16GB",
            componentType: "RAM",
            price: 79.99,
            manufacturer: "ADATA",
            imageUrl:
                "https://imgs.search.brave.com/EiJ3SSRNwUVvC2SgSr91KP2bs2l2QGUA9GRg4n-rERw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxczZXZzdCY3FM/LmpwZw", // "https://example.com/xpgz116gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 16,
        computerType: "DESKTOP",
    },
    {
        component: {
            name: "Corsair Dominator Platinum 32GB",
            componentType: "RAM",
            price: 249.99,
            manufacturer: "Corsair",
            imageUrl:
                "https://imgs.search.brave.com/CCm2hdFJr1fzGle8RTV5tuqRZXEP5OAphWEQ8rQ-Qwk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvYTVl/NmIxYzYtMmM3MS00/ZTRkLTkwMjAtNzg5/MDUyNWRhNTJhXzEu/ODMxOGQ5N2IxOWUw/ZDE0MGU0NTA3ZjNh/NTBkNmFhZjMuanBl/Zz9vZG5IZWlnaHQ9/NjEyJm9kbldpZHRo/PTYxMiZvZG5CZz1G/RkZGRkY", // "https://example.com/dominatorplatinum32gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 32,
        computerType: "DESKTOP",
    },
    {
        component: {
            name: "G.SKILL Ripjaws SODIMM 16GB",
            componentType: "RAM",
            price: 99.99,
            manufacturer: "G.SKILL",
            imageUrl:
                "https://imgs.search.brave.com/JUH2bClPaqKjjt6EJDnzj8oYGpTScYfxdwnLrVl0jPE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9lbGl0/ZWh1YnMuY29tL2Nk/bi9zaG9wL2ZpbGVz/L2Y0LTMyMDBjMjJz/LTE2Z3JzLWltYWdl/LTEtNjAweDYwMC53/ZWJwP3Y9MTY5NTMz/NjE1OSZ3aWR0aD01/MzM", // "https://example.com/ripjawssodimm16gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 16,
        computerType: "LAPTOP",
    },
    {
        component: {
            name: "Samsung 32GB SODIMM",
            componentType: "RAM",
            price: 149.99,
            manufacturer: "Samsung",
            imageUrl:
                "https://imgs.search.brave.com/lq4mWZgXqawnHkw1Iu9dzypUy_IYe0D6W82wX42G0xg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF2aHJibGxIM0wu/anBn", // "https://example.com/samsungsodimm32gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 32,
        computerType: "LAPTOP",
    },
    {
        component: {
            name: "Corsair Vengeance LPX 64GB",
            componentType: "RAM",
            price: 349.99,
            manufacturer: "Corsair",
            imageUrl:
                "https://imgs.search.brave.com/1GBGNZDkkPF6ClsSV3tC40m81FidN_ZBpHkwaifbSrQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFGLXdMTzFhYlMu/anBn", // "https://example.com/vengeancelpx64gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 64,
        computerType: "DESKTOP",
    },
    {
        component: {
            name: "G.SKILL Ripjaws V 16GB",
            componentType: "RAM",
            price: 89.99,
            manufacturer: "G.SKILL",
            imageUrl:
                "https://imgs.search.brave.com/AGGeU01mxep-GzpkAdczqcQkx1kWVQUjOJoKcbYPHf8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL1Byb2R1Y3RJ/bWFnZS8yMC0yMzIt/MTgxLTAxLmpwZw", // "https://example.com/ripjawsv16gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 16,
        computerType: "DESKTOP",
    },
    {
        component: {
            name: "Crucial Ballistix Sport LT 8GB",
            componentType: "RAM",
            price: 44.99,
            manufacturer: "Crucial",
            imageUrl:
                "https://imgs.search.brave.com/xWvmoaPokASv1W2QmVN8jzl84avOZMRtcgJpfl2OTD8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL1Byb2R1Y3RJ/bWFnZUNvbXByZXNz/QWxsMzAwLzIwLTE2/NC0wMDUtVjAxLmpw/Zw", // "https://example.com/ballistixsportlt8gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 8,
        computerType: "DESKTOP",
    },
    {
        component: {
            name: "Team Elite 16GB",
            componentType: "RAM",
            price: 69.99,
            manufacturer: "TeamGroup",
            imageUrl:
                "https://imgs.search.brave.com/SghZ4XsSRQ-j4SM7C_79UebNov9pPxqZA4NaSikWc5Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFHb1hQTE92Q0wu/anBn", // "https://example.com/teamelite16gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 16,
        computerType: "DESKTOP",
    },
    {
        component: {
            name: "Patriot Signature Line 8GB",
            componentType: "RAM",
            price: 39.99,
            manufacturer: "Patriot",
            imageUrl:
                "https://imgs.search.brave.com/tXBOA-3zZnFIJ291DR5g1-lfTK3v3pjcsbtjNMAAhS4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5vZmZpY2VkZXBv/dC5jb20vaW1hZ2Vz/L2ZfYXV0byxxX2F1/dG8sZV9zaGFycGVu/LGhfNDUwL3Byb2R1/Y3RzLzk5Mjk4NTcv/OTkyOTg1N19vNTFf/Y25fMTExMTc5NDcv/OTkyOTg1Nw.jpeg", // "https://example.com/signatureline8gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 8,
        computerType: "DESKTOP",
    },
    {
        component: {
            name: "G.SKILL Ripjaws V 64GB",
            componentType: "RAM",
            price: 399.99,
            manufacturer: "G.SKILL",
            imageUrl:
                "https://imgs.search.brave.com/QiXUyHH2rWh1NtnZ1x2WHaIftVzwoveVnyNthvRcxww/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxT0s1VVVJclVM/LmpwZw", // "https://example.com/ripjawsv64gb.jpg",
        },
        memoryType: "ddr4",
        capacity: 64,
        computerType: "DESKTOP",
    },
]

const seedRams = async () => {
    for (const ram of ramData) {
        const result = await RAMRepo.create(ram)
        if (result.isErr) {
            console.error("Failed to create pc case:", result.error)
        }
    }
}

export default seedRams
