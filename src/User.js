import { usePlane, useBox } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

export function Cube(props) {
  const [ref, api] = useBox(() => ({ mass: 20, type: "Dynamic", position: [0, 20, 0], ...props }))
  const code = useCodes();
  const moveForward = (distance) => {
    const speed = distance*100 / (-1);
    api.velocity.set(speed,0,speed);
  }
  const moveRight = (distance) => {
    const speed = distance*100 / (-1);
    api.velocity.set(-speed,0,speed);
  }
  useFrame((_, delta) => {
    const speed = code.current.has('ShiftLeft') ? 5 : 2
    if (code.current.has('KeyW')) moveForward(delta * speed)
    if (code.current.has('KeyA')) moveRight(-delta * speed)
    if (code.current.has('KeyS')) moveForward(-delta * speed)
    if (code.current.has('KeyD')) moveRight(delta * speed)
  })
  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshLambertMaterial attach='material' color='white' />
    </mesh>
  )
}

export function Plane(props) {
  const [ref] = usePlane(() => ({ transparent: true, rotation: [-Math.PI / 2, 0, 0], position: [0,1,0], ...props }))
  return (
    <mesh ref={ref}>
      <planeGeometry args={[20, 60]} />
      <meshPhongMaterial color="#ffffff"  transparent />
    </mesh>
  )
}

const useCodes = () => {
  const codes = useRef(new Set())
  useEffect(() => {
    const onKeyDown = (e) => codes.current.add(e.code)
    const onKeyUp = (e) => codes.current.delete(e.code)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [])
  return codes
}
  

export function Plattform(props) {
  const [ref, api] = useBox(() => ({ 
    mass: 5, 
    type: "Static", 
    position: [0, 1, 0], 
    ...props }
  ))
  return (
    <mesh ref={ref}>
      <boxGeometry args={[20, 1, 60]}/>
      <meshLambertMaterial color="#ffffff" opacity={0} transparent />
    </mesh>
  )
}

export function BorderRightBuilding(props) {
  const [ref, api] = useBox(() => ({ 
    mass: 5, 
    type: "Static", 
    position: [0, 5, -25.5], 
    ...props }
  ))
  return (
    <mesh ref={ref}>
      <boxGeometry args={[19, 9, 7]}/>
      <meshLambertMaterial color="#ffffff" opacity={0} transparent />
    </mesh>
  )
}
export function BorderStairs(props) {
  const [ref, api] = useBox(() => ({ 
    mass: 5, 
    type: "Static", 
    position: [4.5, 3.8, -16], 
    rotation: [Math.PI / 4.7, 0, 0],
    ...props }
  ))
  return (
    <mesh ref={ref}>
      <boxGeometry args={[5, 3, 17]}/>
      <meshLambertMaterial color="#ffffff" opacity={0} transparent />
    </mesh>
  )
}