const listings = [
    {
        id: "p1",
        categories:["c1"],
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/da7e40544cb6340248b9395a2f513424ca004e8e-1-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'
    },
    {
        id: "p2",
        categories:["c1"],
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/ff6bb4cf8aa3902205b30711de820f77a6c6137d-6-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'
    },
    {
        id: "p3",
        categories:["c1"],
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/3a2a45d49ed11f600b78d7b41129e4a3d2c25451-15-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'
    },
    {
        id: "p4",
        categories:["c1"],
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/b4814dc67889d6b67eedc4cd7af1470215fb158b-16-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'
    },
    {
        id: "p5",
        categories:["c1"],
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/9906cb017c3539927b966915002f7900d284f649-17-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p6",
        categories:["c1"],
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/b8fc7e25d2bee0e628755ecc6146b5ea9bef6ebd-27-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p7",
        categories:["c1"],
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/5e2ae12afb7a47d5869d2cf6936ba8dead33fe1e-28-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p8",
        categories:["c1"],
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/d344f776541f7ea83975bfafb10e2503995db18d-32-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&w=320'

    },
    {
        id: "p9",
        categories:["c2"],
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/54b6701c940c38f21f169f2a3c8e11c80cfd1cdd-1-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p10",
        categories:["c2"],
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/8318f5e99993dc624d58aac51f522176b0da9772-3-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p11",
        categories:["c2"],
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/0a294e6741f1541ea39e27a1a0f2c8b207bbaa4a-4-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p12",
        categories:["c2"],
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/56c8efbe3af6d71f88a4302f14cfae5d1c75b6c9-8-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p13",
        categories:["c2"],
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/96f8a1d3c13d3e646f53d80c0563f3b529c09358-9-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p14",
        categories:["c2"],
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/17c7bdefcfec2803ac66a139805eb344c582e7fb-12-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p15",
        categories:["c2"],
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/bb9c359f34a043bd3bf33e43615f5bfd50f1f9b9-14-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p16",
        categories:["c2"],
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/613a1cd7db4c6cbeb6f25163f08922c83ee4540d-15-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p17",
        categories:["c2"],
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/ff9709312373075bfca1532c63e45cc59b0af5ae-16-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p18",
        categories:["c2"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/d4c08e503f24b48865075c4b527ef8fb3599583e-17-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p19",
        categories:["c2"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/b48d982d6ef10ef9e1b1bfa48e3b55390009f0eb-18-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p20",
        categories:["c2"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/d877ff95f7270326bf78b18d4de3f863eb68fa09-19-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p21",
        categories:["c2"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/62c3862f348a614f3020fabfdca324e155c77286-20-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'
    },
    {
        id: "p22",
        categories:["c2"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/a55cc469f45381d91e257d12c4e2e8123812bc98-22-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p23",
        categories:["c2"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/a55cc469f45381d91e257d12c4e2e8123812bc98-22-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p24",
        categories:["c2"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/fa7b49a3c7eadd9612a9f954855cfc4105339b66-25-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p25",
        categories:["c2"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/f6e446fa85fb1cdc0baeae47110dbf1a66b02c2d-27-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p26",
        categories:["c2"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/6a8e78eb0dd736295a48bc3fde3049f92272b092-29-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p27",
        categories:["c3"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/b8f3438345ddfa7064eb9b766af9c328a53f3655-1-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p28",
        categories:["c3"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/e6db91a0a5aa4ffc9b047ffcd7e3cc96decaa246-3-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p29",
        categories:["c3"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/908513c549eac150bfea2bdead1987bbfb65ee9b-5-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p30",
        categories:["c3"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/0f76f4406c715c0b37d84c8e8155ad1400ac333e-7-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p31",
        categories:["c3"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/3a2dfdcc8c4fc05df7e22d6269fc79391b26cd3e-10-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p32",
        categories:["c3"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/ae6f2aa4927c063e61c3f80d3af41b7b2bd03d49-12-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p33",
        categories:["c3"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/ed321aaaaae1719c2d217d3bb65a6392f236d9fa-13-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p34",
        categories:["c3"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/ba8fec57b02603b8dfa007c19534b3ca1ca880ec-15-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p35",
        categories:["c3"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/1b85f7faee4c7bb1fb08aec97ed5300b9f5b4cf1-17-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p36",
        categories:["c3"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/6618c0071db2369078797f89f0a6a81cdb3a25cc-19-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p36",
        categories:["c3"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/b499624e97c3147f0b6bd2f5d9872b8cb37bde83-20-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p37",
        categories:["c3"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/76767183cb17542357d26b00ed7fa7565a962e14-22-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p38",
        categories:["c3"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/08f89c5b7372b3f4949f0f3e8aab003abec1edbd-24-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p39",
        categories:["c3"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/f4a1d90d44bbc3a527114a72279a102395729065-25-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'
    },
    {
        id: "p40",
        categories:["c3"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/395ddb43a90499b708d552574b1325ab15933430-26-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p41",
        categories:["c3"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/946d3c1d026302dd68a165d17eb6a0d36a6364fb-29-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'

    },
    {
        id: "p42",
        categories:["c3"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/443f85bff595e8f7b2ce7c00cc82bc88231903bb-34-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'
    },
    {
        id: "p42",
        categories:["c3"], 
        imageUrl: 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/47151c1316fb3a583e0ef8e1794638468fbd06b6-36-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640'
    },
]