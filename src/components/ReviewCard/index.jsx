import React from 'react';
import BsStarFill from '../../assets/Star'

function ReviewCard() {
  return (
    <div className='rounded-lg bg-gray-100 p-5'>

      <div className='p-4 sm:px-6 lg:px-8 flex'>
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
      </div>

      <p className='ml-5'>11/21/22</p>

      <p className='m-4'>Cras malesuada maximus felis. In tempus efficitur dapibus. Curabitur eu sapien nisi. Cras dignissim orci elit. Cras ut elit elit. Nulla tincidunt mi elementum, luctus lorem id, placerat tortor. Proin tincidunt odio sem, eleifend rhoncus ipsum pretium ut. Duis ornare at nisi ut pharetra.</p>

      <div className='flex items-center mt-5 space-x-5'>
        <img className='rounded-full w-12 ml-8' alt='fb profile pic' src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/102398402_1584676931686093_5007550909180443369_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BFKtLUx0E2MAX8xKtAA&_nc_ht=scontent-dfw5-2.xx&oh=00_AfDD0knjN72wL-sw5Gg2aC9TVD3QYmmiJJUQ9j44CLeuqg&oe=63A3A40F' />
        <span className='font-bold'>Sara Bagel</span>
      </div>

    </div>
  )
}

export default ReviewCard