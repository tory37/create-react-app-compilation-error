import React, {useState, useEffect} from 'react';

// Error: Specifically useEffect after if / else if / else inside of for - of loop
const useBuggyHook = () => {
  for (let num of [1,2,3,4,5]) {
    if (1) {
    } else if (2) {
    } else {
     
    }
  };
    
  useEffect(() => {
    console.log("Effect");
  }, [])
}

// Error: Component with bug causing conditions
const TestComponent = () => {
  for (let num of [1,2,3,4,5]) {
    if (1) {
    } else if (2) {
    } else {
     
    }
  };
    
  useEffect(() => {
    console.log("Effect");
  }, [])

  return (<div></div>)
}

// Error: just if - else
const useBuggyHookTwo = () => {
  for (let num of [1,2,3,4,5]) {
    if (1) {
      console.log(1);
    } else {
      console.log(3)
    }
  };
    
  useEffect(() => {
    console.log("Effect");
  }, [])
}

// No Error: No if else/ else
const useNoBuggyHookOne = () => {
  for (let num of [1,2,3,4,5]) {
    if (1) {
      console.log(1);
    } 
  };
    
  useEffect(() => {
    console.log("Effect");
  }, [])
}

// No Error: For loop
const useNoBuggyHookTwo = () => {
  const arr = [1,2,3,4,5];
  for (let i = 0; i < arr.length; i++) {
    if (1) {
      console.log(1);
    } else if (2) {
      console.log(2)
    } else {
      console.log(3)
    }
  };
    
  useEffect(() => {
    console.log("Effect");
  }, [])
}


// No Error: forEach instead of For
const useNoBuggyHookThree = () => {
  [1,2,3,4,5].forEach((num) => {
    if (1) {
      console.log(1);
    } else if (2) {
      console.log(2)
    } else {
      console.log(3)
    }
  });
    
  useEffect(() => {
    console.log("Effect");
  }, [])
}

// No Error: No Loop
const useNoBuggyHookFour = () => {
  if (1) {
    console.log(1);
  } else if (2) {
    console.logal(2)
  } else {
    console.log(3)
  }
    
  useEffect(() => {
    console.log("Effect");
  }, [])
}

export default {
  useBuggyHook,
  useBuggyHookTwo,
  useNoBuggyHookOne,
  useNoBuggyHookTwo,
  useNoBuggyHookThree,
  useNoBuggyHookFour
}
