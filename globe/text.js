var material = new THREE.MeshFaceMaterial( [
          new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.FlatShading } ), // front
          new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.SmoothShading } ) // side
        ] );

var
  height = 20,
  size = 70,
  hover = 30,

  curveSegments = 4,

  bevelThickness = 2,
  bevelSize = 1.5,
  bevelSegments = 3,
  bevelEnabled = true,

  font = "optimer", // helvetiker, optimer, gentilis, droid sans, droid serif
  weight = "bold", // normal bold
  style = "normal"; // normal italic



function createText(text, geo) {
  var textGeo = new THREE.TextGeometry( text, {
    size: size,
    height: height,
    curveSegments: curveSegments,

    font: font,
    weight: weight,
    style: style,

    // bevelThickness: bevelThickness,
    // bevelSize: bevelSize,
    // bevelEnabled: bevelEnabled,

    // material: 0,
    extrudeMaterial: 1

  });

  textGeo.computeBoundingBox();
  textGeo.computeVertexNormals();

  var centerOffset = -0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );

  textMesh1 = new THREE.Mesh( textGeo, material );

  textMesh1.position.x = centerOffset;
  textMesh1.position.y = hover;
  textMesh1.position.z = 0;

  textMesh1.rotation.x = 0;
  textMesh1.rotation.y = Math.PI * 2;

  return textMesh1;
}

function createTextGeo(text) {
  return new THREE.TextGeometry( text, {
    size: size,
    height: height,
    curveSegments: curveSegments,

    font: font,
    weight: weight,
    style: style,

    // bevelThickness: bevelThickness,
    // bevelSize: bevelSize,
    // bevelEnabled: bevelEnabled,

    // material: 0,
    extrudeMaterial: 1

  });
}