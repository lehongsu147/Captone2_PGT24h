import React, { useEffect, useState } from 'react';
import styles from './HotKol.module.scss'
import CardKol from '../../card/CardKOL/CardKol';
import ContentLoader, { Facebook, List } from 'react-content-loader'
import MyLoader from '../../loader/Loader';
const HotHOL = () => {
    const [hotKols, setHotKols] = useState([]);
    useEffect(() => {
        setHotKols(
            [
                {
                    username: 'meomeo',
                    firstName: 'Gấmmm',
                    image: "https://playerduo.net/api/upload-service/images/a0b07166-1e65-4e77-a651-b2fef639aa86__68884ad0-61ed-11ee-bec4-f929e725acab__player_album.jpg",
                    lastName: 'Kami',
                    id: 'gamrach',
                    textShort: 'Game gì cũng chơi ❤️',
                    star: 4.9,
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
                    image: 'https://playerduo.net/api/upload-service/images/30468c40-e677-4600-a1cc-a7319781e0db__b8fdd8b0-4a35-11ee-a657-a54d6be1d46a__player_avatar.jpg',
                    id: 'gamrach',
                    commnent: 4025,
                    star: 4.9,
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
                    image: 'https://files.playerduo.net/production/images/a4b423f6-46fb-4057-9f01-20a359978b9e__32a90710-6873-11ee-bec4-f929e725acab__player_avatar.jpg',
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
                    image: 'https://playerduo.net/api/upload-service/images/44e0b45a-55c1-4138-b4be-6fc5857467ee__29a7fd20-1d6d-11ee-a657-a54d6be1d46a__player_avatar.jpg',
                    lastName: 'Kami',
                    id: 'gamrach',
                    textShort: 'Game gì cũng chơi ❤️',
                    star: 4.9,
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
                    image: 'https://files.playerduo.net/production/images/2871cce2-f8e3-4a61-ab33-427ca50b800f__217695e0-5b38-11ee-bec4-f929e725acab__player_avatar.jpg',
                    id: 'gamrach',
                    commnent: 4025,
                    star: 4.9,
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
                    image: 'https://files.playerduo.net/production/images/426b201d-8d0c-42ab-9991-f22cbe8140a7__ef374330-4b2a-11ee-bec4-f929e725acab__player_avatar.jpg',
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
                    star: 4.9,
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
                    image: 'https://files.playerduo.net/production/images/75c40a5c-dbda-4ac3-9106-55d6d7ca9b0f__ccd29650-6074-11ee-bec4-f929e725acab__player_avatar.jpg',
                    id: 'gamrach',
                    commnent: 4025,
                    star: 4.9,
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
                    image: 'https://files.playerduo.net/production/images/ad4b3734-61f6-47b4-b9c6-a4fd1088f51d__b2f0cfb0-636f-11ee-bec4-f929e725acab__player_avatar.jpg',
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
                    lastName: 'Kami',
                    image: 'https://files.playerduo.net/production/images/1cd3d925-0c17-462f-8fdb-f5d9a48395e2__8812f390-66f8-11ee-bec4-f929e725acab__player_avatar.jpg',
                    id: 'gamrach',
                    textShort: 'Game gì cũng chơi ❤️',
                    star: 4.9,
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
                    image: 'https://files.playerduo.net/production/images/822e633e-e448-453c-ac88-08d8a20cef91__26788ad0-5723-11ee-bec4-f929e725acab__player_avatar.jpg',
                    id: 'gamrach',
                    commnent: 4025,
                    star: 4.9,
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
                    star: 4.9,
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
                    image: 'https://playerduo.net/api/upload-service/images/bca8b642-764c-4ee6-a14a-823c2b3ec3dc__285409b0-f12a-11ed-a657-a54d6be1d46a__player_avatar.jpg',
                    id: 'gamrach',
                    commnent: 4025,
                    star: 4.9,
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
                    star: 4.9,
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
                    image: 'https://playerduo.net/api/upload-service/images/bca8b642-764c-4ee6-a14a-823c2b3ec3dc__285409b0-f12a-11ed-a657-a54d6be1d46a__player_avatar.jpg',
                    id: 'gamrach',
                    commnent: 4025,
                    star: 4.9,
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
            ]
        )
        // getKols().then((res) => {
        //   // setHotKols(res)

        // });
    }, []);
    return (
        <div className={styles.container}>
            <span className={styles.title}>Hot KOL</span>

            <div className={styles["boxContent"]}>
                <div className={styles["content"]}>
                    {hotKols?.map((kol, i) => {
                        return (
                            <CardKol key={i} kol={kol} />
                        )
                    })}
                </div>
            </div>
            <div className={styles["content-pagination"]}>
                {/* <Pagination /> */}
            </div>
        </div>
    );
};

export default HotHOL;