import './App.css';
import './Props.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HomePage from './components/Home'
import Allcards from './components/Allcards'
import Header from './components/Header'
import Parentcard from './components/Parentcard'



function App() {

  return (
    <Router>

      <div className='main-pic'>
        <img class="img-fluid d-block w-100" alt="Responsive image" src="../images/gnxgfnxfgn.JPG" />

      </div>

      <div className='dfbgfdh'>
        <div className='fadscfads'>

          <h4 className='more-laptop'>More on Laptop</h4>

          <div className='cards-div'>
            <Parentcard time='OCT 27' price='Rs 1,500' img='../images/debaerjwgqeiw.jpg' detail='600 Watts - 500 Watts Gaming Power...' />
            <Parentcard time='OCT 10' price='Rs 2,450' img='../images/ffhnmhm.jpg' detail='Laptop - accessiores with reasonable prices...' />
            <Parentcard time='5 DAY AGO' price='Rs 9,999' img='../images/dbngnder.jpg' detail='ZTE Trek HD 2 Model # K82 With Box, C...' />
            <Parentcard time='NOV 5' price='Rs 1,250' img='../images/frbdeb.jpg' detail='500GB, 1TB, 2TB, 3TB, 4TB Hard disk available...' />
          </div>



        </div>
      </div>


      <div className='dfbgfdh'>
        <div className='fadscfads bdftgfbdb'>

          <h4 className='gtrtngfn'>Fresh recommendations</h4>



          <div className='terhn'>
            <Allcards time='' allcardsimages='../../images/nhsrnr.jpg' frbobnn='featured ewfbwev' ebebtfbn='Rs 35,000' rnmbve='Mi xiaomi note 8 pro' />
            <Allcards time='' allcardsimages='../../images/erwvgibnv.jpg' frbobnn='featured' ebebtfbn='Rs 975,000' rnmbve='Honda Civic on easy instalment...' />
            <Allcards time='' allcardsimages='../../images/wekgvfbnvae.jpg' frbobnn='featured' ebebtfbn='Rs 148,000' rnmbve='DHAMAKA DISCOUNT OFFER BRAND...' />
            <Allcards time='' allcardsimages='../../images/wrgaebtrhn.jpg' frbobnn='featured' ebebtfbn='Rs 50,000' rnmbve='room bed' />
          </div>
          <div className='terhn'>
            <Allcards time='' allcardsimages='../../images/fsgnf.jpg' frbobnn='featured' ebebtfbn='Rs 29,000' rnmbve='Super power model 2019...' />
            <Allcards time='' allcardsimages='../../images/dbntne.jpg' frbobnn='featured ewfbwev' ebebtfbn='Rs 15,000' rnmbve='Handheld MIC Wireless Microphone S...' />
            <Allcards time='' allcardsimages='../../images/rbbdfbn.jpg' frbobnn='featured ewfbwev' ebebtfbn='Rs 6,400,000' rnmbve='Toyota Revo 2020 Bht Hi Asan Iqsat P...' />
            <Allcards time='' allcardsimages='../../images/fbdfbdb.jpg' frbobnn='featured' ebebtfbn='Rs 16,900' rnmbve='Redmi 9C 3/64 Box Pack' />
          </div>



        </div>
      </div>

      <div className='gtnngtgtr'>
        <button type="button" class="btn btn-primary thasetrnh">Load more</button>
      </div>

      <img class="img-fluid d-block w-100" alt="Responsive image" src="../images/frbgvfbv.jpg" />

      <div className='mvfanv'>
        <section><p className ='dkjsd'>POPULAR CATEGORIES</p>
  <ul>
            <li>Cars</li>
            <li>Flats for rent</li>
            <li>Jobs</li>
            <li>Mobile Phones</li>
          </ul>
        </section>
        <section><p className ='dkjsd'>
          TRENDING SEARCHES</p>
  <ul>
            <li>Bikes</li>
            <li>Watches</li>
            <li>Books</li>
            <li>Dogs</li>
          </ul>
        </section>
        <section><p className ='dkjsd'>ABOUT US</p>
  <ul>
            <li>About OLX Group</li>
            <li>OLX Blog</li>
            <li>Contact Us</li>
            <li>OLX for Businesses</li>
          </ul>
        </section>
        <section> <p className ='dkjsd'>OLX</p>
  <ul>
            <li>Help</li>
            <li>Sitemap</li>
            <li>Legal and Privacy information</li>

          </ul>
        </section>

      </div>


      <div className='jrngvfejnv'>

        <section className='advnu'>
          <span>Other Countries</span> India - South Africa - Indonesia
</section>

        <section className='advnu'>
          <span>Free Classifieds in Pakistan</span> . © 2006-2020 OLX
</section>


      </div>








      <Header />
      <Route path="/">
        <HomePage />
      </Route>
    </Router>
  );
}



export default App;
