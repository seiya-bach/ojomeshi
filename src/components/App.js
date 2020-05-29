import 'bootstrap/dist/css/bootstrap.min.css';

import React, {
  Fragment,
  useState,
  createRef,
} from 'react';

import '../css/App.css'
import $ from 'jquery';

const App = () => {
  const [src, setSrc] = useState('')
  const ref = createRef()
  const onClick = () => {
    if (ref.current) {
      ref.current.click()
    }
  }
  const onChange = (event) => {
    if (event.target.files === null) {
      return
    }
    const file = event.target.files.item(0)
    if (file === null) {
      return
    }
    var reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setSrc(reader.result)
    }
    const canvas = document.createElement("canvas");
    const context = canvas.getContext('2d');
    let imgObj = new Image();
    imgObj.src = src;
    context.drawImage(imgObj, 0, 0, 800, 450);
    console.log(canvas);

  }

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="mt-5"></div>
        <div className="row justify-content-center">
          <div className="col"></div>
          <div className="col text-center">
            <input
              onChange={onChange}
              ref={ref}
              style={{ display: 'none' }}
              type={'file'}
            />
            <button className="btn btn-info" onClick={onClick}>写真を選択する</button>

          </div>
          <div className="col"></div>
        </div>
        <div className="mt-1"></div>
        <div className="row">
          <div className="col">
            <div>{src && <img className="img-fluid img-thumbnail" src={src} />}</div>
          </div>
        </div>
        <div className="mt-1"></div>
        <div className="row">
          <div className="col"></div>
          <div className="col text-center">
            <button className="btn btn-primary btn-block" onClick={onClick}>キラキラにする</button>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;
