import { PCCaseCreate } from "../../src/components/pcCase/validation/pcCase.types"

const pcCaseData: PCCaseCreate[] = [
    {
        formFactor: "atx",
        component: {
            name: "NZXT H510",
            componentType: "PCCASE",
            price: 69.99,
            manufacturer: "NZXT",
            imageUrl:
                "https://imgs.search.brave.com/O8GZD2gJ-7RbRPQj55PwPT_tQJmizKoUnqyt-ipE_qw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvbnp4/dF9jYV9oNTEwZV93/MV9oNTEwX2VsaXRl/X21pZF90b3dlcl9h/dHhfMTY3MTc5ODYx/OV8xNTA3NTUyLmpw/Zw", // "https://example.com/nzxth510.jpg",
        },
    },
    {
        formFactor: "microATX",
        component: {
            name: "Cooler Master MasterBox Q300L",
            componentType: "PCCASE",
            price: 49.99,
            manufacturer: "Cooler Master",
            imageUrl:
                "https://imgs.search.brave.com/IZxyZQM-Fh2y7pdh_P8mq2V-ffsVMXSbumOpQRoF1Y8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxWHQ2WkQ5OGpM/LmpwZw", // "https://example.com/masterboxq300l.jpg",
        },
    },
    {
        formFactor: "atx",
        component: {
            name: "Corsair 4000D Airflow",
            componentType: "PCCASE",
            price: 79.99,
            manufacturer: "Corsair",
            imageUrl:
                "https://imgs.search.brave.com/O_2lWNZb54rrl8MAiKC89idcQ3Cztf-i_BH_e4gHHDA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cGFyYWRpZ2l0Lmll/L3BpY3R1cmUvMjEw/Mzg3MDEvNDAwLzMw/MC9IaWdoUmVzb2x1/dGlvbi9QUklFL2Zh/bHNl.jpeg", // "https://example.com/corsair4000d.jpg",
        },
    },
    {
        formFactor: "miniITX",
        component: {
            name: "NZXT H210",
            componentType: "PCCASE",
            price: 89.99,
            manufacturer: "NZXT",
            imageUrl:
                "https://imgs.search.brave.com/umeRKOIQ2VxQpYWyvgHwmVRcIYr4sWCQxX5WtSHprIY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvMjNh/YjI0NjQtYzk1MS00/ZTFmLWE4NmEtNjVi/ZDhhZDQzMDMwLmUw/ZjI4NjYzYmNkOWU0/N2I5NWRmZmRmMzhj/MDkyZTdhLmpwZWc_/b2RuSGVpZ2h0PTYx/MiZvZG5XaWR0aD02/MTImb2RuQmc9RkZG/RkZG", // "https://example.com/nzxth210.jpg",
        },
    },
    {
        formFactor: "atx",
        component: {
            name: "Fractal Design Meshify C",
            componentType: "PCCASE",
            price: 99.99,
            manufacturer: "Fractal Design",
            imageUrl:
                "https://imgs.search.brave.com/L-JRU0RiwJv4m4ThsbxyBB9larTvoB0TKW58VzWj35k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzkxWldxTjN3bG9M/LmpwZw", // "https://example.com/meshifyc.jpg",
        },
    },
    {
        formFactor: "microATX",
        component: {
            name: "Thermaltake Core V21",
            componentType: "PCCASE",
            price: 69.99,
            manufacturer: "Thermaltake",
            imageUrl:
                "https://imgs.search.brave.com/fRyYHCGveZz0esoZp4pXBH9xhB4_4LTIBXC8t-zFo2I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Nhbi5jby51ay9p/bWFnZXMvcHJvZHVj/dHMvMjQ5MTAzNi1h/LmpwZw", // "https://example.com/corev21.jpg",
        },
    },
    {
        formFactor: "atx",
        component: {
            name: "Phanteks Eclipse P400A",
            componentType: "PCCASE",
            price: 89.99,
            manufacturer: "Phanteks",
            imageUrl:
                "https://imgs.search.brave.com/oEk0aks5HM2CADjcZ1LrU_tqrBsJ74VMOiPAUA09R9E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFIbGFqUGdzQ0wu/anBn", // "https://example.com/eclipsep400a.jpg",
        },
    },
    {
        formFactor: "miniITX",
        component: {
            name: "Lian Li PC-O11 Dynamic Mini",
            componentType: "PCCASE",
            price: 129.99,
            manufacturer: "Lian Li",
            imageUrl:
                "https://imgs.search.brave.com/DNlgfHa3IRsKXrX0z2xe5u6yFMJDwF11pCrEqhjvmFQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvbGlh/bl9saV9vMTFkX21p/bmlfeF9vMTFfZHlu/YW1pY19taW5pX21p/bmlfdG93ZXJfZ2Ft/aW5nXzE2MTQ5NjQ4/NjRfMTYyMTAyOS5q/cGc", // "https://example.com/pco11mini.jpg",
        },
    },
    {
        formFactor: "atx",
        component: {
            name: "Cooler Master MasterCase H500",
            componentType: "PCCASE",
            price: 149.99,
            manufacturer: "Cooler Master",
            imageUrl:
                "https://imgs.search.brave.com/dmqhLjdDmKiolPkOKF-xebLxG1cnt1L7mEuhGxqo8-w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWRlYWxvLmNvbS9m/b2xkZXIvUHJvZHVj/dC8yMDAzNTEvNS8y/MDAzNTE1NjgvczFf/cHJvZHVrdGJpbGRf/bWF4L2Nvb2xlci1t/YXN0ZXItbWFzdGVy/Y2FzZS1oNTAwLWFy/Z2IuanBn", // "https://example.com/mastercaseh500.jpg",
        },
    },
    {
        formFactor: "microATX",
        component: {
            name: "Corsair Crystal 280X RGB",
            componentType: "PCCASE",
            price: 159.99,
            manufacturer: "Corsair",
            imageUrl:
                "https://imgs.search.brave.com/VB_4TpdkwZF0KrBzslxB4ckzrLaKNPMCLhKVMlIp9ic/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvY29y/c2Fpcl9jY185MDEx/MTM1X3d3X2NyeXN0/YWxfMjgweF9yZ2Jf/dGVtcGVyZWRfMTYy/OTk3ODQxM18xNjQ2/MDMwLmpwZw", // "https://example.com/crystal280x.jpg",
        },
    },
    {
        formFactor: "atx",
        component: {
            name: "Be Quiet! Pure Base 500DX",
            componentType: "PCCASE",
            price: 99.99,
            manufacturer: "Be Quiet!",
            imageUrl:
                "https://imgs.search.brave.com/cKMQT7A2bfijykl5xriBEtFBAJ3PjVknNeyZYm8jSFU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudW1hcnQuY29t/LmF1L25ld3NpdGUv/aW1hZ2VzLzIwMjMw/Ni9zb3VyY2VfaW1n/L0JlLVF1aWV0LUNh/c2VzLWJlLXF1aWV0/LVB1cmUtQmFzZS01/MDBEWC1UZW1wZXJl/ZC1HbGFzcy1BVFgt/Q2FzZS1CbGFjay0x/My5qcGc", // "https://example.com/purebase500dx.jpg",
        },
    },
    {
        formFactor: "miniITX",
        component: {
            name: "SilverStone SG13",
            componentType: "PCCASE",
            price: 49.99,
            manufacturer: "SilverStone",
            imageUrl:
                "https://imgs.search.brave.com/WXw6aqHAJKpQF2TGDeLUuY7LSJhQMrsbROpBv_fX7-4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3RlbnMuY29tL2lt/YWdlL2NhY2hlL2Nh/dGFsb2cvQ29tcHV0/ZXIlMjBDYXNlcy9T/U1QtU0cxM0ItQy9j/dGVucyUyMCgyKS02/MDB4ODAwLmpwZw", // "https://example.com/sg13.jpg",
        },
    },
    {
        formFactor: "atx",
        component: {
            name: "Lian Li Lancool II Mesh",
            componentType: "PCCASE",
            price: 89.99,
            manufacturer: "Lian Li",
            imageUrl:
                "https://imgs.search.brave.com/krVKnwlDu3zLDmUTqtyKLFGI2IVBYICFswA-Hj6IJEg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL1Byb2R1Y3RJ/bWFnZS9BRlNUUzIy/MDEwNThnNFhQLmpw/Zw", // "https://example.com/lancooliimesh.jpg",
        },
    },
    {
        formFactor: "microATX",
        component: {
            name: "Fractal Design Node 804",
            componentType: "PCCASE",
            price: 109.99,
            manufacturer: "Fractal Design",
            imageUrl:
                "https://imgs.search.brave.com/0a5egRomrrfznN0O6KYzEBo3x2IXjeihBelGUC86Fjw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3Jvc2JpbGwuY29t/L2ltYWdlc19wcm9k/dWl0cy8zNjA0NDc1/OC1hNzFlLTQyMWQt/YjZkNS05OGJlYjM4/ODM1MDMuanBn", // "https://example.com/node804.jpg",
        },
    },
    {
        formFactor: "atx",
        component: {
            name: "Phanteks Enthoo Pro 2",
            componentType: "PCCASE",
            price: 139.99,
            manufacturer: "Phanteks",
            imageUrl:
                "https://imgs.search.brave.com/8av03nNLSNIGesZ_70RG_Hg_0m0AgAMFKNvi_g7Iee8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDE0TXhqKzc1ZEwu/anBn", // "https://example.com/enthoopro2.jpg",
        },
    },
    {
        formFactor: "miniITX",
        component: {
            name: "Cooler Master NR200P",
            componentType: "PCCASE",
            price: 99.99,
            manufacturer: "Cooler Master",
            imageUrl:
                "https://imgs.search.brave.com/x617cUts2kc1QFZz5iB2PLn-tP_ZHWLn0-3Fbj05BCo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFuMTQ3Vm1Kckwu/anBn", // "https://example.com/nr200p.jpg",
        },
    },
    {
        formFactor: "atx",
        component: {
            name: "Corsair 5000D Airflow",
            componentType: "PCCASE",
            price: 149.99,
            manufacturer: "Corsair",
            imageUrl:
                "https://imgs.search.brave.com/YofcEcu-VUxQIhZpW9Pd7H4xkahG7A5ULM3bjhSsGCQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFma2kySGN5ZUwu/anBn", // "https://example.com/corsair5000d.jpg",
        },
    },
    {
        formFactor: "microATX",
        component: {
            name: "NZXT H510 Elite",
            componentType: "PCCASE",
            price: 149.99,
            manufacturer: "NZXT",
            imageUrl:
                "https://imgs.search.brave.com/4e1N2TZbyTNL5DFo5okbHckUrAnaDNyF5klsQSmUcLU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzUxZnBtWGxYMmhM/LmpwZw", // "https://example.com/nzxth510elite.jpg",
        },
    },
    {
        formFactor: "atx",
        component: {
            name: "Thermaltake Level 20 MT ARGB",
            componentType: "PCCASE",
            price: 109.99,
            manufacturer: "Thermaltake",
            imageUrl:
                "https://imgs.search.brave.com/k-Dg9nO2DaiZZFiqf0AYuNus6vyEAPjvU9W26-j0cak/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90dHBy/ZW1pdW0uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzEx/L0NBLTFNNy0wME0x/V04tMDBfOTgxNzQ0/OTA5YzYzNDE0M2Ey/M2VjODQ5YzhlZmNh/M2MtNjAweDYwMC5q/cGc", // "https://example.com/level20mt.jpg",
        },
    },
    {
        formFactor: "miniITX",
        component: {
            name: "NZXT H1",
            componentType: "PCCASE",
            price: 349.99,
            manufacturer: "NZXT",
            imageUrl:
                "https://imgs.search.brave.com/PCeBjUE23MecGDkUyxc1XkINt8ambj5h4IYxduPKHBE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFkSjBNbnpYVUwu/anBn", // "https://example.com/nzxth1.jpg",
        },
    },
]

export default pcCaseData
