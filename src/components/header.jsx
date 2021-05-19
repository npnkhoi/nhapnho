import ParticlesBg from "particles-bg";

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0}} />
        <div className='overlay'>
          <div className='container'>
          
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <div className="flex-row">
                  <a
                    href='https://www.figma.com/proto/4cHNrfbwTdFTqvppWtsl1c/Nhap-Nho?node-id=654%3A3720&scaling=scale-down&page-id=654%3A0'
                    target="_blank"
                    rel="noreferrer"
                    className='demo-btn btn btn-custom btn-lg'
                  >
                   Demo 
                  </a>
                  <a
                    href='https://docs.google.com/document/d/141UMHID_2qVQ8y68KTMRE-EcxYbRwJ9jmgEMIEhJDvk/edit?usp=sharing'
                    target="_blank"
                    rel="noreferrer"
                    className='btn btn-custom btn-lg'
                  >
                   Full report
                  </a>  
                </div>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
