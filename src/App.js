import './App.scss';
import Brands from './components/Brands';
import Button from './components/Button';
import Card from './components/Card';
import Categories from './components/Categories';
import Feature from './components/Feature';
import Frame from './components/Frame';
import Menu from './components/Menu';
import SmallFrame from './components/SmallFrame';

function App() {
  return (
    <div className="App">
      <header className="header">
        <p>ΔΩΡΕΑΝ ΜΕΤΑΦΟΡΙΚΑ ΜΕ ΑΓΟΡΕΣ ΑΠΟ 39€ ΚΑΙ ΑΝΩ!</p>
        <img src={process.env.PUBLIC_URL + '/images/times.svg'} />
      </header>
      <Menu />
      <Frame image={process.env.PUBLIC_URL + '/images/walkingMan.png'} />
      <SmallFrame image={process.env.PUBLIC_URL + '/images/kids.png'} />
      <SmallFrame image={process.env.PUBLIC_URL + '/images/man.png'} />
      <SmallFrame image={process.env.PUBLIC_URL + '/images/walkingMan.png'} />
      <h1 className='title'>ΟΙ ΝΕΕΣ ΤΑΣΕΙΣ ΑΥΤΗ <br /> ΤΗ ΣΤΙΓΜΗ</h1>
      <div className='carousel-wrapper'>
        <div className='carousel'>
          <Categories image={process.env.PUBLIC_URL + '/images/showerGel600x600.png'} subtitle='ΑΦΡΟΛΟΥΤΡΑ' />
          <Categories image={process.env.PUBLIC_URL + '/images/bodyCream_8852-scaled.png'} subtitle='ΚΡΕΜΕΣ ΣΩΜΑΤΟΣ' />
          <Categories image={process.env.PUBLIC_URL + '/images/faceCream_9774-600x600.png'} subtitle='ΚΡΕΜΕΣ ΠΡΟΣΩΠΟΥ' />
          <Categories image={process.env.PUBLIC_URL + '/images/showerGel600x600.png'} subtitle='ΑΦΡΟΛΟΥΤΡΑ' />
          <Categories image={process.env.PUBLIC_URL + '/images/bodyCream_8852-scaled.png'} subtitle='ΚΡΕΜΕΣ ΣΩΜΑΤΟΣ' />
          <Categories image={process.env.PUBLIC_URL + '/images/faceCream_9774-600x600.png'} subtitle='ΚΡΕΜΕΣ ΠΡΟΣΩΠΟΥ' />
        </div>
      </div>
      <h1 className='title'>ΝΕΕΣ ΑΦΙΞΕΙΣ</h1>
      <div className='card-wrapper'>
        <Card productImage={'images/bodyCream_8852-scaled@2x.png'}
          title={'Grapefruit & Orange Sugar Scrub 550gr'}
          price={'8,00€'}
          previousPrice={'10,00 €'}
          category={'Scrub σώματος'}
        />
        <Card productImage={'images/bodyCream_8852-scaled@2x.png'}
          title={'Grapefruit & Orange Sugar Scrub 550gr'}
          price={'8,00€'}
          previousPrice={'10,00 €'}
          category={'Scrub σώματος'}
        />
        <Card productImage={'images/bodyCream_8852-scaled@2x.png'}
          title={'Grapefruit & Orange Sugar Scrub 550gr'}
          price={'8,00€'}
          previousPrice={'10,00 €'}
          category={'Scrub σώματος'}
        />
        <Card productImage={'images/bodyCream_8852-scaled@2x.png'}
          title={'Grapefruit & Orange Sugar Scrub 550gr'}
          price={'8,00€'}
          previousPrice={'10,00 €'}
          category={'Scrub σώματος'}
        />
        <Card productImage={'images/bodyCream_8852-scaled@2x.png'}
          title={'Grapefruit & Orange Sugar Scrub 550gr'}
          price={'8,00€'}
          previousPrice={'10,00 €'}
          category={'Scrub σώματος'}
        />
        <Card productImage={'images/bodyCream_8852-scaled@2x.png'}
          title={'Grapefruit & Orange Sugar Scrub 550gr'}
          price={'8,00€'}
          previousPrice={'10,00 €'}
          category={'Scrub σώματος'}
        />
        <Card productImage={'images/bodyCream_8852-scaled@2x.png'}
          title={'Grapefruit & Orange Sugar Scrub 550gr'}
          price={'8,00€'}
          previousPrice={'10,00 €'}
          category={'Scrub σώματος'}
        />
        <Card productImage={'images/bodyCream_8852-scaled@2x.png'}
          title={'Grapefruit & Orange Sugar Scrub 550gr'}
          price={'8,00€'}
          previousPrice={'10,00 €'}
          category={'Scrub σώματος'}
        />
        <Card productImage={'images/bodyCream_8852-scaled@2x.png'}
          title={'Grapefruit & Orange Sugar Scrub 550gr'}
          price={'8,00€'}
          previousPrice={'10,00 €'}
          category={'Scrub σώματος'}
        />
        <Card productImage={'images/bodyCream_8852-scaled@2x.png'}
          title={'Grapefruit & Orange Sugar Scrub 550gr'}
          price={'8,00€'}
          previousPrice={'10,00 €'}
          category={'Scrub σώματος'}
        />
      </div>
      <div className='button-buy'>
        <Button title={'ΑΓΟΡΑ ΝΕΩΝ ΕΙΔΩΝ'} />
      </div>
      <div className='smallFrame-wrapper'>
      <SmallFrame image={process.env.PUBLIC_URL + '/images/kids.png'} heightImage={'196px'} marginImage={'20px'} marginTitle={'0px 0 10px 25px'} />
      <SmallFrame image={process.env.PUBLIC_URL + '/images/walkingMan.png'} heightImage={'196px'} marginImage={'20px'} marginTitle={'0px 0 10px 25px'} />
      </div>
      <h1 className='title'>ΕΙΔΑΤΕ ΠΡΟΣΦΑΤΑ</h1>
      <div className='history-carousel'>
        <div className='history'>
          <Card productImage={'images/bodyCream_8852-scaled@2x.png'}
            title={'Grapefruit & Orange Sugar Scrub 550gr'}
            price={'8,00€'}
            previousPrice={'10,00 €'}
          />
          <Card productImage={'images/bodyCream_8852-scaled@2x.png'}
            title={'Grapefruit & Orange Sugar Scrub 550gr'}
            price={'8,00€'}
            previousPrice={'10,00 €'}
          />
          <Card productImage={'images/bodyCream_8852-scaled@2x.png'}
            title={'Grapefruit & Orange Sugar Scrub 550gr'}
            price={'8,00€'}
            previousPrice={'10,00 €'}
          />
          <Card productImage={'images/bodyCream_8852-scaled@2x.png'}
            title={'Grapefruit & Orange Sugar Scrub 550gr'}
            price={'8,00€'}
            previousPrice={'10,00 €'}
          />
        </div>
      </div>
      <h1 className='title-center'>TOP BRANDS</h1>
      <div className='brands-logos'>
        <Brands brandLogo={'images/logo1.png'} />
        <Brands brandLogo={'images/logo2.png'} />
        <Brands brandLogo={'images/logo3.png'} />
        <Brands brandLogo={'images/logo1.png'} />
        <Brands brandLogo={'images/logo2.png'} />
        <Brands brandLogo={'images/logo3.png'} />
        <Brands brandLogo={'images/logo1.png'} />
        <Brands brandLogo={'images/logo2.png'} />
      </div>
      <div className='button-brands'>
        <Button title={'ΟΛΑ ΤΑ BRANDS'} />
      </div>
      <div className='feature-wrapper'>
        <Feature icon={'images/fast.svg'} text={'Αποστολή σε όλη την Ελλάδα'} />
        <Feature icon={'images/return.svg'} text={'Επιστροφές από το σπίτι δωρεάν'} />
        <Feature icon={'images/comment.svg'} text={'Ασφαλείς πληρωμές με κάρτα και paypal'} />
      </div>


    </div>
  );
}

export default App;
