import React from 'react'
import '../App.css'

const Landing = () => {
  return (
               <div>
               <div className="navbar">
                   <h1>NFT Marketplace</h1>
                   <div className="search-container">
                       <input type="text" placeholder="Search for NFTs..." />
                       <button>Search</button>
                   </div>
               </div>
           
               <nav>
                   <ul>
                       <li><a href="#">Home</a></li>
                       <li><a href="#">About</a></li>
                       <li><a href="#">NFTs</a></li>
                       <li><a href="#">Contact</a></li>
                   </ul>
               </nav>
           
               <div className="container">
                   <div className="swiper-container">
                       <div className="swiper-wrapper">
                           {/* <div className="swiper-slide"
                               style="background-image: url(https://v5.airtableusercontent.com/v3/u/33/33/1727546400000/zVTuKaTfYmo-YK5hIe_4_Q/9yvbo8x6Vg8ttoXu4cce0K_QzrVvIN__aJXUywVWzt5zXHO9nSIHBuRm4E9UhoEo-VXq-NTBnVR7LI__zS32qvWpI2LYZuFf-rLnLRHzqcwcnGPmfGtMGhesQtJcfadxhjcnm-0avCVUS1NvgiNUsQ/RY1t7Zh2QsAzzR6rBMJUEXeLcvFtlwdQVXGyGUXeZ6g);">
                               <div className="nft-image">
                                   <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727546400000/cMWDsmDICLkPOx1eZ-mcrQ/gO86pww6ryJuCzUgolOnQJJIH76Lb5twmSdhMSgy_Cbtc5gEZ8HWYqfSzTUpiEfKv_tnsHihOIOtPLuUnfqYhQ3Rd7yX9RBLq0BU9YEICfcYwrbrgabLqjXi_31-t7DoiR8poXvi8i8PqK7aN2YpVg/1XEpA1clVmNai2JSRpvocAZeSZwjd6dmAfTI-YVjUeY"
                                       alt="Ember Sword Origins" />
                               </div>
                               <div className="nft-info">
                                   <h1>RITES</h1>
                                   <div className="creator">by <strong>Ember Sword</strong> on <strong>Ethereum</strong></div>
                                   <p>“RITES” is an unfolding digital ritual—666 GIFs, each hand-painted and meticulously glitched
                                       with dither, designed to disintegrate and reassemble in the eye of the viewer. Each GIF
                                       consists of 7 frames, and as these frames shift rapidly.</p>
                                   <div className="stats">
                                       <span>Minting now</span>
                                       <span>284 minted</span>
                                       <span>1d 5h left</span>
                                   </div>
                                   <button className="btn">Mint for 0.023 ETH</button>
                               </div>
                           </div> */}
                           <div className="swiper-slide">
                               <div className="nft-image">
                                   <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727546400000/F4TZ3lh3ET6gAuH_WsZi-A/-g1vZrR6QBzVvAmfxfo6N9-hCIjzsC_fEuz7PQrEujRc9TTjGBS7XQTlaT2l-zlvuGTLl2DyAJPyHXhBd9QYQp_B14uUthapRDe875by4c5JsFyBa35RmtIKo_kNJPUF-Q9zgOF5EIoIk-Ogdq2cUQ/d0_XhaccCM8wG4DbmzEee728b2RFbvoAkM-_8Rh2EKo"
                                       alt="Ruggies NFT" />
                               </div>
                               <div className="nft-info">
                                   <h1>Ruggies</h1>
                                   <div className="creator">by <strong>SeenaNFT</strong> on <strong>Base</strong></div>
                                   <p>The Ruggies Collection features 420 pixelated frogs on the Base. This PFP collection is all
                                       about art, good vibes, culture, and community.</p>
                                   <div className="stats">
                                       <span>Minting is over</span>
                                       <span>383 minted</span>
                                   </div>
                                   <button className="btn">View listings on Rarible</button>
                               </div>
                           </div>
           
                           {/* <div className="swiper-slide"
                               style="background-image: url(https://v5.airtableusercontent.com/v3/u/33/33/1727546400000/jBEYi74GIFVV0VmeAkm2hQ/4FRRYDkwLVst60o3HmHIsLKkdYodNE5rQSp5K8D3Sjwjm8RHvQWTkMX0dz9XYHYVvhTBWVFp-6U6JWZY579OfXzXKBaVFy5QhLVZ8DCsMttOJwMi2ur8XREAlYpnuJoBXHAEmkR16jhltL-_V-LfxQ/HQx19H9Opw97jihd4HkhuE30_1Da9j0j3oSoBnxeEFY);">
                               <div className="nft-image">
                                   <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727546400000/lvOVb3q_Z0XYJMFwpUCxcw/O8vIOthI7-1GnQnXzy8rJUmYQQb4gT6CO9T2qCDvRk-Rmz0aVYy4qmiydnDUEx8_npventQZKVGkGMJXeHnaOSXw__qitXqy9zplJ4cwASPYUTUfcHsTEo1r7BFgsYj1EGLHnPMiS9sIqH9oPR6afw/2Zy4BJY3ghKJ6QBJny7VNCNP-YZ7tYebA-iQ4UIKiUA"
                                       alt="Echelon PFP" />
                               </div>
                               <div className="nft-info">
                                   <h1>Echelon PFP</h1>
                                   <div className="creator">by <strong>pjmas1being</strong> on <strong>Base</strong></div>
                                   <p>A fun time to collect some rares, but please be responsible. Enjoy your<br/> PFPs and identify
                                       yourselves through them!</p>
                                   <div className="stats">
                                       <span>Minting is over</span>
                                       <span>31 minted</span>
                                   </div>
                                   <button className="btn">View listings on Rarible</button>
                               </div>
                           </div> */}
           
                           <div className="swiper-slide">
                               <div className="nft-image">
                                   <img src="/images/image.png" alt="Ember Sword Origins" />
                               </div>
                               <div className="nft-info">
                                   <h1>Ember Sword Origins Collection</h1>
                                   <div className="creator">by <strong>Ember Sword</strong> on <strong>Ethereum</strong></div>
                                   <p>The Ember Sword Origins Collection is here! Get limited-time,<br/> exclusive collectibles
                                       bundled
                                       at an unbeatable discount.</p>
                                   <div className="stats">
                                       <span>Minting now</span>
                                       <span>284 minted</span>
                                       <span>1d 5h left</span>
                                   </div>
                                   <button className="btn">Mint for 0.023 ETH</button>
                               </div>
                           </div>
                       </div>
                       <div className="swiper-button-prev"></div>
                       <div className="swiper-button-next"></div>
                   </div>
               </div>
           
               <div className="nft-grid">
                   <div className="nft-card">
                       <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727546400000/cMWDsmDICLkPOx1eZ-mcrQ/gO86pww6ryJuCzUgolOnQJJIH76Lb5twmSdhMSgy_Cbtc5gEZ8HWYqfSzTUpiEfKv_tnsHihOIOtPLuUnfqYhQ3Rd7yX9RBLq0BU9YEICfcYwrbrgabLqjXi_31-t7DoiR8poXvi8i8PqK7aN2YpVg/1XEpA1clVmNai2JSRpvocAZeSZwjd6dmAfTI-YVjUeY"
                           alt="RITES" />
                       <h3>RITES</h3>
                       <p>by ZafGod.eth</p>
                       <p className="price">0.0333 ETH</p>
                       <p className="status">Minting Now</p>
                   </div>
           
                   <div className="nft-card">
                       <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727546400000/Rm4fR_I8-XkYMEUSFkERDg/_Xhw1t6puPsePU9AUjJbCaWbvbXUsiM17LVh2aOL9Ky4YJRQgnNyPxmMxK5wdo1fKkQfDhCTGhdYdDv_Q6Z7D7Gq7sBuR_O5fLgpiFM73PBIf9GfqM1H7kXoJt0HLkcvmEQopu8FwaMC_2fMRGEMSg/iGx7zg0_B2VPqZ0DOrYjyVKsBF5tGd_I7JpVIlxh_uk"
                           alt="Rare Chomp"/>
                       <h3>Rare Chomp</h3>
                       <p>by CHOMP</p>
                       <p className="price">0.001 ETH</p>
                       <p className="status">Minting Now</p>
                   </div>
           
                   <div className="nft-card">
                       <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727546400000/lvOVb3q_Z0XYJMFwpUCxcw/O8vIOthI7-1GnQnXzy8rJUmYQQb4gT6CO9T2qCDvRk-Rmz0aVYy4qmiydnDUEx8_npventQZKVGkGMJXeHnaOSXw__qitXqy9zplJ4cwASPYUTUfcHsTEo1r7BFgsYj1EGLHnPMiS9sIqH9oPR6afw/2Zy4BJY3ghKJ6QBJny7VNCNP-YZ7tYebA-iQ4UIKiUA"
                           alt="Ember Sword Origins"/>
                       <h3>Ember Sword Origins Collection</h3>
                       <p>by Ember Sword</p>
                       <p className="price">0.023 ETH</p>
                       <p className="status">Minting Now</p>
                   </div>
           
                   <div className="nft-card">
                       <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727546400000/F4TZ3lh3ET6gAuH_WsZi-A/-g1vZrR6QBzVvAmfxfo6N9-hCIjzsC_fEuz7PQrEujRc9TTjGBS7XQTlaT2l-zlvuGTLl2DyAJPyHXhBd9QYQp_B14uUthapRDe875by4c5JsFyBa35RmtIKo_kNJPUF-Q9zgOF5EIoIk-Ogdq2cUQ/d0_XhaccCM8wG4DbmzEee728b2RFbvoAkM-_8Rh2EKo"
                           alt="Battlerise Founders Pass"/>
                       <h3>Battlerise Founders Pass</h3>
                       <p>by Battlerise</p>
                       <p className="price">260 XTZ</p>
                       <p className="status">Starts in 4 days</p>
                   </div>
           
                   <div className="nft-card">
                       <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727546400000/w-6mUJs1KlrfVQEZOz4TaA/JGEOSo_cN-XiLDYcqYGWG_4GKLCLyaC33F5zTifW52APxD2DFBfAHJlqBOXO0dgMGPNfvwEUJjDm396_BxdFKhOX69lOT86gvoWYazkbUM7VNgoNTvMXJqySPNfw_eXoycW_pta-SBLKTBwgCf2GGA/hqoOiD8dGMptDFoHneZAz-wkbo90UmGsDHuJcAnc-sI"
                           alt="Another New NFT"/>
                       <h3>Another New NFT</h3>
                       <p>by Creator</p>
                       <p className="price">Price</p>
                       <p className="status">Status</p>
                   </div>
                   <div className="nft-card">
                       <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727546400000/VeChaMUkksLB1S-uGYhAJw/3KpfgR8bj_AwegzOM5EugQ0JsfhWuE9GFwC8VdZJV_0Hfp1QK_m24GIoFgeDIMTi-yfDg61ucq8pu1h47NM0SWmfYjNGxEKjGwQ2jSQ3akLOaxlPJ0Q3902uLkvstpgZHNO-zdofZlIR1EE4J8Lw0g/iLWD4uMUfuQtlAEFSh_YlwjGMWG1nrYW0LjpgdAeBs4"
                           alt="Another New NFT"/>
                       <h3>Another New NFT</h3>
                       <p>by Creator</p>
                       <p className="price">Price</p>
                       <p className="status">Status</p>
                   </div>
                   <div className="nft-card">
                       <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727546400000/mIf_l7aB3PK8Z1T0Fx13Zw/ighIIbPm1FLxVTBdNRBujkiTXELU48Aunspjj_0CRmbw4Up44ryqfdXDsS2rBthosfgwKSWbAZFBtrvX73UdGRD75ifpRFAO8I5Qqzqe0KgX68L7fDIZ_x53rSDSjituR-BdYqilRHoL53IKDWREmw/H0ba3ZOB_WQtieWA0t13F0rDbYkUq-tpL0H_b69HSY4"
                           alt="Another New NFT"/>
                       <h3>Another New NFT</h3>
                       <p>by Creator</p>
                       <p className="price">Price</p>
                       <p className="status">Status</p>
                   </div>
                   <div className="nft-card">
                       <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727546400000/EH-0mtQdY7RLPIFSGt0IHw/Jh27svGY9lLzj2HPSFS0lQ8tJOTdvHMlrM-jm06rpIWwnejVvhFwEWIn1FBFb9utgh21XYb_9ZWBiKAQQdcBHPaUwUT6W9dxpaNrLBoJrpd0Nixi2jDcUPXM8PTuR7vqY6hp7fGkDoMgR3zagdS_jQ/g5bJaX77t-Ci182hHoLW7jZjbIDjcAEXhXwI7VDenec"
                           alt="Another New NFT"/>
                       <h3>Another New NFT</h3>
                       <p>by Creator</p>
                       <p className="price">Price</p>
                       <p className="status">Status</p>
                   </div>
                   <div className="nft-card">
                       <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727546400000/CEyoWFGwEaShmqPoxGJzGA/FMEtZTKbqmjEhmIpUQ9CZbMPhiNDEGLKqEZqxLDV9qc0DiHa3Mji54xQlET-BkqKQAHd9-IRrAVoHX5ATnSrkrQ0t1OgMctQ7ZlPZNf-k3xYxx96b9Q2WPpnBwFFXrnIQ-dxxi8cPLCCr7xhhnJ5TA/fgMgdO7Sv2j7DPTInJnlPO2efTaVyAaMuoFnHbV06Hs"
                           alt="Battlerise Founders Pass"/>
                       <h3>Battlerise Founders Pass</h3>
                       <p>by Battlerise</p>
                       <p className="price">260 XTZ</p>
                       <p className="status">Starts in 4 days</p>
                   </div>
                   <div className="nft-card">
                       <img src="https://v5.airtableusercontent.com/v3/u/33/33/1727546400000/ik025_58NzwZFCxe-m-nLw/0Nre09awW3A5Lvkn1Vgq6Vt8472NINkgBnEyChg33dhk5bO2ckK75WECKvXsNwwHXP0mTe8M1bp1QCz0G6xH_yfSnNF2DWHU2aMxmbkuhXRq6w64u7hV0B_3BoYWJeiBvdFKF1p45kwS4gOrgw_3Kw/5r3_BYiBRv1WJUaJqf0FQUTF4Gp1iQQ9_aQ0cD4wWWg"
                           alt="Battlerise Founders Pass"/>
                       <h3>Battlerise Founders Pass</h3>
                       <p>by Battlerise</p>
                       <p className="price">260 XTZ</p>
                       <p className="status">Starts in 4 days</p>
                   </div>
               </div>
           
               
           </div>
  )
}

export default Landing