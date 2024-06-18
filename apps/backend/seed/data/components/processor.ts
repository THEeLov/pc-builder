import { ProcessorCreate } from "../../../src/components/processor/validation/processor.types"
import ProcessorRepo from "../../../src/components/processor/repository/processor.repository"

const processorData: ProcessorCreate[] = [
    {
        architecture: "Zen 3",
        cores: 8,
        threads: 16,
        bits: 64,
        socket: "am4",
        component: {
            name: "AMD Ryzen 7 5800X",
            componentType: "PROCESSOR",
            price: 449.99,
            manufacturer: "AMD",
            imageUrl:
                "https://imgs.search.brave.com/MPL-vAdMTTu99lJOCFCecD1ehGyIb1EoIO7sO8F0FVQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFsbmktb1FLcEwu/anBn", // "https://example.com/ryzen75800x.jpg",
        },
    },
    {
        architecture: "Comet Lake",
        cores: 10,
        threads: 20,
        bits: 64,
        socket: "lga1200",
        component: {
            name: "Intel Core i9-10900K",
            componentType: "PROCESSOR",
            price: 499.99,
            manufacturer: "Intel",
            imageUrl:
                "https://imgs.search.brave.com/y-1Rf094SharV3InYPMF8JStsQfYw8ewyEJxSTiVoCY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3MuMXdvcmxkc3lu/Yy5jb20vMTkvYTkv/MTlhOTAzYjUtZDY0/OS00ODM1LTk2NDct/OGVhN2Q5N2EzMGVi/LmpwZw", // "https://example.com/i910900k.jpg",
        },
    },
    {
        architecture: "Zen 2",
        cores: 6,
        threads: 12,
        bits: 64,
        socket: "am4",
        component: {
            name: "AMD Ryzen 5 3600",
            componentType: "PROCESSOR",
            price: 199.99,
            manufacturer: "AMD",
            imageUrl:
                "https://imgs.search.brave.com/Z7NX5UENxl5S-mKxC7Jvm0c9xV3nvaiwUfU42Gk7_Rg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxYjc1RVFKcmdM/LmpwZw", // "https://example.com/ryzen53600.jpg",
        },
    },
    {
        architecture: "Comet Lake",
        cores: 6,
        threads: 12,
        bits: 64,
        socket: "lga1200",
        component: {
            name: "Intel Core i5-10600K",
            componentType: "PROCESSOR",
            price: 279.99,
            manufacturer: "Intel",
            imageUrl:
                "https://imgs.search.brave.com/vj8djlaOTwBm5oM9hNii2oZk1PwP1UGXF81PBMQmt4k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjF4QXpFb0N1aEwu/anBn", // "https://example.com/i510600k.jpg",
        },
    },
    {
        architecture: "Zen 3",
        cores: 12,
        threads: 24,
        bits: 64,
        socket: "am4",
        component: {
            name: "AMD Ryzen 9 5900X",
            componentType: "PROCESSOR",
            price: 549.99,
            manufacturer: "AMD",
            imageUrl:
                "https://imgs.search.brave.com/ZocZW1NKe7Wmu4W-3Dc2BydTcbKdUBmRjJAh9o1_ffU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjEwK1F4ek1SNUwu/anBn", // "https://example.com/ryzen95900x.jpg",
        },
    },
    {
        architecture: "Rocket Lake",
        cores: 8,
        threads: 16,
        bits: 64,
        socket: "lga1200",
        component: {
            name: "Intel Core i7-11700K",
            componentType: "PROCESSOR",
            price: 399.99,
            manufacturer: "Intel",
            imageUrl:
                "https://imgs.search.brave.com/G-IoxtBQt0M78ns6sG4a0SYpiwHn1B9k83HatyshnxM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzUxQXFFa2MyQnVM/LmpwZw", // "https://example.com/i711700k.jpg",
        },
    },
    {
        architecture: "Zen 2",
        cores: 8,
        threads: 16,
        bits: 64,
        socket: "am4",
        component: {
            name: "AMD Ryzen 7 3700X",
            componentType: "PROCESSOR",
            price: 329.99,
            manufacturer: "AMD",
            imageUrl:
                "https://imgs.search.brave.com/LXtU3IToJsO139IvuHqQrZWYKbfwKHvaCm79Pygb8yo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL3Byb2R1Y3Rp/bWFnZS9uYjMwMC9B/OFVDRDIwMDcxOE0x/MVFGLmpwZw", // "https://example.com/ryzen73700x.jpg",
        },
    },
    {
        architecture: "Coffee Lake",
        cores: 8,
        threads: 16,
        bits: 64,
        socket: "lga1151",
        component: {
            name: "Intel Core i9-9900K",
            componentType: "PROCESSOR",
            price: 499.99,
            manufacturer: "Intel",
            imageUrl:
                "https://imgs.search.brave.com/hu7v6BEe5mkb6WlWrCdi0O_V1G0U3UAKpv5GqlXcI_I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXJzdGVjaG5pY2Eu/bmV0L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzExLzE1Mzkw/Mjc5NDcwMDBfMTQz/NTkxNy5qcGc", // "https://example.com/i99900k.jpg",
        },
    },
    {
        architecture: "Zen 3",
        cores: 6,
        threads: 12,
        bits: 64,
        socket: "am4",
        component: {
            name: "AMD Ryzen 5 5600X",
            componentType: "PROCESSOR",
            price: 299.99,
            manufacturer: "AMD",
            imageUrl:
                "https://imgs.search.brave.com/9Px5x4SNqNlCsR5ERa97HazIvuPCQGZ_oS2qmxEFv6A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvYW1k/XzEwMF8xMDAwMDAw/NjVib3hfcnl6ZW5f/NV81NjAweF8zXzdf/MTYwNDUzMzU0OV8x/NTk4Mzc3LmpwZw", // "https://example.com/ryzen55600x.jpg",
        },
    },
    {
        architecture: "Rocket Lake",
        cores: 6,
        threads: 12,
        bits: 64,
        socket: "lga1200",
        component: {
            name: "Intel Core i5-11600K",
            componentType: "PROCESSOR",
            price: 279.99,
            manufacturer: "Intel",
            imageUrl:
                "https://imgs.search.brave.com/TXdOgB_B9pbjEEfhC3MIHW0FIcVwLsvG54lTuzyOEFo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzUxbGRNMHI3Tk1M/LmpwZw", // "https://example.com/i511600k.jpg",
        },
    },
    {
        architecture: "Zen 2",
        cores: 16,
        threads: 32,
        bits: 64,
        socket: "trx4",
        component: {
            name: "AMD Ryzen Threadripper 3970X",
            componentType: "PROCESSOR",
            price: 1999.99,
            manufacturer: "AMD",
            imageUrl:
                "https://imgs.search.brave.com/psFP595Kqqw3TYeE6tg7T-Uqfm60JA7zv8dl7P0tq-s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL1Byb2R1Y3RJ/bWFnZS8xOS0xMTMt/NjE5LVYwNy5qcGc", // "https://example.com/threadripper3970x.jpg",
        },
    },
    {
        architecture: "Comet Lake",
        cores: 4,
        threads: 8,
        bits: 64,
        socket: "lga1200",
        component: {
            name: "Intel Core i3-10100",
            componentType: "PROCESSOR",
            price: 129.99,
            manufacturer: "Intel",
            imageUrl:
                "https://imgs.search.brave.com/DUAnzKJ_QgC6OzHc2HTdUpWQ4M6vF6QZ0xifXJTgbVU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL1Byb2R1Y3RJ/bWFnZS8xOS0xMTgt/MTM4LVYxMS5qcGc", // "https://example.com/i310100.jpg",
        },
    },
    {
        architecture: "Zen 3",
        cores: 8,
        threads: 16,
        bits: 64,
        socket: "am4",
        component: {
            name: "AMD Ryzen 7 5800X3D",
            componentType: "PROCESSOR",
            price: 479.99,
            manufacturer: "AMD",
            imageUrl:
                "https://imgs.search.brave.com/o_OUy51tgQQXu-jeHYrx1tLLymqw6WWHb_SouAGiF0A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvMTBm/M2UxOGYtOTRlNC00/MWZmLWE5OTktZTU3/YWFiYzRhNTgyLjI2/YjM4MmY3NzZjYWMz/NjAxMjgwZmFhYmZj/NDAyNTdkLmpwZWc_/b2RuSGVpZ2h0PTYx/MiZvZG5XaWR0aD02/MTImb2RuQmc9RkZG/RkZG", // "https://example.com/ryzen75800x3d.jpg",
        },
    },
    {
        architecture: "Coffee Lake",
        cores: 6,
        threads: 12,
        bits: 64,
        socket: "lga1151",
        component: {
            name: "Intel Core i7-8700K",
            componentType: "PROCESSOR",
            price: 359.99,
            manufacturer: "Intel",
            imageUrl:
                "https://imgs.search.brave.com/tVNmx4csecWQm2gwaB4b-eRUoOZ8wET321Ht_OOqt8Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFtMktwN05FUUwu/anBn", // "https://example.com/i78700k.jpg",
        },
    },
    {
        architecture: "Zen 2",
        cores: 24,
        threads: 48,
        bits: 64,
        socket: "trx4",
        component: {
            name: "AMD Ryzen Threadripper 3960X",
            componentType: "PROCESSOR",
            price: 1399.99,
            manufacturer: "AMD",
            imageUrl:
                "https://imgs.search.brave.com/psFP595Kqqw3TYeE6tg7T-Uqfm60JA7zv8dl7P0tq-s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL1Byb2R1Y3RJ/bWFnZS8xOS0xMTMt/NjE5LVYwNy5qcGc", // "https://example.com/threadripper3960x.jpg",
        },
    },
    {
        architecture: "Rocket Lake",
        cores: 8,
        threads: 16,
        bits: 64,
        socket: "lga1200",
        component: {
            name: "Intel Core i7-11900K",
            componentType: "PROCESSOR",
            price: 549.99,
            manufacturer: "Intel",
            imageUrl:
                "https://imgs.search.brave.com/G-IoxtBQt0M78ns6sG4a0SYpiwHn1B9k83HatyshnxM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzUxQXFFa2MyQnVM/LmpwZw", // "https://example.com/i711900k.jpg",
        },
    },
    {
        architecture: "Zen 2",
        cores: 12,
        threads: 24,
        bits: 64,
        socket: "am4",
        component: {
            name: "AMD Ryzen 9 3900X",
            componentType: "PROCESSOR",
            price: 499.99,
            manufacturer: "AMD",
            imageUrl:
                "https://imgs.search.brave.com/q9FRYTzWci5dRCXivl5qcl-TNffvEBJ_qa3tp9p40wg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxMjJ1SDQtaGZM/LmpwZw", // "https://example.com/ryzen93900x.jpg",
        },
    },
    {
        architecture: "Comet Lake",
        cores: 6,
        threads: 12,
        bits: 64,
        socket: "lga1200",
        component: {
            name: "Intel Core i5-10400",
            componentType: "PROCESSOR",
            price: 182.99,
            manufacturer: "Intel",
            imageUrl:
                "https://imgs.search.brave.com/TXdOgB_B9pbjEEfhC3MIHW0FIcVwLsvG54lTuzyOEFo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzUxbGRNMHI3Tk1M/LmpwZw", // "https://example.com/i510400.jpg",
        },
    },
    {
        architecture: "Zen 3",
        cores: 16,
        threads: 32,
        bits: 64,
        socket: "am4",
        component: {
            name: "AMD Ryzen 9 5950X",
            componentType: "PROCESSOR",
            price: 799.99,
            manufacturer: "AMD",
            imageUrl:
                "https://imgs.search.brave.com/TZodkvo-QfiITb0mgekbdzOMb9_6xeYAaG8JCwauRlY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tdWx0/aW1lZGlhLmJieWNh/c3RhdGljLmNhL211/bHRpbWVkaWEvcHJv/ZHVjdHMvNTAweDUw/MC8xNTMvMTUzMzEv/MTUzMzE3MTYuanBn", // "https://example.com/ryzen95950x.jpg",
        },
    },
    {
        architecture: "Coffee Lake",
        cores: 4,
        threads: 8,
        bits: 64,
        socket: "lga1151",
        component: {
            name: "Intel Core i3-8100",
            componentType: "PROCESSOR",
            price: 129.99,
            manufacturer: "Intel",
            imageUrl:
                "https://imgs.search.brave.com/ZEFsMZJbvYlZM5PIMtpdp9XsH6R0M_NnsgPD5RXMyEQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cGNnYW1lYmVuY2ht/YXJrLmNvbS9pbWcv/cHJvZHVjdC9pbnRl/bC1jb3JlLWkzLTgx/MDAvaW50ZWwtY29y/ZS1pMy04MTAwLXBy/b2Nlc3Nvci1yZXZp/ZXcuanBn", // "https://example.com/i38100.jpg",
        },
    },
]

const seedProcessors = async () => {
    for (const processor of processorData) {
        const result = await ProcessorRepo.create(processor)
        if (result.isErr) {
            console.error("Failed to create pc case:", result.error)
        }
    }
}

export default seedProcessors
