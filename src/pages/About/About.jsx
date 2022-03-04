import './About.css';
const About = () => {
  return (
    <div className='about-page'>
      <h2 className='about-page__title'>pics finder</h2>
      <p className='about-page__description'>
        its created using by react and unsplash API
      </p>
      <a
        href='https://github.com/mostafa-kheibary/picsFinder-react'
        className='about-page__social'
      >
        <i className='fa-brands fa-github about-page__icon'></i>
        <h4 className='about-page__button-title'>Fork me on github</h4>
      </a>
    </div>
  );
};

export default About;
