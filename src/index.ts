import { Vector3 } from './math/Vector3';
import { Matrix4 } from './math/Matrix4';


let a = new Vector3( 1, 0, 0 );
let b = new Vector3( 0, 'ben', 0 ); // type bug.

let m = new Matrix4().set( 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 2, 3, 0 );
 
console.log( a );
a.applyMatrix4( m );
console.log( a );
let c = a.add( b ).dot( b );
console.log( c );