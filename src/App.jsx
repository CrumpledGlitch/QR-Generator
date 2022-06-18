import QRCode from "qrcode"
import { useState } from "react"

function App() {
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')
  
  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {
      width:400,
      margin: 2,
      color:{
        dark: '#335383ff'
        
      }

    }, (err, url) =>{
      if (err) return console.error(err)
      console.log(url)
      setQrcode(url)
    })
  }

  return (
    <div className="app">
        <h1>QR Generator</h1>
        <input type="text" placeholder="e.g. https://google.co.uk" value={url} onChange={(evt) => setUrl(evt.target.value)}/>
        <button onClick={GenerateQRCode}>Generate</button>
        {qrcode&& <>
          <img src={qrcode} />
          <a href={qrcode} download="qrcode.png">Download</a>
        </>}
    </div>
  )
}

export default App
