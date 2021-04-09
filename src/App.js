import './App.css';
import {headerData, CarouselData, CategoryData, ShowData} from './data';
import Header from './components/organisms/Header/index';
import Carousel from './components/organisms/Carousel/index';
import CategoryCardList from './components/organisms/CategoryCardList/index';
import ShowList from './components/organisms/ShowsList/index';
import Text from './components/atoms/Text/index';
import Image from './components/atoms/Image/index';

function App() {
  return (
    <div className="App">
        <div className='headerContainer'>
          <Header headerData={headerData}/>
          <Carousel carouselData={CarouselData} className='margin-top-15'/>
          <CategoryCardList categoryData={CategoryData} className='margin-top-20'/>
        </div>
        <ShowList className='margin-top-20'>
          <Text className='sectionHeading'>Watch and Learn</Text>
          <div className='showList margin-top-20'>
              {ShowData.map((show, index) => {
                  return (
                      <Image key={index} source={show.image} width="100%" height="190" className='showImage border-rad-10' alt={show.heading}/>
                  )
              })}
          </div>
        </ShowList>
    </div>
  );
}

export default App;
