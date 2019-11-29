import React, {useLayoutEffect, useRef, useState} from 'react';
import {animated, useSpring} from 'react-spring';
import {useMobile} from 'hooks'
import styles from './button.module.css';

const Stripe = ({isActive, dimensions}) => {
  const {length} = useSpring({
    config: {clamp: true, friction: 22},
    from: {length: 5},
    to: {length: isActive ? dimensions.width : 5}
  });

  return (
    <animated.div
      className={styles.bkgStripe}
      style={{width: length, height: dimensions.height}}
    />
  );
};

const Button = ({type, label, action, disabled, ...props}) => {
  const buttonRef = useRef();

  const isMobile = useMobile()

  const [isHovering, toggleStripe] = useState(false);
  const [dimensions, updateDimensions] = useState({width: 0, height: 0});

  // What we need to give the layoutEffect hook so that it refreshes only when it needs to
  const widthDependency = buttonRef.current ? buttonRef.current.offsetWidth : null
  const heightDependency = buttonRef.current ? buttonRef.current.offsetHeight : null

  useLayoutEffect(() => updateDimensions({width: buttonRef.current.offsetWidth, height: buttonRef.current.offsetHeight}),
    [widthDependency, heightDependency])

  if(disabled) {
    return (
      <button
        disabled
        ref={buttonRef}
        type={type || 'button'}
        className={styles.buttonDisabled}
        {...props}
      >
        <Stripe
          dimensions={dimensions}
          isActive={isHovering && !isMobile} 
          style={{backgroundColor: 'var(--secondaryColour)'}}
        />
        {/* To render above the stripe, the label needs its own style */}
        <div className={styles.label}>{label}</div>
      </button>
    )
  } else {
    return (
      <button
        ref={buttonRef}
        type={type || 'button'}
        className={styles.button}
        onMouseEnter={() => toggleStripe(true)}
        onMouseLeave={() => toggleStripe(false)}
        onClick={action}
        {...props}
      >
        <Stripe
          dimensions={dimensions}
          isActive={isHovering && !isMobile} 
          style={{backgroundColor: 'var(--secondaryColour)'}}
        />
        {/* To render above the stripe, the label needs its own style */}
        <div className={styles.label}>{label}</div>
      </button>
    )
  } 
}

export default Button;
