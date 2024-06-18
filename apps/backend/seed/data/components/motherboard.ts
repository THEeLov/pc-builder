import { MotherboardCreate } from "../../../src/components/motherboard/validation/motherboard.types"
import MotherboardRepo from "../../../src/components/motherboard/repository/motherboard.repository"

const motherboardData: MotherboardCreate[] = [
    {
        component: {
            name: "ASUS ROG Strix Z590-E",
            componentType: "MOTHERBOARD",
            price: 379.99,
            manufacturer: "ASUS",
            imageUrl:
                "https://imgs.search.brave.com/er1AoHRx_DcQaS-YTVnw0hwob9-IjikTiS5GmRkYNE4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvYXN1/c19yb2dfc3RyaXhf/ejU5MF9lX2dhbWlu/Z18xNjEzMDM3OTc1/XzE2MjAxMTEuanBn", // "https://example.com/rogstrixz590e.jpg",
        },
        socket: "lga1200",
        formFactor: "atx",
        ramSlots: 4,
        ramType: "ddr4",
        gpuInterface: "pcie",
        storageBusType: "sata",
    },
    {
        component: {
            name: "MSI MPG B550 Gaming Edge",
            componentType: "MOTHERBOARD",
            price: 199.99,
            manufacturer: "MSI",
            imageUrl:
                "https://imgs.search.brave.com/L3q4fOybLZx9zb-U-y5g65XEXjlRxWZwJpfPuQxh0bA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvbXNp/X2I1NTBnZWRnZXdp/ZmlfbXBnX2I1NTBf/Z2FtaW5nX2VkZ2Vf/MTU5MjI5NzI1Nl8x/NTY4Njk0LmpwZw", // "https://example.com/mpgb550.jpg",
        },
        socket: "am4",
        formFactor: "atx",
        ramSlots: 4,
        ramType: "ddr4",
        gpuInterface: "pcie",
        storageBusType: "nvme",
    },
    {
        component: {
            name: "Gigabyte Aorus X570 Master",
            componentType: "MOTHERBOARD",
            price: 359.99,
            manufacturer: "Gigabyte",
            imageUrl:
                "https://imgs.search.brave.com/p-1DgxxS_Fn3m_XLU2CzAkgjcjNOkkvKOLw-KMFi44g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL1Byb2R1Y3RJ/bWFnZS8xMy0xNDUt/MTU1LVYwOS5qcGc", // "https://example.com/aorusx570.jpg",
        },
        socket: "am4",
        formFactor: "atx",
        ramSlots: 4,
        ramType: "ddr4",
        gpuInterface: "pcie",
        storageBusType: "sata",
    },
    {
        component: {
            name: "ASRock B450M Steel Legend",
            componentType: "MOTHERBOARD",
            price: 109.99,
            manufacturer: "ASRock",
            imageUrl:
                "https://imgs.search.brave.com/QzcXOUFVzNlFK3-o1F2gOzr3Vo0iXXpMM4PEvER_3d0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxN2ZNMzZNM3NM/LmpwZw", // "https://example.com/b450msteelllegend.jpg",
        },
        socket: "am4",
        formFactor: "microATX",
        ramSlots: 4,
        ramType: "ddr4",
        gpuInterface: "pcie",
        storageBusType: "nvme",
    },
    {
        component: {
            name: "MSI Z490-A Pro",
            componentType: "MOTHERBOARD",
            price: 159.99,
            manufacturer: "MSI",
            imageUrl:
                "https://imgs.search.brave.com/nyxlaP6nMY2pMoEtzw4Qd966lLLDC6K4PqL5XUvzLEY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvbXNp/X3o0OTBhcHJvX3o0/OTBfYV9wcm9fbGdh/XzEyMDBfMTU4OTM4/NDIxMl8xNTU4NzUy/LmpwZw", // "https://example.com/z490apro.jpg",
        },
        socket: "lga1200",
        formFactor: "atx",
        ramSlots: 4,
        ramType: "ddr4",
        gpuInterface: "pcie",
        storageBusType: "nvme",
    },
    {
        component: {
            name: "Gigabyte Z690 Aorus Elite",
            componentType: "MOTHERBOARD",
            price: 299.99,
            manufacturer: "Gigabyte",
            imageUrl:
                "https://imgs.search.brave.com/MeZTMMs9PHo9i_vlsDAr6usTOKpSLOdr_Vrl2-jD2R4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzNt/dGhBZVBkamRETENB/OGFBclNGb24tMzIw/LTgwLmpwZw", // "https://example.com/z690aoruselite.jpg",
        },
        socket: "lga1700",
        formFactor: "atx",
        ramSlots: 4,
        ramType: "ddr5",
        gpuInterface: "PCIe 5.0",
        storageBusType: "sata",
    },
    {
        component: {
            name: "ASUS Prime B560M-A",
            componentType: "MOTHERBOARD",
            price: 129.99,
            manufacturer: "ASUS",
            imageUrl:
                "https://imgs.search.brave.com/3MVyhc2yHLyI0daM6o7X0xZRPbbjIM56tR6e8eN-GBA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kbGNk/bndlYmltZ3MuYXN1/cy5jb20vZ2Fpbi85/MjkxZmVlNi04Yjc2/LTQ1NGEtOWIxOS1l/ZWIwYTQ0MDBlMTkv/dzMwMC9md2VicA.jpeg", // "https://example.com/primeb560ma.jpg",
        },
        socket: "lga1200",
        formFactor: "microATX",
        ramSlots: 4,
        ramType: "ddr4",
        gpuInterface: "pcie",
        storageBusType: "sata",
    },
    {
        component: {
            name: "ASRock X570 Phantom Gaming 4",
            componentType: "MOTHERBOARD",
            price: 149.99,
            manufacturer: "ASRock",
            imageUrl:
                "https://imgs.search.brave.com/ISneyNBWhXb2Mzw0AD1RGJQYyX1uyNak7BSTWw25BBM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFSQmF6NDlJVEwu/anBn", // "https://example.com/x570phantom.jpg",
        },
        socket: "am4",
        formFactor: "atx",
        ramSlots: 4,
        ramType: "ddr4",
        gpuInterface: "pcie",
        storageBusType: "nvme",
    },
    {
        component: {
            name: "MSI MAG B550 Tomahawk",
            componentType: "MOTHERBOARD",
            price: 179.99,
            manufacturer: "MSI",
            imageUrl:
                "https://imgs.search.brave.com/11uc5Ex-sOh_AWd-IHlMYnXbh2HDByTsR-H0Bygci_o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL1Byb2R1Y3RJ/bWFnZS8xMy0xNDQt/MzI2LVYwMS5qcGc", // "https://example.com/b550tomahawk.jpg",
        },
        socket: "am4",
        formFactor: "atx",
        ramSlots: 4,
        ramType: "ddr4",
        gpuInterface: "pcie",
        storageBusType: "sata",
    },
    {
        component: {
            name: "ASUS TUF Gaming X570-Plus",
            componentType: "MOTHERBOARD",
            price: 189.99,
            manufacturer: "ASUS",
            imageUrl:
                "https://imgs.search.brave.com/BV7-kkFGwkvaX-qmEVcs-Wj9Vzf2XrQFfgP1lDxMihM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL1ZnMEFB/T1N3UjVWbU92aVYv/cy1sNTAwLmpwZw", // "https://example.com/tufgamingx570.jpg",
        },
        socket: "am4",
        formFactor: "atx",
        ramSlots: 4,
        ramType: "ddr4",
        gpuInterface: "pcie",
        storageBusType: "sata",
    },
    {
        component: {
            name: "Gigabyte B460M DS3H",
            componentType: "MOTHERBOARD",
            price: 89.99,
            manufacturer: "Gigabyte",
            imageUrl:
                "https://imgs.search.brave.com/wwVflVHwsHD51xmwAhEQ5WymDRmJ31kUW75T2LeDdUA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvZ2ln/YWJ5dGVfYjQ2MG1f/ZHMzaF9tb3RoZXJi/b2FyZF8xNTkyNTc1/NTYyXzE1NzA2ODEu/anBn", // "https://example.com/b460mds3h.jpg",
        },
        socket: "lga1200",
        formFactor: "microATX",
        ramSlots: 2,
        ramType: "ddr4",
        gpuInterface: "pcie",
        storageBusType: "sata",
    },
    {
        component: {
            name: "ASRock Z590 Pro4",
            componentType: "MOTHERBOARD",
            price: 179.99,
            manufacturer: "ASRock",
            imageUrl:
                "https://imgs.search.brave.com/LYF9L-sTdQ9FwKWC9PwoNmQjOHxHRaDhicjSjXsjDKA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZXh4YWN0Y29y/cC5jb20vd2VicC9w/cm9kdWN0aW1hZ2Vz/L2xhcmdlL0VYWC1J/TUctNDU5ODU5Ny53/ZWJw", // "https://example.com/z590pro4.jpg",
        },
        socket: "lga1200",
        formFactor: "atx",
        ramSlots: 4,
        ramType: "ddr4",
        gpuInterface: "pcie",
        storageBusType: "sata, nvme",
    },
    {
        component: {
            name: "MSI MEG Z490 Ace",
            componentType: "MOTHERBOARD",
            price: 399.99,
            manufacturer: "MSI",
            imageUrl:
                "https://imgs.search.brave.com/IjR2eiLqxe3CWnRZIZsCAU789wkOFhViddaW4xeY27I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvbXNp/X3o0OTBhY2VfbWVn/X3o0OTBfYWNlX2xn/YV8xNTg5Mzg0MjEy/XzE1NTg3NDYuanBn", // "https://example.com/megz490ace.jpg",
        },
        socket: "lga1200",
        formFactor: "atx",
        ramSlots: 4,
        ramType: "ddr4",
        gpuInterface: "pcie",
        storageBusType: "sata",
    },
    {
        component: {
            name: "ASUS ROG Crosshair VIII Hero",
            componentType: "MOTHERBOARD",
            price: 379.99,
            manufacturer: "ASUS",
            imageUrl:
                "https://imgs.search.brave.com/t0nRtgtlh75j4hWt-sX42N__fXjOOBufZv-6XZA4M-o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc2FicmVwYy5j/b20vd2VicC9wcm9k/dWN0aW1hZ2VzL2xh/cmdlL0VYWC1JTUct/Mjc1NDMzMi53ZWJw", // "https://example.com/crosshairviii.jpg",
        },
        socket: "am4",
        formFactor: "atx",
        ramSlots: 4,
        ramType: "ddr4",
        gpuInterface: "pcie",
        storageBusType: "sata",
    },
    {
        component: {
            name: "Gigabyte Z490 Aorus Ultra",
            componentType: "MOTHERBOARD",
            price: 299.99,
            manufacturer: "Gigabyte",
            imageUrl:
                "https://imgs.search.brave.com/hGmSSJLQOA1ic79IfX1YRBMSgK96rfpxU5G3mLcfhpY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEv/dmMvNThkZTkwMWMt/ZTMwYy00MzJkLTlj/MzEtOGVkZDhhMzcw/ZmJlLl9fQ1IwLDAs/MzAwLDQwMF9QVDBf/U1gzMDBfVjFfX18u/anBn", // "https://example.com/z490aorusultra.jpg",
        },
        socket: "lga1200",
        formFactor: "atx",
        ramSlots: 4,
        ramType: "ddr4",
        gpuInterface: "pcie",
        storageBusType: "nvme",
    },
    {
        component: {
            name: "ASRock B550 Taichi",
            componentType: "MOTHERBOARD",
            price: 299.99,
            manufacturer: "ASRock",
            imageUrl:
                "https://imgs.search.brave.com/0LXt2tNa46yzOqj7fDBINEuF4HC-UgZERJlJHvtOeiw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYmhwaG90by5j/b20vaW1hZ2VzL2lt/YWdlczUwMHg1MDAv/YXNyb2NrX2I1NTBf/dGFpY2hpX2FtZF9h/bTRfMTU5NDkxMzc0/Ml8xNTc2ODk2Lmpw/Zw", // "https://example.com/b550taichi.jpg",
        },
        socket: "am4",
        formFactor: "atx",
        ramSlots: 4,
        ramType: "ddr4",
        gpuInterface: "pcie",
        storageBusType: "nvme",
    },
    {
        component: {
            name: "MSI MPG Z390 Gaming Edge",
            componentType: "MOTHERBOARD",
            price: 159.99,
            manufacturer: "MSI",
            imageUrl:
                "https://imgs.search.brave.com/QprIGHf3OANEUIZAp2brU0WlKI__GMEztRNxBDWMNoo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYW5hbmR0ZWNo/LmNvbS9kb2NpLzEz/NDA3L21zaS1tcGdf/ejM5MG1fZ2FtaW5n/X2VkZ2VfYWMtM2Qz/LWxlZF81NzVweC5q/cGc", // "https://example.com/z390gamingedge.jpg",
        },
        socket: "lga1151",
        formFactor: "atx",
        ramSlots: 4,
        ramType: "ddr4",
        gpuInterface: "pcie",
        storageBusType: "sata",
    },
    {
        component: {
            name: "ASUS Prime X299-A II",
            componentType: "MOTHERBOARD",
            price: 329.99,
            manufacturer: "ASUS",
            imageUrl:
                "https://imgs.search.brave.com/G5WU_2UVY75GTGcI9kqrQd_TOXmN8HNbzyBoL5jRVwE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3MuMXdvcmxkc3lu/Yy5jb20vYTMvYjAv/YTNiMGI5NjktNTVj/NC00YThkLTgwNDQt/YzMyMGNlODc5NTJj/LmpwZw", // "https://example.com/primex299a2.jpg",
        },
        socket: "lga2066",
        formFactor: "atx",
        ramSlots: 8,
        ramType: "ddr4",
        gpuInterface: "pcie",
        storageBusType: "sata",
    },
    {
        component: {
            name: "Gigabyte B450 Aorus M",
            componentType: "MOTHERBOARD",
            price: 99.99,
            manufacturer: "Gigabyte",
            imageUrl:
                "https://imgs.search.brave.com/x2nmflrGc2F8JBbAuL79eLPKCJcAf4hyWEFBNiDTiBw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvZ2ln/YWJ5dGVfYjQ1MF9h/b3J1c19tX21vdGhl/cmJvYXJkXzE1ODIw/NDgyNzZfMTU0MzUy/My5qcGc", // "https://example.com/b450aorusm.jpg",
        },
        socket: "am4",
        formFactor: "microATX",
        ramSlots: 4,
        ramType: "ddr4",
        gpuInterface: "pcie",
        storageBusType: "sata",
    },
    {
        component: {
            name: "ASRock Z370 Extreme4",
            componentType: "MOTHERBOARD",
            price: 159.99,
            manufacturer: "ASRock",
            imageUrl:
                "https://imgs.search.brave.com/kIb56jiH5El1puSqeEUCF1t5NeRDaufZiWxHYQAB_RQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL1Byb2R1Y3RJ/bWFnZS8xMy0xNTct/Nzg5LVYwMS5qcGc", // "https://example.com/z370extreme4.jpg",
        },
        socket: "lga1151",
        formFactor: "atx",
        ramSlots: 4,
        ramType: "ddr4",
        gpuInterface: "pcie",
        storageBusType: "nvme",
    },
]

const seedMotherboards = async () => {
  for (const motherboard of motherboardData) {
    const result = await MotherboardRepo.create(motherboard)
    if (result.isErr) {
      console.error("Failed to create Motherboard:", result.error)
    }
  }
}

export default seedMotherboards
