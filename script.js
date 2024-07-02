const amount = document.getElementById("amount");
const container = document.querySelector(".container");
const count = document.getElementById("count");
const selectMovie = document.getElementById("movie");

let movies = [
    {
        id:85,
        name:"Semur 4:Mahser",
        img:"Semur4Mahser.png",
        story:"Semur 4: Mahşer, kendisine miras kalan evi satmaya çalışırken, kendisini korkunç olayların içerisinde bulan genç bir adamın hikayesini konu ediyor. Hiç kimsesi olmayan, yalnız bir yaşam süren Ozan, bir gün kendisine bir evin miras kaldığını öğrenir. Barkın, paraya ihtiyacı olduğu için evi kısa süre içerisinde satmaya çalışır. Satış işlemleri için yanına bir arkadaşını da alan Ozan, işlemlerin uzaması üzerine geceyi evde geçirmeye karar verir. Ancak onların sabaha çıkması neredeyse imkansızdır.",
        score:4.8,
        timeline:'1S 19D',
        date:"14 Temmuz 2023",
        players:[
            {
                name:"Fırat Çöloğlu",
                title:"Firat",
                img:'Semur4MahserCast1.jpeg'
            },
            {
                name:"Merve Ozel",
                title:'Merve',
                img:'Semur4MahserCast2.jpeg'
            },
            {
                name:"Cagtay Isik",
                title:"Cagtay",
                img:'Semur4MahserCast3.jpeg'
            }
        ]
    },
    {
        id:200,
        name:"Barbie Movie",
        img:"Barbie.png",
        story:" Oyuncak Bebek Barbie, Barbieland'ın anaerkil toplumunda mutluluk içinde yaşıyor ve yıllar boyunca Barbie'lerin çeşitli versiyonlarında dünyadaki rolünden memnun olarak, onunla oynayan kızlara istedikleri her şey ve kim olabileceklerini gösteriyor. Öte yandan, yine Barbieland'de yaşayan Ken, Barbie ile ilişkisi dışında fark edilmiyor, ancak Barbie, Barbieland'deki Allan gibi diğer bebeklerin bir adım üstünde. Bir gün, Basmakalıp Barbie daha önce hiç yaşamadığı duygular hissetmeye başlar ve bu da dünyasının görünüşte parçalanmasına yol açar. Tuhaf Barbie, gerçek dünyada birisinin onunla oynaması ve mutsuz olmasıyla bir şeyler olduğunu belirler ve bu da Basmakalıp Barbie'nin o kişiyle olanları düzeltmek için isteksizce gerçek dünyaya gitmesine neden olur, önce bu kişiyi bulması gerekir. Barbie'yi çok üzen orijinal Ken Beach Ken, onun huzurunda hayatta kalma ihtiyacı duyduğu için gerçek dünyaya onunla birlikte gelir. Barbie ve Ken, bu kişiyi bulma görevlerinin ötesinde, gerçek dünyanın Barbieland'de bildikleri hiçbir şeye benzemediğini, özellikle de erkek egemen bir toplum olduğunu keşfedecekler. Barbie'nin kendisini gerçek dünyaya getiren şeyin ne olduğunu hâlâ öğrenmesi gerekirken Ken, Barbieland'e geri getirmek istediği yeni bulduğu bir kontrolü buluyor. Eğer bunu yapabilirse Barbie'nin gerçek dünyadaki rolü sonsuza kadar değişebilir. Her şeyin üstüne, başta beyaz erkekler olmak üzere Mattel'deki yöneticiler, gerçek hayattaki bir Barbie ve Ken bebeğinin gerçek dünyaya sızdığını keşfederler; misyonları ikiliyi, özellikle de Barbie'yi yakalayıp onları kendi hayatlarına geri döndürmektir. onun yerine, yani üreticinin mühürlü kutusunda.",
        score:6.8,
        timeline:'1S 15D',
        date:"21 Temmuz 2023",
        players:[
            {
                name:"Margot Robbie",
                title:'Barbie',
                img:'BarbieCast1.jpeg'
            },
            {
                name:"Issa Rae",
                title:'Barbie',
                img:'BarbieCast3.jpeg'
            },
            {
                name:"Ryan Gosling",
                title:'Ken',
                img:'BarbieCast2.jpg'
            }
        ]
    },
    {
        id:145,
        name:"Oppenheimer",
        img:"Oppenheimer.png",
        story:" Atom bombasının geliştirilmesinde büyük pay sahibi olan ve böylece 2. Dünya Savaşı'nın sona ermesine yardımcı olan fizikçi J. Robert Oppenheimer'ın hayat hikayesinin dramatize edilmesi. Onun üniversite günlerinden 2. Dünya Savaşı sonrasına kadar olan hayatını görüyoruz. şöhreti onun siyasi entrikalara bulaştığını gördü..",
        score:8.3,
        timeline:'3 saat',
        date:"21 Temmuz 2023",
        players:[
            {
                name:"Cillian Murphy",
                title:'J. Robert Oppenheimer',
                img:'OppenheimerCast3.jpeg'
            },
            {
                name:"Emily Blunt",
                title:'Kitty Oppenheimer',
                img:'OppenheimerCast2.jpeg'
            },
            {
                name:"Matt Damon",
                title:'Leslie Groves',
                img:'OppenheimerCast1.jpeg'
            }
        ]
    },
    {
        id:100,
        name:"Siccin",
        img:"Siccin.png",
        story:" Siccin 7, mafyadan kaçan Kemal ve ailesinin yerleştikleri konakta yaşadıkları korku dolu günler aktarılıyor.Çocuk dilenci mafyası ile yaptığı “kanlı bir pazarlık” sonrasında doktorluğu bırakıp kaçmak zorunda kalan Kemal, ailesi ile birlikte amcasının konağına taşınır. Küçük kızı Rüya’yı hastalığından kurtarmak için bulaştığı karanlık sır, Alzheimer hastası olan annesi Lale’nin zihninin karanlığıyla birleşince taşındıkları konak paranormal bir kabuslar labirentine dönüşür... Aileye yardımcı olmak bahanesiyle eve giren Meral’in ise asıl niyeti 2018’in Kara Ay’ında yapılan bir ayinin şartlarını yerine getirmektir!.",
        score:3.4,
        timeline:'1S 34D',
        date:" 14 Haziran 2024",
        players:[
            {
                name:"Serkan Atar",
                title:'Kemal',
                img:'SiccinCast2.jpeg'
            },
            {
                name:"Gonul Urer",
                title:'Lale',
                img:'SiccinCast1.jpeg'
            },
            {
                name:"Aadnan Koc",
                title:'Orhan',
                img:'OppenheimerCast1.jpeg'
            }
        ]
    }
]

