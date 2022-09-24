import './App.scss';
import Card from './components/Card';
import Categories from './components/Categories';
import Frame from './components/Frame';
import Menu from './components/Menu';
import SmallFrame from './components/SmallFrame';

function App() {
  return (
    <div className="App">
      <header className="header">
        <p>ΔΩΡΕΑΝ ΜΕΤΑΦΟΡΙΚΑ ΜΕ ΑΓΟΡΕΣ ΑΠΟ 39€ ΚΑΙ ΑΝΩ!</p>
        <img src={process.env.PUBLIC_URL + '/times.svg'} />
      </header>
      <Menu />
      <Frame image={process.env.PUBLIC_URL + '/walkingMan.png'} />
      <SmallFrame image={process.env.PUBLIC_URL + '/kids.png'} />
      <SmallFrame image={process.env.PUBLIC_URL + '/man.png'} />
      <SmallFrame image={process.env.PUBLIC_URL + '/walkingMan.png'} />
      <h1 className='title'>ΟΙ ΝΕΕΣ ΤΑΣΕΙΣ ΑΥΤΗ <br /> ΤΗ ΣΤΙΓΜΗ</h1>
      <div className='carousel-wrapper'>
      <div className='carousel'>
        <Categories image={process.env.PUBLIC_URL + '/showerGel600x600.png'} subtitle='ΑΦΡΟΛΟΥΤΡΑ' />
        <Categories image={process.env.PUBLIC_URL + '/bodyCream_8852-scaled.png'} subtitle='ΚΡΕΜΕΣ ΣΩΜΑΤΟΣ' />
        <Categories image={process.env.PUBLIC_URL + '/faceCream_9774-600x600.png'} subtitle='ΚΡΕΜΕΣ ΠΡΟΣΩΠΟΥ'/>
      </div>
      </div>
      <h1 className='title'>ΝΕΕΣ ΑΦΙΞΕΙΣ</h1>
      <div className='card-wrapper'>
      <Card productImage={'bodyCream_8852-scaled@2x.png'}
        title={'Grapefruit & Orange Sugar Scrub 550gr'}
        price={'8,00€'}
        previousPrice={'10,00 €'}
        category={'Scrub σώματος'}
      />
      <Card productImage={'bodyCream_8852-scaled@2x.png'}
        title={'Grapefruit & Orange Sugar Scrub 550gr'}
        price={'8,00€'}
        previousPrice={'10,00 €'}
        category={'Scrub σώματος'}
      />
      <Card productImage={'bodyCream_8852-scaled@2x.png'}
        title={'Grapefruit & Orange Sugar Scrub 550gr'}
        price={'8,00€'}
        previousPrice={'10,00 €'}
        category={'Scrub σώματος'}
      />
      <Card productImage={'bodyCream_8852-scaled@2x.png'}
        title={'Grapefruit & Orange Sugar Scrub 550gr'}
        price={'8,00€'}
        previousPrice={'10,00 €'}
        category={'Scrub σώματος'}
      />
      <Card productImage={'bodyCream_8852-scaled@2x.png'}
        title={'Grapefruit & Orange Sugar Scrub 550gr'}
        price={'8,00€'}
        previousPrice={'10,00 €'}
        category={'Scrub σώματος'}
      />
      <Card productImage={'bodyCream_8852-scaled@2x.png'}
        title={'Grapefruit & Orange Sugar Scrub 550gr'}
        price={'8,00€'}
        previousPrice={'10,00 €'}
        category={'Scrub σώματος'}
      />
      <Card productImage={'bodyCream_8852-scaled@2x.png'}
        title={'Grapefruit & Orange Sugar Scrub 550gr'}
        price={'8,00€'}
        previousPrice={'10,00 €'}
        category={'Scrub σώματος'}
      />
      <Card productImage={'bodyCream_8852-scaled@2x.png'}
        title={'Grapefruit & Orange Sugar Scrub 550gr'}
        price={'8,00€'}
        previousPrice={'10,00 €'}
        category={'Scrub σώματος'}
      />
      <Card productImage={'bodyCream_8852-scaled@2x.png'}
        title={'Grapefruit & Orange Sugar Scrub 550gr'}
        price={'8,00€'}
        previousPrice={'10,00 €'}
        category={'Scrub σώματος'}
      />
      <Card productImage={'bodyCream_8852-scaled@2x.png'}
        title={'Grapefruit & Orange Sugar Scrub 550gr'}
        price={'8,00€'}
        previousPrice={'10,00 €'}
        category={'Scrub σώματος'}
      />
      </div>
    </div>
  );
}

export default App;
