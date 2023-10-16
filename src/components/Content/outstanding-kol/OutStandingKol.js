import React, { useEffect, useState } from 'react';
import styles from './OutStandingKol.module.scss'
import CardKol from '../../card/CardKOL/CardKol';
const OutStandingKol = () => {
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
        // <div className={styles.container}>
        //     <span  className={styles.title}>OutStandingKol</span>
        //     <div className={styles["content"]}>
        //         {hotKols?.map((kol, i) => {
        //             return (
        //                 <CardKol key={i} kol={kol} />
        //             )
        //         })}
        //     </div>
        //     <div className={styles["content-pagination"]}>
        //         {/* <Pagination /> */}
        //     </div>
        // </div>
        
        <div className={styles.container}>
            <span className={styles.title}>OutStandingKol</span>

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

export default OutStandingKol;