const seats = document.querySelectorAll(".seat");
for (let i =0 ; i < seats.length; i++) {
    seats[i].id = i+1;
}

let selectedSeats = [];
let countAmount = 0;
// getSelectedSeats();

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("reserved")) {
        window.alert("Rezerve olani secemezsiniz!!!!");
    } else {
        e.target.classList.toggle("selected");
        calculateTo();
    }
});

selectMovie.addEventListener("change", (e) => {
    movies.forEach((movie)=>{
        if(e.target.value == movie.id){
            document.querySelector('.row').innerHTML=`
                <div class="col">
                    <div>
                        <img src="./img/${movie.img}" alt="" id="movieImg"/>
                        <div class="movie-detail">
                            <p>
                                <i class="fa-solid fa-star" style="color: #E0A75E;"></i>
                                <span id="movieScore">${movie.score}</span>/10
                            </p>
                            <p id="movieTimeline">${movie.timeline}</p>
                            <p id="movieDate">${movie.date}</p>
                        </div>
                    </div>
                </div>
                <div class="col story">
                    <div>
                        <h1>Hikaye</h1>
                        <div>
                            <p id="movie">
                                ${movie.story}
                            </p>
                        </div>
                        <!-- Players -->
                        <div class="Cast">
                            <h1>Oyuncular</h1>
                            <!-- playerList -->
                            <div class="playerList">
                                ${
                                    movie.players.map(m => `
                                        <div>
                                            <img src="./img/${m.img}" alt="">
                                            <div>
                                                <p>${m.name}</p>
                                                <p style="color: #E0A75E;">${m.title}</p>
                                            </div>
                                        </div>
                                    `).join('')
                                }
                            </div>
                        </div>
                        <a href="#curtain" class="ticket">
                            <p>Bilet Al!</p>
                            <i class="fa-solid fa-angle-down"></i>
                        </a>
                    </div>
                </div>
            `;

            document.querySelector('.err').classList.add('hidden')
        }
        document.querySelector('.err').classList.remove('hidden')

    });
    

    
    calculateTo();
    
});

function calculateTo() {
    let seats = container.querySelectorAll(".seat.selected");
    let seatNums = seats.length;
    count.textContent = seatNums;
    countAmount =  seatNums * selectMovie.value
    amount.textContent = countAmount;

    seats.forEach((seat) => {
        selectedSeats.push(seat.id);
    });
}




document.querySelector(".btn").addEventListener("click",(e)=>{
    const uniqSelectSeat = Array.from(new Set(selectedSeats))
    const replaceduniqSelectSeat = uniqSelectSeat.splice(`,`).join(`. `)

    
    if(replaceduniqSelectSeat.length>0){
        Swal.fire({
            title: 'Rezervasyonunuz olusturuldu!',
            text: ` ${replaceduniqSelectSeat}'inci koltuklarda rezervasyonunuz olusturulmustur.Ucretiniz ${countAmount} TL'dir...`,
            icon: 'success',
            confirmButtonText: 'Tamam'
          })
    }else{
        Swal.fire({
            title: 'Rezervasyonunuz olusturulamadi!',
            text: `Lutfen koltuk seciniz`,
            icon: 'error',
            confirmButtonText: 'Tamam'
          })
    }
})