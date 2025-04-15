let kinolar = [
    {
        nomi: "Deadpool 3",
        janr: "Fantastika / Komediya",
        yili: "2024",
        rasm: "https://wallpapers.com/images/high/deadpool-movie-three-epic-fanart-poster-mnevodategg310kd.webp"
    },
    {
        nomi: "Cyber Warrior",
        janr: "Fantastika / Aksiya",
        yili: "2023",
        rasm: "https://wallpapers.com/images/high/1280x720-gaming-5jgwyjesow4g3q6p.webp"
    },
    {
        nomi: "Qorong'u Futuristik",
        janr: "Ilmiy fantastika",
        yili: "2022",
        rasm: "https://wallpapers.com/images/high/1080-fortnite-3840-x-2160-1awvolouv7ib6q4b.webp"
    },
    {
        nomi: "Yulduzlar Jangi",
        janr: "Ilmiy fantastika / Sarguzasht",
        yili: "2015",
        rasm: "https://wallpapers.com/images/high/call-of-duty-mw-bv1xmn84s7r3wuyi.webp"
    },
    {
        nomi: "Deadpool: Qaytish",
        janr: "Fantastika / Komediya",
        yili: "2020",
        rasm: "https://wallpapers.com/images/high/guns-deadpool-4k-cartoon-mupic5hmsg8a1s3t.webp"
    },
    {
        nomi: "Ninja Rejim",
        janr: "Aksiya / Triller",
        yili: "2021",
        rasm: "https://wallpapers.com/images/high/ninja-4k-cartoon-2wocheq73pfrrqdf.webp"
    },
    {
        nomi: "Ninja Gaiden Z",
        janr: "Aksiya / Video o‘yin",
        yili: "2014",
        rasm: "https://wallpapers.com/images/hd/yaiba-ninja-gaiden-z-video-game-10mbv8xgfmea82j1.webp"
    },
    {
        nomi: "Ninja Alanga",
        janr: "Fantastika / Sarguzasht",
        yili: "2023",
        rasm: "https://wallpapers.com/images/hd/burning-black-ninja-azhbg1t3d7dzvw8h.webp"
    },
    {
        nomi: "Itachi: Yolg‘izlik yo‘li",
        janr: "Anime / Drama",
        yili: "2021",
        rasm: "https://wallpapers.com/images/hd/itachi-uchiha-ninja-meditation-7bir1xioal100mom.webp"
    },
    {
        nomi: "Fast & Furious 7",
        janr: "Aksiya / Triller",
        yili: "2015",
        rasm: "https://wallpapers.com/images/high/fast-7-fast-and-furious-desktop-phqhy6ywjatr3gul.webp"
    }
];

let contaiter = document.getElementById('contaiter')


function kinolarData(data) {
    contaiter.innerHTML = ''
    data.map((item) => (
        contaiter.innerHTML += ` <div class="kino">
                <img src=${item.rasm}
                alt="">
                <h2>${item.nomi}</h2>
                <p>janri: ${item.janr}</p>
                <p>yili: ${item.yili}</p>
                </div>`
    ))
}



let selectJanr = document.getElementById('selectJanr')
function getSelectData() {
    let selectValue = selectJanr.value
    let natija
    if (selectValue == 'barchasi') {
        natija = kinolar
    } else {
        let filterData = kinolar.filter((i) => i.janr == selectValue)
        natija = filterData
    }
    kinolarData(natija)
}

kinolarData(kinolar)


