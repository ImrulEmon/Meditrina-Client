import React from 'react';

const Spinner = () => {
    return (
        <div class="flex items-center justify-center ">
          <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default Spinner;