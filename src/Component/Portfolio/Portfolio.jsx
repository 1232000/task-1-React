import './Portfolio.css';
import house from '../../assets/images/house.png'
import cake from '../../assets/images/cake.png'
import circus from '../../assets/images/circus.png'

export function Portfolio() {
    return (
    <>
      <div className='min-vh-83 bg-white d-flex flex-column justify-content-center align-items-center'>
        <h2 className="text-uppercase fw-bold mb-3 text-navy fs-1 pt-5">portfolio component</h2>
        <div className='text-white d-flex justify-content-center align-items-center mb-3'>
          <span className='dark-line'></span>
          <i className="fa-solid fa-star mx-3 text-navy"></i>
          <span className='dark-line'></span>
        </div>

        <div className="container pb-4">
          <div className='row g-5'>

            <div className='col-lg-4 col-md-6 '>
              <div className='position-relative overflow-hidden'>
                <img className='w-100 rounded-3' src={house} alt="house" />
                <div className='layer rounded-3 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0'>
                  <i class="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 '>
              <div className='position-relative overflow-hidden'>
                <img className='w-100 rounded-3' src={cake} alt="cake" />
                <div className='layer rounded-3 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0'>
                  <i class="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 '>
              <div className='position-relative overflow-hidden'>
                <img className='w-100 rounded-3' src={circus} alt="circus" />
                <div className='layer rounded-3 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0'>
                  <i class="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 '>
              <div className='position-relative overflow-hidden'>
                <img className='w-100 rounded-3' src={house} alt="house" />
                <div className='layer rounded-3 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0'>
                  <i class="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 '>
              <div className='position-relative overflow-hidden'>
                <img className='w-100 rounded-3' src={cake} alt="cake" />
                <div className='layer rounded-3 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0'>
                  <i class="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          
            <div className='col-lg-4 col-md-6 '>
              <div className='position-relative overflow-hidden'>
                <img className='w-100 rounded-3' src={circus} alt="circus" />
                <div className='layer rounded-3 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0'>
                  <i class="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>)
}