import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css'

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse' >
        <img src={images.chef} alt='chef image' />
      </div>

      <div className=' app__wrapper_info'>
        <SubHeading title='chef&apos;s Word'/>
        <h1 className=' headtext__cormorant'>What we belive in </h1>

        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt='quote' />
            <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <p className='p__opensans'>Possimus accusamus, dicta magni neque necessitatibus veritatis nostrum saepe distinctio qui nulla sed minus quia iure porro dignissimos delectus earum quae libero?</p>
        </div>

        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'> Chef & Founder</p>
          <img src={images.sign} alt='sign' />
        </div>

      </div>
    </div>
  )
}

export default Chef