import * as THREE from 'three';

function main ()
{

    const scene = new THREE.Scene ();

    scene.background = new THREE.Color ("#ffffff");
    const camera = new THREE.PerspectiveCamera
    (
        45 ,
        window.innerWidth / window.innerHeight ,
        1 ,
        1000
    );
    camera.position.set(0 , 0 , 15);

    const renderer = new THREE.WebGLRenderer ();
        renderer.setSize (window.innerWidth , window.innerHeight);
        const sceneContanier = document.getElementById ("sceneContainer");
        sceneContanier.appendChild (renderer.domElement);

    LaetitiaPlanes ();

    window.addEventListener ( "resize" , OnWindowResize );

    animate ();

    function animate () 
    {
        requestAnimationFrame( animate );

        renderer.render( scene, camera );
    }

    function LaetitiaPlanes ()
    {
        const texture = new THREE.TextureLoader().load ("../Images/LaetitiaBattleCrop.jpg");
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set ( 200 , 200 );

        const material = new THREE.MeshBasicMaterial ( {map: texture} );

        const geo = new THREE.PlaneGeometry ( 1000 , 1000 );

        const mesh = new THREE.Mesh ( geo , material );
        const mesh2 = new THREE.Mesh ( geo , material );

        mesh2.position.y = 3;
        mesh2.rotation.x = 1.57;
        mesh2.rotation.z = 3.4;

        mesh.position.y = -3 ;
        mesh.rotation.x = -1.57;
        mesh.rotation.z = -.26;

        scene.add (mesh);
        scene.add (mesh2);
    }

    function OnWindowResize ()
    {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix ();
        renderer.setSize ( window.innerWidth , window.innerHeight );
    }
}

main ();