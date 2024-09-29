import React from 'react'
import '../App.css'

const Landing = () => {
  return (
    <body>
    <!-- Navbar Section -->
    <div class="navbar">
        <h1>NFT Marketplace</h1>
        <div class="search-container">
            <input type="text" placeholder="Search for NFTs...">
            <button>Search</button>
        </div>
    </div>

    <!-- Navigation Menu -->
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">NFTs</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>

    <!-- Existing Swiper Section -->
    <div class="container">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <!-- NFT Slide 3: Ember Sword -->
                <div class="swiper-slide"
                    style="background-image: url(https://v5.airtableusercontent.com/v3/u/33/33/1727546400000/zVTuKaTfYmo-YK5hIe_4_Q/9yvbo8x6Vg8ttoXu4cce0K_QzrVvIN__aJXUywVWzt5zXHO9nSIHBuRm4E9UhoEo-VXq-NTBnVR7LI__zS32qvWpI2LYZuFf-rLnLRHzqcwcnGPmfGtMGhesQtJcfadxhjcnm-0avCVUS1NvgiNUsQ/RY1t7Zh2QsAzzR6rBMJUEXeLcvFtlwdQVXGyGUXeZ6g);">
                    <div class="nft-image">
                        <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727596800000/OPjp3HuYro6S4_0i6zaBmQ/fp5NQ1qadTG01lcCeTqNRXw152GQpPaCpS1qQKUDYRVMgstiqmRJN6jh9F2q-WXcwTRgiYp9vjvaULndxDDDKJTkYUL-wlMgTemLWOg9Knpm5hKRPNottpUCpAY6zI-OO27-bU0CVLpxab_f--NKtg/o3ugJPLXbcIYXoINIK-Ha5auPwaZyZmeM3SkbRgT9Uw"
                            alt="Ember Sword Origins">
                    </div>
                    <div class="nft-info">
                        <h1>RITES</h1>
                        <div class="creator">by <strong>Ember Sword</strong> on <strong>Ethereum</strong></div>
                        <p>“RITES” is an unfolding digital ritual—666 GIFs, each hand-painted and meticulously glitched
                            with dither, designed to disintegrate and reassemble in the eye of the viewer. Each GIF
                            consists of 7 frames, and as these frames shift rapidly.</p>
                        <div class="stats">
                            <span>Minting now</span>
                            <span>284 minted</span>
                            <span>1d 5h left</span>
                        </div>
                        <button class="btn">Mint for 0.023 ETH</button>
                    </div>
                </div>
                <!-- NFT Slide 1 -->
                <div class="swiper-slide">
                    <div class="nft-image">
                        <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727596800000/qI1AhVwmFnVi-80A14lnRA/Ns0Zu38sveCRTRv6Otjww5_zbiyn2V8N4RiKJgQfoKYsLxYNIU-wANzIpbqXZMRfcUllX03B5E-H8QgmJIpFWLYx9Ql3XR8s4MmgVKN8Up-4pnQVUhfJO-csr1_Ko1vnPDp-0saJcbaVnzzOh4O3Rg/Ogo_mnV8BPJ14I_tnKhff6eF7TEOqonvTKoqRfhsqfw"
                            alt="Ruggies NFT">
                    </div>
                    <div class="nft-info">
                        <h1>Ruggies</h1>
                        <div class="creator">by <strong>SeenaNFT</strong> on <strong>Base</strong></div>
                        <p>The Ruggies Collection features 420 pixelated frogs on the Base. This PFP collection is all
                            about art, good vibes, culture, and community.</p>
                        <div class="stats">
                            <span>Minting is over</span>
                            <span>383 minted</span>
                        </div>
                        <button class="btn">View listings on Rarible</button>
                    </div>
                </div>

                <!-- NFT Slide 2 -->
                <div class="swiper-slide"
                    style="background-image: url(https://v5.airtableusercontent.com/v3/u/33/33/1727546400000/jBEYi74GIFVV0VmeAkm2hQ/4FRRYDkwLVst60o3HmHIsLKkdYodNE5rQSp5K8D3Sjwjm8RHvQWTkMX0dz9XYHYVvhTBWVFp-6U6JWZY579OfXzXKBaVFy5QhLVZ8DCsMttOJwMi2ur8XREAlYpnuJoBXHAEmkR16jhltL-_V-LfxQ/HQx19H9Opw97jihd4HkhuE30_1Da9j0j3oSoBnxeEFY);">
                    <div class="nft-image">
                        <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727596800000/jOcYGu4j-Mlc6phwWTTpBw/wq02yte566LnlpOs-ZCBLBDdSoZI1I1Im9RabGZAgQp96KLpcPPwbwRP1o6DvIJ_8h1S6eF5fk_4yXzk0Tw0OvaVkNAOMb7u4f8wN6etNHlSIqQdswcE4GBrZITbakLb9Z1Eg4LW2ua4n9RJqTm6vQ/AS4qAW3_f77ovtujT5nPpIzIXnwpam17baOLPGOGlfU"
                            alt="Echelon PFP">
                    </div>
                    <div class="nft-info">
                        <h1>Echelon PFP</h1>
                        <div class="creator">by <strong>pjmas1being</strong> on <strong>Base</strong></div>
                        <p>A fun time to collect some rares, but please be responsible. Enjoy your<br> PFPs and identify
                            yourselves through them!</p>
                        <div class="stats">
                            <span>Minting is over</span>
                            <span>31 minted</span>
                        </div>
                        <button class="btn">View listings on Rarible</button>
                    </div>
                </div>

                <!-- NFT Slide 3: Ember Sword -->
                <div class="swiper-slide">
                    <div class="nft-image">
                        <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727596800000/glb_Wy2rPLRgPEad51FHEg/8339U_B-HRCC1H5C6bayJojaZAdQe70jOr8tcgqeYTBNf43Eg-PAdzgXMRBpB1Zc8Hil1PMg94tnLVvYe2mgoAPSaK4LNMFJA9BHHe1OVkaFrLe4H86rUm8BCTMFT_5WDbAY7rn5lsQWWTBee-MIWg/r1nqoY7t0Fup_Td-1mzDRKoKNMn10al9BqHSW__wAeU" alt="Ember Sword Origins">
                    </div>
                    <div class="nft-info">
                        <h1>Ember Sword Origins Collection</h1>
                        <div class="creator">by <strong>Ember Sword</strong> on <strong>Ethereum</strong></div>
                        <p>The Ember Sword Origins Collection is here! Get limited-time,<br> exclusive collectibles
                            bundled
                            at an unbeatable discount.</p>
                        <div class="stats">
                            <span>Minting now</span>
                            <span>284 minted</span>
                            <span>1d 5h left</span>
                        </div>
                        <button class="btn">Mint for 0.023 ETH</button>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>

    <!-- New Section for the Static Grid of Cards -->
    <div class="nft-grid">
        <!-- New NFT Card 1 -->
        <div class="nft-card">
            <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727596800000/GC59SwvftDG9VUatLbjDnw/_MYZAXAf4plbfqxcbSzpt7zzyKARHDXpUp_oWXRfhORNk9kLuE1R06lZVP0PplLeI-EmQZwjV-QVAPeoTTCvVdg5ZPN8FJcjLbeZW07UVO1h01BPOvtBbBiRw3RIzzcfMG9br2dLwiWlCrZcO09TSA/gQPoWfkZxkYiB5oY4eruP2Ym3k9A73C8RKwfW_dEJqc"
                alt="RITES">
            <h3>RITES</h3>
            <p>by ZafGod.eth</p>
            <p class="price">0.0333 ETH</p>
            <p class="status">Minting Now</p>
        </div>

        <!-- New NFT Card 2 -->
        <div class="nft-card">
            <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727596800000/Ytl-N0XldgaLxNQ22n_kiA/nYZQoQLCOSM3OORXPsnPuMz3BkSd5tHL2XR2GsE0j23j15X1SZ3E_98cAQz5igIMvpT3fdZw76bJQuFtAzPw02W8CF_bUIaXPB841dfuEbK6yZr95sqztpvX0HaZM18PMqUVRtSH8Vd24NfeRcwVXA/2fnHs2sCN6p4_icCE2cVq7wGP_0yOk1Xw5xWnQYpW0M"
                alt="Rare Chomp">
            <h3>Rare Chomp</h3>
            <p>by CHOMP</p>
            <p class="price">0.001 ETH</p>
            <p class="status">Minting Now</p>
        </div>

        <!-- New NFT Card 3 -->
        <div class="nft-card">
            <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727596800000/JTgvJtGe7S3DZ5Q9b1PCXw/P-ij_LMq4FHkR1v0rQS5cUsRYHsXhWjNU8T9zqqPqkeb2-hYDaySEmKLWnmwOwaHMLbWCE_Zck46JrwrWxkkQOUod73Ik3BNv7j62NZFrjc0o72doSDv5V5WC7CfzgBllpB6LumuiX-onFjfawYSuw/PR3wARXu45CKDl6-jJuVuSUYJbm5VmP6JE6zWWymBTQ"
                alt="Ember Sword Origins">
            <h3>Ember Sword Origins Collection</h3>
            <p>by Ember Sword</p>
            <p class="price">0.023 ETH</p>
            <p class="status">Minting Now</p>
        </div>

        <!-- New NFT Card 4 -->
        <div class="nft-card">
            <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727596800000/rVgI7v9MvinMWFenGozMtw/ZDpDzNL4viTvJaSSDrh9yKSYHuI8pPYPps0PER0E27pp9-7hLOgwn2D2Be7hLMsA4vokjrPE5sIG_EdWK4hlUZt5v1IMVnn9XAZ7hhTXYVJSV1PUfsQHQ3gDrVIVppk8xSi3WwYWi7VZe6if1NbkhQ/wNHi6y6tAZm-lijXCQDcvuMRYLCUx2Uoh1DFR5KNl8M"
                alt="Battlerise Founders Pass">
            <h3>Battlerise Founders Pass</h3>
            <p>by Battlerise</p>
            <p class="price">260 XTZ</p>
            <p class="status">Starts in 4 days</p>
        </div>

        <!-- New NFT Card 5 -->
        <div class="nft-card">
            <img src="https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbVlhSkoxRGt0NGg1b0hUOWFId0Z5Q1lXc1NuenF4VmllTU1iWW5EQXY4R1BFL3Bob3RvLWNvbGxhZ2UucG5nJTIwKDEwKS5wbmc="
                alt="Another New NFT">
            <h3>Another New NFT</h3>
            <p>by Creator</p>
            <p class="price">Price</p>
            <p class="status">Status</p>
        </div>
        <!-- New NFT Card 5 -->
        <div class="nft-card">
            <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727596800000/oFwfNy0TR9jmIFpV3ooiCw/fsCfbErIZ4GP0MuRRc_3dscvRYTYuxt73FLp_B3BFWHVJwsstLSrNDlVAT4zMOS0_kxe5kxcv74MaKex-8eERX7lO6gp56vRcNlYA08qNXc7rNAdcJmxoavKVgTP3qt2jkktLEwtit628gIXjeZVFa3_mWjDV2qm_x44YEMZ0TU/MeXC-BxDZBE1baVSbIZJahv4pJmY3nISWcXRZghqlNw"
                alt="Another New NFT">
            <h3>Another New NFT</h3>
            <p>by Creator</p>
            <p class="price">Price</p>
            <p class="status">Status</p>
        </div>
        <!-- New NFT Card 5 -->
        <div class="nft-card">
            <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727596800000/lCuZMXMs2j7yOSqzCOeY2g/StmoezRG7RVcRuyShM4aWRrj9JVCXTKOv-mI0v293afnGcCHd8H4D0aexHZiEXiI5IuyvjHKmYgbARMMe-SkvBOs0oCAOCKMew-7XX2kWTGZQuGfBDGzDXKt1AOD9npyzSzTrPgeDJegouM1ZKqZbg/ijR8xpsym9iSsGDcfHOaLI_aDajffN-nkdYKHCGgbOE"
                alt="Another New NFT">
            <h3>Another New NFT</h3>
            <p>by Creator</p>
            <p class="price">Price</p>
            <p class="status">Status</p>
        </div>
        <!-- New NFT Card 5 -->
        <div class="nft-card">
            <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727596800000/qy1BAEGhf_VlZ2frZU3Whg/y8pZ7GX1D9bmY8v2TNf-eNwjBlNA_vwN3jIbGtKHFr8YvwnGZYFO1PWWJueoCa6zvAmVAesz2rBTbdNkDue_kJG0W4dURnICEkivF2Dnc-Yw6fuAoj2M4fEcFd7XH4u7c5yjXLzrTEsSjnNF3Dmudg/NM2E1jHe4pGEIvFn30-RFGnRNnD06UE1GGOqPpxOQE0"
                alt="Another New NFT">
            <h3>Another New NFT</h3>
            <p>by Creator</p>
            <p class="price">Price</p>
            <p class="status">Status</p>
        </div>
        <!-- New NFT Card 4 -->
        <div class="nft-card">
            <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727596800000/_qiGMMaGgzWJhomsS3ID2w/QueIul66NO5K4I8gvqpa4sD_RBPbRJ5Tb5kagETOMx4v4RU09g9R7zhyfcjnBPigsq_F6pv5FfeT9W9CM-JSNVFwfaVM3JMaw1urfElDIKMS0280g-paL8wEr60B-1zXai2RsUhtqxiKX8Rr_qQICw/dWPUxevUHnx2NLSnIdt_1p3R8Dz2yCU63SOM42loG7o"
                alt="Battlerise Founders Pass">
            <h3>Battlerise Founders Pass</h3>
            <p>by Battlerise</p>
            <p class="price">260 XTZ</p>
            <p class="status">Starts in 4 days</p>
        </div>
        <!-- New NFT Card 4 -->
        <div class="nft-card">
            <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727596800000/r18AFEaIPXkmYuzTeblAnA/5NjzVYEnve8NjC2ILdde1ja2Y8Y9YDgPe5zprjyBbeoDUjnUX9P6jfn9GvHAyxJ-NKO1H_ldgU_5WnDI8LQmoEUhQf8G4Gbw0w_3NTK-CFWjb9z-khajnoyZ04LelCL-MakU9x-Z6o2wLhdnYAe0kg/FZDLIzAAAC-tzRKIvhhMoKJTPFh_xzHI2D69-qKNvZ0"
                alt="Battlerise Founders Pass">
            <h3>Battlerise Founders Pass</h3>
            <p>by Battlerise</p>
            <p class="price">260 XTZ</p>
            <p class="status">Starts in 4 days</p>
        </div>
    </div>

    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script>
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            loop: true  /* Enable looping */
        });
    </script>

</body>
  )
}

export default Landing