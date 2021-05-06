import React,{useState} from 'react'

function Register() {
    const [data, setData] = useState({
        name: '',
        email: '',
        mobile: '',
        Address: '',
        img:null,
    })
    const [show, setShow] = useState(false);

    const handleInput = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
        console.log(data);
    }
    const handleImage = (e) => {
        setData({
            ...data,
            img: URL.createObjectURL(e.target.files[0])
      })
  }
    const formSubmit = (e) => {
        e.preventDefault();
        setShow(true);
    }

    return (
        <>
        <div className="Register">
            <h3>Register Form</h3>
            <form className="Register__form" onSubmit={(e)=>formSubmit(e)}>
                <div className="Form__input">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={(e)=>handleInput(e)} />
                </div>
               
                <div className="Form__input">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={(e)=>handleInput(e)} />
                </div>
                
                <div className="Form__input">
                <label htmlFor="phone">Mobile No</label>
                <input type="text" name="mobile" onChange={(e)=>handleInput(e)}  />
                </div>
                
                <div className="Form__input">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" onChange={(e)=>handleInput(e)} />
                </div>

                <div className="Form__input">
                <label htmlFor="img">Attach file</label>
                <input type="file"  name="img" onChange={(e)=>handleImage(e)} />
                </div>

                <div className="Form__button">
                <button>Register</button>
                </div>
            </form>
            {data.img != null && show &&
            <div className="Form__details">
            
                <div className="Form__details__text">
                <h3>Details</h3>
              <pre>
                    Name   : {data.name}<br/>
                    Email  : {data.email}<br/>
                    Ph.No  : {data.mobile}<br/>
                    Address: {data.address}<br/>
            </pre>
            </div>
            <img src={data.img} alt={data.name} className="Form__img"/>
            </div>
    }
        </div>
       
    </>
    )
}

export default Register
