import { GPUCreate } from "../../src/components/gpu/validation/gpu.types"

const gpuData: GPUCreate[] = [
    {
        memory: 8,
        powerConnector: "8-pin",
        interface: "pcie",
        power: 200,
        component: {
            name: "NVIDIA GeForce RTX 3070",
            componentType: "GPU",
            price: 499.99,
            manufacturer: "NVIDIA",
            imageUrl:
                "https://imgs.search.brave.com/nM_kS7xsjrPhteD-uqzhchDY1okHZE-UEBcxaVdtyx0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzF3aS1yTUJjN0wu/anBn", // "https://example.com/rtx3070.jpg",
        },
    },
    {
        memory: 10,
        powerConnector: "8-pin + 8-pin",
        interface: "pcie",
        power: 320,
        component: {
            name: "NVIDIA GeForce RTX 3080",
            componentType: "GPU",
            price: 699.99,
            manufacturer: "NVIDIA",
            imageUrl:
                "https://imgs.search.brave.com/Plt4u11dfFDEHnIfK5gkycvyZg1lAqfJxz2j2yV6Hts/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL3Byb2R1Y3Rp/bWFnZS9uYjMwMC9C/RjlWUzIzMDkxMjBG/MEpNUDk3LmpwZw", // "https://example.com/rtx3080.jpg",
        },
    },
    {
        memory: 24,
        powerConnector: "8-pin + 8-pin + 8-pin",
        interface: "pcie",
        power: 350,
        component: {
            name: "NVIDIA GeForce RTX 3090",
            componentType: "GPU",
            price: 1499.99,
            manufacturer: "NVIDIA",
            imageUrl:
                "https://imgs.search.brave.com/Q65N9T0BHR71XKw5n86aDpat2DWHFfd5HXYp41ujwqk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL3Byb2R1Y3Rp/bWFnZS9uYjMwMC9C/MVBHUzIzMTIyMDEx/TU5LRTJCLmpwZw", // "https://example.com/rtx3090.jpg",
        },
    },
    {
        memory: 16,
        powerConnector: "8-pin + 8-pin",
        interface: "pcie",
        power: 300,
        component: {
            name: "AMD Radeon RX 6800 XT",
            componentType: "GPU",
            price: 649.99,
            manufacturer: "AMD",
            imageUrl:
                "https://imgs.search.brave.com/3XHIfWuMmh9UeOR60e9fNJ8-CdDKCNsOhhsP85pUZIA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL1Byb2R1Y3RJ/bWFnZS8xNC05MzAt/MDQ5LTAyLmpwZw", // "https://example.com/rx6800xt.jpg",
        },
    },
    {
        memory: 12,
        powerConnector: "8-pin + 8-pin",
        interface: "pcie",
        power: 290,
        component: {
            name: "AMD Radeon RX 6700 XT",
            componentType: "GPU",
            price: 479.99,
            manufacturer: "AMD",
            imageUrl:
                "https://imgs.search.brave.com/amcMcIVl8t1Iq-TZ4yfScEPEBida5BLCMNw-LD6aVd8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL1Byb2R1Y3RJ/bWFnZS8xNC05MzAt/MDU2LTAxLmpwZw", // "https://example.com/rx6700xt.jpg",
        },
    },
    {
        memory: 6,
        powerConnector: "8-pin",
        interface: "pcie",
        power: 160,
        component: {
            name: "NVIDIA GeForce GTX 1660 Super",
            componentType: "GPU",
            price: 229.99,
            manufacturer: "NVIDIA",
            imageUrl:
                "https://imgs.search.brave.com/-afpBqeGmiZbwOuUf4DUI0prT7B3BHHj1sS09jwbm-k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ncHVz/cGVjcy5jb20vd3At/Y29udGVudC91cGxv/YWRzL052aWRpYS1H/ZUZvcmNlLUdUWC0x/NjYwLTZHQi02MDB4/NjAwLmpwZw", // "https://example.com/gtx1660super.jpg",
        },
    },
    {
        memory: 8,
        powerConnector: "8-pin",
        interface: "pcie",
        power: 175,
        component: {
            name: "NVIDIA GeForce GTX 1070",
            componentType: "GPU",
            price: 399.99,
            manufacturer: "NVIDIA",
            imageUrl:
                "https://imgs.search.brave.com/F1LO1RLn9ucJstNZtlBQyvuXNVlAF1AojscQ1OsYs8I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFpbTN0enRXeUwu/anBn", // "https://example.com/gtx1070.jpg",
        },
    },
    {
        memory: 8,
        powerConnector: "8-pin + 6-pin",
        interface: "pcie",
        power: 180,
        component: {
            name: "AMD Radeon RX 5700 XT",
            componentType: "GPU",
            price: 399.99,
            manufacturer: "AMD",
            imageUrl:
                "https://imgs.search.brave.com/YzPGZ98bLEkeSIbw-sg4XLlk5LV-2w-90t8DE57SEAM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL3Byb2R1Y3Rp/bWFnZS9uYjMwMC8x/NC0xNTAtODI1LVYw/MS5qcGc", // "https://example.com/rx5700xt.jpg",
        },
    },
    {
        memory: 8,
        powerConnector: "8-pin",
        interface: "pcie",
        power: 150,
        component: {
            name: "AMD Radeon RX 5600 XT",
            componentType: "GPU",
            price: 279.99,
            manufacturer: "AMD",
            imageUrl:
                "https://imgs.search.brave.com/8fFAK671-Pu3Wly_PCD6_ld81yUyzj6kkChR7NBtESw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL3Byb2R1Y3Rp/bWFnZS9uYjMwMC8x/NC05MzItNDIxLTAx/LmpwZw", // "https://example.com/rx5600xt.jpg",
        },
    },
    {
        memory: 6,
        powerConnector: "6-pin",
        interface: "pcie",
        power: 120,
        component: {
            name: "NVIDIA GeForce GTX 1060",
            componentType: "GPU",
            price: 249.99,
            manufacturer: "NVIDIA",
            imageUrl:
                "https://imgs.search.brave.com/kq98Dbk3hd-m94Z5MhpS1rMPhkaxKALJ9g94OfVEwFk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvMmJh/NDdhOTYtYTgwMy00/Y2NhLThjMmQtNjRk/Njg1YzhhMmYzXzEu/ZmY4NzYzYWJhNzAy/YzllYmE0Njk1N2Fj/MjI1NDhhOWQuanBl/Zz9vZG5IZWlnaHQ9/NTgwJm9kbldpZHRo/PTU4MCZvZG5CZz1G/RkZGRkY", // "https://example.com/gtx1060.jpg",
        },
    },
    {
        memory: 11,
        powerConnector: "8-pin + 8-pin",
        interface: "pcie",
        power: 250,
        component: {
            name: "NVIDIA GeForce GTX 1080 Ti",
            componentType: "GPU",
            price: 699.99,
            manufacturer: "NVIDIA",
            imageUrl:
                "https://imgs.search.brave.com/5gajKiJAvCegD9VJbMhIN_EnCTrUXkPiaao3SmQB82M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ncHVz/cGVjcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTgvMDQv/TnZpZGlhLUdlRm9y/Y2UtR1RYLTEwODAt/VGktNDUweDQ1MC5q/cGVn", // "https://example.com/gtx1080ti.jpg",
        },
    },
    {
        memory: 8,
        powerConnector: "8-pin + 6-pin",
        interface: "pcie",
        power: 250,
        component: {
            name: "AMD Radeon RX 6800",
            componentType: "GPU",
            price: 579.99,
            manufacturer: "AMD",
            imageUrl:
                "https://imgs.search.brave.com/9AuygiiQUNuOgmsgIBu9sDKIDQ0VxvZur1bV9jpPeVs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL3Byb2R1Y3Rp/bWFnZS9uYjMwMC9C/RjlWUzIzMDcyODBT/RTlDRDhBLmpwZw", // "https://example.com/rx6800.jpg",
        },
    },
    {
        memory: 4,
        powerConnector: "6-pin",
        interface: "pcie",
        power: 75,
        component: {
            name: "AMD Radeon RX 550",
            componentType: "GPU",
            price: 119.99,
            manufacturer: "AMD",
            imageUrl:
                "https://imgs.search.brave.com/FaTsjSJ9oP55rJGUnwrbwufIX9VaUkdaj0-P1IkYm-E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvN2Mw/OTZjOTctZDZmYS00/YjRlLThhNTMtZDI3/NDJkOTQwOGIxXzEu/MmUwOWJlZTM5MzM5/MDdlYTI5MWFmYTg5/NTc3YTk0ZTkuanBl/Zz9vZG5IZWlnaHQ9/NTgwJm9kbldpZHRo/PTU4MCZvZG5CZz1G/RkZGRkY", // "https://example.com/rx550.jpg",
        },
    },
    {
        memory: 8,
        powerConnector: "6-pin",
        interface: "pcie",
        power: 150,
        component: {
            name: "NVIDIA GeForce GTX 1660",
            componentType: "GPU",
            price: 219.99,
            manufacturer: "NVIDIA",
            imageUrl:
                "https://imgs.search.brave.com/4M5dAV8fd_f0WpVS8HQE6UqKxrHhfUa_R-em7oiX3Gc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL3Byb2R1Y3Rp/bWFnZS9uYjMwMC8x/NC05MzItMjE2LVow/MS5qcGc", // "https://example.com/gtx1660.jpg",
        },
    },
    {
        memory: 16,
        powerConnector: "8-pin + 8-pin",
        interface: "pcie",
        power: 300,
        component: {
            name: "NVIDIA GeForce RTX 2080 Ti",
            componentType: "GPU",
            price: 1199.99,
            manufacturer: "NVIDIA",
            imageUrl:
                "https://imgs.search.brave.com/Q3fItCu9CTrB8hf4Hr0yan2L3rHDbVQKJr9fh3o3A4w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL3Byb2R1Y3Rp/bWFnZS9uYjMwMC9W/MkQ1RDIyMDExMTEy/T0JFSjE2LmpwZw", // "https://example.com/rtx2080ti.jpg",
        },
    },
    {
        memory: 8,
        powerConnector: "8-pin",
        interface: "pcie",
        power: 180,
        component: {
            name: "NVIDIA GeForce GTX 1070 Ti",
            componentType: "GPU",
            price: 449.99,
            manufacturer: "NVIDIA",
            imageUrl:
                "https://imgs.search.brave.com/nWOzGRFebTou6WhWfGrwTuVppW3wg6TfPo8wA7ju3DU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFpbTN0enRXeUwu/anBn", // "https://example.com/gtx1070ti.jpg",
        },
    },
    {
        memory: 12,
        powerConnector: "8-pin + 8-pin",
        interface: "pcie",
        power: 350,
        component: {
            name: "NVIDIA GeForce RTX 4070",
            componentType: "GPU",
            price: 749.99,
            manufacturer: "NVIDIA",
            imageUrl:
                "https://imgs.search.brave.com/ikHnU99E7A7H-z4YFpHjirijSRXI_rr_W1HH7kGOsQM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL3Byb2R1Y3Rp/bWFnZS9uYjMwMC8x/NC05MzItNjExLVYw/MS5qcGc", // "https://example.com/rtx4070.jpg",
        },
    },
    {
        memory: 6,
        powerConnector: "6-pin",
        interface: "pcie",
        power: 120,
        component: {
            name: "AMD Radeon RX 480",
            componentType: "GPU",
            price: 229.99,
            manufacturer: "AMD",
            imageUrl:
                "https://imgs.search.brave.com/EL1Zv_Nz-HWR6LrRNhRkL9aJafQW6eGtPQyzB_0dQNM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL3Byb2R1Y3Rp/bWFnZS9uYjMwMC8x/NC0xNTAtNzcxLTE0/LmpwZw", // "https://example.com/rx480.jpg",
        },
    },
    {
        memory: 8,
        powerConnector: "8-pin + 6-pin",
        interface: "pcie",
        power: 180,
        component: {
            name: "NVIDIA GeForce GTX 980 Ti",
            componentType: "GPU",
            price: 649.99,
            manufacturer: "NVIDIA",
            imageUrl:
                "https://imgs.search.brave.com/kUIBgzvHpAYompFyLNx7iLdu63ZltDEko5fjypTquUk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvYXN1/c19zdHJfZ3R4OTgw/dGlfZGMzb2NfNmdk/NV9nX252aWRpYV9n/ZWZvcmNlX2d0eF85/ODBfMTQzNzY2NjMy/OF8xMTY5NDg1Lmpw/Zw", // "https://example.com/gtx980ti.jpg",
        },
    },
    {
        memory: 4,
        powerConnector: "6-pin",
        interface: "pcie",
        power: 75,
        component: {
            name: "AMD Radeon RX 460",
            componentType: "GPU",
            price: 139.99,
            manufacturer: "AMD",
            imageUrl:
                "https://imgs.search.brave.com/80okdgbTAvRPd7gK5iLAqG1upjLTpsQiFaQY4xZKDIE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFFVVVSelEyVEwu/anBn", // "https://example.com/rx460.jpg",
        },
    },
]

export default gpuData
