const productsData = [
    {
        id: 1,
        tag: "hero-product",
        tagline: "Trải nghiệm đỉnh cao, thỗng lĩnh sức manh ",
        heroImage: "/images/products/oppo-find-x8.jpg",
        images: [
            "/images/products/oppo-find-x8.jpg",
            "/images/products/oppo-find-x8-pro-black.jpg",
            "/images/products/oppo-find-x8-pro-white.jpg",
            "/images/products/oppo-find-x8-pro-full.jpg",
        ],
        brand: "Oppo",
        title: "Oppo Find X8 ",
        info: "OPPO Find X8 Pro bước vào phân khúc cao cấp với thiết kế viền siêu mỏng, vỏ nhôm sang trọng, khả năng chống nước và bụi vượt trội. Máy còn được nâng cấp về camera, hiệu suất mạnh mẽ và thời lượng pin ấn tượng, mang đến trải nghiệm đáng giá.",
        category: "Android",
        type: "cao cấp",
        connectivity: "Wireless",
        finalPrice: 9999,
        originalPrice: 14999,
        quantity: 1,
        ratings: 1234,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 2,
        tag: "featured-product",
        images: [
            "/images/products/OppoA3.webp",
            "/images/products/OppoA3-1.webp",
            "/images/products/OppoA3-2.webp",
            "/images/products/OppoA3-3.webp"
        ],
        brand: "Oppo",
        title: "OPPO A3 (6GB 128GB)",
        info: "Điện thoại OPPO A3 xử lý ổn định và mượt mà mọi tác vụ nhờ bộ vi xử lý 8 nhân Qualcomm Snapdragon 6s 4G Gen1, kết hợp với đó là 6GB RAM và 128GB bộ nhớ trong. Mẫu máy hiển thị tốt với màn hình LCD độ phân giải 1604 × 720 pixel (HD+) kích thước 6.67 inch với độ sáng khá cao lên đến 1000 nit. Bên cạnh đó, sản phẩm OPPO A Series còn trang bị camera chính với độ phân giải 50MP kèm dung lượng pin 5.100mAh. ",
        category: "Android",
        type: "tầm trung",
        connectivity: "Wireless",
        finalPrice: 1299,
        originalPrice: 3990,
        quantity: 1,
        ratings: 1321,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 3,
        tag: "hero-product",
        tagline: "Oppo Reno10 Series 5G- Zoom vào cảm xúc-nét từng khoảng khắc",
        heroImage: "/images/products/Opporeno10-5g.webp",
        images: [
            "/images/products/Opporeno10-5g.webp",
            "/images/products/Opporeno10-5g-1.webp",
            "/images/products/Opporeno10-5g-2.webp",
            "/images/products/Opporeno10-5g-3.webp",
        ],
        brand: "Dior",
        title: "OPPO Reno10 5G 8GB 256GB",
        info: "Điện thoại OPPO Reno 10 sở hữu hiệu năng vô cùng mạnh mẽ khi được trang bị chipset MediaTek Dimensity 7050. Chất lượng hình ảnh của máy có độ sắc nét, mượt mà nhờ sở hữu tấm nền 3D AMOLED hiện đại với độ phân giải FHD+ 2412 × 1080 pixel cùng tần số quét 120Hz. Bên cạnh đó, Reno 10 còn sở hữu một vài ưu điểm khác như dung lượng Pin 5000mAh với sạc nhanh SUPERVOOC 67W cùng cụm camera 64MP sắc nét giúp nâng cao trải nghiệm của người dùng.",
        category: "Android",
        type: "Cao cấp",
        connectivity: "Wireless",
        finalPrice: 1099,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1244,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 4,
        images: [
            "/images/products/xiaomi_redmi_14c.webp",
            "/images/products/xiaomi_redmi_14c-1.webp",
            "/images/products/xiaomi_redmi_14c-2.webp",
            "/images/products/xiaomi_redmi_14c-3.webp",
        ],
        brand: "Xiaomi",
        title: "Xiaomi Redmi 14C 4GB 128GB",
        info: "Điện thoại Xiaomi Redmi 14C sở hữu vi xử lý MediaTek Helio G81-Ultra, cung cấp hiệu năng mạnh mẽ, giúp xử lý mượt mà các tác vụ hàng ngày và chơi game ổn định. Với màn hình 6.88 inch độ phân giải Full HD+, Redmi 14C mang lại trải nghiệm hình ảnh rõ nét và sống động hàng đầu cho người sử dụng. Đặc biệt, máy còn sở hữu dung lượng pin lớn 5160mAh đảm bảo thời gian sử dụng dài lâu, kết hợp với khả năng sạc nhanh cải thiện, đem lại sự tiện lợi và liền mạch trong suốt quá trình sử dụng.",
        category: "Android",
        type: "tầm trung",
        connectivity: "Wired",
        finalPrice: 449,
        originalPrice: 999,
        quantity: 1,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 5,
        images: [
            "/images/products/xiaomi_14t.webp",
            "/images/products/xiaomi_14t-1.webp",
            "/images/products/xiaomi_14t-2.webp",
            "/images/products/xiaomi_14t-3.webp",
        ],
        brand: "Xiaomi",
        title: "Xiaomi 14T (12GB 512GB)",
        info: "Xiaomi 14T 5Glà phiên bản điện thoại cận cao cấp được Xiaomi trang bị con chip Dimensity 8300 Ultra cùng 12GB RAM để mang tới hiệu suất ấn tượng. Mẫu điện thoại này còn được Xiaomi trang bị bộ 3 ống kính Leica thế hệ mới để nâng cao trải nghiệm nhiếp ảnh. Với màn hình Super AMOLED 6.67 inch sở hữu phần viền siêu mỏng cùng độ nét 1.5K, điện thoại 14T của Xiaomi sẽ luôn mang tới chất lượng hình ảnh sắc nét, sống động.",
        category: "Android",
        type: "Cao cấp",
        connectivity: "Bluetooth & Wired,5G",
        finalPrice: 1599,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1563,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 6,
        images: [
            "/images/products/xiaomi-redmi-note-13-pro-plus.webp",
            "/images/products/xiaomi-redmi-note-13-pro-plus-1.webp",
            "/images/products/xiaomi-redmi-note-13-pro-plus-2.webp",
            "/images/products/xiaomi-redmi-note-13-pro-plus-3.webp",
        ],
        brand: "Xiaomi",
        title: "Xiaomi Redmi Note 13 Pro Plus 5G 8GB 256GB",
        info: "Xiaomi Redmi Note 13 Pro Plus sở hữu màn hình rộng 6.67 inch, trang bị bộ vi xử lý Dimensity 7200 đem lại hiệu năng kinh ngạc. Với dung lượng pin 5000 mAh cùng hỗ trợ sạc nhanh lên đến 120W. Camera 200MP và khả năng zoom 4x mở ra những trải nghiệm chụp ảnh độc đáo và đa dạng.",
        category: "Android",
        type: "Cao cấp",
        connectivity: "Wireless",
        finalPrice: 3699,
        originalPrice: 5299,
        quantity: 1,
        ratings: 836,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 7,
        tag: "hero-product",
        tagline: "Thiết kế sang trọng quý phái, thỏa sức sáng tạo và quay phim chuyên nghiệp-Cụm 3 camera sau đến 48MP và nhiều chế độ tiên tiến",
        heroImage: "/images/products/iphone-15-pro-max-3.webp",
        images: [
            "/images/products/iphone-15-pro-max.webp",
            "/images/products/iphone-15-pro-max-1.webp",
            "/images/products/iphone-15-pro-max-2.webp",
            "/images/products/iphone-15-pro-max-3.webp",
        ],
        brand: "Iphone",
        title: "iPhone 15 Pro Max 256GB | Chính hãng VN/A",
        info: "iPhone 15 Pro Max sở hữu màn hình Super Retina XDR OLED 6.7 inches với độ phân giải 2796 x 1290 pixels, cung cấp trải nghiệm hình ảnh sắc nét, chân thực. So với các phiên bản tiền nhiệm, thế hệ iPhone 15 bản Pro Max đảm bảo mang tới hiệu năng mạnh mẽ với sự hỗ trợ của chipset Apple A17 Pro, cùng bộ nhớ ấn tượng. Đặc biệt hơn, điện thoại iPhone 15 ProMax mới này còn được đánh giá cao với camera sau 48MP và camera trước 12MP, hỗ trợ chụp ảnh với độ rõ nét cực đỉnh.",
        category: "IOS",
        type: "Cao cấp",
        connectivity: "Wireless",
        finalPrice: 13489,
        originalPrice: 19990,
        quantity: 1,
        ratings: 679,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 8,
        tag: "featured-product",
        images: [
            "/images/products/iphone-16-pro-max.webp",
            "/images/products/iphone-16-pro-max-1.webp",
            "/images/products/iphone-16-pro-max-2.webp",
            "/images/products/iphone-16-pro-max-3.webp",
        ],
        brand: "Iphone",
        title: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
        info: "iPhone 16 Pro Max có màn hình OLED 6.9 inch, với công nghệ màn hình Super Retina XDR, camera gồm: ống kính Fusion 48MP và Ultra Wide 48MP và camera Telephoto 5x 12MP, kết hợp camera trước 12MP chụp hình sắc nét đến từng chi tiết nhỏ, ghi lại những khoảnh khắc bên gia đình. Chiếc điện thoại iPhone 16 mới này được trang bị chip A18 Pro với 6 lõi CPU và 6 lõi GPU cùng với Neural Engine 16 lõi.",
        category: "IOS",
        type: "Cao cấp",
        connectivity: "Wireless",
        finalPrice: 5999,
        originalPrice: 7999,
        quantity: 1,
        ratings: 755,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 9,
        tag: "featured-product",
        images: [
            "/images/products/iphone-11.webp",
            "/images/products/iphone-11-1.webp",
            "/images/products/iphone-11-2.webp",
            "/images/products/iphone-11-3.webp",
        ],
        brand: "Iphone",
        title: "iPhone 11 64GB | Chính hãng VN/A",
        info: "iPhone 11 sở hữu hiệu năng khá mạnh mẽ, ổn định trong thời gian dài nhờ được trang bị chipset A13 Bionic. Màn hình LCD 6.1 inch sắc nét cùng chất lượng hiển thị Full HD của máy cho trải nghiệm hình ảnh mượt mà và có độ tương phản cao. Hệ thống camera hiện đại được tích hợp những tính năng công nghệ mới kết hợp với viên Pin dung lượng 3110mAh, giúp nâng cao trải nghiệm của người dùng.",
        category: "IOS",
        type: "Cao cấp",
        connectivity: "Wireless",
        finalPrice: 899,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1464,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 10,
        images: [
            "/images/products/iphone14promax.webp",
            "/images/products/iphone14promax-1.webp",
            "/images/products/iphone14promax-2.webp",
            "/images/products/iphone14promax-3.webp",
        ],
        brand: "Iphone",
        title: "iPhone 14 Pro 128GB | Chính hãng VN/A",
        info: "iPhone 14 Pro đem tới trải nghiệm thị giác siêu mượt mà khi sở hữu màn hình Dynamic Island sắc nét cùng công nghệ Super Retina XDR thế hệ mới. Hiệu năng của iPhone 14 Pro 128GB mạnh mẽ với vi xử lý Apple A16 Bionic, giúp ổn định mọi tác vụ. Cụm camera sau 48MP cùng nhiều công nghệ chụp ảnh hiện đại mang tới chất lượng quay chụp ấn tượng, chuẩn nhiếp ảnh chuyên nghiệp.",
        category: "IOS",
        type: "Cao cấp",
        connectivity: "Wireless",
        finalPrice: 2999,
        originalPrice: 6999,
        quantity: 1,
        ratings: 801,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 11,
        images: [
            "/images/products/s23-ultra.webp",
            "/images/products/s23-ultra-1.webp",
            "/images/products/s23-ultra-2.webp",
            "/images/products/s23-ultra-3.webp"
        ],
        brand: "Samsung",
        title: "Samsung Galaxy S23 Ultra 12GB 512GB",
        info: "Samsung Galaxy S23 Ultra 12GB 512GB tạo nên đột phá mạnh mẽ về mặt hiệu năng khi được trang bị vi xử lý Snapdragon 8 Gen 2 vượt trội cùng 12GB bộ nhớ RAM. Chất lượng hiển thị siêu sắc nét trên S23 Ultra tới từ tầm nền Dynamic AMOLED 2X 120Hz thế hệ mới. Bên cạnh đó, smartphone này còn sở hữu cụm camera cao cấp với độ rõ nét đạt tới 200MP. Viên pin 5000mAh cùng sạc nhanh 45W giúp nâng cao thời lượng sử dụng lên một tầm cao mới. ",
        category: "Android",
        type: "Cao cấp",
        connectivity: "Wireless",
        finalPrice: 19990,
        originalPrice: 24990,
        quantity: 1,
        ratings: 382,
        rateCount: 3,
        path: "/product-details/",
    },
    {
        id: 12,
        images: [
            "/images/products/galaxy-a15.webp",
            "/images/products/galaxy-a15-1.webp",
            "/images/products/galaxy-a15-2.webp",
            "/images/products/galaxy-a15-3.webp",
        ],
        brand: "Samsung",
        title: "Samsung Galaxy A15 LTE 8GB 128GB",
        info: "Samsung Galaxy A15 LTE được trang bị công nghệ màn hình cao cấp Super AMOLED, với độ phân giải FHD+ 1080 x 2340 pixel. Màn hình của sản phẩm lớn 6.5inch kết hợp với tần số quét nhanh, hạn chế tình trạng bị chớp màn hình hay bị nhòe khi sử dụng. Chiếc điện thoại mới của dòng Samsung Galaxy A này còn có cụm camera sắc nét và bộ nhớ lớn 8B+128GB sử dụng thả ga.",
        category: "Android",
        type: "tầm trung",
        connectivity: "Wired",
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        ratings: 1178,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 13,
        tag: "featured-product",
        images: [
            "/images/products/samsung-galaxy-z-flip5.webp",
            "/images/products/samsung-galaxy-z-flip5-1.webp",
            "/images/products/samsung-galaxy-z-flip5-2.webp",
            "/images/products/samsung-galaxy-z-flip5-3.webp",
        ],
        brand: "Samsung",
        title: "Samsung Galaxy Z Flip5 512GB",
        info: "Samsung Z Flip 5 có màn chính hình rộng 6.7 inch, với độ phân giải Full HD+ (1080 x 2636 Pixels), cụm camera trước 10MP và camera sau 12MP, rõ đến từng chi tiết. Cấu hình của sản phẩm mạnh mẽ nhờ hệ điều hành Android 10, con chipset mạnh mẽ Snapdragon 8 gen 2, với chip đồ họa tạo hình ảnh hiển thị hàng triệu màu sắc khác nhau. Sản phẩm có RAM 8GB, bộ nhớ trong 512GB.",
        category: "Android",
        type: "Cao cấp",
        connectivity: "Wired",
        finalPrice: 999,
        originalPrice: 1599,
        quantity: 1,
        ratings: 1144,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 14,
        tag: "featured-product",
        images: [
            "/images/products/oneplus_11.webp",
            "/images/products/oneplus_11-1.webp",
            "/images/products/oneplus_11-2.webp",
            "/images/products/oneplus_11-3.webp",
        ],
        brand: "OnePlus",
        title: "OnePlus 11 5G 8GB 128GB",
        info: "OnePlus 11 cải tiến mạnh mẽ về công nghệ cùng thiết kế sang trọng cùng hiệu năng cực kỳ mạnh mẽ tới từ con chip Snapdragon 8 Gen 2. OnePlus 11 sẽ là lựa chọn hoàn hảo, hỗ trợ người dùng xử lý công việc một cách hiệu quả và đáp ứng nhiều nhu cầu khác nhau của người dùng.",
        category: "Android",
        type: "Cao cấp",
        connectivity: "Wireless",
        finalPrice: 1074,
        originalPrice: 3999,
        quantity: 1,
        ratings: 1340,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 15,
        images: [
            "/images/products/samsung_galaxy_m55.webp",
            "/images/products/samsung_galaxy_m55-1.webp",
            "/images/products/samsung_galaxy_m55-2.webp",
            "/images/products/samsung_galaxy_m55-3.webp",
        ],
        brand: "Samsung",
        title: "Samsung Galaxy M55 (12GB 256GB)",
        info: "Samsung M55 là sản phẩm mới thuộc dòng Galaxy M, với màn hình 6.7 inch Super AMOLED Plus cung cấp khả năng hiển thị Full HD+ siêu thực cùng tần số quét lên đến 120Hz. Kèm theo đó là các thông số cấu hình đỉnh cao tới từ chipset Qualcomm Snapdragon 7 Gen 1, bộ nhớ trong 256GB cùng RAM 12GB, đảm bảo tốc độ xử lý, đa nhiệm và lưu trữ ấn tượng. Ngoài ra Galaxy M55 còn sở hữu viên pin dung lượng 5000mAh, hỗ trợ trải nghiệm dài lâu chỉ sau 1 lần nạp pin.",
        category: "Android",
        type: "tầm trung",
        connectivity: "Wireless",
        finalPrice: 8520,
        originalPrice: 14990,
        quantity: 1,
        ratings: 853,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 16,
        images: [
            "/images/products/dien-thoai-infinix-note-40-pro.webp",
            "/images/products/dien-thoai-infinix-note-40-pro-1.webp",
            "/images/products/dien-thoai-infinix-note-40-pro-2.webp",
            "/images/products/dien-thoai-infinix-note-40-pro-3.webp",
        ],
        brand: "Infinix",
        title: "Infinix Note 40 Pro 8GB 256GB",
        info: "Điện thoại Infinix Note 40 Pro được trang bị vi xử lý Helio G99 Ultimate, RAM 8GB và bộ nhớ trong 256GB, mang đến hiệu năng vượt trội đáp ứng mọi nhu cầu sử dụng. Thời lượng pin ấn tượng 5000mAh đủ để người dùng yên tâm sử dụng mà không lo bị gián đoạn. Điểm đặc biệt ở Infinix Note 40 Pro là 3 camera sau và 1 camera trước đã được cải tiến bắt trọn mọi khoảnh khắc chân thật nhất.",
        category: "Android",
        type: "tầm trung",
        connectivity: "Wireless",
        finalPrice: 3282,
        originalPrice: 3999,
        quantity: 1,
        ratings: 364,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 17,
        images: [
            "/images/products/tecno-spark-20-pro-plus.webp",
            "/images/products/tecno-spark-20-pro-plus-1.webp",
            "/images/products/tecno-spark-20-pro-plus-2.webp",
            "/images/products/tecno-spark-20-pro-plus-3.webp",
        ],
        brand: "Tecno",
        title: "TECNO SPARK 20PRO+ 8GB 256GB",
        info: "Tecno Spark 20 Pro Plus sở hữu cấu hình cực ấn tượng trong phân khúc giá rẻ với chip Helio G99 Ultimate, 8GB RAM (+8GB mở rộng) cùng bộ nhớ 256GB. Màn hình AMOLED 6,78 inch 120 Hz sẽ luôn mang tới chất lượng hiển thị của điện thoại. Hệ thống camera có độ phân giải 108MP, hỗ trợ quay video 2K đáp ứng tốt cho nhu cầu sống ảo của người dùng.",
        category: "Android",
        type: "tầm trung",
        connectivity: "Wireless",
        finalPrice: 1699,
        originalPrice: 4990,
        quantity: 1,
        ratings: 1011,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 18,
        images: [
            "/images/products/tecnox6.webp",
            "/images/products/tecnox6-1.webp",
            "/images/products/tecnox6-2.webp",
            "/images/products/tecnox6-3.webp"
        ],
        brand: "Xiaomi",
        title: "Xiaomi POCO X6 Pro 5G 8GB 256GB",
        info: "Điện thoại Xiaomi Poco X6 Pro được trang bị con chip Dimensity 8300 Ultra 8 nhân, tiến trình 4nm, tích hợp với GPU Mali-G615 cùng RAM 8GB, bộ nhớ trong 256GB. Máy sở hữu 3 camera sau với camera chính 64MP và 1 camera selfie 16MP. Ngoài ra máy X6 Pro được trang bị màn hình AMOLED 6.67 inch, độ phân giải 1220 x 2712 pixels cùng tần số quét 120Hz. ",
        category: "Android",
        type: "Cao cấp",
        connectivity: "Wired",
        finalPrice: 549,
        originalPrice: 1290,
        quantity: 1,
        ratings: 530,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 19,
        images: [
            "/images/products/iphone-16.webp",
            "/images/products/iphone-16-1.webp",
            "/images/products/iphone-16-2.webp",
            "/images/products/iphone-16-3.webp",
        ],
        brand: "Iphone",
        title: "iPhone 16 128GB | Chính hãng VN/A",
        info: "Điện thoại iPhone 16 bản thường 128GB sở hữu thiết kế khung nhôm, mặt lưng kính pha màu cùng với 5 màu sắc bắt mắt để lựa chọn. Máy với trọng lượng 170g cùng kích thước màn hình 6.1 inch Super Retina XDR, dải màu P3. Với cấu hình từ chip A18 Bionic mới, điện thoại iPhone mới này mang lại hiệu năng ổn định, đáp ứng nhiều nhu cầu dùng.",
        category: "IOS",
        type: "Cao cấp",
        connectivity: "Wireless",
        finalPrice: 2690,
        originalPrice: 4990,
        quantity: 1,
        ratings: 474,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 20,
        images: [
            "/images/products/iphone12promax.webp",
            "/images/products/iphone12promax-1.webp",
            "/images/products/iphone12promax-2.webp",
            "/images/products/iphone12promax-3.webp",
        ],
        brand: "Iphone",
        title: "iPhone 12 Pro Max 128GB I Chính hãng VN/A",
        info: "Năm nay, công nghệ màn hình trên 12 Pro Max cũng được đổi mới và trang bị tốt hơn cùng kích thước lên đến 6.7 inch, lớn hơn so với điện thoại iPhone 12 thường. Với công nghệ màn hình OLED cho khả năng hiển thị hình ảnh lên đến 2778 x 1284 pixels. Bên cạnh đó, màn hình này còn cho độ sáng tối đa cao nhất lên đến 800 nits, luôn đảm bảo cho bạn một độ sáng cao và dễ nhìn nhất ngoài nắng.",
        category: "IOS",
        type: "Cao cấp",
        connectivity: "Wireless",
        finalPrice: 2790,
        originalPrice: 4990,
        quantity: 1,
        ratings: 474,
        rateCount: 4,
        path: "/product-details/",
    },
];

export default productsData;