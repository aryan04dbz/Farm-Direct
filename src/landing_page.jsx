import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing_page = () => {
  const navigate = useNavigate();

  return (
    <>
    
    <header class="main-header">
        <div class="container">
            <div class="logo">FarmDirect 🌱</div>
            <div class="header-actions">
                 <nav class="main-nav">
                    <ul>
                        <li><a href="#home" onclick="showView('consumer-view', true)">Home</a></li>
                        <li><a href="#products-section">Products</a></li>
                        <li><a href="#join">Join Us</a></li>
                        <li><a href="#" title="Shopping Cart">🛒 (0)</a></li>
                    </ul>
                </nav>
                <button id="farmer-login-toggle" class="btn btn-secondary btn-sm">Farmer Login</button>
            </div>
        </div>
    </header>

    <section class="pincode-check">
        <div class="container">
             <label for="pincode-input">Check Delivery Area:</label>
             <input type="text" id="pincode-input" placeholder="Enter Pincode" maxlength="6"></input>
             <button id="pincode-check-btn" class="btn btn-sm">Check</button>
        </div>
    </section>

    <main class="container" id="main-content">

        <div id="consumer-view">

            <section id="products-section">
                <h2>Explore Fresh Produce</h2>
                <div class="category-filters">
                    <button class="btn category-btn btn-sm active" onclick="filterProducts('all')">All</button>
                    <button class="btn category-btn btn-sm" onclick="filterProducts('vegetable')">Vegetables</button>
                    <button class="btn category-btn btn-sm" onclick="filterProducts('fruit')">Fruits</button>
                    <button class="btn category-btn btn-sm" onclick="filterProducts('grain')">Grains</button>
                    <button class="btn category-btn btn-sm" onclick="filterProducts('dairy')">Dairy</button>
                    <button class="btn category-btn btn-sm" onclick="filterProducts('spice')">Spices</button>
                </div>

                <div class="product-grid" id="product-listing">

                    <div class="product-card" data-category="vegetable" onclick="showProductDetail({ id: 1, name: 'Organic Tomatoes', category: 'Vegetable', price: '₹55 / kg', farmer: 'Ram Singh', image: 'https://placehold.co/600x400/FF7E79/333?text=Tomatoes', description: 'Plump, juicy organic tomatoes bursting with flavour. Grown sustainably near Kharagpur. Ideal for salads, sauces, or just eating fresh.' })">
                        <img src="https://www.naatigrains.com/image/cache/catalog/naatigrains-products/NG121/pure-turmeric-powder-hand-processed-solar-dried-stone-order-now-online-organic-grinded-by-naati-grains-1000x1000.jpg " alt="Fresh Tomatoes"></img>
                        <div class="product-info">
                            <h4>Organic Tomatoes</h4>
                            <p class="product-category">Vegetable</p>
                            <p class="product-farmer">Ram Singh</p>
                            <p class="product-price">₹55 / kg</p>
                        </div>
                    </div>
                    <div class="product-card" data-category="vegetable" onclick="showProductDetail({ id: 2, name: 'Sweet Carrots', category: 'Vegetable', price: '₹45 / kg', farmer: 'Sita Devi', image: 'https://placehold.co/600x400/FFAF61/333?text=Carrots', description: 'Crisp, naturally sweet carrots harvested at peak freshness. Perfect for snacking, cooking, or adding color to your meals.' })">
                        <img src="https://ucarecdn.com/459eb7be-115a-4d85-b1d8-deaabc94c643/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="Carrots"></img>
                        <div class="product-info">
                            <h4>Fresh Carrots</h4>
                            <p class="product-category">Vegetable</p>
                            <p class="product-farmer">Sita Devi</p>
                            <p class="product-price">₹45 / kg</p>
                        </div>
                    </div>
                     <div class="product-card" data-category="fruit" onclick="showProductDetail({ id: 3, name: 'Seasonal Mangoes (Langra)', category: 'Fruit', price: '₹130 / kg', farmer: 'Bengal Orchards', image: 'https://placehold.co/600x400/FFF176/333?text=Mangoes', description: 'Deliciously sweet and fibrous Langra mangoes, a seasonal favourite from local orchards. Limited stock available.' })">
                        <img src="https://www.bigbasket.com/media/uploads/p/l/30000974_13-fresho-kesar-mango.jp" alt="Mangoes"></img>
                        <div class="product-info">
                            <h4>Seasonal Mangoes (Langra)</h4>
                            <p class="product-category">Fruit</p>
                            <p class="product-farmer">Bengal Orchards</p>
                            <p class="product-price">₹130 / kg</p>
                        </div>
                    </div>
                    <div class="product-card" data-category="grain" onclick="showProductDetail({ id: 4, name: 'Aged Basmati Rice', category: 'Grain', price: '₹95 / kg', farmer: 'Punjab Harvest Co.', image: 'https://placehold.co/600x400/f5f5f5/444?text=Basmati+Rice', description: 'Premium long-grain Basmati rice, carefully aged for over a year to enhance its distinct aroma and fluffy texture upon cooking.' })">
                        <img src="https://www.aeroplanerice.com/wp-content/uploads/2022/03/Basmati-Rice.jpg " alt="Basmati Rice"></img>
                        <div class="product-info">
                            <h4>Aged Basmati Rice</h4>
                             <p class="product-category">Grain</p>
                            <p class="product-farmer">Punjab Harvest Co.</p>
                            <p class="product-price">₹95 / kg</p>
                        </div>
                    </div>
                     <div class="product-card" data-category="vegetable" onclick="showProductDetail({ id: 5, name: 'Fresh Spinach Bunch', category: 'Vegetable', price: '₹35 / bunch', farmer: 'Green Valley Farms', image: 'https://placehold.co/600x400/AED581/333?text=Spinach', description: 'Tender green spinach leaves, packed with nutrients. Locally sourced and delivered fresh for maximum taste and health benefits.' })">
                        <img src="https://shop.annam-gourmet.com/pub/media/catalog/product/cache/ee0af4cad0f3673c5271df64bd520339/F/1/F141665_d849.png" alt="Spinach"></img>
                        <div class="product-info">
                            <h4>Fresh Spinach Bunch</h4>
                            <p class="product-category">Vegetable</p>
                            <p class="product-farmer">Green Valley Farms</p>
                            <p class="product-price">₹35 / bunch</p>
                        </div>
                    </div>
                    <div class="product-card" data-category="dairy" onclick="showProductDetail({ id: 6, name: 'Farm Fresh Paneer', category: 'Dairy', price: '₹120 / 250g', farmer: 'Gopal Dairy', image: 'https://placehold.co/600x400/E1F5FE/444?text=Paneer', description: 'Soft and creamy Malai Paneer made from fresh, full-cream milk sourced directly from local farms. Excellent for curries and grilling.' })">
                        <img src="https://www.seriouseats.com/thmb/jdFyRQOfbKA1COGPrkN5927FiBs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220628-FreshPaneer-AmandaSuarez-11c5e6f76d064cf88153a93d28384bc8.jpg " alt="Paneer"></img>
                        <div class="product-info">
                            <h4>Farm Fresh Paneer</h4>
                            <p class="product-category">Dairy</p>
                            <p class="product-farmer">Gopal Dairy</p>
                            <p class="product-price">₹120 / 250g</p>
                        </div>
                    </div>
                    <div class="product-card" data-category="spice" onclick="showProductDetail({ id: 7, name: 'Sundried Turmeric Powder', category: 'Spice', price: '₹70 / 100g', farmer: 'Spice Routes Farm', image: 'https://placehold.co/600x400/FFCA28/444?text=Turmeric', description: 'Vibrant yellow turmeric powder, ground from high-curcumin sundried turmeric fingers. Adds color, flavour, and health benefits.' })">
                        <img src="https://www.naatigrains.com/image/cache/catalog/naatigrains-products/NG121/pure-turmeric-powder-hand-processed-solar-dried-stone-order-now-online-organic-grinded-by-naati-grains-1000x1000.jpg " alt="Turmeric Powder"></img>
                        <div class="product-info">
                            <h4>Sundried Turmeric Powder</h4>
                            <p class="product-category">Spice</p>
                            <p class="product-farmer">Spice Routes Farm</p>
                            <p class="product-price">₹70 / 100g</p>
                        </div>
                    </div>
                  <div class="product-card" data-category="vegetable" onclick="showProductDetail({ id: 5, name: 'Broccoli', category: 'Vegetable', price: '₹25 / 150g', farmer: 'Green Valley Farms', image: 'https://placehold.co/600x400/AED581/333?text=Spinach', description: 'Tender Broccoli, packed with nutrients. Locally sourced and delivered fresh for maximum taste and health benefits.' })">
                        <img src="https://www.producemarketguide.com/media/user_5q6Kv4eMkN/400/broccoli_commodity-page.png" alt="Broccoli">
                        <div class="product-info">
                            <h4>Fresh Broccoli </h4>
                            <p class="product-category">Vegetable</p>
                            <p class="product-farmer">Green Valley Farms</p>
                            <p class="product-price">₹25 / 150g</p>
                        </div>
                     </div>
                     <div class="product-card" data-category="grain" onclick="showProductDetail({ id: 4, name: 'Wheat', category: 'Grain', price: '₹59 / kg', farmer: 'Punjab Harvest Co.', image: 'https://placehold.co/600x400/f5f5f5/444?text=Basmati+Rice', description: 'Premium long-grain Basmati rice, carefully aged for over a year to enhance its distinct aroma and fluffy texture upon cooking.' })">
                        <img src="https://www.ncdex.com/public/uploads/commodity/image/Wheat.jpg" alt="Basmati Rice"></img>
                        <div class="product-info">
                            <h4>Organic Wheat</h4>
                             <p class="product-category">Wheat</p>
                            <p class="product-farmer">Punjab Harvest Co.</p>
                            <p class="product-price">₹59 / kg</p>
                        </div>
                     </div>
                        <div class="product-card" data-category="spice" onclick="showProductDetail({ id: 7, name: 'Cinnamon powder', category: 'Spice', price: '₹80 / 100g', farmer: 'Spice Routes Farm', image: 'https://placehold.co/600x400/FFCA28/444?text=Turmeric', description: 'Vibrant yellow turmeric powder, ground from high-curcumin sundried turmeric fingers. Adds color, flavour, and health benefits.' })">
                        <img src="https://fruitgarden.ng/wp-content/uploads/2024/07/Screenshot_20240714_180607_Samsung-Internet.jpg" alt="Cinnamon powder"></img>
                        <div class="product-info">
                            <h4>Cinnamon powder</h4>
                            <p class="product-category">Spice</p>
                            <p class="product-farmer">Spice falak Farm</p>
                            <p class="product-price">₹70 / 100g</p>
                        </div>
                    </div>
                       <div class="product-card" data-category="fruit" onclick="showProductDetail({ id: 3, name: 'Orange', category: 'Fruit', price: '₹130 / kg', farmer: 'Bengal Orchards', image: 'https://placehold.co/600x400/FFF176/333?text=Mangoes', description: 'Deliciously sweet and fibrous Langra mangoes, a seasonal favourite from local orchards. Limited stock available.' })">
                        <img src="https://www.romagnolipatate.it/images/frutta_e_verdura_arancione__.jpg" alt="Orange"></img>
                        <div class="product-info">
                            <h4>Orange</h4>
                            <p class="product-category">Fruit</p>
                            <p class="product-farmer">Bengal Orchards</p>
                            <p class="product-price">₹130 / kg</p>
                        </div>
                    </div>
                    <div class="product-card" data-category="fruit" onclick="showProductDetail({ id: 3, name: 'Gava', category: 'Fruit', price: '₹70 / kg', farmer: 'Bengal Orchards', image: 'https://placehold.co/600x400/FFF176/333?text=Mangoes', description: 'Deliciously sweet and fibrous Langra mangoes, a seasonal favourite from local orchards. Limited stock available.' })">
                        <img src="https://img.imageboss.me/fourwinds/width/425/dpr:2/shop/files/Tropical-Pink-Guava-Tree.jpg?v=1729717324" alt="Gava"></img>
                        <div class="product-info">
                            <h4>Fresh Gava </h4>
                            <p class="product-category">Fruit</p>
                            <p class="product-farmer">Red Orchards</p>
                            <p class="product-price">₹70 / kg</p>
                        </div>
                    </div>
                     <div class="product-card" data-category="spice" onclick="showProductDetail({ id: 7, name: 'Red Chilli Powder', category: 'Spice', price: '₹70 / 100g', farmer: 'Spice Routes Farm', image: 'https://placehold.co/600x400/FFCA28/444?text=Turmeric', description: 'Vibrant yellow turmeric powder, ground from high-curcumin sundried turmeric fingers. Adds color, flavour, and health benefits.' })">
                        <img src="https://vibrantliving.in/cdn/shop/files/RedChilliPowder.png?v=1731060133" alt="Red Chilli Powder"></img>
                        <div class="product-info">
                            <h4>Red Chilli Powder</h4>
                            <p class="product-category">Spice</p>
                            <p class="product-farmer">Spice Real Farm</p>
                            <p class="product-price">₹60 / 100g</p>
                        </div>
                    </div>
                  <div class="product-card" data-category="spice" onclick="showProductDetail({ id: 7, name: 'Masoor Red Dal', category: 'Spice', price: '₹77 / 500g', farmer: 'Go Farm', image: 'https://placehold.co/600x400/FFCA28/444?text=Turmeric', description: 'fresh Mooser red dal, ground from high-curcumin sundried turmeric fingers. Adds color, flavour, and health benefits.' })">
                        <img src="https://shoplineimg.com/55312d63039055e7760000b7/64b01228db20f200208c2443/800x.png?" alt="Masoor Red Dal"></img>
                        <div class="product-info">
                            <h4>Masoor Red Dal</h4>
                            <p class="product-category">Spice</p>
                            <p class="product-farmer">Go Farm</p>
                            <p class="product-price">₹77 / 500g</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
    
    </>
  )
}

export default Landing_page
