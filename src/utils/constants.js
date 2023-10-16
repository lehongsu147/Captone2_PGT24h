export default class Constants {

    static data = {
        labels: ['Red', 'Orange', 'Blue'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    }

    static optionSex = [
        {
            label: 'Nam',
            value: 1,
        },
        {
            label: 'Nữ',
            value: 2,
        },
    ]

    static optionStatus = [
        {
            label: 'Đang hoạt động',
            value: true,
        },
        {
            label: 'Bị khóa',
            value: false,
        },
    ]

    static optionsCategory = [
        {
            name: 'Truy Kích PC',
            image: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__0ba80060-2b58-11ee-a657-a54d6be1d46a__game_avatars.jpg',
            id: 1,
        },
        {
            name: 'Liên minh huyền thoại',
            image: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
            id: 2,
        },
        {
            name: 'Đấu trường công lý',
            image: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg',
            id: 3,
        },
        {
            image: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__c5802ad0-33e2-11ed-838c-b120e70abb59__game_avatars.jpg',
            name: 'PUBG',
            id: 4,
        },
    ]

    static vietnamProvinces = [
        { label: 'Hà Nội', value: 1 },
        { label: 'Hà Giang', value: 2 },
        { label: 'Cao Bằng', value: 3 },
        { label: 'Lào Cai', value: 4 },
        { label: 'Điện Biên', value: 5 },
        { label: 'Lai Châu', value: 6 },
        { label: 'Sơn La', value: 7 },
        { label: 'Yên Bái', value: 8 },
        { label: 'Tuyên Quang', value: 9 },
        { label: 'Lạng Sơn', value: 10 },
        { label: 'Quảng Ninh', value: 11 },
        { label: 'Hòa Bình', value: 12 },
        { label: 'Ninh Bình', value: 13 },
        { label: 'Thái Bình', value: 14 },
        { label: 'Thanh Hóa', value: 15 },
        { label: 'Nghệ An', value: 16 },
        { label: 'Hà Tĩnh', value: 17 },
        { label: 'Quảng Bình', value: 18 },
        { label: 'Quảng Trị', value: 19 },
        { label: 'Thừa Thiên-Huế', value: 20 },
        { label: 'Đà Nẵng', value: 21 },
        { label: 'Quảng Nam', value: 22 },
        { label: 'Quảng Ngãi', value: 23 },
        { label: 'Bình Định', value: 24 },
        { label: 'Phú Yên', value: 25 },
        { label: 'Khánh Hòa', value: 26 },
        { label: 'Ninh Thuận', value: 27 },
        { label: 'Bình Thuận', value: 28 },
        { label: 'Kon Tum', value: 29 },
        { label: 'Gia Lai', value: 30 },
        { label: 'Đắk Lắk', value: 31 },
        { label: 'Đắk Nông', value: 32 },
        { label: 'Lâm Đồng', value: 33 },
        { label: 'Bình Phước', value: 34 },
        { label: 'Tây Ninh', value: 35 },
        { label: 'Bình Dương', value: 36 },
        { label: 'Đồng Nai', value: 37 },
        { label: 'Bà Rịa-Vũng Tàu', value: 38 },
        { label: 'Hồ Chí Minh', value: 39 },
        { label: 'Long An', value: 40 },
        { label: 'Tiền Giang', value: 41 },
        { label: 'Bến Tre', value: 42 },
        { label: 'Trà Vinh', value: 43 },
        { label: 'Vĩnh Long', value: 44 },
        { label: 'Đồng Tháp', value: 45 },
        { label: 'An Giang', value: 46 },
        { label: 'Kiên Giang', value: 47 },
        { label: 'Cần Thơ', value: 48 },
        { label: 'Hậu Giang', value: 49 },
        { label: 'Sóc Trăng', value: 50 },
        { label: 'Bạc Liêu', value: 51 },
        { label: 'Cà Mau', value: 52 },
        { label: 'Tây Ninh', value: 53 },
        { label: 'Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam', value: 54 },
        { label: 'Hà Giang', value: 55 },
        { label: 'Cao Bằng', value: 56 },
        { label: 'Lào Cai', value: 57 },
        { label: 'Điện Biên', value: 58 },
        { label: 'Lai Châu', value: 59 },
        { label: 'Sơn La', value: 60 },
        { label: 'Yên Bái', value: 61 },
        { label: 'Tuyên Quang', value: 62 },
        { label: 'Lạng Sơn', value: 63 },
    ];


    static dataMes = [
        {
            id: 1,
            userSend: true,
            content: 'Xin chào! Tôi đang tìm một KOL để quảng cáo sản phẩm của tôi. Bạn có thể giới thiệu cho tôi một số lựa chọn phù hợp không? '
        },
        {
            id: 2,
            userSend: false,
            content: 'Chào bạn! Tất nhiên, tôi sẽ cần một số thông tin cụ thể về sản phẩm của bạn và mục tiêu của chiến dịch quảng cáo. Bạn có thể cho tôi biết thêm về điều đó không?'
        },
        {
            id: 3,
            userSend: true,
            content: 'Sản phẩm của tôi là một dòng mỹ phẩm tự nhiên và chúng tôi muốn tạo sự nhận diện thương hiệu mạnh mẽ. Mục tiêu của chúng tôi là tiếp cận một đối tượng khách hàng trẻ tuổi thông qua mạng xã hội. Bạn có thể giới thiệu cho tôi một KOL có đối tượng khán giả tương tự không?'
        },
        {
            id: 4,
            userSend: true,
            content: 'Dạ, tôi có một số lựa chọn cho bạn.'
        },
        {
            id: 5,
            userSend: false,
            content: 'Rất tốt! Xin hãy làm như vậy. Bạn có thể cho tôi biết về mức giá dự kiến và thời gian tiếp cận của KOL này không?'
        },
        {
            id: 6,
            userSend: false,
            content: 'Chào bạn! Tất nhiên, tôi sẽ cần một số thông tin cụ thể về sản phẩm của bạn và mục tiêu của chiến dịch quảng cáo. Bạn có thể cho tôi biết thêm về điều đó không?'
        },
        {
            id: 7,
            userSend: true,
            content: 'Sản phẩm của tôi là một dòng mỹ phẩm tự nhiên và chúng tôi muốn tạo sự nhận diện thương hiệu mạnh mẽ. Mục tiêu của chúng tôi là tiếp cận một đối tượng khách hàng trẻ tuổi thông qua mạng xã hội. Bạn có thể giới thiệu cho tôi một KOL có đối tượng khán giả tương tự không?'
        },
        {
            id: 8,
            userSend: true,
            content: 'Dạ, tôi có một số lựa chọn cho bạn.'
        },
    ]

    static dataTableKol = [
        {
            key: 1,
            username: 'meomeo',
            lastname: 'Linh',
            firstname: 'Nguyễn Thị Mỹ',
            phone: '0921012922',
            timeOrder: 2002,
            age: 20,
            gender: 'Male',
            follow: 2000,
            cityId: 2,
            email: 'hckjfd@gamil.com',
            addressDetails: '8 hà văn tính',
            rateDone: 60.86,
            image: "https://playerduo.net/api/upload-service/images/a0b07166-1e65-4e77-a651-b2fef639aa86__68884ad0-61ed-11ee-bec4-f929e725acab__player_album.jpg",
            lastName: 'Kami',
            id: 'gamrach',
            textShort: 'Game gì cũng chơi ❤️',
            star: 4,
            status: false,
            listgame: [
                {
                    id: 1,
                    name: 'Liên minh huyền thoại',
                    link: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b2-1e9093130b60__62295df0-34d5-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 2,
                    name: 'PUGB',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
            ],
            commnent: 202,
            postPrice: 'không chảnh, Nhận coaching đtcl từ rank kc trở xuống ',
            videoPrice: 'https://youtu.be/WAg0jKqgmuI',
        },
        {
            data: 2,
            firstName: 'Mẫn ',
            username: 'hihi',
            lastName: 'Mẫn ',
            gender: 'Female',
            phone: '0921012922',
            age: 21,
            status: true,
            cityId: 2,
            textShort: 'Thích nuôi mèoo',
            image: 'https://playerduo.net/api/upload-service/images/bca8b642-764c-4ee6-a14a-823c2b3ec3dc__2852b0-f12a-11ed-a657-a54d6be1d46a__player_avatar.jpg',
            id: 'gamrach',
            commnent: 4025,
            star: 3,
            timeOrder: 2002,
            postPrice: 'không chảnh, Nhận coaching đtcl từ rank kc trở xuống ',
            videoPrice: 'https://youtu.be/WAg0jKqgmuI',
            listgame: [
                {
                    id: 2,
                    name: 'PUGB',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
            ],
        },
        {
            firstName: 'Tiểu',
            status: false,
            username: 'Yanr',
            lastName: 'Lươn',
            textShort: 'Đấu trường Chân Lí',
            phone: '0921012922',
            timeOrder: 3202,
            star: 5,
            gender: 'Female',
            commnent: 2202,
            email: 'ciojsdf@gamil.com',
            image: 'https://playerduo.net/api/upload-service/images/9623b48d-0f8e-416a-bef9-dc4efefb6779__4afecc70-5804-11ee-bec4-f929e725acab__player_avatar.jpg',
            id: 'gamrach',
            postPrice: 'không chảnh, Nhận coaching đtcl từ rank kc trở xuống ',
            videoPrice: 'https://youtu.be/WAg0jKqgmuI',
            listgame: [
                {
                    id: 2,
                    name: 'PUGB',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 3,
                    name: 'Liên Quân ',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 4,
                    name: 'Tốc chiến',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 5,
                    name: 'Tốc chiến',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 6,
                    name: 'Tốc chiến',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
            ],
        },
        {
            username: 'meomeo',
            firstName: 'Gấmmm',
            image: "https://playerduo.net/api/upload-service/images/a0b07166-1e65-4e77-a651-b2fef639aa86__68884ad0-61ed-11ee-bec4-f929e725acab__player_album.jpg",
            status: true,
            lastName: 'Kami',
            phone: '0921012922',
            timeOrder: 2202,
            gender: 'Male',
            id: 'gamrach',
            textShort: 'Game gì cũng chơi ❤️',
            star: 2,
            listgame: [
                {
                    id: 2,
                    name: 'PUGB',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 3,
                    name: 'Liên Quân ',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 4,
                    name: 'Tốc chiến',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 5,
                    name: 'Tốc chiến',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 6,
                    name: 'Tốc chiến',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
            ],
            commnent: 202,
            postPrice: 'không chảnh, Nhận coaching đtcl từ rank kc trở xuống ',
            videoPrice: 'https://youtu.be/WAg0jKqgmuI',
        },
        {
            firstName: 'Mẫn ',
            phone: '0921012922',
            username: 'hihi',
            lastName: 'Mẫn ',
            status: true,
            textShort: 'Thích nuôi mèoo',
            image: 'https://playerduo.net/api/upload-service/images/bca8b642-764c-4ee6-a14a-823c2b3ec3dc__2852b0-f12a-11ed-a657-a54d6be1d46a__player_avatar.jpg',
            id: 'gamrach',
            commnent: 4025,
            star: 2,
            postPrice: 'không chảnh, Nhận coaching đtcl từ rank kc trở xuống ',
            videoPrice: 'https://youtu.be/WAg0jKqgmuI',
            listgame: [
                {
                    id: 2,
                    name: 'PUGB',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 3,
                    name: 'Liên Quân ',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 4,
                    name: 'Tốc chiến',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 5,
                    name: 'Tốc chiến',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 6,
                    name: 'Tốc chiến',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
            ],
        },
        {
            firstName: 'Tiểu',
            username: 'Yanr',
            phone: '0921012922',
            status: true,
            lastName: 'Lươn',
            textShort: 'Đấu trường Chân Lí',
            star: 5,
            commnent: 2202,
            image: 'https://playerduo.net/api/upload-service/images/9623b48d-0f8e-416a-bef9-dc4efefb6779__4afecc70-5804-11ee-bec4-f929e725acab__player_avatar.jpg',
            id: 'gamrach',
            postPrice: 'không chảnh, Nhận coaching đtcl từ rank kc trở xuống ',
            videoPrice: 'https://youtu.be/WAg0jKqgmuI',
            listgame: [
                {
                    id: 2,
                    name: 'PUGB',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 3,
                    name: 'Liên Quân ',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 4,
                    name: 'Tốc chiến',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 5,
                    name: 'Tốc chiến',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 6,
                    name: 'Tốc chiến',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
            ],
        },
        {
            username: 'meomeo',
            firstName: 'Gấmmm',
            image: "https://playerduo.net/api/upload-service/images/a0b07166-1e65-4e77-a651-b2fef639aa86__68884ad0-61ed-11ee-bec4-f929e725acab__player_album.jpg",
            lastName: 'Kami',
            id: 'gamrach',
            status: true,
            textShort: 'Game gì cũng chơi ❤️',
            phone: '0921012922',
            star: 2,
            listgame: [
                {
                    id: 2,
                    name: 'PUGB',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 3,
                    name: 'Liên Quân ',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 4,
                    name: 'Tốc chiến',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 5,
                    name: 'Tốc chiến',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
                {
                    id: 6,
                    name: 'Tốc chiến',
                    link: 'https://playerduo.net/api/upload-service/game_avatars/715867c6-698f-411a-b2-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
                },
            ],
            commnent: 202,
            postPrice: 'không chảnh, Nhận coaching đtcl từ rank kc trở xuống ',
            videoPrice: 'https://youtu.be/WAg0jKqgmuI',
        },
        {
            firstName: 'Mẫn ',
            username: 'hihi',
            lastName: 'Mẫn ',
            textShort: 'Thích nuôi mèoo',
            status: false,
            image: 'https://playerduo.net/api/upload-service/images/bca8b642-764c-4ee6-a14a-823c2b3ec3dc__2852b0-f12a-11ed-a657-a54d6be1d46a__player_avatar.jpg',
            id: 'gamrach',
            phone: '0921012922',
            commnent: 4025,
            star: 2,
            postPrice: 'không chảnh, Nhận coaching đtcl từ rank kc trở xuống ',
            videoPrice: 'https://youtu.be/WAg0jKqgmuI', listgame: [
                {
                    id: 1,
                    name: 'LOL',
                },
                {
                    id: 2,
                    name: 'PUGB',
                },
                {
                    id: 3,
                    name: 'Liên Quân ',
                },
                {
                    id: 4,
                    name: 'Tốc chiến',
                },
            ],
        },
        {
            firstName: 'Tiểu',
            username: 'Yanr',
            lastName: 'Lươn',
            textShort: 'Đấu trường Chân Lí',
            star: 5,
            status: false,
            commnent: 2202,
            image: 'https://playerduo.net/api/upload-service/images/9623b48d-0f8e-416a-bef9-dc4efefb6779__4afecc70-5804-11ee-bec4-f929e725acab__player_avatar.jpg',
            phone: '0921012922',
            id: 'gamrach',
            postPrice: 'không chảnh, Nhận coaching đtcl từ rank kc trở xuống ',
            videoPrice: 'https://youtu.be/WAg0jKqgmuI', listgame: [
                {
                    id: 1,
                    name: 'LOL',
                },
                {
                    id: 2,
                    name: 'PUGB',
                },
                {
                    id: 3,
                    name: 'Liên Quân ',
                },
                {
                    id: 4,
                    name: 'Tốc chiến',
                },
            ],
        },
        {
            username: 'meomeo',
            firstName: 'Gấmmm',
            image: "https://playerduo.net/api/upload-service/images/a0b07166-1e65-4e77-a651-b2fef639aa86__68884ad0-61ed-11ee-bec4-f929e725acab__player_album.jpg",
            lastName: 'Kami',
            status: false,
            id: 'gamrach',
            textShort: 'Game gì cũng chơi ❤️',
            star: 2,
            listgame: [
                {
                    id: 1,
                    name: 'LOL',
                },
                {
                    id: 2,
                    name: 'PUGB',
                },
                {
                    id: 3,
                    name: 'Liên Quân ',
                },
                {
                    id: 4,
                    name: 'Tốc chiến',
                },
            ],
            commnent: 202,
            postPrice: 'không chảnh, Nhận coaching đtcl từ rank kc trở xuống ',
            videoPrice: 'https://youtu.be/WAg0jKqgmuI',
        },
        {
            firstName: 'Mẫn ',
            username: 'hihi',
            lastName: 'Mẫn ',
            status: false,
            textShort: 'Thích nuôi mèoo',
            image: 'https://playerduo.net/api/upload-service/images/bca8b642-764c-4ee6-a14a-823c2b3ec3dc__2852b0-f12a-11ed-a657-a54d6be1d46a__player_avatar.jpg',
            id: 'gamrach',
            commnent: 4025,
            star: 2,
            postPrice: 'không chảnh, Nhận coaching đtcl từ rank kc trở xuống ',
            videoPrice: 'https://youtu.be/WAg0jKqgmuI', listgame: [
                {
                    id: 1,
                    name: 'LOL',
                },
                {
                    id: 2,
                    name: 'PUGB',
                },
                {
                    id: 3,
                    name: 'Liên Quân ',
                },
                {
                    id: 4,
                    name: 'Tốc chiến',
                },
            ],
        },
        {
            firstName: 'Tiểu',
            username: 'Yanr',
            lastName: 'Lươn',
            textShort: 'Đấu trường Chân Lí',
            star: 5,
            commnent: 2202,
            image: 'https://playerduo.net/api/upload-service/images/9623b48d-0f8e-416a-bef9-dc4efefb6779__4afecc70-5804-11ee-bec4-f929e725acab__player_avatar.jpg',
            id: 'gamrach',
            postPrice: 'không chảnh, Nhận coaching đtcl từ rank kc trở xuống ',
            videoPrice: 'https://youtu.be/WAg0jKqgmuI', listgame: [
                {
                    id: 1,
                    name: 'LOL',
                },
                {
                    id: 2,
                    name: 'PUGB',
                },
                {
                    id: 3,
                    name: 'Liên Quân ',
                },
                {
                    id: 4,
                    name: 'Tốc chiến',
                },
            ],
        },
        {
            username: 'meomeo',
            firstName: 'Gấmmm',
            image: "https://playerduo.net/api/upload-service/images/a0b07166-1e65-4e77-a651-b2fef639aa86__68884ad0-61ed-11ee-bec4-f929e725acab__player_album.jpg",
            lastName: 'Kami',
            id: 'gamrach',
            textShort: 'Game gì cũng chơi ❤️',
            star: 2,
            listgame: [
                {
                    id: 1,
                    name: 'LOL',
                },
                {
                    id: 2,
                    name: 'PUGB',
                },
                {
                    id: 3,
                    name: 'Liên Quân ',
                },
                {
                    id: 4,
                    name: 'Tốc chiến',
                },
            ],
            commnent: 202,
            postPrice: 'không chảnh, Nhận coaching đtcl từ rank kc trở xuống ',
            videoPrice: 'https://youtu.be/WAg0jKqgmuI',
        },
        {
            firstName: 'Mẫn ',
            username: 'hihi',
            lastName: 'Mẫn ',
            textShort: 'Thích nuôi mèoo',
            image: 'https://playerduo.net/api/upload-service/images/bca8b642-764c-4ee6-a14a-823c2b3ec3dc__2852b0-f12a-11ed-a657-a54d6be1d46a__player_avatar.jpg',
            id: 'gamrach',
            commnent: 4025,
            star: 2,
            postPrice: 'không chảnh, Nhận coaching đtcl từ rank kc trở xuống ',
            videoPrice: 'https://youtu.be/WAg0jKqgmuI', listgame: [
                {
                    id: 1,
                    name: 'LOL',
                },
                {
                    id: 2,
                    name: 'PUGB',
                },
                {
                    id: 3,
                    name: 'Liên Quân ',
                },
                {
                    id: 4,
                    name: 'Tốc chiến',
                },
            ],
        },
        {
            firstName: 'Tiểu',
            username: 'Yanr',
            lastName: 'Lươn',
            textShort: 'Đấu trường Chân Lí',
            star: 5,
            commnent: 2202,
            image: 'https://playerduo.net/api/upload-service/images/9623b48d-0f8e-416a-bef9-dc4efefb6779__4afecc70-5804-11ee-bec4-f929e725acab__player_avatar.jpg',
            id: 'gamrach',
            postPrice: 'không chảnh, Nhận coaching đtcl từ rank kc trở xuống ',
            videoPrice: 'https://youtu.be/WAg0jKqgmuI', listgame: [
                {
                    id: 1,
                    name: 'LOL',
                },
                {
                    id: 2,
                    name: 'PUGB',
                },
                {
                    id: 3,
                    name: 'Liên Quân ',
                },
                {
                    id: 4,
                    name: 'Tốc chiến',
                },
            ],
        },
        {
            username: 'meomeo',
            firstName: 'Gấmmm',
            image: "https://playerduo.net/api/upload-service/images/a0b07166-1e65-4e77-a651-b2fef639aa86__68884ad0-61ed-11ee-bec4-f929e725acab__player_album.jpg",
            lastName: 'Kami',
            id: 'gamrach',
            textShort: 'Game gì cũng chơi ❤️',
            star: 2,
            listgame: [
                {
                    id: 1,
                    name: 'LOL',
                },
                {
                    id: 2,
                    name: 'PUGB',
                },
                {
                    id: 3,
                    name: 'Liên Quân ',
                },
                {
                    id: 4,
                    name: 'Tốc chiến',
                },
            ],
            commnent: 202,
            postPrice: 'không chảnh, Nhận coaching đtcl từ rank kc trở xuống ',
            videoPrice: 'https://youtu.be/WAg0jKqgmuI',
        },
        {
            firstName: 'Mẫn ',
            username: 'hihi',
            lastName: 'Mẫn ',
            textShort: 'Thích nuôi mèoo',
            image: 'https://playerduo.net/api/upload-service/images/bca8b642-764c-4ee6-a14a-823c2b3ec3dc__2852b0-f12a-11ed-a657-a54d6be1d46a__player_avatar.jpg',
            id: 'gamrach',
            commnent: 4025,
            star: 2,
            postPrice: 'không chảnh, Nhận coaching đtcl từ rank kc trở xuống ',
            videoPrice: 'https://youtu.be/WAg0jKqgmuI', listgame: [
                {
                    id: 1,
                    name: 'LOL',
                },
                {
                    id: 2,
                    name: 'PUGB',
                },
                {
                    id: 3,
                    name: 'Liên Quân ',
                },
                {
                    id: 4,
                    name: 'Tốc chiến',
                },
            ],
        },
        {
            firstName: 'Tiểu',
            username: 'Yanr',
            lastName: 'Lươn',
            textShort: 'Đấu trường Chân Lí',
            star: 5,
            commnent: 2202,
            image: 'https://playerduo.net/api/upload-service/images/9623b48d-0f8e-416a-bef9-dc4efefb6779__4afecc70-5804-11ee-bec4-f929e725acab__player_avatar.jpg',
            id: 'gamrach',
            postPrice: 'không chảnh, Nhận coaching đtcl từ rank kc trở xuống ',
            videoPrice: 'https://youtu.be/WAg0jKqgmuI', listgame: [
                {
                    id: 1,
                    name: 'LOL',
                },
                {
                    id: 2,
                    name: 'PUGB',
                },
                {
                    id: 3,
                    name: 'Liên Quân ',
                },
                {
                    id: 4,
                    name: 'Tốc chiến',
                },
            ],
        },
    ];
}