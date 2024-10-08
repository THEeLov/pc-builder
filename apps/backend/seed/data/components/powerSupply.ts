import { PowerSupplyCreate } from "../../../src/components/powerSupply/validation/powerSupply.types"
import PowerSupplyRepo from "../../../src/components/powerSupply/repository/powerSupply.repository"

const powerSupplyData: PowerSupplyCreate[] = [
    {
        powerOutput: 750,
        efficiency: "80 PLUS Gold",
        formFactor: "atx",
        component: {
            name: "Corsair RM750x",
            componentType: "POWERSUPPLY",
            price: 129.99,
            manufacturer: "Corsair",
            imageUrl:
                "https://imgs.search.brave.com/Q8tuG9bj-BfLGm4ml3plyMRuVBVn6CLiYQ7BxU763tI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL1Byb2R1Y3RJ/bWFnZS8xNy0xMzkt/MjcxLVYwMS5qcGc", // "https://example.com/rm750x.jpg",
        },
    },
    {
        powerOutput: 650,
        efficiency: "80 PLUS Bronze",
        formFactor: "atx",
        component: {
            name: "EVGA 650 BQ",
            componentType: "POWERSUPPLY",
            price: 74.99,
            manufacturer: "EVGA",
            imageUrl:
                "https://imgs.search.brave.com/2bfnR3Mv7o_odONOne_3nVAQD1pF0bBB5XeBY0C0Ht4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF3M0oweGFxNUwu/anBn", // "https://example.com/650bq.jpg",
        },
    },
    {
        powerOutput: 850,
        efficiency: "80 PLUS Platinum",
        formFactor: "atx",
        component: {
            name: "Seasonic Prime TX-850",
            componentType: "POWERSUPPLY",
            price: 229.99,
            manufacturer: "Seasonic",
            imageUrl:
                "https://imgs.search.brave.com/wNfLcbBdgffrAsmfKTgq6p5aOf5Wsnut6agUZJ9e290/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFXc0tmcVZpNUwu/anBn", // "https://example.com/primetx850.jpg",
        },
    },
    {
        powerOutput: 500,
        efficiency: "80 PLUS Bronze",
        formFactor: "atx",
        component: {
            name: "Cooler Master MWE 500",
            componentType: "POWERSUPPLY",
            price: 54.99,
            manufacturer: "Cooler Master",
            imageUrl:
                "https://imgs.search.brave.com/lA_UKdRXjkb93lDWls191wjU54mCfrIvmXL4-LG8pJk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTE0Y1ZoalYrMEwu/anBn", // "https://example.com/mwe500.jpg",
        },
    },
    {
        powerOutput: 600,
        efficiency: "80 PLUS Gold",
        formFactor: "sfx",
        component: {
            name: "SilverStone SX600-G",
            componentType: "POWERSUPPLY",
            price: 139.99,
            manufacturer: "SilverStone",
            imageUrl:
                "https://imgs.search.brave.com/jmiHoo3lDyMnlbzpjUWN0tlw-nrQ6N00uwI1qZxQYgI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvc2ls/dmVyc3RvbmVfc3g2/MDBfZ182MDB3X3Bv/d2VyX3N1cHBseV84/MF9nb2xkX21vZHVs/YXJfMTU2NzY5NjAw/MV8xMTc5NjI5Lmpw/Zw", // "https://example.com/sx600g.jpg",
        },
    },
    {
        powerOutput: 1000,
        efficiency: "80 PLUS Titanium",
        formFactor: "atx",
        component: {
            name: "EVGA SuperNOVA 1000 T2",
            componentType: "POWERSUPPLY",
            price: 299.99,
            manufacturer: "EVGA",
            imageUrl:
                "https://imgs.search.brave.com/kAuyvM2NYPWISq9QTcRFiwo7A7CzWofC46smUYguvsM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvZXZn/YV8yMjBfdDJfMTAw/MF94MV9uZXhfc3Vw/ZXJub3ZhXzEwMDB3/X3RpdGFuaXVtXzE0/NzUwODE0NTFfMTI4/NTkwOC5qcGc", // "https://example.com/supernova1000t2.jpg",
        },
    },
    {
        powerOutput: 450,
        efficiency: "80 PLUS Bronze",
        formFactor: "atx",
        component: {
            name: "Thermaltake Smart 450W",
            componentType: "POWERSUPPLY",
            price: 39.99,
            manufacturer: "Thermaltake",
            imageUrl:
                "https://imgs.search.brave.com/Mrn0suAos91_fvXXSPSe84eX2qwVsXR9bR53f60ZJRk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEt/bGlicmFyeS1zZXJ2/aWNlLW1lZGlhL2Nj/MThmN2QyLTE4OWYt/NDJjZC05NjdhLWZm/YjBkMmQxM2NkNS5f/X0NSMCwwLDMwMCw0/MDBfUFQwX1NYMzAw/X1YxX19fLmpwZw", // "https://example.com/smart450w.jpg",
        },
    },
    {
        powerOutput: 700,
        efficiency: "80 PLUS Silver",
        formFactor: "atx",
        component: {
            name: "Antec Earthwatts EA-700",
            componentType: "POWERSUPPLY",
            price: 99.99,
            manufacturer: "Antec",
            imageUrl:
                "https://imgs.search.brave.com/xDS8l3WUb8PouFspUGPezdjIEW18VdPgOlJFV0j8XWI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFmeDRha2o0SEwu/anBn", // "https://example.com/earthwatts700.jpg",
        },
    },
    {
        powerOutput: 550,
        efficiency: "80 PLUS Gold",
        formFactor: "atx",
        component: {
            name: "Corsair TX550M",
            componentType: "POWERSUPPLY",
            price: 84.99,
            manufacturer: "Corsair",
            imageUrl:
                "https://imgs.search.brave.com/CdK_ESgoVkG2v7IOvsxwi5p_F3_fXKPBhgkHCag1iDI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODF3eE5LbXFFQ0wu/anBn", // "https://example.com/tx550m.jpg",
        },
    },
    {
        powerOutput: 750,
        efficiency: "80 PLUS Platinum",
        formFactor: "atx",
        component: {
            name: "Seasonic Focus PX-750",
            componentType: "POWERSUPPLY",
            price: 139.99,
            manufacturer: "Seasonic",
            imageUrl:
                "https://imgs.search.brave.com/fS8yv4rsQU5cUawMC_Lnx4VylMFVaIeP11qRhyM_kSc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/b3ZlcmNsb2NrZXJz/LmNvLnVrL2ltYWdl/cy9DQS0wNlEtU1Mv/ODAxYWFkNDU4OTUy/NDA5Mzc0Y2RjYWUz/YTUwMjNkOGIuanBn", // "https://example.com/focuspx750.jpg",
        },
    },
    {
        powerOutput: 850,
        efficiency: "80 PLUS Gold",
        formFactor: "atx",
        component: {
            name: "Corsair RM850x",
            componentType: "POWERSUPPLY",
            price: 149.99,
            manufacturer: "Corsair",
            imageUrl:
                "https://imgs.search.brave.com/XdVjwU8_QmOoxXyl9JRh-q0hg7kSKhzffV_RH47RFgA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFrNTVyZmsxaUwu/anBn", // "https://example.com/rm850x.jpg",
        },
    },
    {
        powerOutput: 650,
        efficiency: "80 PLUS Gold",
        formFactor: "sfx",
        component: {
            name: "SilverStone SX650-G",
            componentType: "POWERSUPPLY",
            price: 149.99,
            manufacturer: "SilverStone",
            imageUrl:
                "https://imgs.search.brave.com/EDuX1u7TQRWuBnXKK7MENWAe6m44dWYQ2B7On_RENTw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFEbXh5djRSY0wu/anBn", // "https://example.com/sx650g.jpg",
        },
    },
    {
        powerOutput: 1000,
        efficiency: "80 PLUS Gold",
        formFactor: "atx",
        component: {
            name: "Thermaltake Toughpower Grand RGB 1000W",
            componentType: "POWERSUPPLY",
            price: 179.99,
            manufacturer: "Thermaltake",
            imageUrl:
                "https://imgs.search.brave.com/tmXHd2OijwPaIY2CXwi2dsF_VuGhLGgQHxnd390Pf9M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bmlra3RlY2guY29t/L21haW4vaW1hZ2Vz/L3BpY3MvcmV2aWV3/cy90aGVybWFsdGFr/ZS90b3VnaHBvd2Vy/X2dyYW5kX3JnYl8x/MjAwdy90b3VnaHBv/d2VyX2dyYW5kX3Jn/Yl8xMjAwd19wbGF0/aW51bWEuanBn", // "https://example.com/toughpower1000w.jpg",
        },
    },
    {
        powerOutput: 550,
        efficiency: "80 PLUS Platinum",
        formFactor: "atx",
        component: {
            name: "EVGA SuperNOVA 550 P2",
            componentType: "POWERSUPPLY",
            price: 99.99,
            manufacturer: "EVGA",
            imageUrl:
                "https://imgs.search.brave.com/YRpTHmlE61qZg6v7GcH8VYwbTMYwHQGjJvYOxTu3FuI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL1Byb2R1Y3RJ/bWFnZS8xNy00Mzgt/MDUzLTE4LmpwZw", // "https://example.com/supernova550p2.jpg",
        },
    },
    {
        powerOutput: 750,
        efficiency: "80 PLUS Bronze",
        formFactor: "atx",
        component: {
            name: "Cooler Master MWE 750 Bronze V2",
            componentType: "POWERSUPPLY",
            price: 79.99,
            manufacturer: "Cooler Master",
            imageUrl:
                "https://imgs.search.brave.com/YtRyy9MB3V_SvSJkbRnPW_1aiD7BGOCCK54osJDoV1M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kcnI2/MjJ3dWN0bjI2LmNs/b3VkZnJvbnQubmV0/L2ltYWdlL2NhY2hl/L2NhdGFsb2cvc21w/cy9jb29sZXJtYXN0/ZXIvbXBlLTc1MDEt/YWNhYnctYmluL21w/ZS03NTAxLWFjYWJ3/LWJpbi1pbWFnZS0x/LTYwMHg2MDAuanBn", // "https://example.com/mwe750bronze.jpg",
        },
    },
    {
        powerOutput: 650,
        efficiency: "80 PLUS Silver",
        formFactor: "atx",
        component: {
            name: "Antec Earthwatts EA-650",
            componentType: "POWERSUPPLY",
            price: 89.99,
            manufacturer: "Antec",
            imageUrl:
                "https://imgs.search.brave.com/TMBss1YGKK_rw3rTtth43uEbDn8OI35BUHgIi80QWZw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE1T2pNd3FhLUwu/anBn", // "https://example.com/earthwatts650.jpg",
        },
    },
    {
        powerOutput: 850,
        efficiency: "80 PLUS Titanium",
        formFactor: "atx",
        component: {
            name: "Seasonic Prime TX-850",
            componentType: "POWERSUPPLY",
            price: 229.99,
            manufacturer: "Seasonic",
            imageUrl:
                "https://imgs.search.brave.com/wNfLcbBdgffrAsmfKTgq6p5aOf5Wsnut6agUZJ9e290/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFXc0tmcVZpNUwu/anBn", // "https://example.com/primetx850.jpg",
        },
    },
    {
        powerOutput: 750,
        efficiency: "80 PLUS Platinum",
        formFactor: "atx",
        component: {
            name: "EVGA SuperNOVA 750 P2",
            componentType: "POWERSUPPLY",
            price: 159.99,
            manufacturer: "EVGA",
            imageUrl:
                "https://imgs.search.brave.com/LxVKisUtQ9KZH-viPQP30W2b2ff-yyO3ICdHbeOfy_A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jY2lt/Zy5jYW5hZGFjb21w/dXRlcnMuY29tL1By/b2R1Y3RzLzYwMHg2/MDAvMDk0LzA5NDA3/MS8zNjI2Ny5qcGc", // "https://example.com/supernova750p2.jpg",
        },
    },
    {
        powerOutput: 600,
        efficiency: "80 PLUS Bronze",
        formFactor: "atx",
        component: {
            name: "Thermaltake Smart 600W",
            componentType: "POWERSUPPLY",
            price: 49.99,
            manufacturer: "Thermaltake",
            imageUrl:
                "https://imgs.search.brave.com/BSB_hQF7fg8NLMWM-LfK8EQWiXnVImeZ5HHMg-u_cCk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvdGhl/cm1hbHRha2VfcHNf/c3BkXzA2MDBucGN3/dXNfd19zbWFydF82/MDB3XzgwX3BsdXNf/MTQ0NzM0OTgwOV8x/MTkzOTEwLmpwZw", // "https://example.com/smart600w.jpg",
        },
    },
    {
        powerOutput: 500,
        efficiency: "80 PLUS Gold",
        formFactor: "sfx",
        component: {
            name: "SilverStone SX500-LG",
            componentType: "POWERSUPPLY",
            price: 119.99,
            manufacturer: "SilverStone",
            imageUrl:
                "https://imgs.search.brave.com/VVp0Km12ePAOATXr1nMUj_mPEu5qZ2YkETLUvp16oaQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFXVlFLSXIrVkwu/anBn", // "https://example.com/sx500lg.jpg",
        },
    },
]

const seedPowerSupplies = async () => {
    for (const powerSupply of powerSupplyData) {
        const result = await PowerSupplyRepo.create(powerSupply)
        if (result.isErr) {
            console.error("Failed to create power s case:", result.error)
        }
    }
}

export default seedPowerSupplies
