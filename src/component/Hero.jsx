import  { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="sums_logo"
            className='w-28 object-container'
            />

            <button
                type='button'
                onClick={() => window.open('https://github.com/vishwaprasanth')}
                className='black_btn'
            >
                GitHub
            </button>
        </nav>

        <h1 className='head_text'> Summarize Article with <br className='max-md:hidden'/>
            <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus distinctio, et eveniet sed autem modi reiciendis unde consectetur voluptatum. Fugiat natus quis quam consectetur nam qui ipsa a, tenetur suscipit?
        </h2>
    </header>
  )
}

export default Hero