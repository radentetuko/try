let ViewMakanan = document.querySelector("#view-makanan")


async function pilihMakan(id){
    ViewMakanan.innerHTML = ""
    if(!localStorage.getItem("cart")){
        localStorage.setItem("cart", "[]");
    }
    let cart = JSON.parse(localStorage.getItem("cart"))
    let url = await fetch(`https://6354fd4ada523ceadcf7e8d1.mockapi.io/eats/${id}`);
    let result = await url.json()
    if(cart.length == 0){
        cart.push(result)
    }else{
        let res = cart.find(element => element.id == result);
        if(res === undefined){
            cart.push(result);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.getItem("cart")
    
    
    ViewMakanan.innerHTML = 
    `<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="makanan.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap" rel="stylesheet">
    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/ebd5f245ce.js" crossorigin="anonymous"></script>

    <title>Calcare</title>
</head>

<body>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light ">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
                <img src="../img/CalcareLogo.png" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
                aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarToggler">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="toggle">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="../index.html">Beranda</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Makanan</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../Track-Kalori/trackCal.html">Tracking Kalori</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tracking Diet</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Dampak Karbon</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn btn-primary" href="login.html">Masuk</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href=""><i class="bi bi-bell"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-person-circle"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main>
        <div class="container-fluid">
            <div class="container section-atas">
                <div class="row backIcon">
                    <a href="#" class="" id="back"><i class="fa-solid fa-chevron-left fa-2xl"></i></a>
                </div>
                <div class="teks">
                    <h6 class="heading">Daftar Pilihan Makanan</h6>
              
                    <p class="paragraf">Pilihlah makanan yang sesuai dengan yang kamu makan dari daftar yang tersedia. Jika tidak ada, coba gunakan fitur pencarian</p>
                </div>
                <div class="date">
                    <input type="date" name="date" class="tanggal"/>
                </div>
                
            </div>
            
            <div class="container section-makanan">
                <div class="container section-makan-pagi">
                    <table class="table tbl-pagi table-borderless">
                        <thead>
                          <tr>
                            <th scope="col" style="background-color: #B8DB70; width:35rem;">Makan Pagi</th>
                            <th scope="col" style="background-color: white; color: #11999E;">Jumlah</th>
                            <th scope="col" style="background-color: white; color: #11999E;">Lemak</th>
                            <th scope="col" style="background-color: white; color: #11999E;">Karb</th>
                            <th scope="col" style="background-color: white; color: #11999E;">Protein</th>
                            <th scope="col" style="background-color: white; color: #11999E;">Kal</th>
                          </tr>
                        </thead>
                        <tbody class="baris-makan-pagi">
                          <tr >
                            <td>${cart.name}</td>
                            <td></td>
                            <td>${cart.fat}</td>
                            <td>${cart.carbohydrate}</td>
                            <td>${cart.protein}</td>
                            <td id="kalori">${cart.calories}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="tambah-item text-center">
                        <button class="tmbh-item-pagi"><a href="pilihMakanan.html">+ Tambahkan item</a></button>
                      </div>
                </div>

                
            </div>

            <div class="container section-bawah text-center">
            <button type="button" class="btn-lg kalori-btn" > <a href="/Track-Kalori/trackCal.html"> Tracking Kalori </a></button>
                <button type="button" class="btn-lg karbon-btn" > <a href="#"> Tracking Karbon </a></button>
            </div>
        </div>
    </main>

    <footer>
        <div class="container-fluid">
            <div class="kiri">
                <img src="../img/CalcareLogo.png" alt="">
                <h5>Keep your calories for your health</h5>
                <p>Jl. H. R. Rasuna Said Daerah Khusus Ibukota Jakarta 12950</p>
                <div class="medsos">
                    <h5 style="color: white;">
                        Ikuti Kami
                    </h5>
                    <a href="#" style="color: white;"><i class="bi bi-facebook"></i></a>
                    <a href="#" style="color: white;"><i class="bi bi-instagram"></i></a>
                    <a href="#" style="color: white;"><i class="bi bi-twitter"></i></a>
                    <a href="#" style="color: white;"><i class="bi bi-youtube"></i></a>
                </div>
            </div>

            <div class="tengah">
                <h5>Layanan</h5>
                <p>Tentang Kami</p>
                <p>Kebijakan dan Privasi</p>
                <p>Hubungi Kami</p>
                <p>bantuan</p>
            </div>

            <div class="kanan">
                <h5>Challenge Partner</h5>
                <img src="../img/logoDanone.png" alt="">
                <h5>Mitra</h5>
                <img src="../img/logoSkilvul.svg" style="width: 100px;" alt="">
            </div>
        </div>
    </footer>
    </body>`
    var kalori = cart.calories;
    localStorage.setItem('kalori', kalori);
}